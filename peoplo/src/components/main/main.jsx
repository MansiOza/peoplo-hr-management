import "./main.scss";
import Sidebar from "../sidebar/sidebar";
import { Outlet, Route, Routes } from "react-router-dom";

function Main() {
    return(
        <div className="main-section">
            <Sidebar />
            <div className="main-content">
                <Outlet />
            </div>
        </div>
    )
}

export default Main;