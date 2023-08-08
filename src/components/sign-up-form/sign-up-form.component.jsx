import { useState } from "react";
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";

const defaultFormFields = {
    'displayName': '',
    'email': '',
    'password': '',
    'confirmPassword': ''
}

const SignUpForm = () => {
    const [formFields, setFormsFields] = useState(defaultFormFields);
    const { displayName, email, password, confirmPassword } = formFields;

    const resetFormFields = () => {
        setFormsFields(defaultFormFields);
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

        setFormsFields({ ...formFields, [name]: value })
    }

    return (
        <div>
            <h1>Sign up with your email and password</h1>

            <form onSubmit={(e) => { handleSubmit(e) }}>
                <label>Display Name</label>
                <input type="text" required onChange={handleChange} name="displayName" value={displayName} />

                <label>E-mail</label>
                <input type="email" required onChange={handleChange} name="email" value={email} />

                <label>Password</label>
                <input type="password" required onChange={handleChange} name="password" value={password} />

                <label>Confirm Password</label>
                <input type="password" required onChange={handleChange} name="confirmPassword" value={confirmPassword} />

                <button type="submit">Sign up</button>
            </form>
        </div>
    )
}

export default SignUpForm;