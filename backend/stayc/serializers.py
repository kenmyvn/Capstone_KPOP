from rest_framework import serializers
from .models import StayC

# <<<<<<<<<<<<<<<<< EXAMPLE FOR STARTER CODE USE <<<<<<<<<<<<<<<<<


class StayCSerializer(serializers.ModelSerializer):
    class Meta:
        model = StayC
        fields = ['id', 'album', 'version', 'member', 'user']
        depth = 1
