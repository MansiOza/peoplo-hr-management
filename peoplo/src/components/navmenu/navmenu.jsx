import { NavLink } from "react-router-dom";
import "./navmenu.scss";

function Navmenu() {
    return(
        <div className="navmenu">
            <div className="item main-menu">
                <p className="title">Menu</p>
                <ul>
                    <li>
                        <NavLink to="/dashboard">
                            <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
                                <path d="M6.33333 2.375H3.95833C3.08388 2.375 2.375 3.08388 2.375 3.95833V7.91667C2.375 8.79112 3.08388 9.5 3.95833 9.5H6.33333C7.20778 9.5 7.91667 8.79112 7.91667 7.91667V3.95833C7.91667 3.08388 7.20778 2.375 6.33333 2.375Z" stroke="#6B7086" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M15.0417 2.375H12.6667C11.7922 2.375 11.0833 3.08388 11.0833 3.95833V4.75C11.0833 5.62445 11.7922 6.33333 12.6667 6.33333H15.0417C15.9161 6.33333 16.625 5.62445 16.625 4.75V3.95833C16.625 3.08388 15.9161 2.375 15.0417 2.375Z" stroke="#6B7086" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M15.0417 9.5H12.6667C11.7922 9.5 11.0833 10.2089 11.0833 11.0833V15.0417C11.0833 15.9161 11.7922 16.625 12.6667 16.625H15.0417C15.9161 16.625 16.625 15.9161 16.625 15.0417V11.0833C16.625 10.2089 15.9161 9.5 15.0417 9.5Z" stroke="#6B7086" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M6.33333 12.667H3.95833C3.08388 12.667 2.375 13.3759 2.375 14.2503V15.042C2.375 15.9164 3.08388 16.6253 3.95833 16.6253H6.33333C7.20778 16.6253 7.91667 15.9164 7.91667 15.042V14.2503C7.91667 13.3759 7.20778 12.667 6.33333 12.667Z" stroke="#6B7086" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            Dashboard
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/employee">
                            <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
                                <path d="M12.6667 16.625V15.0417C12.6667 14.2018 12.333 13.3964 11.7392 12.8025C11.1453 12.2086 10.3398 11.875 9.49999 11.875H4.74999C3.91014 11.875 3.10469 12.2086 2.51082 12.8025C1.91696 13.3964 1.58333 14.2018 1.58333 15.0417V16.625" stroke="#6B7086" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M7.12499 8.70833C8.8739 8.70833 10.2917 7.29057 10.2917 5.54167C10.2917 3.79276 8.8739 2.375 7.12499 2.375C5.37609 2.375 3.95833 3.79276 3.95833 5.54167C3.95833 7.29057 5.37609 8.70833 7.12499 8.70833Z" stroke="#6B7086" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M17.4167 16.6251V15.0418C17.4161 14.3401 17.1826 13.6586 16.7528 13.104C16.3229 12.5495 15.721 12.1534 15.0417 11.978" stroke="#6B7086" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M12.6667 2.47803C13.3478 2.65243 13.9516 3.04858 14.3827 3.60402C14.8139 4.15946 15.0479 4.8426 15.0479 5.54574C15.0479 6.24887 14.8139 6.93201 14.3827 7.48745C13.9516 8.04289 13.3478 8.43904 12.6667 8.61344" stroke="#6B7086" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            Employees
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/recruitment">
                            <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
                                <path d="M15.0417 5.5415H3.95833C2.64665 5.5415 1.58333 6.60483 1.58333 7.9165V14.2498C1.58333 15.5615 2.64665 16.6248 3.95833 16.6248H15.0417C16.3533 16.6248 17.4167 15.5615 17.4167 14.2498V7.9165C17.4167 6.60483 16.3533 5.5415 15.0417 5.5415Z" stroke="#6B7086" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M12.6667 16.625V3.95833C12.6667 3.53841 12.4998 3.13568 12.2029 2.83875C11.906 2.54181 11.5033 2.375 11.0833 2.375H7.91666C7.49674 2.375 7.09401 2.54181 6.79708 2.83875C6.50014 3.13568 6.33333 3.53841 6.33333 3.95833V16.625" stroke="#6B7086" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            Recruitment
                            <span className="new-pill">New</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/attendance">
                            <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
                                <path d="M9.49999 17.4168C13.8722 17.4168 17.4167 13.8724 17.4167 9.50016C17.4167 5.12791 13.8722 1.5835 9.49999 1.5835C5.12774 1.5835 1.58333 5.12791 1.58333 9.50016C1.58333 13.8724 5.12774 17.4168 9.49999 17.4168Z" stroke="#6B7086" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M9.5 4.75V9.5L12.6667 11.0833" stroke="#6B7086" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            Attendance
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/leave">
                            <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
                                <path d="M14.25 3.1665H4.75C3.43832 3.1665 2.375 4.22983 2.375 5.5415V15.0415C2.375 16.3532 3.43832 17.4165 4.75 17.4165H14.25C15.5617 17.4165 16.625 16.3532 16.625 15.0415V5.5415C16.625 4.22983 15.5617 3.1665 14.25 3.1665Z" stroke="#6B7086" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M12.6667 1.5835V4.75016M6.33333 1.5835V4.75016M2.375 7.91683H16.625" stroke="#6B7086" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            Leave
                        </NavLink>
                    </li>
                    <li>
                        <a href="">
                            <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
                                <path d="M16.625 9.5V5.54167H3.95833C3.53841 5.54167 3.13568 5.37485 2.83875 5.07792C2.54181 4.78099 2.375 4.37826 2.375 3.95833C2.375 3.53841 2.54181 3.13568 2.83875 2.83875C3.13568 2.54181 3.53841 2.375 3.95833 2.375H15.0417V5.54167" stroke="#6B7086" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M2.375 3.9585V15.0418C2.375 15.4618 2.54181 15.8645 2.83875 16.1614C3.13568 16.4583 3.53841 16.6252 3.95833 16.6252H16.625V12.6668" stroke="#6B7086" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M14.25 9.5C13.8301 9.5 13.4274 9.66682 13.1304 9.96375C12.8335 10.2607 12.6667 10.6634 12.6667 11.0833C12.6667 11.5033 12.8335 11.906 13.1304 12.2029C13.4274 12.4999 13.8301 12.6667 14.25 12.6667H17.4167V9.5H14.25Z" stroke="#6B7086" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            Payroll
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
                                <path d="M9.49999 17.4168C13.8722 17.4168 17.4167 13.8724 17.4167 9.50016C17.4167 5.12791 13.8722 1.5835 9.49999 1.5835C5.12774 1.5835 1.58333 5.12791 1.58333 9.50016C1.58333 13.8724 5.12774 17.4168 9.49999 17.4168Z" stroke="#6B7086" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M9.5 14.25C12.1234 14.25 14.25 12.1234 14.25 9.5C14.25 6.87665 12.1234 4.75 9.5 4.75C6.87665 4.75 4.75 6.87665 4.75 9.5C4.75 12.1234 6.87665 14.25 9.5 14.25Z" stroke="#6B7086" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M9.50001 11.0832C10.3745 11.0832 11.0833 10.3743 11.0833 9.49984C11.0833 8.62539 10.3745 7.9165 9.50001 7.9165C8.62555 7.9165 7.91667 8.62539 7.91667 9.49984C7.91667 10.3743 8.62555 11.0832 9.50001 11.0832Z" stroke="#6B7086" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            Performance
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
                                <path d="M2.375 2.375V16.625H16.625" stroke="#6B7086" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M14.25 13.4585V7.12516M10.2917 13.4585V3.9585M6.33333 13.4585V11.0835" stroke="#6B7086" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            Reports
                        </a>
                    </li>
                </ul>
            </div>

            <div className="item system-menu">
                <p className="title">SYSTEM</p>
                <ul>
                    <li>
                        <a href="">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="19" viewBox="0 0 20 19" fill="none">
                                <path d="M3.27499 16.625V11.0833M3.27499 7.91667V2.375M9.60833 16.625V9.5M9.60833 6.33333V2.375M15.9417 16.625V12.6667M15.9417 9.5V2.375M0.899994 11.0833H5.64999M7.23333 6.33333H11.9833M13.5667 12.6667H18.3167" stroke="#6B7086" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            Settings
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
                                <path d="M9.49999 17.4163C13.8722 17.4163 17.4167 13.8719 17.4167 9.49967C17.4167 5.12742 13.8722 1.58301 9.49999 1.58301C5.12774 1.58301 1.58333 5.12742 1.58333 9.49967C1.58333 13.8719 5.12774 17.4163 9.49999 17.4163Z" stroke="#6B7086" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M7.19624 7.12496C7.38237 6.59587 7.74974 6.14971 8.23329 5.86553C8.71684 5.58134 9.28537 5.47746 9.83817 5.57228C10.391 5.6671 10.8924 5.9545 11.2536 6.38359C11.6148 6.81268 11.8125 7.35575 11.8117 7.91663C11.8117 9.49996 9.43666 10.2916 9.43666 10.2916" stroke="#6B7086" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M9.5 13.458H9.50792" stroke="#6B7086" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            Help centre
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navmenu;