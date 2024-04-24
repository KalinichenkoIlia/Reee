from django.urls import path
from .views import CategoryListAPIView, RecipeListAPIView


urlpatterns = [
    path('categories/', CategoryListAPIView.as_view(), name='category_list'),
    path('recipes/', RecipeListAPIView.as_view(), name='recipe-list'),
]