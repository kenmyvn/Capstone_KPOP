from rest_framework import serializers
from .models import StayCWant

# <<<<<<<<<<<<<<<<< EXAMPLE FOR STARTER CODE USE <<<<<<<<<<<<<<<<<


class StayCWantSerializer(serializers.ModelSerializer):
    class Meta:
        model = StayCWant
        fields = ['id', 'user', 'photocard']
        depth = 1