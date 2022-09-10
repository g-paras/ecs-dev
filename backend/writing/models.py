from django.db import models
from django.utils.translation import gettext_lazy as _

# Create your models here.
class Writing(models.Model):
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
    content = models.CharField(_("tast description"), max_length=500)
    min_content = models.IntegerField(_("minimum words"))
    max_content = models.IntegerField(_("maximum words"))

    def __str__(self):
        return f"{self.title} | {self.difficulty}"
