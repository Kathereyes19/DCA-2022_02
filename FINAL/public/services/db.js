var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import { getFirestore, collection, query, where, getDocs, addDoc } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js";
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
const usersRef = collection(db, "usuarios");
export const queryUser = ({ email, password }) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const q = query(usersRef, where("email", "==", email), where("password", "==", password));
        const querySnapshot = yield getDocs(q);
        console.log(querySnapshot);
        querySnapshot.forEach((doc) => {
            console.log(doc.id, "=>", doc.data());
        });
        return !querySnapshot.empty;
    }
    catch (error) {
        return false;
    }
});
export const addUser = ({ email, password }) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (email != "" && password != "") {
            const docRef = yield addDoc(collection(db, "usuarios"), {
                email,
                password
            });
            return true;
        }
        else {
            alert("complete todos los campos");
        }
    }
    catch (error) {
        return false;
    }
});
export const addnewPost = ({ username, ubication, profileimg, postimg, caption, }) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield addDoc(collection(db, "posts"), {
            username,
            ubication,
            profileimg: "https://images.pexels.com/photos/13870995/pexels-photo-13870995.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            postimg,
            caption,
        });
        return true;
    }
    catch (error) {
        return false;
    }
});
export const getPost = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const posts = [];
        const postSnapshot = yield getDocs(collection(db, "posts"));
        postSnapshot.forEach((post) => {
            posts.push(post.data());
            console.log(post);
        });
        return posts;
    }
    catch (error) {
        console.error(error);
        swal('Error, intente nuevamente');
    }
});
