import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'


// export default function Navbar(props) {
//     const handleOnChange = (event) =>{
//         // console.log("On change");
//         props.toggleModeColor(event.target.value)
//     }

//     return (
//         <nav className= {`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
//         <div className="container-fluid">
//           <Link className="navbar-brand" to="/"><b>{props.title}</b></Link>
//           <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//             <span className="navbar-toggler-icon"></span>
//           </button>
//           <div className="collapse navbar-collapse" id="navbarSupportedContent">
//             <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//               <li className="nav-item">
//                 <Link className="nav-link active" aria-current="page" to="/">Home</Link>
//               </li>
//               <li className="nav-item">
//                 <Link className="nav-link" to="/about">{props.aboutText}</Link>
//               </li>
//             </ul>

//             <form className="d-flex">
//               <input className="form-control me-2" onChange={handleOnChange} type="search" placeholder="Darkmode color" aria-label="Search"/>
//             </form>
            

//             <div className= {`form-check form-switch text-${props.mode==='light'?'dark':'light'}`} >
//             <input className="form-check-input" onClick={props.toggleMode}type="checkbox" role="switch" id="flexSwitchCheckDefault" />
//             <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Dark Mode</label>
//             </div>
            
//           </div>
//         </div>
//       </nav>
//     )
// }



export default function Navbar(props) {
  const handleOnChange = (event) =>{
      // console.log("On change");
      props.toggleModeColor(event.target.value)
  }

  return (
      <nav className= {`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
        <a className="navbar-brand" href="#"><b>{props.title}</b></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            {/* <li className="nav-item">
              <a className="nav-link" href="/about">{props.aboutText}</a>
            </li> */}
          </ul>

          {/* <form className="d-flex">
            <input className="form-control me-2" onChange={handleOnChange} type="search" placeholder="Darkmode color" aria-label="Search"/>
          </form> */}
          

          <div className= {`form-check form-switch text-${props.mode==='light'?'dark':'light'}`} >
          <input className="form-check-input" onClick={props.toggleMode}type="checkbox" role="switch" id="flexSwitchCheckDefault" />
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Dark Mode</label>
          </div>
          
        </div>
      </div>
    </nav>
  )
}






Navbar.propTypes = {
    title : PropTypes.string,
    aboutText: PropTypes.string
}

Navbar.defaultProps = {
    title : "TextUtils",
    aboutText: "About"
}