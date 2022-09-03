from django.db import models
from authentication.models import User

# Create your models here.

class StayC(models.Model):
    # user = models.ForeignKey(User, on_delete=models.CASCADE)
    album = models.CharField(max_length=50)
    version = models.CharField(max_length=200)
    member = models.CharField(max_length=50)
    image = models.ImageField(upload_to='StayC_images')