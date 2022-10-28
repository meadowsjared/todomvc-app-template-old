// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase, ref } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: import.meta.env["VITE_FIREBASE_KEY"] as string,
	authDomain: "todomvc-app-template-test.firebaseapp.com",
	databaseURL: "https://todomvc-app-template-test-default-rtdb.firebaseio.com",
	projectId: "todomvc-app-template-test",
	storageBucket: "todomvc-app-template-test.appspot.com",
	messagingSenderId: "492184533263",
	appId: "1:492184533263:web:d98c399c38d7f0c593667a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
// get a reference to the service
const todosRef = ref(db, "todos");

export { todosRef };
