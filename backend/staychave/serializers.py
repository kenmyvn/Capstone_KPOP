from rest_framework import serializers
from .models import StayCHave

# <<<<<<<<<<<<<<<<< EXAMPLE FOR STARTER CODE USE <<<<<<<<<<<<<<<<<


class StayCHaveSerializer(serializers.ModelSerializer):
    class Meta:
        model = StayCHave
        fields = ['id', 'user', 'photocard']
        # depth = 1