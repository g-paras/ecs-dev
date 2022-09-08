# Generated by Django 4.1.1 on 2022-09-07 08:12

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("reading", "0001_initial"),
    ]

    operations = [
        migrations.AddField(
            model_name="passage",
            name="difficulty",
            field=models.CharField(
                choices=[("E", "Easy"), ("M", "Medium"), ("H", "Hard")], default="E", max_length=1
            ),
        ),
    ]
