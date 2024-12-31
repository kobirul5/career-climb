import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.init";
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { toast } from "react-toastify";

export const AuthContext = createContext()

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)


    // register with email and password
    const registerWithEmailAndPassword = (email, password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    //Login with email and password
    const loginWithEmailAndPassword = (email, password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const setUserProfile = (updatedData)=>{
        return updateProfile(auth.currentUser, updatedData)
    }
    // log out 
    const logOut = ()=>{
        setLoading(true)
        signOut(auth)
        .then(()=>{
            
        })
    }
    const googleProvider = new GoogleAuthProvider()
    const handleGoogle = ()=>{
        signInWithPopup(auth, googleProvider)
        .then(result=>{
            setUser(result.user)
        })
        .catch(error=> {
            toast(error.massage)
        })

    }
        // forget password 
        const updatePassword = (email) => {
            return sendPasswordResetEmail(auth, email)
        }
    // on auth state
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser=>{
            setUser(currentUser)
            setLoading(false)
        })
        return ()=>{
            unsubscribe()
        }
    },[])

    const authInfo = {
        user, 
        setUser,
        registerWithEmailAndPassword,
        loginWithEmailAndPassword,
        setUserProfile,
        logOut,
        loading,
        handleGoogle,
        updatePassword
    }


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;