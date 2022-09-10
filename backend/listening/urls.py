from django.urls import path

from .views import ListeningListAPIView, ListeningDetailAPIView

app_name = "listening"

urlpatterns = [
    path("task/", ListeningListAPIView.as_view(), name="listening-task"),
    path("task/<pk>/", ListeningDetailAPIView.as_view(), name="listening-item"),
]
