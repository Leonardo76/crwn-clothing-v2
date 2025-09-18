// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import {getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider} from 'firebase/auth';
import {getFirestore, doc, getDoc, setDoc} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCMOJwMbSqz8r3HG93XKkY8gWb-XSz_ljM",
    authDomain: "crwn-clothing-db-52c71.firebaseapp.com",
    projectId: "crwn-clothing-db-52c71",
    storageBucket: "crwn-clothing-db-52c71.firebasestorage.app",
    messagingSenderId: "583336494235",
    appId: "1:583336494235:web:5a509776282590ef96723e"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);


export const db = getFirestore();

// @ts-expect-error I don't know the type of userAuth
export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid);

    console.log("userDocRef", userDocRef);

    const userSnapshot = await getDoc(userDocRef);
    console.log("userSnapshot", userSnapshot);

    if (!userSnapshot.exists()) {
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
            });
        } catch (error) {
            // @ts-expect-error display the error message
            console.log('error creating the user', error.message);
        }
    }

    return userDocRef;
}