# Generated by Django 4.1.1 on 2022-09-07 12:29

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("reading", "0003_rename_question_id_option_question_and_more"),
    ]

    operations = [
        migrations.AddField(
            model_name="passage",
            name="title",
            field=models.CharField(
                default="untitled", max_length=50, verbose_name="passage title"
            ),
        ),
    ]
