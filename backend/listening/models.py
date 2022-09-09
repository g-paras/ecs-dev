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
        _("passage title"), default="untitled", max_length=50
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
