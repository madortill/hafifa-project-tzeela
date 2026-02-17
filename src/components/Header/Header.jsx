import "./Header.css"; 
import logo from "../../assets/img/logo.svg";
import tilLogo from "../../assets/img/til-logo.svg";

const Header = () => {
    return (
        <div id="header-bg">
            <img src={tilLogo} alt="mador Til logo" className="mador-til-logo"/>
            <p>מלחמת אסטרואידים</p>
            <img src={logo} alt="logo" className="logo"/>
        </div>
    );
};

export default Header;