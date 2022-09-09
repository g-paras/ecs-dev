from django.core.files import File

from pathlib import Path
import os

from listening.models import Listening

LISTENING_FOLDER = "/workspaces/ecs-dev/frontend/src/data/listening"

audio_path = os.path.join(LISTENING_FOLDER, "two.aac")

task = Listening.objects.first()
task.audio_src = File(file=open(audio_path, "rb"), name=Path(audio_path).name)
task.save()
