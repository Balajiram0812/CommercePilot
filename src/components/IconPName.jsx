const NavIdem = ({ icon: Icon, label, link }) => {
    return (
      <li className="nav-item">
        <a className="nav-link nav-link-custom" style={{color:"#444851"}} href={link}>
          <Icon className="nav-icon" />
          <span className="nav-label">{label}</span>
        </a>
      </li>
    );
  };
  
  export default NavIdem;
  