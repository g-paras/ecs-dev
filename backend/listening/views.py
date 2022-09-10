from rest_framework.generics import ListAPIView, RetrieveAPIView

from .models import Listening
from .serializers import ListeningSerializer, ListeningSerializerShort

# Create your views here.
class ListeningListAPIView(ListAPIView):
    queryset = Listening.objects
    serializer_class = ListeningSerializerShort


class ListeningDetailAPIView(RetrieveAPIView):
    queryset = Listening.objects
    serializer_class = ListeningSerializer
