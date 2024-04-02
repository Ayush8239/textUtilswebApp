import React  from 'react'
import PropTypes from 'prop-types'
// import {Link} from 'react-router-dom';

export default function Navbar(props){


    return(
        <nav  className={`navbar navbar-expand-lg navbar-${props.mode}`}
        style = {{backgroundColor : (props.mode==='dark')?'#181818':'#e7e8e9'}}>
  <a className="navbar-brand" href="/">{props.title}</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item active">
        <a className="nav-link" href="/about" >{props.about}</a>
      </li>
    </ul>
    <div className="form-inline my-2 my-lg-0">
    <button onClick={props.toggleMode} className={` btn-${props.mode} btn-primary mx-3`}>{(props.mode==='dark')?"Light":"Dark"} Mode</button>
      {/* <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/> */}
      {/* <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button> */}
    </div>
  </div>
</nav>
    );
}

Navbar.prototype = {
    title: PropTypes.string,
    about : PropTypes.string
}
Navbar.defaultProps = {
    title: 'about',
    about : 'textUtils'
}