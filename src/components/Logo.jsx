import lightIcon from "../assets/SecurBank-icon-light.svg";
import darkIcon from "../assets/SecurBank-icon-dark.svg";
import british from "../assets/british-airways-logo.png"
import oneWorldLogo from "../assets/Oneworld-Logo.png"
import "./Logo.scss";

/**
 * @param {string} variant - "light" or "dark"
 */
const Logo = ({ variant }) => {
  const icon = variant === "british" ? british : oneWorldLogo;
  return (
    <a href="/" className="hover-effect logo-wrapper">
      <img src={icon} alt="British Airways" className={"icon " + variant} />
    </a>
  );
};

export default Logo;
