import NavIdem from "../components/IconPName"
import React from "react";
import { AiFillCodeSandboxSquare } from 'react-icons/ai';
import{FaBolt,  FaNetworkWired,FaChartArea,FaCartArrowDown, FaProjectDiagram, FaUsers, FaDollarSign, FaExclamationCircle, FaBrain, FaWindowClose,} from "react-icons/fa"
import { FaTruckArrowRight } from 'react-icons/fa6';

const SideBar=()=>{

   
    const NavItems = [
        { label: "Overview", icon: FaNetworkWired },
        { label: "Analytics", icon: FaChartArea },
        { label: "Orders", icon: FaCartArrowDown },
        { label: "Inventory", icon: AiFillCodeSandboxSquare },
        { label: "Products", icon: FaProjectDiagram },
        { label: "Customers", icon: FaUsers },
        { label: "Logistics", icon: FaTruckArrowRight },
        { label: "Finance", icon: FaDollarSign },
        { label: "Risk management", icon: FaExclamationCircle },
        { hrline: true, label: "Agent management" }, 
        { label: "Agent status", icon: FaBolt },
        { label: "Agent builder", icon: FaBrain },
      ];
    
      
      
    return(
        <div className="bg-light p-3 vh-100" style={{ width: "250px" }}>
        <h4 className="text-info mb-4"> <FaBolt />CommercePilot</h4><hr/>
        <ul className="nav flex-column text-start" style={{ cursor: "pointer" }}>
          {NavItems.map((item) => {
            if (item.hrline) {
              return (
                <>
                    <hr />
                  <p>{item.label}</p>
                  </>
         
              );
            }
            return <NavIdem{...item} />;
          })}
        </ul>
      </div>
    );
}

export default SideBar;