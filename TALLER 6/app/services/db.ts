import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import { getFirestore, collection, query, where, getDocs, addDoc } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyBqOw6uWF0SiLf9qKEGu8FZn3gzf9z8uFY",
    authDomain: "instagramkatherine-f7c7c.firebaseapp.com",
    projectId: "instagramkatherine-f7c7c",
    storageBucket: "instagramkatherine-f7c7c.appspot.com",
    messagingSenderId: "343470092046",
    appId: "1:343470092046:web:7274e997ba77438802f15f"
  };

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  const usersRef = collection(db,"usuarios");

  export const queryUser = async ({
    email,
    password
  }:{
    email: string;
    password: string;
  }) => {
    try {
        const q = query(usersRef, where("email", "==", email),where("password","==",password));
        const querySnapshot = await getDocs(q);
        console.log(querySnapshot);

        querySnapshot.forEach((doc:any) => {
            console.log(doc.id,"=>",doc.data());
        });
        
        return !querySnapshot.empty;
    } catch (error) {
        return false;
    }
  }

  export const addUser = async ({
    email,
    password
  }:{
    email: string;
    password: string;
  }) => {
    try {
        if(email != "" && password != ""){
          const docRef = await addDoc(collection(db,"usuarios"),{
              email,
              password
          });
          return true;
        }else{
          alert("complete todos los campos");
        }
    } catch (error) {
        return false;
    }
  }