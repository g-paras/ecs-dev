from django.urls import path

from .views import ListeningListAPIView

app_name = "listening"

urlpatterns = [
    path("task/", ListeningListAPIView.as_view(), name="listening-task"),
]
