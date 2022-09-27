from django.contrib.auth import get_user_model
from django.db import models
from django.utils.translation import gettext_lazy as _

User = get_user_model()


class Passage(models.Model):
    class Difficulty(models.TextChoices):
        EASY = "E", _("Easy")
        MEDIUM = "M", _("Medium")
        HARD = "H", _("Hard")

    difficulty = models.CharField(
        max_length=1, choices=Difficulty.choices, default=Difficulty.EASY
    )
    title = models.CharField(
        _("passage title"), default="untitled", max_length=50
    )
    content = models.TextField(_("passage"))


class Question(models.Model):
    passage = models.ForeignKey(
        Passage, on_delete=models.CASCADE, related_name="questions"
    )
    question = models.CharField(_("passage question"), max_length=250)

    def check_answer(self):
        pass


class Option(models.Model):
    question = models.ForeignKey(
        Question, on_delete=models.CASCADE, related_name="options"
    )
    value = models.CharField(_("question option"), max_length=100)
    is_answer = models.BooleanField(_("is answer"), default=False)


class ReadingTest(models.Model):
    class TestStatus(models.TextChoices):
        EASY = "A", _("Active")
        MEDIUM = "C", _("Completed")

    user = models.ForeignKey(
        User, on_delete=models.CASCADE, related_name="reading_tests"
    )
    passage = models.ForeignKey(
        Passage, on_delete=models.CASCADE, related_name="tests_taken"
    )
    status = models.CharField(
        _("test status"), choices=TestStatus.choices, max_length=1
    )
    score = models.IntegerField(_("reading test score"))
    started = models.DateTimeField(_("started at"), auto_now_add=True)


class ReadingSubmission(models.Model):
    test = models.ForeignKey(
        ReadingTest, on_delete=models.CASCADE, related_name="submissions"
    )
    question = models.ForeignKey(Question, on_delete=models.CASCADE)
    option = models.ForeignKey(Option, on_delete=models.CASCADE)
