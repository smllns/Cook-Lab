import { useState, useEffect } from 'react';
import axios from 'axios';

// CUSTOM HOOK FOR AN API REQUEST TO GET RECIPES NUTRITION INFORMATION

const useNutritionDetails = (recipeId, apiKey) => {
  const [nutrition, setNutrition] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRecipeById = async () => {
      try {
        const nutritions = await axios.get(
          `https://api.spoonacular.com/recipes/${recipeId}/nutritionWidget.json?apiKey=${apiKey}`
        );

        setNutrition(nutritions.data);

        setLoading(false);
      } catch (error) {
        console.error('Error fetching recipe:', error);
        setError(error);
        setLoading(false);
      }
    };

    fetchRecipeById();
  }, [recipeId, apiKey]);

  return { nutrition, loading, error };
};

export default useNutritionDetails;
