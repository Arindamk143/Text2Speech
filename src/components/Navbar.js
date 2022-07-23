import React from 'react'

export default function Navbar(props) {
    return (
        <nav className= {`navbar navbar-expand-lg bg-${props.mode} navbar-${props.mode}`}>
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Text2Speech</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#home">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#about">About Me</a>
                        </li>
                    </ul>
                    <div className="form-check form-switch">
                        <input onClick={props.toggleBar} className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                        <label style={{color:"red", fontWeight:"bold"}} className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.mode==="dark"?"Switch To Design Mode":"Switch To Normal Mode"}</label>
                    </div>
                </div>
            </div>
        </nav>
    )
}







