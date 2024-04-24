import React from "react";
import { BrowserRouter as Routes, Route, Switch } from "react-router-dom";
import CategoryList from "./CategoryList";
import RecipeDetails from "./RecipeDetails";
import RecipeList from "./RecipeList";

function App() {
    return (
        <Routes>
                <Route path='/' exact components={CategoryList}/>
                <Route path='/category/:categoryId' exact components={RecipeList}/>
                <Route path='/recipe/:recipeId' exact components={RecipeDetails}/>
        </Routes>
    );
}

export default App;