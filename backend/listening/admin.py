from django.contrib import admin

from .models import Listening, Question, Option

# Register your models here.
admin.site.register(Listening)
admin.site.register(Question)
admin.site.register(Option)
