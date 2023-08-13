import { initializeApp } from "firebase/app";

import {
    getAuth,
    signInWithPopup,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
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

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
    prompt: "select_account"
});

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth, additionalInformation = {}) => {
    const userDocRef = doc(db, 'users', userAuth.uid);

    const userSnapshot = await getDoc(userDocRef);

    if (!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
                ...additionalInformation
            })
        } catch (error) {
            console.log('error creating user', error.message)
        }
    }
}

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);

export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;

    return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;

    return await signInWithEmailAndPassword(auth, email, password);

    /** Alternative Method !!
     signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;

            console.log(user.uid);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;

            console.log("Error Code: ", errorCode, " Error Message: ", errorMessage)
        }); 
     */
}

export const signOutUser = async () => await signOut(auth);

export const onAuthStateChangedListener = (callback) => onAuthStateChanged(auth, callback);