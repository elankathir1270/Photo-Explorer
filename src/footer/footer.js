import {React} from "react"
import "./footer.css"

const Footer = () =>{


    return(
        <div className="footerBody">
            <div className="footerLogo">
                <h1>PHOTOS <br />EXPLORER</h1>
            </div>
            <div className="contact-container">
            
            <div className="foot-search">
            <a className="search-link" href="#result">Search</a>
            </div>
                
                <div className="contact">Contact <br />
                    <div className="details">

                        Contact: 9688854265 <br />
                        {/* Mail: elankathirskr92@gmail.com <br /> */}
                        Git Id: elankathir1270
                    </div>
                </div>
                
            </div>

        </div>
    )

}
export default Footer;