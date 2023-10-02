import {auth,provider} from "../config/firebase.ts";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
export const Login = () =>{
    const navigate = useNavigate()
    const signinwithgoogle = async () =>{
        const result = await signInWithPopup(auth,provider);
        console.log(result);
        navigate('/')
    }
   
    return( 
    <div>
        <p>Sign in with Google to continue</p>
        <button onClick={signinwithgoogle}>Sign in with Google</button>
    </div>
    )
}