import React, {useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import axios from "axios";

function RecipeDetails() {
    const [recipe, setRecipe] = useState(null);
    const {recipeId} = useParams();

    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/recipes/${recipeId}`).then(response => {
            setRecipe(response.data)
        })
            .catch(error => {
                console.error('Error fetching recipe details', error)
            })
    }, [recipeId]);

    if (!recipe) {
        return <div>Loading...</div>
    }

    return (
        <div>
            <h1>{recipe.title}</h1>
            <p>{recipe.description}</p>
        </div>
    );
}

export default RecipeDetails;