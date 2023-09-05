import { useState } from "react";
import FormInput from "../form-input/form-input.component";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
import {
    signInWithGooglePopup,
    signInAuthWithEmailAndPassword
} from "../../utils/firebase/firebase.utils";
import './sign-in-form.styles';
import { ButtonsContainer, SignInContainer } from "./sign-in-form.styles";

const defaultFormFields = {
    'email': '',
    'password': ''
}

const SignInForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password } = formFields;

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormFields({ ...formFields, [name]: value });
    }

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await signInAuthWithEmailAndPassword(email, password);
            resetFormFields();
        } catch (error) {
            switch (error.code) {
                case 'auth/wrong-password':
                    alert('incorrect password!');
                    break;
                case 'auth/user-not-found':
                    alert('no user associated with this email');
                    break;
                default:
                    console.log(error);
            }
        }

        // signInAuthWithEmailAndPassword(email, password);

        // resetFormFields();
    }

    const signInWithGoogle = async () => {
        await signInWithGooglePopup();
    }

    return (
        <SignInContainer>
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>

            <form onSubmit={handleSubmit}>
                <FormInput onChange={handleChange} label="email" type="email" required name="email" value={email}></FormInput>

                <FormInput onChange={handleChange} label="password" type="password" required name="password" value={password}></FormInput>

                <ButtonsContainer>
                    <Button
                        type="submit"
                        buttonType={BUTTON_TYPE_CLASSES.base}>
                        Sign In
                    </Button>

                    <Button
                        type="button"
                        onClick={signInWithGoogle}
                        buttonType={BUTTON_TYPE_CLASSES.google}>
                        Google Sign In
                    </Button>
                </ButtonsContainer>
            </form>
        </SignInContainer>
    )
}

export default SignInForm;