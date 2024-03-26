import "../styles/kisustyle.css";
import kissa1 from "../images/whiskerson.png";
import kissa2 from "../images/fluffy.png";
import kissa3 from "../images/felix.png";
import kissa4 from "../images/pumpkin.png";

const Kisut = () => {
    return (
        <div className="contacts">
            <div className="contact-card">
                <img src={kissa1} />
                <h3>Mr. Whiskerson</h3>
                <div className="info-group">
                    <img src="../images/phone-icon.png"/>
                    <p>(212) 555-1234</p>
                </div>
                <div className="infi-group">
                    <img src="../images/mail-icon.png" />
                    <p>mr.whiskers"catnip.meow</p>
                </div>
            </div>

            <div className="contact-card">
                <img src={kissa2} />
                <h3>Fluffykins</h3>
                <div className="info-group">
                    <img src="../images/phone-icon.png"/>
                    <p>(212) 555-2234</p>
                </div>
                <div className="infi-group">
                    <img src="../images/mail-icon.png" />
                    <p>fluffykins"catnip.meow</p>
                </div>
            </div>

            <div className="contact-card">
                <img src={kissa3} />
                <h3>Felix</h3>
                <div className="info-group">
                    <img src="../images/phone-icon.png"/>
                    <p>(212) 555-3334</p>
                </div>
                <div className="infi-group"></div>
                    <img src="../images/mail-icon.png" />
                    <p>felix"catnip.meow</p>
                <div className="infi-group"></div>
            </div>

            <div className="contact-card">
                <img src={kissa4} />
                <h3>Pumpkin</h3>
                <div className="info-group">
                    <img src="../images/phone-icon.png"/>
                    <p>(212) 555-4444</p>
                </div>
                <div className="infi-group">
                    <img src="../images/mail-icon.png" />
                    <p>pumpkin"catnip.meow</p>
                </div>
            </div>
        </div>
    )
}

export default Kisut;