from django.db import models
from authentication.models import User
from stayc.models import StayC

# Create your models here.

class StayCHave(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, null=True)
    photocard = models.ForeignKey(StayC, on_delete=models.CASCADE, null=True)