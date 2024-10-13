from django.shortcuts import render
from rest_framework import status
from rest_framework.decorators import api_view, parser_classes
from rest_framework.response import Response
from .models import GymMember
from django.contrib.auth.hashers import make_password
from rest_framework.parsers import MultiPartParser, FormParser
from rest_framework_simplejwt.tokens import RefreshToken
from django.contrib.auth import authenticate
from django.contrib.auth.decorators import login_required
from django.http import JsonResponse
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from django.shortcuts import render


class CustomTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)
        token['account_type'] = user.account_type
        return token

class CustomTokenObtainPairView(TokenObtainPairView):
    serializer_class = CustomTokenObtainPairSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)

        token = serializer.validated_data
        account_type = serializer.user.account_type

        return Response({
            'refresh': token['refresh'],
            'access': token['access'],
            'account_type': account_type
        })

@api_view(['POST'])
def login_view(request):
    username = request.data.get('username')
    password = request.data.get('password')

    user = authenticate(username=username, password=password)
    if user is not None:
        print(vars(user))
        account_type = user.account_type
        refresh = RefreshToken.for_user(user)
        print(f"Account type: {account_type}")
        return Response({
            'refresh': str(refresh),
            'access': str(refresh.access_token),
            'account_type': account_type 
        }, status=status.HTTP_200_OK)



@api_view(['POST'])
@parser_classes([MultiPartParser, FormParser])
def register_user(request):
    required_fields = ['username', 'password', 'email', 'full_name', 'birthdate', 'gender', 'phonenumber']
    
    for field in required_fields:
        if not request.data.get(field):
            return Response({'error': f'{field} is required'}, status=status.HTTP_400_BAD_REQUEST)

    username = request.data.get('username')
    password = request.data.get('password')
    email = request.data.get('email')
    full_name = request.data.get('full_name')
    birthdate = request.data.get('birthdate')
    gender = request.data.get('gender')
    phonenumber = request.data.get('phonenumber')
    profilepicture = request.FILES.get('profilepicture')

    if GymMember.objects.filter(username=username).exists():
        return Response({'error': 'Username already exists'}, status=status.HTTP_400_BAD_REQUEST)
    if GymMember.objects.filter(email=email).exists():
        return Response({'error': 'Email already in use'}, status=status.HTTP_400_BAD_REQUEST)

    hashed_password = make_password(password)
    GymMember.objects.create(
        username=username,
        password=hashed_password,
        email=email,
        full_name=full_name,
        birthdate=birthdate,
        gender=gender,
        phonenumber=phonenumber,
        profilepicture=profilepicture,
    )

    return Response({'message': 'User registered successfully'}, status=status.HTTP_201_CREATED)




@login_required
def user_profile(request):
    try:
        member = GymMember.objects.get(username=request.user.username)
        user_data = {
            'full_name': member.full_name,
            'username': member.username,
            'phonenumber': member.phonenumber,
            'email': member.email,
            'account_type': member.account_type,
        }
        print("User data being returned:", user_data)
        return JsonResponse(user_data)
    except GymMember.DoesNotExist:
        return JsonResponse({'Error': 'User not found'}, status=404)

