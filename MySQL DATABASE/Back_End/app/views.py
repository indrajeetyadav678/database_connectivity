from django.shortcuts import render
from rest_framework import viewsets
from .models import StudentModel
from .serializers import Studentserializer 
# Create your views here.
class Studentviewset(viewsets.ModelViewSet):
    queryset=StudentModel.objects.all()
    serializer_class=Studentserializer


