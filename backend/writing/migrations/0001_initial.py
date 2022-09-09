# Generated by Django 4.1.1 on 2022-09-09 08:28

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = []

    operations = [
        migrations.CreateModel(
            name="Writing",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True, primary_key=True, serialize=False, verbose_name="ID"
                    ),
                ),
                (
                    "difficulty",
                    models.CharField(
                        choices=[("E", "Easy"), ("M", "Medium"), ("H", "Hard")],
                        default="E",
                        max_length=1,
                    ),
                ),
                (
                    "title",
                    models.CharField(
                        default="untitled", max_length=50, verbose_name="passage title"
                    ),
                ),
                ("content", models.CharField(max_length=300, verbose_name="tast description")),
                ("min_content", models.IntegerField(verbose_name="minimum words")),
                ("max_content", models.IntegerField(verbose_name="maximum words")),
            ],
        ),
    ]
