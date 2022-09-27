from rest_framework import serializers

from .models import Passage, Question, Option, ReadingTest, ReadingSubmission


class OptionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Option
        exclude = ("is_answer",)


class QuestionSerializer(serializers.ModelSerializer):
    options = OptionSerializer(many=True, read_only=True)

    class Meta:
        model = Question
        fields = "__all__"


class PassageSerializer(serializers.ModelSerializer):
    questions = QuestionSerializer(many=True, read_only=True)

    class Meta:
        model = Passage
        fields = "__all__"


class PassageShortSerializer(serializers.ModelSerializer):
    class Meta:
        model = Passage
        exclude = ("content",)


class ReadingSubmissionSerializer(serializers.ModelSerializer):
    class Meta:
        model = ReadingSubmission


class ReadingTestSerializer(serializers.ModelSerializer):
    submissions = ReadingSubmissionSerializer(many=True)

    class Meta:
        model = ReadingTest
