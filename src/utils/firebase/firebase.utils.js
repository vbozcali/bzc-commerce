import { initializeApp } from "firebase/app";
import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider
} from 'firebase/auth';

import {
    getFirestore,
    doc,
    getDoc,
    setDoc
} from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBVyUwADZNvGZQfXb0xSsyifa37LAukm4w",
    authDomain: "react-ecommerce-boutique.firebaseapp.com",
    projectId: "react-ecommerce-boutique",
    storageBucket: "react-ecommerce-boutique.appspot.com",
    messagingSenderId: "697601958802",
    appId: "1:697601958802:web:456f3be2f4158906de574b"
};

const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: "select_account"
});

export const db = getFirestore();
export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid);
    
    const userSnapshot = await getDoc(userDocRef);

    if (!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt
            })
        } catch (error) {
            console.log('error creating user', error.message)
        }
    }
}

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);