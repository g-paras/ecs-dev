from django.db import models
from django.core.validators import FileExtensionValidator
from django.utils.translation import gettext_lazy as _


# Create your models here.
class Listening(models.Model):
    class Difficulty(models.TextChoices):
        EASY = "E", _("Easy")
        MEDIUM = "M", _("Medium")
        HARD = "H", _("Hard")

    difficulty = models.CharField(
        max_length=1, choices=Difficulty.choices, default=Difficulty.EASY
    )
    title = models.CharField(
        _("listening title"), default="untitled", max_length=50
    )
    audio_src = models.FileField(
        _("audio file"),
        upload_to="audios",
        validators=[
            FileExtensionValidator(
                allowed_extensions=["mp3", "wav", "aac", "ogg"]
            )
        ],
    )


class Question(models.Model):
    audio = models.ForeignKey(
        Listening, on_delete=models.CASCADE, related_name="questions"
    )
    question = models.CharField(_("listening question"), max_length=250)

    def check_answer(self):
        pass


class Option(models.Model):
    question = models.ForeignKey(
        Question, on_delete=models.CASCADE, related_name="options"
    )
    value = models.CharField(_("question option"), max_length=100)
    is_answer = models.BooleanField(_("is answer"), default=False)
