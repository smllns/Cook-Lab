import { useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { db } from '../index';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { useToast } from '@chakra-ui/react';

// CUSTOM HOOK FOR ADDING/DELETING FAVORITE RECIPES TO DATABASE 

const useFavorite = (recipeID) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const toast = useToast();

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const userDocRef = doc(db, 'users', user.uid);
        getDoc(userDocRef)
          .then((userDocSnap) => {
            if (userDocSnap.exists()) {
              const userData = userDocSnap.data();
              const favorites = userData.favorites || {};
              setIsFavorite(!!favorites[recipeID]);
            }
          })
          .catch((error) =>
            console.error('Error fetching user document:', error.message)
          );
      } else {
        setIsFavorite(false);
      }
    });

    return () => unsubscribe();
  }, [recipeID]);

  const handleToggleFavorites = async () => {
    const auth = getAuth();
    const user = auth.currentUser;

    if (user) {
      try {
        const userDocRef = doc(db, 'users', user.uid);
        const userDocSnap = await getDoc(userDocRef);
        if (userDocSnap.exists()) {
          const userData = userDocSnap.data();
          const favorites = userData.favorites || {};

          if (favorites[recipeID]) {
            delete favorites[recipeID];
            setIsFavorite(false);
          } else {
            favorites[recipeID] = true;
            setIsFavorite(true);
          }

          await updateDoc(userDocRef, { favorites });

          toast({
            title: 'Favorites updated!',
            status: 'success',
            duration: 3000,
            isClosable: true,
          });
        } else {
          console.error('User document does not exist');
        }
      } catch (error) {
        console.error('Error updating favorites:', error.message);
        toast({
          title: 'Something went wrong... Please try again!',
          status: 'error',
          duration: 3000,
          isClosable: true,
        });
      }
    } else {
      toast({
        title: 'Please log in to update favorites!',
        status: 'warning',
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return { isFavorite, handleToggleFavorites };
};

export default useFavorite;
