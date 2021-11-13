import { getAuth, GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signOut, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword, getIdToken } from 'firebase/auth';
import { useEffect, useState } from "react";
import swal from 'sweetalert';
import InitializeFirebase from '../pages/LogIn/Firebase/firebase.init';
InitializeFirebase();
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [admin, setAdmin] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [isLoadingAdmin, setIsLoadingAdmin] = useState(true);
    const [token, setToken] = useState('');

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const signInUsingGoogle = () => {
        setIsLoading(true);
        return signInWithPopup(auth, googleProvider)
        // .then(result => {
        //     setUser(result.user);
        // })
        // .catch(error => {
        //     setError(error.message);
        // })
    };
    const createUserByEmailPassword = (email, password, displayName) => {
        return createUserWithEmailAndPassword(auth, email, password)
        // .then(result => {
        //     const newUser = {
        //         ...result.user,
        //         displayName: displayName
        //     }
        //     setUser(newUser);
        // })
    }

    const logOut = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => {
                setUser({});
                swal({
                    title: "You are Successfully Logged Out!",
                    icon: "success",
                    button: "Ok",
                });
            })
            .finally(() => {
                setIsLoading(false);
            })

    };
    const signInUser = (email, password) => {
        setIsLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
        // .then(res => {
        //     // console.log('success');
        //     setUser(res.user);
        // })
        // .catch(error => {
        //     setError(error.message);
        // })
    }
    const updateProfileName = (displayName) => {
        setIsLoading(true);
        updateProfile(auth.currentUser, {
            displayName: displayName,
        }).then(() => {
            setIsLoading(false);
        }).catch((error) => {
            setError(error.message)
        }).finally(() => {
            setIsLoading(false);
        })
    }
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
                getIdToken(user)
                    .then(idToken => {
                        setToken(idToken);
                    })
                fetch(`https://garir-bazar.herokuapp.com/users/${user.email}`)
                    .then(res => res.json())
                    .then(data => {
                        //console.log('email  address: ', user.email, ' isAdmin: ', data.admin)
                        setAdmin(data.admin);
                        setIsLoadingAdmin(false);
                    })
            }
            else {
                setUser({});
            }
            setIsLoading(false);
        });
        return () => unsubscribed;
    }, [auth])
    //useEffect te  user.email asar agei ekbar run hy a jasse, jar fole  
    // https://garir-bazar.herokuapp.com/users/undefined ei link fetch korte partase na.
    // tai user load howar por e amdr admin kina check korte hbe
    /*useEffect(() => {
        setIsLoadingAdmin(true);
        fetch(`https://garir-bazar.herokuapp.com/users/${user.email}`)
            .then(res => res.json())
            .then(data => {
                console.log(user.email, data.admin)
                setAdmin(data.admin);
                setIsLoadingAdmin(false);
            })
    }, [user.email])*/

    function saveUser(email, displayName, method) {
        const user = { email, displayName };
        console.log(email, displayName);
        fetch('https://garir-bazar.herokuapp.com/users', {
            method: method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then()
    }

    return { signInUsingGoogle, user, setUser, error, setError, logOut, isLoading, setIsLoading, createUserByEmailPassword, signInUser, updateProfileName, saveUser, admin, isLoadingAdmin, token }
}
export default useFirebase;