import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import logo from './logo.png'   
export class  Navbar extends Component {

    render(){
        return(
        <div>
            <nav className="navbar fixed-top navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                <Link className="navbar-brand" to="/"><img src={logo} alt='logo' className='Stonks-Logo' style={{margin:"0px 10px 0px 0px"}}/>STONKS-NEWS</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-3">
                    <li className="nav-item">
                    <Link className="nav-link " aria-current="page" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/business">Business</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/entertainment">Entertainment</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/general">General</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/health">Health</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/science">Science</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/sports">Sports</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link " to="/technology">Technology</Link>
                    </li>


                </ul>
                <form className="d-flex" role="search">
                    <input className="form-control me-2 mx-5 input-box" type="search" placeholder="Search" aria-label="Search" style={{width:'70%'}}/>     
                    <button className="btn btn-outline-success" type="submit">Search</button>
                    {/* <svg className="info-icon" width="10%" height="25%" viewBox="-2.4 -2.4 28.80 28.80" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ff0000" transform="matrix(1, 0, 0, 1, 0, 0)rotate(0)" ><g id="SVGRepo_bgCarrier" stroke-width="0" transform="translate(1.1999999999999993,1.1999999999999993), scale(0.9)"><rect x="-2.4" y="-2.4" width="28.80" height="28.80" rx="14.4" fill="#000000" strokewidth="0"></rect></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="0.048"></g><g id="SVGRepo_iconCarrier"> <path d="M12 17V11" stroke="#ffffff" stroke-width="1.752" stroke-linecap="round"></path> <circle cx="1" cy="1" r="1" transform="matrix(1 0 0 -1 11 9)" fill="#ffffff"></circle> <path d="M7 3.33782C8.47087 2.48697 10.1786 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 10.1786 2.48697 8.47087 3.33782 7" stroke="#ffffff" stroke-width="1.752" stroke-linecap="round"></path> </g></svg> */}
                </form>
                </div>
                </div>
            </nav>
        </div>
        )
    }
}