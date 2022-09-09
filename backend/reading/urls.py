from django.urls import path

from .views import PassageAPIView, PassageListAPIView

app_name = "reading"

urlpatterns = [
    path("task/", PassageListAPIView.as_view(), name="passage-list"),
    path("task/<pk>/", PassageAPIView.as_view(), name="passage-item"),
]
