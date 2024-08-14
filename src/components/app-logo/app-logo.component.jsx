import { Link } from "react-router-dom";
import { LogoContainer } from "./app-logo.styles";
import logo from '../assets/logo.svg'; 

export const AppLogo = () => {
    return (
        <LogoContainer>
            <Link to="/">
                <img style={{ width: 300 }} src="{logo}" alt="" />
            </Link>
        </LogoContainer>
    )
}

export default AppLogo;
