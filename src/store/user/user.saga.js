import { takeLatest, all, call, put } from "redux-saga/effects";
import { USER_ACTION_TYPES } from "./user.types";
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth, getCurrentUser, signInAuthWithEmailAndPassword, signInWithGooglePopup, signOutUser } from "../../utils/firebase/firebase.utils";
import { signInFailed, signInSuccess, signOutSuccess, signUpFailed, signUpSuccess } from "./user.action";

export function* getSnapshotFromUserAuth(userAuth, additionalDetails) {
    try {
        const userSnapshot = yield call(
            createUserDocumentFromAuth,
            userAuth,
            additionalDetails
        );
        yield put(signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }));
    } catch (error) {
        yield put(signInFailed(error));
        alert("sign in failed");
    }
}

export function* isUserAuthenticated() {
    try {
        const userAuth = yield call(getCurrentUser);
        if (!userAuth) return;
        yield call(getSnapshotFromUserAuth, userAuth);
    } catch (error) {
        yield put(signInFailed(error));
        alert("session restore failed");
    }
}

export function* signInWithGoogle() {
    try {
        const { user } = yield call(signInWithGooglePopup);
        yield call(getSnapshotFromUserAuth, user);
    } catch (error) {
        yield put(signInFailed(error));
        alert("google sign in failed");
    }
}

export function* signInWithEmailAndPassword({ payload: { email, password } }) {
    try {
        const { user } = yield call(
            signInAuthWithEmailAndPassword,
            email,
            password
        );
        yield call(getSnapshotFromUserAuth, user);
    } catch (error) {
        yield put(signInFailed(error));
        switch (error.code) {
            case 'auth/wrong-password':
                alert('incorrect password!');
                break;
            case 'auth/user-not-found':
                alert('no user associated with this email');
                break;
            default:
                console.log(error);
                alert("HATA OLUŞTU");
        }
    }
}

export function* signInAfterSignUp({ payload: { user, additionalInformation } }) {
    try {
        yield call(getSnapshotFromUserAuth, user, additionalInformation);
    } catch (error) {
        yield put(signUpFailed(error));

        if (error.code === 'auth/email-already-in-use') {
            alert('This e-mail already taken!');
        }
    }
}

export function* signUp({ payload: { email, password, displayName } }) {
    try {
        const { user } = yield call(createAuthUserWithEmailAndPassword, email, password);
        console.log("PAYLOAD: ", user);
        yield put(signUpSuccess(user, { displayName }));
    } catch (error) {
        yield put(signUpFailed, error);
        alert("sign up failed");
    }
}

export function* signOut() {
    try {
        yield call(signOutUser);
        yield put(signOutSuccess());
    } catch (error) {
        yield put(signUpFailed(error));
        alert("sign out failed")
    }
}

export function* onGoogleSignInStart() {
    yield takeLatest(USER_ACTION_TYPES.GOOGLE_SIGN_IN_START, signInWithGoogle);
}

export function* onUserEmailSignInStart() {
    yield takeLatest(USER_ACTION_TYPES.EMAIL_SIGN_IN_START, signInWithEmailAndPassword);
}

export function* onCheckUserSession() {
    yield takeLatest(USER_ACTION_TYPES.CHECK_USER_SESSION, isUserAuthenticated)
}

export function* onSignUpStart() {
    yield takeLatest(USER_ACTION_TYPES.SIGN_UP_START, signUp);
}

export function* onSignUpSuccess() {
    yield takeLatest(USER_ACTION_TYPES.SIGN_UP_SUCCESS, signInAfterSignUp);
}

export function* onSignOutStart() {
    yield takeLatest(USER_ACTION_TYPES.SIGN_OUT_START, signOut);
}

export function* userSaga() {
    yield all([
        call(onCheckUserSession),
        call(onUserEmailSignInStart),
        call(onGoogleSignInStart),
        call(onSignUpStart),
        call(onSignUpSuccess),
        call(onSignOutStart)
    ]);
}