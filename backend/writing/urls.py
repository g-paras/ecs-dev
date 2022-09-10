from django.urls import path

from .views import WritingListAPIView, WritingDetailAPIView

app_name = "writing"

urlpatterns = [
    path("task/", WritingListAPIView.as_view(), name="writing-list"),
    path("task/<pk>/", WritingDetailAPIView.as_view(), name="writing-detail"),
]
