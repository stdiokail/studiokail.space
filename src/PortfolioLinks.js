import { useState } from "react";
import { Link } from "react-router-dom";


export default function PortfolioLink(props) {
        const [hover, setHover] = useState(false);
        const onHover = () => {
                setHover(true);
        }
        const onExit = () => {
                setHover(false);
        }
        const staticClass = hover ? "static hidden" : "static" ;
        const dynamicClass = hover ? "dynamic" : "dynamic hidden" ;


    return (

            <div class = "webdev-container">
            <div class = "grid grid-cols-1 md:grid-cols-2">
                    <div class = "m-auto">
                <Link to = {props.linkname}>
                    <button class = "portfolio-button webdev-button"
                            onMouseEnter = {onHover}
                            onMouseLeave = {onExit}>
                            {props.text}
                    </button>
                </Link>
                    </div> 
                    <div class = "container moving-gif m-5"> 
                                    <img className = {staticClass} src={props.static} alt={"static-icon"} /> 
                                    <img className = {dynamicClass} src={props.dynamic} alt={"dynamic-icon"} style = {{resizeMode: "contain"}}/> 
                    </div>
                </div>
            </div>

        )
}
