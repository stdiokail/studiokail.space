import newlogo from './static/newlogo.svg'
import youtuben from './static/youtuben.svg'
import geo1 from './imgportfolio/motion/geo1.gif'
import geo2 from './imgportfolio/motion/geo1.gif'
import liang from './imgportfolio/motion/liang.gif'
import geneai from './imgportfolio/motion/geneai.gif'
import aawebdev from './dynamic/aawebdev.gif'
import aamotion from './dynamic/aamotion.gif'
import aapackaging from './dynamic/aapackaging.gif'
import lucciolaui from './imgportfolio/motion/lucciolaui.gif'
import ReactPlayer from 'react-player'


export default function Motion() {
    return (
  <div>
        <div class = "grid grid-cols-1">
            <div class = "logo">
            <img src={newlogo} alt={"logo"} style = {{height: 300}} class = "center"/> 
            </div>
        </div>

        <div class = "portfolio-description m-auto">
                <div class = "grid grid-cols-2">
                <div><p class = "portfolio-card-title">GEOMETRIC SHORT</p> <br></br> </div>
                <div class = "ylink-container">  <img src={youtuben} alt={"youtube"} class = {"youtube-link"} onClick={(e) => {e.preventDefault(); window.open('https://www.youtube.com/watch?v=E1lDvWBNlKM');}}/> </div>
                </div>
                <div class = "grid grid-cols-1">
                <p class = "portfolio-body"> Employing simple, abstract shapes - this Motion Short acts as an opening to the studio Youtube channel. The video encompasses easy-listening background music with the focus being on smooth-transitioning geometric shapes following the beat of the music.</p>
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

<div class = "grid grid-cols-1 md:grid-cols-2 motion-container">
            <div class = "portfolio-description m-auto">
                <div class = "grid grid-cols-2">
                <div><p class = "portfolio-card-title">LIANG ANIMATED LOGO</p> <br></br> </div>
                <div class = "ylink-container">  <img src={youtuben} alt={"youtube"} class = {"youtube-link"} onClick={(e) => {e.preventDefault(); window.open('https://www.youtube.com/watch?v=ZOHWppl5sho');}}/> </div>
                </div>
                <div class = "grid grid-cols-1">
                <p class = "portfolio-body"> Animated logo for clothing brand LIANG. The Chinese symbol for LIANG (亮, meaning light) was used in the logo and the theme of light resonates throughout the animation in the form of bright orange bulbs. The fast forward symbol is displayed in the beginning the reiterate the tagline 'fashion forward'.</p>
                </div>
            </div>

            <div class = "packaging-container">
                 <div class = "grid grid-cols-1 all-image">
                <img src={liang} alt={"liang-full"}/>
            </div>
            </div>
            </div>

 <div class = "grid grid-cols-1 md:grid-cols-2 motion-container">
        <div class = "packaging-container">
                 <div class = "grid grid-cols-1 all-image">
                <img src={geneai} alt={"geneai-full"}/>
            </div>
        </div>

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

    
    <div class = "portfolio-description m-auto ">
                <div class = "grid grid-cols-1">
                <p class = "portfolio-card-title">CUSTOM ICONS </p> <br></br>
                </div>
                <div class = "grid grid-cols-1">
                <p class = "portfolio-body"> A set of three custom animated icons are showcased on the homepage of this website, maintaining the brand colours and image.</p>
                </div>
            </div>

            <div class = "grid grid-cols-1 md:grid-cols-3 all-image">
            <img src={aamotion} alt={"motion-icon"} style = {{padding: 50}}></img>
            <img src={aapackaging} alt={"packaging-icon"} style = {{padding: 50}}></img>
            <img src={aawebdev} alt={"webdev-icon"} style = {{padding: 50}}></img>
            </div>

            <div class = "portfolio-description m-auto ">
                <div class = "grid grid-cols-1">
                <p class = "portfolio-card-title">LUCCIOLA APP CONCEPT </p> <br></br>
                </div>
                <div class = "grid grid-cols-1">
                <p class = "portfolio-body"> As a full-user interface project, an animated demo was prepared to showcase the pasta delivery app service, Lucciola. This included a demo of the app's user interface, comprising of custom icon animations as well as the packaging design showcased in the packaging portfolio.</p>
                </div>
            </div>

            <div class = "packaging-container">
            <div class = "grid grid-cols-1 all-image">
                <img src={lucciolaui} alt={"lucciola-full"} style = {{padding: 50}}/>
            </div>
        </div>   
  </div>
 )
}