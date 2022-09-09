from django.urls import path

from .views import WritingListAPIView

app_name = "writing"

urlpatterns = [
    path("task/", WritingListAPIView.as_view(), name="writing-list"),
]
