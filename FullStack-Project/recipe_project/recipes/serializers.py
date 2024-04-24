from rest_framework import serializers
from .models import Category, Recipe


class RecipeSerializers(serializers.ModelSerializer):
    class Meta:
        model = Recipe
        fields = '__all__'


class CategorySerializers(serializers.ModelSerializer):
    recipies = RecipeSerializers(many=True, read_only=True)

    class Meta:
        model = Category
        fields = '__all__'