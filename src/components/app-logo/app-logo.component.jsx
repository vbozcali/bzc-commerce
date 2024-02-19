import { Link } from "react-router-dom";
import { LogoContainer } from "./app-logo.styles";

export const AppLogo = () => {
    return (
        <LogoContainer>
            <Link to="/">
                <img style={{ width: 300 }} src="https://i.ibb.co/C1MB7qD/bzc-commerce.png" alt="" />
            </Link>
        </LogoContainer>
    )
}

export default AppLogo;
