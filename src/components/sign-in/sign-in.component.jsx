import React from "react";
import { useState } from "react";
import './sign-in.styles.scss'
import FormInput from "../form-input/form-input.component";
import { 
    signInWithGooglePopup, 
    signInAuthUserWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";
import Button from "../button/button.component";

const defaultFormFields = {
    email: '',
    password: '',
};

const SignInForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password } = formFields;

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields({...formFields, [name]: value})
    }

    const signInWithGoogle = async () => {
        await signInWithGooglePopup(); 
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            await signInAuthUserWithEmailAndPassword(
                email, 
                password
            );

            resetFormFields();
        } catch(error) {
            switch(error.code){
                case 'auth/wrong-password':
                    alert('Incorrect password for email');
                    break;
                case 'auth/user-not-found':
                    alert('No user associated with this email');
                    break;
                default:
                    console.log(error);
            }
        }
    }

    return(
        <div className="sign-in">
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>

            <form onSubmit={handleSubmit}>
                <FormInput 
                    name="email" 
                    type="email"
                    label="Email"
                    handleChange={handleChange} 
                    value={email}
                    required 
                />

                <FormInput 
                    name = "password" 
                    type="password" 
                    label="Password"
                    handleChange={handleChange} 
                    value={password} 
                    required
                />

                <div className="buttons">
                    <Button buttonType='inverted' type="submit">Sign In</Button>
                    <Button buttonType='google' type="button" onClick = { signInWithGoogle }>
                    Sign in with Google
                    </Button>
                </div>

            </form>
        </div>
    )

}

export default SignInForm;