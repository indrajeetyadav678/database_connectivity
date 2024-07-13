from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import Studentviewset

router=DefaultRouter()
router.register(r'student', Studentviewset, basename='student')

urlpatterns=[
  path('', include(router.urls))
]