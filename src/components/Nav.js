import { NavLink } from "react-router-dom";

function Nav() {
      return (
                  <div className="Nav">
                        <div className="Nav-links">
                              <NavLink to="/poem-gram/" className={"Link"}>All poems</NavLink>
                              <NavLink to="/poem-gram/personal" className={"Link"}>Personal</NavLink>
                              <NavLink to="/poem-gram/liked" className={"Link"}>Liked</NavLink>

                        <NavLink to="/poem-gram/create" className={"Btn"}>Create</NavLink>
                        </div>
                  </div>
      );
}

export default Nav;
