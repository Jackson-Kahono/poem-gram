import { BrowserRouter, NavLink } from "react-router-dom";

function Nav() {
      return (
                  <div className="Nav">
                        <div className="Nav-links">
                              <NavLink to="/" className={"Link"}>All poems</NavLink>
                              <NavLink to="/personal" className={"Link"}>Personal</NavLink>
                              <NavLink to="/liked" className={"Link"}>Liked</NavLink>

                        <NavLink to="/create" className={"Btn"}>Create</NavLink>
                        </div>
                  </div>
      );
}

export default Nav;
