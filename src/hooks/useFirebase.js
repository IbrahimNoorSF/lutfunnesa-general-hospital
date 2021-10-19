import { useEffect, useState } from "react"
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword } from "firebase/auth";
import initializeAuthentication from "../Firebase/firebase.initialize";

initializeAuthentication();
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    ///////// GOOGLE SIGN IN POPUP //////////
    const signInUsingGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                setUser(result.user);
                console.log(result.user);
                ////////// SET ERROR //////////
            }).catch(error => {
                setError(error.message)
            })
    }
    ////////// USER LOG OUT //////////
    const logOut = () => {
        signOut(auth)
            .then(() => {
                setUser({});
            })
    }
    /////// OBSERVE WHEATHER AUTH STATE CHANGED OR NOT ///////
    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                console.log('inside state changed', user);
                setUser(user);
            }
        })
    }, [])

    const newRegistration = (email, password, name) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {

                }).catch((error) => {

                });
            })
            .catch((error) => {
                const errorMessage = error.message;
            });
    }
    const handleLogin = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {

            })
            .catch((error) => {

            });
    }

    return {
        signInUsingGoogle,
        user,
        error,
        logOut,
        newRegistration,
        handleLogin
    }
}
export default useFirebase;