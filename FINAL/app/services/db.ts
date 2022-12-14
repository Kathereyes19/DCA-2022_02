import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import { getFirestore, collection, query, where, getDocs, addDoc } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js";
import { DataShape } from "../components/Home/feed/data";

interface dataShapeSnapshot extends DataShape {
  data:() => DataShape;
}
const firebaseConfig = {
  apiKey: "AIzaSyCLgcwY-jNNJis4X2hAe_TvRIzKUBcerSc",
  authDomain: "final-dca.firebaseapp.com",
  projectId: "final-dca",
  storageBucket: "final-dca.appspot.com",
  messagingSenderId: "426576334847",
  appId: "1:426576334847:web:efc9275ab5eb9bbc1921ca",
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

  export const addnewPost = async ({
    username,
    ubication,
    profileimg,
    postimg,
    caption,

  }:{
    username: string;
    ubication: string;
    profileimg: string;
    postimg: string;
    caption: string;
  }) => {
    try {
        await addDoc(collection(db,"posts"),{
          username,
          ubication,
          profileimg: "https://images.pexels.com/photos/13870995/pexels-photo-13870995.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
          postimg,
          caption,
        });
        return true;
    } catch (error) {
        return false;
    }
  }

  export const getPost = async () => {
    try {
      const posts: DataShape[] = [];
      const postSnapshot = await getDocs(collection(db, "posts"));
      postSnapshot.forEach((post: dataShapeSnapshot) => {
        posts.push(post.data());
        console.log(post);
        
      });
      return posts;
    } catch (error) {
      console.error(error);
      swal('Error, intente nuevamente');
    }
  }