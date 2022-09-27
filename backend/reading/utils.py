from django.core.exceptions import ValidationError

from .serializers import PassageSerializer


def process_submission(user, test, passage):
    passage = PassageSerializer(passage).data  # get serialized data
