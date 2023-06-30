import { ReactComponent as DarkMode } from "../assets/dark-mode.svg";

let switchTheme = () => {
    console.log("test");
}

const Header = () => {
    return(
        <div className="app-header">
            <h1>Notes List</h1>
            {/* <p><DarkMode onClick={switchTheme}/></p> */}
        </div>
    )
}

export default Header;