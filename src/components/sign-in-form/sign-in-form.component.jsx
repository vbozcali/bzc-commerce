import { useState, useContext } from "react";
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";
import {
    signInWithGooglePopup,
    createUserDocumentFromAuth,
    signInAuthWithEmailAndPassword
} from "../../utils/firebase/firebase.utils";
import './sign-in-form.styles.scss';
import { UserContext } from "../../context/user.context";

const defaultFormFields = {
    'email': '',
    'password': ''
}

const SignInForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password } = formFields;
    const { setCurrentUser } = useContext(UserContext);

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
            const { user } = await signInAuthWithEmailAndPassword(email, password);

            setCurrentUser(user);

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
        const { user } = await signInWithGooglePopup();

        await createUserDocumentFromAuth(user);
    }

    return (
        <div className="sign-in-container">
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>

            <form onSubmit={handleSubmit}>
                <FormInput onChange={handleChange} label="email" type="email" required name="email" value={email}></FormInput>

                <FormInput onChange={handleChange} label="password" type="password" required name="password" value={password}></FormInput>

                <div className="buttons-container">
                    <Button type="submit">
                        Sign In
                    </Button>

                    <Button type="button" onClick={signInWithGoogle} buttonType="google">
                        Google Sign In
                    </Button>
                </div>
            </form>
        </div>
    )
}

export default SignInForm;