
import React from "react";
import NavIdem from "../components/IconPName";
import { AiFillCodeSandboxSquare } from 'react-icons/ai';
import {
    FaBolt, FaNetworkWired, FaChartArea, FaCartArrowDown,
    FaProjectDiagram, FaUsers, FaDollarSign, FaExclamationCircle,
    FaBrain
} from "react-icons/fa";
import { FaTruckArrowRight } from 'react-icons/fa6';
import ProfileCard from "../components/Profilecard";

const Sidebar = () => {
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

    return (
        <div className="sidebar-container bg-light">
            <div className="sidebar-header d-flex align-items-center px-3 py-2 border-bottom" style={{color:"#5758d5"}}>
                <FaBolt className="me-2" />
                <h5 className="mb-0">CommercePilot</h5>
            </div>
            <div className="sidebar-content overflow-auto px-3 py-3">
                <ul className="nav flex-column" style={{ cursor: "pointer" }}>
                    {NavItems.map((item) => {
                        if (item.hrline) {
                            return (
                                <>
                                    <hr />
                                    <p >{item.label}</p>
                                </>

                            );
                        }
                        return <NavIdem{...item} />;
                    })}
                </ul>
            </div>

            <div style={{ padding: '20px' }}>
                <hr/>
                <ProfileCard name="Emma Rodriguez" title="Commerce Administrator" />
            </div>

        </div>
    );
};

export default Sidebar;
