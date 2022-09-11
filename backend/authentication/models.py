from django.db import models
from django.contrib.auth.models import AbstractUser


class User(AbstractUser):
    pass
    image = models.CharField(max_length=300)
    
