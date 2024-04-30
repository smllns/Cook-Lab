import { useEffect, useState } from 'react';
import { getAuth } from 'firebase/auth';
import { db } from '../index';
import { doc, getDoc } from 'firebase/firestore';

// CUSTOM HOOK FOR GETTING CURRENT USERS FAVORITE RECIPES FROM DATABASE

const useFavoriteRecipesIds = () => {
  const [favoriteRecipeIds, setFavoriteRecipeIds] = useState([]);
  const [loadingNum, setLoadingNum] = useState(true);

  useEffect(() => {
    const auth = getAuth();
    const user = auth.currentUser;

    const fetchFavoriteRecipeIds = async () => {
      if (user) {
        try {
          const userDocRef = doc(db, 'users', user.uid);
          const userDocSnap = await getDoc(userDocRef);

          if (userDocSnap.exists()) {
            const userData = userDocSnap.data();
            const favorites = userData.favorites || {};
            const ids = Object.keys(favorites);
            setFavoriteRecipeIds(ids);
            setLoadingNum(false);
          }
        } catch (error) {
          console.error('Error fetching favorite recipes:', error);
          setLoadingNum(false);
        }
      }
    };

    fetchFavoriteRecipeIds();
  }, []);

  return { favoriteRecipeIds, loadingNum };
};

export default useFavoriteRecipesIds;
