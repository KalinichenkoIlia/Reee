import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function CategoryList() {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        axios.get("http://127.0.0.1:8000/categories").then(response => {
            setCategories(response.data);
        })
            .catch(error => {
                console.error('Error fetching categories:', error)
            })
    }, []);

    return (
        <div>
            <h1>Categories</h1>
            <ul>
                {categories.map(category =>(
                    <li key={category.id}>
                        <Link to={`/category/${category.id}`}>{category.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default CategoryList;