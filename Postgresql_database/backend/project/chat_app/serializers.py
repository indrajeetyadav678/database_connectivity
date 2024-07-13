
from rest_framework import serializers
from .models import User, Messagestore

class Userserializer(serializers.ModelSerializer):
    class Meta:
        model=User
        fields='__all__'

class Messageserializer(serializers.ModelSerializer):
    class Meta:
        model=Messagestore
        fields='__all__'