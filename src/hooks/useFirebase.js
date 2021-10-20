import { useEffect, useState } from "react"
import { getAuth, signInWithPopup, onAuthStateChanged, signOut, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword, GithubAuthProvider } from "firebase/auth";
import initializeAuthentication from "../Firebase/firebase.initialize";

initializeAuthentication();
const useFirebase = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [name, setName] = useState('');
    const auth = getAuth();
    const gitHubProvider = new GithubAuthProvider();
    ///////// GITHUB SIGN IN POPUP //////////
    const handleGithubSignIn = () => {
        signInWithPopup(auth, gitHubProvider)
            .then(result => {
                console.log(result);
                setUser(result);
                window.location.reload();
            })
    }
    ////////// USER LOG OUT //////////
    const logOut = () => {
        signOut(auth)
            .then(() => {

            })
            .finally(() => {
                setIsLoading(false);
            })
    }
    /////// OBSERVE WHEATHER AUTH STATE CHANGED OR NOT ///////
    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({})
            }
            setIsLoading(false);
        })
    }, [])

    const newRegistration = (email, password, name) => {
        setName(name);
        return createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {

                }).catch((error) => {

                });
            })
            .catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage)
            });
    }
    const handleLogin = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)

    }

    return {
        handleGithubSignIn,
        user,
        error,
        logOut,
        newRegistration,
        handleLogin,
        isLoading,
        name
    }
}
export default useFirebase;