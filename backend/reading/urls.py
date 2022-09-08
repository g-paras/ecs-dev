from django.urls import path

from .views import PassageAPIView, PassageListAPIView

app_name = "reading"

urlpatterns = [
    path("passage/", PassageListAPIView.as_view(), name="passage-list"),
    path("passage/<pk>/", PassageAPIView.as_view(), name="passage-item"),
]
