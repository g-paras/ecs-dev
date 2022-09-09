from rest_framework import serializers

from .models import Writing


class WritingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Writing
        fields = "__all__"


class WritingSerializerShort(serializers.ModelSerializer):
    class Meta:
        model = Writing
        exclude = ("content", "min_content", "max_content")
