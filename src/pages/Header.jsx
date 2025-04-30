import { FaBell, FaFireAlt } from "react-icons/fa";
import InputBox from "../components/Inputbox"
import { FaCircleExclamation, FaMessage } from "react-icons/fa6";

const Header=()=>{
    return(
        <div className="container Header">
            <div className=" InputBox">
                <InputBox 
                 placeholder="Enter username"
                 text ="text"
                
                />

                
                </div>
            <div className=" icons">
                <ul><li><FaBell/></li>
                <li><FaMessage/></li>
                <li><FaCircleExclamation/></li>
                <li><FaFireAlt/></li></ul>
            </div>
        
        </div>
    )
}
export default Header;