from django.db import models
from django.utils.translation import gettext_lazy as _

# Create your models here.
class Passage(models.Model):
    content = models.TextField(_("passage"))


class Question(models.Model):
    passage_id = models.ForeignKey(
        Passage, on_delete=models.CASCADE, related_name="questions"
    )
    question = models.CharField(_("passage question"), max_length=250)


class Option(models.Model):
    question_id = models.ForeignKey(
        Question, on_delete=models.CASCADE, related_name="options"
    )
    value = models.CharField(_("question option"), max_length=100)
    is_answer = models.BooleanField(_("is answer"), default=False)
