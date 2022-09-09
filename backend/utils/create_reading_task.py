import os
import json

from reading.models import Passage, Question, Option

READING_FOLDER = "/workspaces/ecs-dev/frontend/src/data/reading"


def list_files():
    return [
        os.path.join(READING_FOLDER, file)
        for file in os.listdir(READING_FOLDER)
    ][2:]


def create_tasks():
    for file_path in list_files():
        f = open(file_path)

        data = json.loads(f.read())

        passage = Passage.objects.create(content=data["content"])
        # passage.save()

        for question in data["questions"]:
            ques_obj = Question.objects.create(
                passage=passage, question=question["question"]
            )

            for option in question["options"]:
                option_obj = Option.objects.create(
                    question=ques_obj,
                    value=option["value"],
                    is_answer=(option["id"] == question["answer"]),
                )

        f.close()
