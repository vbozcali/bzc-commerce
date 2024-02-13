import { Link } from "react-router-dom";
import { LogoContainer } from "./app-logo.styles";

export const AppLogo = () => {
    return (
        <LogoContainer>
            <Link to="/">
                <img src="https://i.ibb.co/6mDFpPh/Ekran-g-r-nt-s-2024-02-13-195535.png" alt="" />
            </Link>
        </LogoContainer>
    )
}

export default AppLogo;
