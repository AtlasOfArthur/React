import phone from "../images/phone-icon.png";
import mail from "../images/mail-icon.png";


export default function Kissa(props) {
    return (
        <div className="contact-card">
            <img src={props.img} />
            <h3>{props.name}</h3>
            <div className="info-group">
                <img src={phone}/>
                <p>{props.phone}</p>
            </div>
            <div className="info-group">
                <img src={mail} />
                <p>{props.email}</p>
            </div>
        </div>
    )
}

