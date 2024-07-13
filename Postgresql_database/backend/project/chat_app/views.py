from django.shortcuts import render
from rest_framework import viewsets
from .models import User, Messagestore
from .serializers import Userserializer, Messageserializer

# Create your views here.

class Login_app(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = Userserializer
    # permission_classes = [IsAccountAdminOrReadOnly]

class Chatting(viewsets.ModelViewSet):
    queryset = Messagestore.objects.all()
    serializer_class = Messageserializer
    # permission_classes = [IsAccountAdminOrReadOnly]