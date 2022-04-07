import './sideBar.css';


function Menubar(props) {
    return (
        <div className="button">
            <p>{props.children}</p>
        </div>
    )
}

function Copyright() {
    return (
        <div id="copyright">
            <p>© 2022 by Wahyu Dwi Setio Wibowo</p>
            <p>All Rights Reserved</p>
        </div>
    )
}

function Sidebar() {
    return (
        <div id="sidebar">
            <Menubar>Hotels</Menubar>
            <Menubar>Flight</Menubar>
            <Menubar>Car Rentals</Menubar>
            <Menubar>Tool</Menubar>
            <Copyright />
        </div>
    )
}

export default Sidebar;