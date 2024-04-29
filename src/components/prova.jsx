const auth = getAuth(appFirebase)
    useEffect(()=> {
      checkFavorite(fest.id)
    },[])


    const checkFavorite = async () => {
        
        try {
          // Consulta para buscar el documento en la colección de favoritos
          const q = query(collection(firestore, 'favorites'), where('fest.userFavorite', '==', auth.currentUser.uid));
  
          // Obtener documentos que cumplen con la condición
          const querySnapshot = await getDocs(q);
  
          // Verificar si la consulta devuelve algún resultado
          if (!querySnapshot.empty) {
            // El documento existe en la colección de favoritos
            setExistsFavorites(true);
          } else {
            // El documento no existe en la colección de favoritos
            setExistsFavorites(false);
          }
        } catch (error) {
          console.error('Error al comprobar favorito:', error);
        }
      };