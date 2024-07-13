from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import Login_app, Chatting

router=DefaultRouter()
router.register(r'login',Login_app )
router.register(r'chat',Chatting )

urlpatterns = [
    path('',include(router.urls)),
]