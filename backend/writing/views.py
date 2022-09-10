from rest_framework.generics import ListAPIView, RetrieveAPIView

from .models import Writing
from .serializers import WritingSerializerShort, WritingSerializer


class WritingListAPIView(ListAPIView):
    queryset = Writing.objects
    serializer_class = WritingSerializerShort


class WritingDetailAPIView(RetrieveAPIView):
    queryset = Writing.objects
    serializer_class = WritingSerializer
