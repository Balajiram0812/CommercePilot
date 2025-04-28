const NavIdem=({icon:Icon, label, link})=>{

    return(
          <li className="nav-item">
            <a className="nav-link pr-3" href={link}>
                < Icon/>
                 {label}
                 </a>
                 </li>
    )

}
export default NavIdem;