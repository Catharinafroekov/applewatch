import { FaApple } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { LuShoppingBag } from "react-icons/lu";

const Nav = () => {
    return ( 
        <section className="grid">
        <div>
        <FaApple className="icon"/>
        </div>
        <div>
        <nav>
            <ul className="flex">
                <li><link rel="stylesheet" href="#" />Mac</li>
                <li><link rel="stylesheet" href="#" />iPhone</li>
                <li><link rel="stylesheet" href="#" />iPad</li>
                <li><link rel="stylesheet" href="#" />iWatch</li>
                <li><link rel="stylesheet" href="#" />Support</li>
            </ul>
            </nav>
            </div>
            <div className="flex-icons">
            <CiSearch className="nav-icon"/>
            <svg xmlns="http://www.w3.org/2000/svg" width="2" height="24" viewBox="0 0 2 24" fill="none">
<path d="M1 1V23" stroke="white" stroke-linecap="round"/>
</svg>
            <LuShoppingBag className="nav-icon"/>
            </div>
        </section>
     );
}
 
export default Nav;