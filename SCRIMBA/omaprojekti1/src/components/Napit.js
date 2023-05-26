import React from "react"

// vaihtoehto sille, että kirjoitettaisiin
// loppuun export default Navbar
export default function Navbar()
{
    return(<div>
        <button type="button" className="email" onclick="location.href = 'mailto:jyri.lindroos@keuda.fi'"><img src= {require("../images/email.png")} className="icon"/>Sähköposti</button>
        <button type="button" className="linkedin" onclick="window.location.href='https://www.linkedin.com'"><img src= {require("../images/linkedin.png")} className="icon"/>LinkedIn</button> 
    </div>)
}