import { useState, useEffect } from 'react';
import axios from 'axios';

// CUSTOM HOOK FOR AN API REQUEST TO GET RECIPES INFORMATION

const useRecipes = (apiKey, recipeCount, popular = '') => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await axios.get(
          `https://api.spoonacular.com/recipes/random?apiKey=${apiKey}&number=${recipeCount}&includeNutrition=true&instructionsRequired=true&addRecipeInformation=true&addRecipeNutrition=true${popular}`
        );

        setRecipes(response.data.recipes);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching recipes:', error);
        setError(error);
        setLoading(false);
      }
    };

    fetchRecipes();
  }, [apiKey, recipeCount, popular]);

  return { recipes, loading, error };
};

export default useRecipes;
