import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDaCaDAnLsIw9-kXPWNBywjQZ8bywsuFnA",
  authDomain: "tienda-de-bebidas-react-43290.firebaseapp.com",
  projectId: "tienda-de-bebidas-react-43290",
  storageBucket: "tienda-de-bebidas-react-43290.appspot.com",
  messagingSenderId: "44703633810",
  appId: "1:44703633810:web:353877bf22501d9b83314b",
};

const app = initializeApp(firebaseConfig);
export const dataBase = getFirestore(app);
