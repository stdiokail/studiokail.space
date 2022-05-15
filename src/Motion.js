import logobanner from './static/logo-banner.svg'
import youtuben from './static/youtuben.svg'
import geo1 from './imgportfolio/motion/geo1.gif'
import geo2 from './imgportfolio/motion/geo1.gif'
import wl1 from './imgportfolio/motion/wl1.gif'
import wl2 from './imgportfolio/motion/wl2.gif'
import wl3 from './imgportfolio/motion/wl3.gif'
import wl4 from './imgportfolio/motion/wl4.gif'
import liang from './imgportfolio/motion/liang.gif'
import geneai from './imgportfolio/motion/geneai.gif'
import aawebdev from './dynamic/aawebdev.gif'
import aamotion from './dynamic/aamotion.gif'
import aapackaging from './dynamic/aapackaging.gif'
import lucciolaui from './imgportfolio/motion/lucciolaui.gif'
import studiokail1 from './imgportfolio/motion/studiokail1.gif'
import studiokail2 from './imgportfolio/motion/studiokail2.gif'
import studiokail3 from './imgportfolio/motion/studiokail3.gif'
import ReactPlayer from 'react-player'
import { HashRouter as Router, Route, Switch, Link } from 'react-router-dom';



export default function Motion() {
    return (
  <div>
        <div class = "grid grid-cols-1">
            <div class = "logo">
            <img src={logobanner} alt={"logo"} style = {{height: 300}} class = "center"/> 
            </div>
        </div>
        <div class = "packaging-container">
        <div class = "portfolio-description m-auto">
                <div class = "grid grid-cols-2">
                <div><p class = "portfolio-card-title">WELL_LAB INTRO VIDEO</p> <br></br> </div>
                <div class = "ylink-container">  <img src={youtuben} alt={"youtube"} class = {"youtube-link"} onClick={(e) => {e.preventDefault(); window.open('https://www.youtube.com/watch?v=aNupxVXAqjo');}}/> </div>
                </div>
                <div class = "grid grid-cols-1">
                <p class = "portfolio-body"> An introductory video for UK-based organisation established to tackle burnout in the workplace, this video employs abstract shapes to represent people as well as illustrate well_lab's approach to combatting burnout. You can also check out the organisation <a href="https://www.well-lab.co.uk/" target="_blank"> here. </a></p>
                </div>
        </div>
        </div>

        <div class = "grid grid-cols-1 md:grid-cols-2 all-image">
                <img src={wl1} alt={"well-lab-motion"} style = {{padding: 50}}/>
                <img src={wl3} alt={"well-lab-motion"} style = {{padding: 50}}/>
                <img src={wl4} alt={"well-lab-motion"} style = {{padding: 50}}/>
                <img src={wl2} alt={"well-lab-motion"} style = {{padding: 50}}/>
            </div>


            <div class = "player-wrapper">
                <ReactPlayer url= 'https://www.youtube.com/watch?v=aNupxVXAqjo'
                width = '100%'
                height = '100%'
                />
            </div>



        <div class = "packaging-container">
        <div class = "portfolio-description m-auto">
                <div class = "grid grid-cols-2">
                <div><p class = "portfolio-card-title">GEOMETRIC SHORT</p> <br></br> </div>
                <div class = "ylink-container">  <img src={youtuben} alt={"youtube"} class = {"youtube-link"} onClick={(e) => {e.preventDefault(); window.open('https://www.youtube.com/watch?v=E1lDvWBNlKM');}}/> </div>
                </div>
                <div class = "grid grid-cols-1">
                <p class = "portfolio-body"> Employing simple, abstract shapes - this Motion Short acts as an opening to the studio Youtube channel. The video encompasses easy-listening background music with the focus being on smooth-transitioning geometric shapes following the beat of the music.</p>
                </div>
        </div>
        </div>
        <div class = "grid grid-cols-1 md:grid-cols-2 all-image">
                <img src={geo1} alt={"geometric-motion"} style = {{padding: 50}}/>
                <img src={geo2} alt={"geometric-motion"} style = {{padding: 50}}/>
            </div>


            <div class = "player-wrapper">
                <ReactPlayer url= 'https://www.youtube.com/watch?v=E1lDvWBNlKM'
                width = '100%'
                height = '100%'
                />
            </div>


        <div class = "packaging-container">
            <div class = "portfolio-description m-auto">
                <div class = "grid grid-cols-2">
                <div><p class = "portfolio-card-title">LIANG ANIMATED LOGO</p> <br></br> </div>
                <div class = "ylink-container">  <img src={youtuben} alt={"youtube"} class = {"youtube-link"} onClick={(e) => {e.preventDefault(); window.open('https://www.youtube.com/watch?v=ZOHWppl5sho');}}/> </div>
                </div>
                <div class = "grid grid-cols-1">
                <p class = "portfolio-body"> Animated logo for clothing brand LIANG. The Chinese symbol for LIANG (亮, meaning light) was used in the logo and the theme of light resonates throughout the animation in the form of bright orange bulbs. The fast forward symbol is displayed in the beginning the reiterate the tagline 'fashion forward'.</p>
                </div>
            </div>
            </div>

            <div class = "packaging-container">
                 <div class = "grid grid-cols-1 all-image">
                <img src={liang} alt={"liang-full"}/>
            </div>
            </div>
           
            <div class = "packaging-container">
        <div class = "portfolio-description m-auto">
                <div class = "grid grid-cols-2">
                <div><p class = "portfolio-card-title">GENE.AI ANIMATED LOGO</p> <br></br> </div>
                <div class = "ylink-container">  <img src={youtuben} alt={"youtube"} class = {"youtube-link"} onClick={(e) => {e.preventDefault(); window.open('https://www.youtube.com/watch?v=ZOHWppl5sho');}}/> </div>
                </div>
                <div class = "grid grid-cols-1">
                <p class = "portfolio-body"> Establishing red and blue as the primary colours for this logo (often used to symbolise blood in scientific drawings) - this logo is animated in a playful way using bouncy animations and whimsical typography.</p>
                </div>
        </div>
    </div>

        <div class = "packaging-container">
                 <div class = "grid grid-cols-1 all-image">
                <img src={geneai} alt={"geneai-full"}/>
            </div>
        </div>

    
    <div class = "packaging-container">
    <div class = "portfolio-description m-auto ">
                <div class = "grid grid-cols-1">
                <p class = "portfolio-card-title">CUSTOM ICONS </p> <br></br>
                </div>
                <div class = "grid grid-cols-1">
                <p class = "portfolio-body"> A set of three custom animated icons are showcased on the homepage of this website, maintaining the brand colours and image.</p>
                </div>
            </div>
            </div>

            <div class = "grid grid-cols-1 md:grid-cols-3 all-image">
            <img src={aamotion} alt={"motion-icon"} style = {{padding: 50}}></img>
            <img src={aapackaging} alt={"packaging-icon"} style = {{padding: 50}}></img>
            <img src={aawebdev} alt={"webdev-icon"} style = {{padding: 50}}></img>
            </div>

            <div class = "packaging-container">
            <div class = "portfolio-description m-auto ">
                <div class = "grid grid-cols-1">
                <p class = "portfolio-card-title">LUCCIOLA APP CONCEPT </p> <br></br>
                </div>
                <div class = "grid grid-cols-1">
                <p class = "portfolio-body"> As a full-user interface project, an animated demo was prepared to showcase the pasta delivery app service, Lucciola. This included a demo of the app's user interface, comprising of custom icon animations as well as the packaging design showcased in the packaging portfolio.</p>
                </div>
            </div>
            </div>

            <div class = "packaging-container">
            <div class = "grid grid-cols-1 all-image">
                <img src={lucciolaui} alt={"lucciola-full"} style = {{padding: 50}}/>
            </div>
            </div>  

            <div class = "packaging-container">
            <div class = "portfolio-description m-auto">
                <div class = "grid grid-cols-2">
                <div><p class = "portfolio-card-title"> STUDIO KA • IL : Motion Logo (Long Ver.) </p> <br></br> </div>
                <a class = "ylink-container" href = "https://www.youtube.com/watch?v=-pBEmgjzO8I">  
                <img src={youtuben} alt={"youtube"} class = {"youtube-link"}/> 
                </a>
                </div>
                <div class = "grid grid-cols-1">
                <p class = "portfolio-body"> Logo Reveal for STUDIO KA IL, utilising simple shapes in sharp movements in line with the choppy music, this video serves as an introduction to the studio Youtube page.</p>
                </div>
         </div>
         </div>

         <div class = "grid grid-cols-1 md:grid-cols-3 all-image">
            <img src={studiokail1} alt={"studiokail-preview"} style = {{padding: 50}}></img>
            <img src={studiokail2} alt={"studiokail-preview"} style = {{padding: 50}}></img>
            <img src={studiokail3} alt={"studiokail-preview"} style = {{padding: 50}}></img>
            </div>

            <div class = "player-wrapper">
                <ReactPlayer url= 'https://www.youtube.com/watch?v=-pBEmgjzO8I'
                width = '100%'
                height = '100%'
                />
            </div>


            <div class = "navigation-portfolios grid grid-cols-3" style = {{marginTop:-15}}>
           <div> <Link to ="./"> <button class = "pnav-button" style = {{marginRight: 30}}> HOME </button> </Link>  </div>
           <div> <Link to ="./packaging"> <button class = "pnav-button" style = {{marginRight: 30}}> PACKAGING </button> </Link>  </div>
           <div> <Link to ="./webdev"> <button class = "pnav-button" style = {{marginRight: 30}}> DEVELOPMENT </button> </Link>  </div>
           </div>

  </div>
 )
}