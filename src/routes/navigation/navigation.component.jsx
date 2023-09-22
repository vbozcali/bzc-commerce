import { Fragment, useContext } from "react"
import { Outlet } from "react-router-dom"
import { signOutUser } from "../../utils/firebase/firebase.utils";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import { CartContext } from "../../context/cart.context";
import { LogoContainer, NavLinks, NavLink, NavigationContainer } from "./navigation.styles";
import { AppLogo } from "../../components/app-logo/app-logo.component";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../store/user/user.selector";

const Navigation = () => {
    const currentUser = useSelector(selectCurrentUser);
    const { isCartOpen } = useContext(CartContext);

    const signOutHandler = async () => {
        await signOutUser();
    }

    return (
        <Fragment>
            <NavigationContainer>
                <LogoContainer to="">
                    <AppLogo />
                </LogoContainer>

                <NavLinks>
                    {currentUser && <span style={{ fontWeight: 'bold' }}>{currentUser.email}</span>}

                    <NavLink to="/shop">
                        SHOP
                    </NavLink>

                    {currentUser ? (
                        <NavLink as="span" onClick={signOutHandler} className="nav-link">
                            SIGN OUT
                        </NavLink>
                    ) : (
                        <NavLink className="nav-link" to="/auth">
                            SIGN IN
                        </NavLink>
                    )}

                    <CartIcon />
                </NavLinks>

                {isCartOpen && <CartDropdown />}
            </NavigationContainer>

            <Outlet />
        </Fragment>
    )
}

export default Navigation;

