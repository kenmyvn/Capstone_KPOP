from django.db import models
from django.contrib.auth.models import AbstractUser


class User(AbstractUser):
    pass
    image = models.ImageField(upload_to='profile_image', blank=True)
    
