import { useState } from "react";
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";
import './sign-up-form.styles';
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
import { SignUpContainer } from "./sign-up-form.styles";

const defaultFormFields = {
    'displayName': '',
    'email': '',
    'password': '',
    'confirmPassword': ''
}

const SignUpForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { displayName, email, password, confirmPassword } = formFields;

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            alert("Şifreler eşleşmiyor!");

            return false;
        }

        try {
            const { user } = await createAuthUserWithEmailAndPassword(
                email,
                password
            );

            await createUserDocumentFromAuth(user, { displayName });

            resetFormFields();
        } catch (error) {
            if (error.code === 'auth/email-already-in-use') {
                alert('This e-mail already taken!');
            }

            console.log(error.message);
        }
    }

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormFields({ ...formFields, [name]: value })
    }

    return (
        <SignUpContainer>
            <h2>Don't Have an Account?</h2>
            <span>Sign up with your email and password</span>

            <form onSubmit={(e) => { handleSubmit(e) }}>
                <FormInput label="Display Name" type="text" required onChange={handleChange} name="displayName" value={displayName} />

                <FormInput label="E-mail" type="email" required onChange={handleChange} name="email" value={email} />

                <FormInput label="Password" type="password" required onChange={handleChange} name="password" value={password} />

                <FormInput label="Confirm Password" type="password" required onChange={handleChange} name="confirmPassword" value={confirmPassword} />

                <Button
                    type="submit"
                    buttonType={BUTTON_TYPE_CLASSES.base}>
                    Sign Up
                </Button>
            </form>
        </SignUpContainer>
    )
}

export default SignUpForm;