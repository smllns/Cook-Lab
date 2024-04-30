import { useEffect, useState } from 'react';
import axios from 'axios';

// CUSTOM HOOK FOR AN API REQUEST TO GET RECIPES NUTRITION INFORMATION USING THEIR IDS

const useRecipesByIds = (recipeIds, apiKey) => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRecipesByIds = async () => {
      try {
        const promises = recipeIds.map(async (recipeId) => {
          const response = await axios.get(
            `https://api.spoonacular.com/recipes/${recipeId}/information?apiKey=${apiKey}`
          );
          return response.data;
        });

        const recipesData = await Promise.all(promises);
        setRecipes(recipesData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching recipes:', error);
        setError(error);
        setLoading(false);
      }
    };

    fetchRecipesByIds();
  }, [recipeIds, apiKey]);

  return { recipes, loading, error };
};

export default useRecipesByIds;
