from rest_framework import serializers

from .models import Listening, Option, Question


class ListeningSerializerShort(serializers.ModelSerializer):
    class Meta:
        model = Listening
        exclude = ("audio_src",)


class OptionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Option
        exclude = ("is_answer",)


class QuestionSerializer(serializers.ModelSerializer):
    options = OptionSerializer(many=True, read_only=True)

    class Meta:
        model = Question
        fields = "__all__"


class ListeningSerializer(serializers.ModelSerializer):
    questions = QuestionSerializer(many=True, read_only=True)

    class Meta:
        model = Listening
        fields = "__all__"
