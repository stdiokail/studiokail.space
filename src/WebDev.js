import logobanner from './static/logo-banner.svg'
import { HashRouter as Router, Route, Switch, Link } from 'react-router-dom';
import figma from './static/figma.svg'
import weblink from './static/weblink.svg'
import webui from './imgportfolio/web/webui.png'
import mobileui from './imgportfolio/web/mobileui.png'
import ameliemobile from './imgportfolio/web/ameliemobile.png'
import ameliedesktop from './imgportfolio/web/ameliedesktop.png'


export default function WedDev () {
    return (
        <div>
        <div class = "grid grid-cols-1">
            <div class = "logo">
            <img src={logobanner} alt={"logo"} style = {{height: 300}} class = "center"/> 
            </div>
        </div>

        <div class = "grid grid-cols-1" >
            <div class = "web-portfolio-description m-auto">
                <div class = "grid grid-cols-5">
                <div class = "col-span-3"><p class = "web-portfolio-card-title" style = {{border:0}}> AMELIE WEBSITE</p> <br></br> </div>
                <div class = "ylink-container">  <img src={figma} alt={"figma"} class = {"web-link"} onClick={(e) => {e.preventDefault(); window.open('https://www.figma.com/file/vL7Q5d1ndNySvTmGLeiRwk/AMELIE?node-id=0%3A1');}}/> </div>
                <div class = "ylink-container">  <img src={weblink} alt={"weblink"} class = {"web-link"} onClick={(e) => {e.preventDefault(); window.open('https://amelie-660af3.webflow.io/');}}/> </div>
                </div>
                <div class = "grid grid-cols-1">
                <p class = "web-portfolio-body"> 
                This restaurant website template includes a landing page, a menu page, a locations page and a contact page. Please note that due to restrictions on page hosting imposed by Webflow, only the landing and menu pages were deployed. The following files are included in the showcase: <br/> <br/>
               <p class = "text-indented" > &#8226; Figma file for both the wireframe and coloured version <br/> <br/>
                &#8226; Interactive prototyping (available on Figma)  <br/> <br/>
                &#8226; Deployed website made using Webflow <br/> <br/>
                 </p>
                </p>
                </div>
            </div>
            </div>

            <div class = "grid grid-cols-1 md:grid-cols-2 all-image">
                <img src={ameliedesktop} alt={"mobile-ver"} style = {{padding: 50}}/>
                <img src={ameliemobile} alt={"web-ver"} style = {{padding: 50}}/>
         </div>


        <div class = "grid grid-cols-1" >
            <div class = "web-portfolio-description m-auto">
                <div class = "grid grid-cols-5">
                <div class = "col-span-3"><p class = "web-portfolio-card-title" style = {{border:0}}> WEBSITE TEMPLATE</p> <br></br> </div>
                <div class = "ylink-container">  <img src={figma} alt={"figma"} class = {"web-link"} onClick={(e) => {e.preventDefault(); window.open('https://www.figma.com/file/imNybNYHYMgh5Jgb9Fr79i/Scientific-Research-Firm-Landing-Page-Template---STUDIO-KA-IL?node-id=0%3A1');}}/> </div>
                <div class = "ylink-container">  <img src={weblink} alt={"weblink"} class = {"web-link"} onClick={(e) => {e.preventDefault(); window.open('https://stdiokail.github.io/reseach-website-template/#/');}}/> </div>
                </div>
                <div class = "grid grid-cols-1">
                <p class = "web-portfolio-body"> 
                This website template includes a landing page, 2 content pages, and a contact page. The deployed website is responsive and includes a slide-in menu viewable on small/medium screens. The following files are included in the showcase: <br/> <br/>
               <p class = "text-indented" > &#8226; Figma file for both the wireframe and coloured version <br/> <br/>
                &#8226; Interactive prototyping (available on Figma)  <br/> <br/>
                &#8226; Deployed website hosted on the studio's GitHub, showcasing the functionality of the website including responsiveness  <br/> <br/>
                &#8226; Source code (available on GitHub) <br/> <br/> </p>
                Website made using React and Tailwind and utilised predominantly Javascript, HTML and CSS. Logo and social icons were made using Adobe Illustrator. Illustrations made by Vikasuh.                 </p>
                </div>
            </div>
            </div>

            <div class = "grid grid-cols-1 md:grid-cols-2 all-image">
                <img src={mobileui} alt={"mobile-ver"} style = {{padding: 50}}/>
                <img src={webui} alt={"web-ver"} style = {{padding: 50}}/>
         </div>

            <div class = "navigation-portfolios grid grid-cols-3" style = {{marginTop:20}}>
           <div> <Link to ="./"> <button class = "pnav-button" style = {{marginRight: 30}}> HOME </button> </Link>  </div>
           <div> <Link to ="./packaging"> <button class = "pnav-button" style = {{marginRight: 30}}> PACKAGING </button> </Link>  </div>
           <div> <Link to ="./motion"> <button class = "pnav-button" style = {{marginRight: 30}}> MOTION </button> </Link>  </div>
           </div>

        </div>
    )
}