import {Link} from "react-router-dom";

const Header = () => {

    return (
        <header>
            <div className="header-wrapper">
                <section>
                    <Link to={"/"}>Home</Link>
                </section>
                <section>
                    <Link to={"/favorites"}>Favourites</Link>
                </section>
            </div>
        </header>
    );
};

export default Header
