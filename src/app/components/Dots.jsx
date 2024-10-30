import { BsThreeDotsVertical } from "react-icons/bs";

const Dots = () => {
    return ( 
        <section className="dots-flex">
        <div className="color1"></div>
        <BsThreeDotsVertical className="icon-dots"/>
        <div className="color2"></div>
        <BsThreeDotsVertical className="icon-dots"/>
        <div className="color3"></div>
        </section>
     );
}
 
export default Dots;