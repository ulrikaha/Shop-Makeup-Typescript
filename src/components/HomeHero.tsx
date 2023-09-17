//  HomeHero for the home page.
import img1 from "/imgs/cv-girl2.jpg";
import img2 from '/imgs/new-in2.png';
import { Link } from "react-router-dom";


export const HomeHero = () => {
    return (
        <div className="d-flex align-items-center" >
        <div className="flex-grow-1 align-items-center" />
        <Link to="/store"> 
        <img src={img2} style={{ width: "300px", height: "300px", objectFit: "cover", marginRight: "100px"}} alt="New in" />
        </Link>

        <Link to="/store"> 
        <img src={img1} style={{ width: "600px", height: "600px", objectFit: "cover"}} alt="Makeup" />
        </Link>
         </div>
        );
    };