import { getApp, getApps, initializeApp, setLogLevel } from "firebase/app";
import { doc, getDoc, getFirestore } from "firebase/firestore";

type AboutDoc = {
    name: string;
    description: string;
};

const firebase_config = JSON.parse(
    process.env.PUBLIC_FIREBASE_CONFIG
);

const app = getApps().length
    ? getApp()
    : initializeApp(firebase_config);

const db = getFirestore(app);

export const getAbout = async () => {

    //setLogLevel('debug');

    const aboutSnap = await getDoc(
        doc(db, '/about/ZlNJrKd6LcATycPRmBPA')
    );

    if (!aboutSnap.exists()) {
        throw 'Document does not exist!';
    }

    return aboutSnap.data() as AboutDoc;
};