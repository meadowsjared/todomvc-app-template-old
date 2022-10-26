// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase, ref } from "firebase/database";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: import.meta.env["VITE_FIREBASE_KEY"] as string,
	authDomain: "todomvc-app-template-test.firebaseapp.com",
	// The value of `databaseURL` depends on the location of the database
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
