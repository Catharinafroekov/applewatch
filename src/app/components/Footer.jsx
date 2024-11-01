import Watches from "./Watches";
import Pageturner from "./Pageturner";

const Footer = () => {
    return ( 
        <section className="footer-flex">
            <div><Pageturner/></div>
            <div><Watches/></div>  
        </section>
     );
}
 
export default Footer;