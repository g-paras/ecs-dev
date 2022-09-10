from django.core.files import File

from pathlib import Path
from pprint import pprint
import os
import json

from listening.models import Listening, Question, Option

LISTENING_FOLDER = "/workspaces/ecs-dev/frontend/src/data/listening"
FILES = ["one", "two", "four", "five", "six", "seven"]


def create_tasks():
    for file_path in FILES:
        abs_path = os.path.join(LISTENING_FOLDER, file_path + ".json")
        with open(abs_path) as _file:
            data = json.loads(_file.read())

        audio_path = os.path.join(LISTENING_FOLDER, file_path + ".aac")
        audio_src = File(
            file=open(audio_path, "rb"), name=Path(audio_path).name
        )

        listening = Listening.objects.create(
            title=data["title"],
            audio_src=audio_src,
            difficulty=data["difficulty"],
        )

        for question in data["questions"]:
            ques_obj = Question.objects.create(
                audio=listening, question=question["question"]
            )

            for option in question["options"]:
                Option.objects.create(
                    question=ques_obj,
                    value=option["value"],
                    is_answer=option["is_answer"],
                )
