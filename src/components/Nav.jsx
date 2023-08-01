import {  social } from "../data";
const Nav = () => {
  return (
<nav className="navbar navbar-expand-lg  nav">
  <div className="container  nav-header p-2">
    <h2 className="logo">WSE</h2>
    <button className="navbar-toggler nav-toggle" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className=" navbar-nav ms-auto mb-2 mb-lg-0 ">
        <li className="nav-item links px-2">
          <a className="nav-link " aria-current="page" href="#Home">Home</a>
        </li>
        <li className="nav-item links px-2">
          <a className="nav-link" href="#About">About</a>
        </li>
        <li className="nav-item links px-2">
          <a className="nav-link" href="#Skils">Skils</a>
        </li>
        <li className="nav-item links px-2 ">
          <a className="nav-link" href="#Projects">Projects</a>
        </li>
        <li className="nav-item links px-2">
          <a className="nav-link" href="#Contect">Contect</a>
        </li>
      </ul>
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0 social-icons">
       {social.map((socialIcon)=>{
        return(
           <li key={socialIcon.id}>
            <a  target="blank"  href={socialIcon.url}>{socialIcon.icon} </a>
           </li>
        )
       })}
      </ul>
    </div>
  </div>
</nav>

  )
}

export default Nav