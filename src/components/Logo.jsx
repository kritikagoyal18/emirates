import emirates from "../assets/emirates-logo.png"
import oneWorldLogo from "../assets/Oneworld-Logo.png"
import "./Logo.scss";

/**
 * @param {string} variant - "light" or "dark"
 */
const Logo = ({ variant }) => {
  const icon = variant === "emirates" ? emirates : oneWorldLogo;
  return (
    <a href="/" className="logo-wrapper">
      <img src={icon} alt="Emirates" className={"icon " + variant} />
    </a>
  );
};

export default Logo;
