import { firebaseConfig } from "../config";
import routes from "../routes";
import Express from "./backend";
import Firebase from "./firebase";

class Application {
	private firebase: Firebase;
	private express: Express;
	constructor() {
		this.firebase = new Firebase(firebaseConfig);
		this.express = new Express(routes);
	}

	init() {
		this.express.init();
	}
}

export default Application;
