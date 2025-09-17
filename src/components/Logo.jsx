import emirates from "../assets/emirates-logo.png"
import oneWorldLogo from "../assets/Oneworld-Logo.png"
import { Link } from "react-router-dom";
import "./Logo.scss";

/**
 * @param {string} variant - "light" or "dark"
 */
const Logo = ({ variant }) => {
  const icon = variant === "emirates" ? emirates : oneWorldLogo;
  return (
    <Link to="/" className="logo-wrapper" aria-label="Go to home">
      <img src={icon} alt="Emirates" className={"icon " + variant} width={125} height={90} />
    </Link>
  );
};

export default Logo;
