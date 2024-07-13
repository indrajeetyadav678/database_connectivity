import { Link, Outlet } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import { useAuth0 } from "@auth0/auth0-react"


const Layout = () => {
    const { logout, user, isAuthenticated, isLoading } = useAuth0();
    console.log("user_data=======>", user)
    console.log("isAuthenticated=======>", isAuthenticated)
    console.log("isLoading=======>", isLoading)
    console.log("logout======>", logout)
    const data = useSelector(state => state.mylogdata?.user_data)
    console.log("&&&&&&&&&&&&&&&&&&&&&", data)
    let username = "Guest"
    if (data !== "null") {
        username = data.length > 0 ? (data[0]["name"]) : "Guest"
        console.log("&&&&&&&&&&&============>", username)
    }
    const dispatch = useDispatch()
    return (
        <>
            <ul id="Navbar">
                <li>
                    <Link to="/home" style={{ color: "white", fontSize: "20px", fontWeight: "700" }}>Home</Link>
                </li>
                {user ?
                    (<li>
                    <Link to="/login" style={{color:"white", fontSize:"20px", fontWeight:"700"}}>Login</Link>
                </li>) :
                (
                    <li>
                        <Link to="/login" style={{ color: "white", fontSize: "20px", fontWeight: "700" }}>Login</Link>
                    </li>)
                }
                <li>
                    <Link to="/register" style={{color:"white",fontSize:"20px", fontWeight:"700"}}>Registration</Link>
                </li>
                
                <li>
                    <Link to="/listd" style={{ color: "white", fontSize: "20px", fontWeight: "700" }}>User List</Link>
                </li>
                <li>
                    <Link to="/chat" style={{ color: "white", fontSize: "20px", fontWeight: "700" }}>chat</Link>
                </li>

                <li>
                    <Link to="/">
                        <label style={{ color: "white", fontSize: "20px", fontWeight: "700" }}>{username}</label>
                    </Link>
                </li>
            </ul>
            <Outlet>

            </Outlet>
            <hr border="1" size="2" color="black" />
            <footer>
                <h1 style={{ textAlign: "center" }}>This is Footer</h1>
            </footer>
        </>
    );
}
export default Layout;