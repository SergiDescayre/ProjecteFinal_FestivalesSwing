// import { useState, useEffect } from "react";
// import { initializeApp } from "firebase/app";
// import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
// import { getFirestore, collection, addDoc, deleteDoc, query, where, onSnapshot, doc } from "firebase/firestore";

// // Configura tu aplicación Firebase
// const firebaseConfig = {
//   apiKey: "AIzaSyCJ-Du0pdJx2D-f8bKs22MYJ7_7u_5003o",
//   authDomain: "festivales-swing.firebaseapp.com",
//   projectId: "festivales-swing",
//   storageBucket: "festivales-swing.appspot.com",
//   messagingSenderId: "581283307998",
//   appId: "1:581283307998:web:d7d52c3a8ad707d6427d4f"
// };

// // Inicializa Firebase
// const firebaseApp = initializeApp(firebaseConfig);

// const Auth = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [user, setUser] = useState(null);
//   const [favorites, setFavorites] = useState([]);
//   const [newFavorite, setNewFavorite] = useState("");
//   const [newFestival, setNewFestival] = useState({});
//   const [error, setError] = useState(null);


//   useEffect(() => {
//     const auth = getAuth(firebaseApp);
//     const unsubscribe = auth.onAuthStateChanged((user) => {
//       if (user) {
//         setUser(user);
//         loadFavorites(user.uid);
//       } else {
//         setUser(null);
//         setFavorites([]);
//       }
//     });
//     return () => unsubscribe();
//   }, []);

//   const handleSignUp = async () => {
//     try {
//       const auth = getAuth(firebaseApp);
//       const userCredential = await createUserWithEmailAndPassword(auth, email, password);
//       setUser(userCredential.user);
//       setError(null);
//     } catch (error) {
//       setError(error.message);
//     }
//   };

//   const handleSignIn = async () => {
//     try {
//       const auth = getAuth(firebaseApp);
//       const userCredential = await signInWithEmailAndPassword(auth, email, password);
//       setUser(userCredential.user);
//       setError(null);
//     } catch (error) {
//       setError(error.message);
//     }
//   };

//   const handleSignOut = async () => {
//     try {
//       const auth = getAuth(firebaseApp);
//       await signOut(auth);
//       setUser(null);
//       setFavorites([]);
//       setError(null);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const loadFavorites = async (uid) => {
//     try {
//       const db = getFirestore(firebaseApp);
//       const favoritesRef = collection(db, "favorites");
//       const q = query(favoritesRef, where("userId", "==", uid));
//       const unsubscribe = onSnapshot(q, (snapshot) => {
//         const favoritesData = [];
//         snapshot.forEach((doc) => {
//           favoritesData.push({ id: doc.id, ...doc.data() });
//         });
//         setFavorites(favoritesData);
//       });
//       return unsubscribe;
//     } catch (error) {
//       console.error("Error al cargar favoritos:", error);
//     }
//   };

//   const handleAddFavorite = async () => {
//     try {
//       const db = getFirestore(firebaseApp);
//       await addDoc(collection(db, "favorites"), {
//         name: newFavorite,
//         userId: user.uid,
//         img: "wwww.hjshdfj.es",
//       });
//       setNewFavorite("");
//     } catch (error) {
//       console.error("Error al agregar favorito:", error);
//     }
//   };

//   const handleAddFestival = async () => {
//     console.log("agrego festival")
//     try {
//       const db = getFirestore(firebaseApp);
//       await addDoc(collection(db, "festivals"), {
//         name: "ViswinGo",
//         userId: user.uid,
//         img: "wwww.hjshdfj.es",
//       });
//       setNewFestival("");
//     } catch (error) {
//       console.error("Error al agregar festival:", error);
//     }
//   };

//   const handleRemoveFavorite = async (favoriteId) => {
//     try {
//       const db = getFirestore(firebaseApp);
//       await deleteDoc(doc(db, "favorites", favoriteId));
//     } catch (error) {
//       console.error("Error al eliminar favorito:", error);
//     }
//   };

//   return (
//     <div>
//       {!user ? (
//         <div>
//           <h2>Registro</h2>
//           <input
//             type="email"
//             placeholder="Correo electrónico"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//           <input
//             type="password"
//             placeholder="Contraseña"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//           <button onClick={handleSignUp}>Registrarse</button>

//           <h2>Iniciar sesión</h2>
//           <input
//             type="email"
//             placeholder="Correo electrónico"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//           <input
//             type="password"
//             placeholder="Contraseña"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//           <button onClick={handleSignIn}>Iniciar sesión</button>

//           {error && <p>{error}</p>}
//         </div>
//       ) : (
//         <div>
//            <button onClick={handleAddFestival}>Agregar a festival</button>
//           <p>¡Hola, {user.email}!</p>
//           <button onClick={handleSignOut}>Cerrar sesión</button>

//           <h2>Favoritos</h2>
//           <input
//             type="text"
//             placeholder="Nombre del favorito"
//             value={newFavorite}
//             onChange={(e) => setNewFavorite(e.target.value)}
//           />
//           <button onClick={handleAddFavorite}>Agregar a favoritos</button>
//           <ul>
//             {favorites.map((favorite) => (
//               <li key={favorite.id}>
//                 {favorite.name}
//                 <button onClick={() => handleRemoveFavorite(favorite.id)}>Eliminar</button>
//               </li>
//             ))}
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Auth;
