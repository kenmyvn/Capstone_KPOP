from django.db import models
from authentication.models import User
from stayc.models import StayC

# Create your models here.

class StayCWant(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    photocard = models.ForeignKey(StayC, on_delete=models.CASCADE)