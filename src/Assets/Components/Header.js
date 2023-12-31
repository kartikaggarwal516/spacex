import React, { memo } from "react"
import "../Styles/header.css"
import { Link, useNavigate } from "react-router-dom"
import { Badge } from "react-bootstrap"
import logout from "../Images/logout_img.png"
import spacexLogo from "../Images/spacex-logo.svg";

const Header = props => {
    const navigate = useNavigate();
    const loggeduser = localStorage.getItem("user")
    const user = JSON.parse(loggeduser)
    console.log("loggeduser", user)

    if (!user) {
        navigate('/');
    }

    const signout = () => {
        localStorage.removeItem("user")
    }
    return (
        <div className="hcontainer">
            <Link className="header-logo-container" to="/home">
                <img className="header-logo" src={spacexLogo} alt="SpaceX logo" width="280px" />
            </Link>
            <div className="hmenu">
                <Link to="/launches">LAUNCHES</Link>
                <Link to="/rockets">ROCKETS</Link>
                <Link to="/dragons">DRAGONS</Link>
                {user && user.role === "user"
                    ? <Badge variant="secondary" className="badge">{user.role}</Badge>
                    : <Badge variant="warning"> {user.role}</Badge>
                }
                <h5>{user && user.user}</h5>
                <Link to="/" onClick={signout}>
                    <img src={logout} alt="logout img" width="20px" className="logout" />
                </Link>
            </div>
        </div>
    )
}

export default memo(Header)