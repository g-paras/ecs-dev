import json
from pprint import pprint

from writing.models import Writing

WRITING_TASK_FILE = "/workspaces/ecs-dev/frontend/src/data/writing/data.json"


def create_tasks():
    with open(WRITING_TASK_FILE) as _file:
        data = json.loads(_file.read())
        # pprint(data)

    writing_objs = []
    for task in data:
        obj = Writing(
            content=task["content"],
            max_content=task["max_content"],
            min_content=task["min_content"],
            title=task["title"],
        )
        writing_objs.append(obj)

    Writing.objects.bulk_create(writing_objs)


create_tasks()
print("done")
