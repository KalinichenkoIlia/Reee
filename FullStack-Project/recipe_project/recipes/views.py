from django.shortcuts import render
from rest_framework import generics
from .models import Category, Recipe
from .serializers import CategorySerializers, RecipeSerializers


class CategoryListAPIView(generics.ListAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializers


class RecipeListAPIView(generics.ListAPIView):
    queryset = Recipe.objects.all()
    serializer_class = RecipeSerializers