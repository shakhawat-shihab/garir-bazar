import { initializeApp } from "firebase/app";
import firebaseConfig from "./firbase.config";

const InitializeFirebase = () => {
    initializeApp(firebaseConfig);
}
export default InitializeFirebase;