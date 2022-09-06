from django.contrib.auth import get_user_model
from django.contrib.auth.password_validation import (
    validate_password as _validate_password,
)
from rest_framework.exceptions import ValidationError
from rest_framework.serializers import ModelSerializer


class UserRegisterSerializer(ModelSerializer):
    def validate_password(self, value):
        _validate_password(value)
        return value

    def validate_email(self, value):
        if not value.endswith("@kiet.edu"):
            raise ValidationError("Email id with kiet.edu domain are accepted")
        return value

    def validate(self, data):
        if data["username"] + "@kiet.edu" != data["email"]:
            raise ValidationError(
                code="invalid",
                detail={
                    "username": [
                        "Username must be same as email without domain"
                    ]
                },
            )
        return data

    def create(self, validated_data):
        # validated_data["is_active"] = False
        user = self.Meta.model.objects.create_user(**validated_data)  # type: ignore
        return user

    class Meta:
        model = get_user_model()
        fields = ["username", "email", "password", "first_name", "last_name"]
        extra_kwargs = {field: {"required": True} for field in fields}
        extra_kwargs["password"]["write_only"] = True


class UserSerializer(ModelSerializer):
    class Meta:
        model = get_user_model()
        fields = ["id", "first_name", "last_name", "email", "username"]
