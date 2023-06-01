import { FirebaseOptions, initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { collection, getDocs, getFirestore } from "firebase/firestore";

const firebaseConfig: FirebaseOptions = {
  apiKey: "AIzaSyCNF3yPukGT5EeA-A8uCTTBZWzlEYd8qmw",
  authDomain: "pruebas-varias-7820a.firebaseapp.com",
  projectId: "pruebas-varias-7820a",
  storageBucket: "pruebas-varias-7820a.appspot.com",
  messagingSenderId: "760983751255",
  appId: "1:760983751255:web:5720068c22c40a94a2b112",
};
/*const firebaseConfig: FirebaseOptions = {
  apiKey: "AIzaSyBBwPQSn6B9SLz4Hoc9RBV9XiQsU8ANi8w",
  authDomain: "s8-21-t-react-agregarback.firebaseapp.com",
  databaseURL: "https://s8-21-t-react-agregarback-default-rtdb.firebaseio.com",
  projectId: "s8-21-t-react-agregarback",
  storageBucket: "s8-21-t-react-agregarback.appspot.com",
  messagingSenderId: "283197585075",
  appId: "1:283197585075:web:47b4122a9888e98837e2c6"
}; */

const app = initializeApp(firebaseConfig);
const firestoreDB = getFirestore(app);

export default firestoreDB;

export const getCollections = async (name: string) => {
  const colecciones = collection(firestoreDB, name);
  const products = await getDocs(colecciones);
  return products.docs.map((doc) => {
    return {
      ...doc.data(),
      id: doc.id,
    };
  });
};

export const database = getDatabase(app);
