import { Fragment, useContext } from "react"
import { Link, Outlet } from "react-router-dom"
import './navigation.styles.scss';
import { UserContext } from "../../context/user.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";

const Navigation = () => {
    const { currentUser, setCurrentUser } = useContext(UserContext);

    const signOutHandler = async () => {
        await signOutUser();

        setCurrentUser(null);
    }

    return (
        <Fragment>
            <div className="navigation">
                <Link className="logo-container" to="">
                    <h1 className="logo">BOSSCALI</h1>
                </Link>

                <div className="nav-links-container">
                    <Link className="nav-link" to="/shop">
                        SHOP
                    </Link>

                    {currentUser ? (
                        <span onClick={signOutHandler} className="nav-link">
                            SIGN OUT
                        </span>
                    ) : (
                        <Link className="nav-link" to="/auth">
                            SIGN IN
                        </Link>
                    )}
                </div>
            </div>

            <Outlet />
        </Fragment>
    )
}

export default Navigation;

