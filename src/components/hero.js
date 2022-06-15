import { Link } from "react-router-dom";
const Hero = (props) => {
    console.log(props);
    return (  
        <div className="hero">
            
            <img className="photos"src={props.img} alt="more-views" />
                <div className="heron">
                        <div className="join">
                            <small className="count">{props.country}</small>
                            <button className="counti" onClick={()=>props.handle(props.longitude, props.latitude, props.id)}><small>{props.info}</small></button>
                        {/* <a href="www.googlemaps.com" className="counti"><small>{props.info}</small></a>  */}
                        </div>
                    <h1 className="loc">{props.location}</h1>
                    <b className="bold">{props.date}</b>
                    <Link to={`/details/${props.id}`} className="desc"><p>"see more"</p></Link>
                </div>
            
        </div>
    );
}
 
export default Hero;