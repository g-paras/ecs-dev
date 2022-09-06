from django.shortcuts import render
from rest_framework.generics import CreateAPIView

from .serializers import UserRegisterSerializer

# Create your views here.
class UserRegisterViewset(CreateAPIView):
    serializer_class = UserRegisterSerializer
