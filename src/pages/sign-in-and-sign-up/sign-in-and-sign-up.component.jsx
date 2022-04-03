import React from "react";
import './sign-in-and-sign-up.styles.scss'
import SignInForm from "../../components/sign-in/sign-in.component";
import SignUpForm from "../../components/sign-up-form/sign-up-form.component";

const SignInAndSignUpPage = () => {
    return (
        <div className="sign-in-and-sign-up">
            <SignInForm />
            <SignUpForm />
        </div>
    )
}

export default SignInAndSignUpPage;