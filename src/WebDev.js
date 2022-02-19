import logobanner from './static/logo-banner.svg'
import { HashRouter as Router, Route, Switch, Link } from 'react-router-dom';


export default function WedDev () {
    return (
        <div>
        <div class = "grid grid-cols-1">
            <div class = "logo">
            <img src={logobanner} alt={"logo"} style = {{height: 300}} class = "center"/> 
            </div>
        </div>

        <div class = "portfolio-description m-auto">
                <div class = "grid grid-cols-1">
                <p class = "portfolio-card-title center">COMING SOON</p> <br></br>
                </div>
            </div>

            <div class = "navigation-portfolios grid grid-cols-3" style = {{marginTop:20}}>
           <div> <Link to ="./"> <button class = "pnav-button" style = {{marginRight: 30}}> HOME </button> </Link>  </div>
           <div> <Link to ="./packaging"> <button class = "pnav-button" style = {{marginRight: 30}}> PACKAGING </button> </Link>  </div>
           <div> <Link to ="./motion"> <button class = "pnav-button" style = {{marginRight: 30}}> MOTION </button> </Link>  </div>
           </div>

        </div>
    )
}