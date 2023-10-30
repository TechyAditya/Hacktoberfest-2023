import React from "react"

export default function Navbar(props){
    return(
        <nav className="navbar navbar-expand-lg bg-body-tertiary bg-dark"  data-bs-theme={props.mode} >
            <div className="container-fluid">
            <a className="navbar-brand" href="{null}">{props.title}</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-4 mb-lg-1">
                <li className="nav-item">
                <a className="nav-link" aria-current="page" href="{null}">Home</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="{null}">About-Us</a>
                </li>
            </ul>
            <div className={`form-check form-switch text-${props.mode==='dark'?"light":"dark"}`}>
            <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckChecked"  />
            <label className="form-check-label " htmlFor="flexSwitchCheckChecked">Dark Mode</label>
            </div>

            {/* <form className="d-flex " role="search">
                <input className="form-control me-2 ms-4" type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-outline-success" type="submit">Search</button>
            </form> */}
            </div>
        </div>
        </nav>
    )
}