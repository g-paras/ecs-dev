from rest_framework.generics import RetrieveAPIView, ListAPIView

from .models import Passage
from .serializers import PassageSerializer, PassageShortSerializer

# Create your views here.
class PassageAPIView(RetrieveAPIView):
    serializer_class = PassageSerializer
    queryset = Passage.objects.all()

class PassageListAPIView(ListAPIView):
    serializer_class = PassageShortSerializer
    queryset = Passage.objects.all()