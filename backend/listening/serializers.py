from rest_framework import serializers

from .models import Listening


class ListeningSerializerShort(serializers.ModelSerializer):
    class Meta:
        model = Listening
        fields = "__all__"
