import { Fragment } from "react"
import { Outlet } from "react-router-dom"
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import { LogoContainer, NavLinks, NavLink, NavigationContainer } from "./navigation.styles";
import { AppLogo } from "../../components/app-logo/app-logo.component";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../store/user/user.selector";
import { selectIsCartOpen } from "../../store/cart/cart.selector";
import { useDispatch } from "react-redux";
import { signOutStart } from "../../store/user/user.action";

const Navigation = () => {
    const currentUser = useSelector(selectCurrentUser);
    const isCartOpen = useSelector(selectIsCartOpen);

    const dispatch = useDispatch();

    const signOutHandler = () => {
        dispatch(signOutStart());
    }

    return (
        <Fragment>
            <NavigationContainer>
                <LogoContainer to="">
                    <AppLogo />
                </LogoContainer>

                <NavLinks>
                    {currentUser && <span style={{ fontWeight: 'bold', paddingTop: 9 }}>{currentUser.displayName}</span>}

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

