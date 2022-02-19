import logobanner from './static/logo-banner.svg'
import behance from './static/behance.svg'
import youtube from './static/youtube.svg'
import dribbble from './static/dribbble.svg'
import instagram from './static/instagram.svg'
import motion from './static/motion.svg'
import packaging from './static/packaging.svg'
import webdev from './static/webdev.svg'
import aawebdev from './dynamic/aawebdev.gif'
import aamotion from './dynamic/aamotion.gif'
import aapackaging from './dynamic/aapackaging.gif'
import PortfolioLinks from './PortfolioLinks.js'
import { HashRouter as Router, Route, Switch, Link } from 'react-router-dom';


export default function App() {
    return (
<div class="grid grid-cols-1 md:grid-cols-2">
<div class = "rightside">  
    <div class= "logo-container grid grid-cols-1">
        <img src={logobanner} alt={"logo"}/> 
    </div>

    <div class = "description mx-12">
      <p> 
      Studio KA • IL is a one-woman run graphic design and web development studio based in London, United Kingdom. Founded in 2019, the studio now boasts an international client base ranging from small / medium business to large-scale artwork re-sellers. To view samples of my work, please use the portfolio links on this website or browse through any of my online showcases. Please do not hesitate to get in touch for any queries.        </p>
    </div>


    <div class = "social-grid grid grid-cols-4 m-auto">
        <button class = "social-button m-5" onClick={(e) => {e.preventDefault(); window.open('https://www.behance.net/ka-il');}}> <img src={behance} alt={"behance"}/> </button>
        <button class = "social-button m-5" onClick={(e) => {e.preventDefault(); window.open('https://www.youtube.com/channel/UC47P4gLm4Z3lWV_rBeal-mw');}}> <img src={youtube} alt={"youtube"}/> </button>
        <button class = "social-button m-5" onClick={(e) => {e.preventDefault(); window.open('https://dribbble.com/ka-il');}}> <img src={dribbble} alt={"dribbble"}/> </button>
        <button class = "social-button m-5" onClick={(e) => {e.preventDefault(); window.open('https://www.instagram.com/stdiokail/');}}> <img src={instagram} alt={"instagram"}/> </button>
    </div>
</div>  
<div class = "leftside">
  <div class = "portfolio-title">
    <p class = "portfolio-heading"> PORTFOLIOS </p>

  </div>
  <PortfolioLinks text = "PACKAGING" static = {packaging} dynamic = {aapackaging} linkname = {"./Packaging"}/>
  <PortfolioLinks text = "MOTION" static = {motion} dynamic = {aamotion} linkname = {"./Motion"}/>
  <PortfolioLinks text = "WEB DEVELOPMENT" static = {webdev} dynamic = {aawebdev} linkname = {"./WebDev"}/>
</div>
</div>
  )
} 