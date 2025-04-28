import { FaBell } from "react-icons/fa";
import InputBox from "../components/Inputbox"
import { FaCircleExclamation, FaMessage, FaSackDollar } from "react-icons/fa6";

const Header=()=>{
    return(
        <div className="container Header">
            <div className=" InputBox"><InputBox/></div>
            <div className=" icons">
                <ul><li><FaBell/></li>
                <li><FaMessage/></li>
                <li><FaCircleExclamation/></li>
                <li><FaSackDollar/></li></ul>
            </div>
          
        </div>
    )
}
export default Header;