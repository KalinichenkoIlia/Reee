import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function RecipeList() {
    const [recipes, setRecipes] = useState([])
    const {categoryId} = useParams()

    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/categories/${categoryId}/recipes/`).then(response => {
            setRecipes(response.data);
        })

            .catch(error => {
                console.error('Error fetching recipes:', error);
            });
    }, [categoryId]);

    return (
        <div>
            <h1>Recipes</h1>
            <ul>
                {recipes.map(recipe => (
                    <li key={recipe.id}>{recipe.title}</li>
                ))}
            </ul>
        </div>
    );
}

export default RecipeList;