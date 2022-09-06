from django.urls import path

from .views import UserRegisterViewset
from .authentication import CustomAuthToken

app_name = "account"

urlpatterns = [
    path("login/", CustomAuthToken.as_view(), name="login"),
    path("register/", UserRegisterViewset.as_view(), name="register"),
]
