from rest_framework.generics import ListAPIView

from .models import Listening
from .serializers import ListeningSerializerShort

# Create your views here.
class ListeningListAPIView(ListAPIView):
    queryset = Listening.objects
    serializer_class = ListeningSerializerShort
