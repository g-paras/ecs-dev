from django.contrib import admin

from .models import Passage, Question, Option

# Register your models here.
admin.site.register(Passage)
admin.site.register(Question)
admin.site.register(Option)
