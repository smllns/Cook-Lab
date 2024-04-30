import { useState, useEffect } from 'react';
import axios from 'axios';

// CUSTOM HOOK FOR AN API REQUEST TO GET RECIPES DETAILED INFORMATION

const useRecipeDetails = (recipeId, apiKey) => {
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRecipeById = async () => {
      try {
        const response = await axios.get(
          `https://api.spoonacular.com/recipes/${recipeId}/information?apiKey=${apiKey}`
        );

        setRecipe(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching recipe:', error);
        setError(error);
        setLoading(false);
      }
    };

    fetchRecipeById();
  }, [recipeId, apiKey]);

  return { recipe, loading, error };
};

export default useRecipeDetails;
