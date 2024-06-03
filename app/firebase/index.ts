import { FIREBASE_CONFIG } from "config";
import { initializeApp } from "firebase/app";

class Firebase {
	constructor(firebaseConfig: Record<FIREBASE_CONFIG, string>) {
		initializeApp(firebaseConfig);
	}
}

export default Firebase;
