from django.db import models
from django.contrib.auth.models import AbstractUser


class User(AbstractUser):
    image = models.CharField(max_length=1000)
    pass
    
    
