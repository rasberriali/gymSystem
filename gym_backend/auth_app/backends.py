from django.contrib.auth.backends import BaseBackend
from django.contrib.auth.hashers import check_password
from .models import GymMember

class GymMemberBackend(BaseBackend):
    def authenticate(self, request, username=None, password=None, **kwargs):
        try:
            member = GymMember.objects.get(username=username)
            if check_password(password, member.password):
                return member 
            else:
                return None
        except GymMember.DoesNotExist:
            return None
        
    def get_user(self, user_id):
        try:
            return GymMember.objects.get(pk=user_id)
        except GymMember.DoesNotExist:
            return None