from django.db import models

class GymMember(models.Model):
    id = models.AutoField(primary_key=True)
    username = models.CharField(max_length=255, unique=True)
    password = models.CharField(max_length=255)
    email = models.EmailField(unique=True)
    full_name = models.CharField(max_length=255)
    birthdate = models.DateField()
    gender = models.CharField(max_length=20)
    phonenumber = models.CharField(max_length=15) 
    profilepicture = models.ImageField(upload_to='profile_pics/', blank=True, null=True)
    account_type = models.CharField(max_length=20, default='member')
    is_active = models.BooleanField(default=True)

    class Meta:
        db_table = 'gym_members'
