import "./Navbar.css";

function Navbar() {
  return (
    <>
      <nav>
        <div/>
        <div>
          <ul id="navbar">
            <li>
              <a className="active" href="#">
                Home
              </a>
              <ul className="Dropdown">
                <li>
                  
                  <a href="#"> Item1 </a>
                </li>
                <li>
                  
                  <a href="#"> Item1 </a>
                </li>
                <li>
                  
                  <a href="#"> Item1 </a>
                </li>
                <li>
                  
                  <a href="#"> Item1 </a>
                </li>
              </ul>
            </li>
            <li>
              
              <a href="#"> Shop </a>
              <ul className="Dropdown">
                <li>
                  
                  <a href="#"> Item1 </a>
                </li>
                <li>
                  
                  <a href="#"> Item1 </a>
                </li>
                <li>
                  
                  <a href="#"> Item1 </a>
                </li>
                <li>
                  
                  <a href="#"> Item1 </a>
                </li>
              </ul>
            </li>
            <li>
              
              <a href="#"> About </a>
            </li>
            <li>
              
              <a href="#"> Contact </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
