import { BsSearch } from "react-icons/bs";
import { ImLocation } from "react-icons/im"
import { FaUserAlt } from "react-icons/fa"
import utilStyles from "../styles/utils.module.css"

export default function Navbar() {
  return (
      <>
    <div className='container'>
      <nav className="navbar navbar-light  justify-content-between">
        <a className="navbar-brand"><img src="/images/notai-logo.png" alt=""/></a>
        <form className="form-inline">
        {/* <ImLocation /> */}
        <input
           
            className="form-control mr-sm-2"
            type="search"
            placeholder="Comune Notaio"
            aria-label="Search"
          />
          {/* <FaUserAlt /> */}
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Cognome Notaio"
            aria-label="Search"
          />
          <button
            className="btn btn-outline-success bg-success my-2 my-sm-0"
            type="submit"
          >
            <BsSearch className={utilStyles.searchIcon} />
          </button>
        </form>
      </nav>
    </div>
   <hr/>
    </>    
  );
}
