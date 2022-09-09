from rest_framework.generics import ListAPIView

from .models import Writing
from .serializers import WritingSerializerShort


class WritingListAPIView(ListAPIView):
    queryset = Writing.objects
    serializer_class = WritingSerializerShort
