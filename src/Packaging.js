import newlogo from './static/newlogo.svg'
import woodco1 from './imgportfolio/packaging/woodco1.png'
import woodco2 from './imgportfolio/packaging/woodco2.png'
import woodco3 from './imgportfolio/packaging/woodco3.png'
import lucciola1 from './imgportfolio/packaging/lucciola1.png'
import lucciola2 from './imgportfolio/packaging/lucciola2.png'
import lucciola3 from './imgportfolio/packaging/lucciola3.png'
import mimi2 from './imgportfolio/packaging/mimi2.png'
import mimi1 from './imgportfolio/packaging/mimi1.png'
import liang1 from './imgportfolio/packaging/liang1.png'
import liang2 from './imgportfolio/packaging/liang2.png'
import liang3 from './imgportfolio/packaging/liang3.png'
import no91 from './imgportfolio/packaging/no91.png'
import no92 from './imgportfolio/packaging/no92.png'



export default function Packaging() {
    return (
    <div>

        <div class = "grid grid-cols-1">
            <div class = "logo">
            <img src={newlogo} alt={"logo"} style = {{height: 300}} class = "center"/> 
            </div>
        </div>

        <div class = "packaging-container">

            <div class = "portfolio-description m-auto">
                <div class = "grid grid-cols-1">
                <p class = "portfolio-card-title">WOODCO</p> <br></br>
                </div>
                <div class = "grid grid-cols-1">
                <p class = "portfolio-body"> A set of 6 interior and exterior candle packaging designs made in collaboration with Hong Kong based candle-makers, WOODCO. During the initial stages of the project, it was decided that the packaging would be very minimally designed, with the focus being on a contrasting selection of colours and large, flat shapes.</p>
                </div>
            </div>
        </div>
        <div class = "packaging-container">
            <div class = "grid grid-cols-1 all-image">
                <img src={woodco1} alt={"woodco-full"} style = {{padding: 50}}/>
            </div>
        </div>
        <div class = "grid grid-cols-1 md:grid-cols-2 all-image">
                <img src={woodco2} alt={"woodco-full"} style = {{padding: 50}}/>
                <img src={woodco3} alt={"woodco-full"} style = {{padding: 50}}/>
            </div>

            <div class = "portfolio-description m-auto">
                <div class = "grid grid-cols-1">
                <p class = "portfolio-card-title">LUCCIOLA</p> <br></br>
                </div>
                <div class = "grid grid-cols-1">
                <p class = "portfolio-body"> A branding project for pasta delivery service, LUCCIOLA.  The focus lays on a sharp contrasts of colours and detailed hand-drawn illustrations. The logo and website were also designed in this project.</p>
                </div>
            </div>
            <div class = "packaging-container">
            <div class = "grid grid-cols-1 all-image">
                <img src={lucciola1} alt={"lucciola-full"} style = {{padding: 50}}/>
            </div>
           </div>
        <div class = "grid grid-cols-1 md:grid-cols-2 all-image">
                <img src={lucciola2} alt={"lucciola-full"} style = {{padding: 50}}/>
                <img src={lucciola3} alt={"lucciola-full"} style = {{padding: 50}}/>
            </div>


           <div class = "portfolio-description m-auto">
                <div class = "grid grid-cols-1">
                <p class = "portfolio-card-title">LIANG</p> <br></br>
                </div>
                <div class = "grid grid-cols-1">
                <p class = "portfolio-body"> A branding project for clothing brand LIANG. The Chinese symbol for LIANG (亮, meaning light) was used in the logo.  The project was intended to have a modern feel, with a sophisticated palette and minimal geometric elements. The project also included logo animation and box packaging.</p>
                </div>
            </div>

            <div class = "packaging-container">
            <div class = "grid grid-cols-1 all-image">
                <img src={liang1} alt={"liang-full"} style = {{padding: 50}}/>
            </div>
           </div>
        <div class = "grid grid-cols-1 md:grid-cols-2 all-image">
                <img src={liang2} alt={"liang-full"} style = {{padding: 50}}/>
                <img src={liang3} alt={"liang-full"} style = {{padding: 50}}/>
        </div>

        <div class = "portfolio-description m-auto">
                <div class = "grid grid-cols-1">
                <p class = "portfolio-card-title">NO.9 GRAPEFRUIT</p> <br></br>
                </div>
                <div class = "grid grid-cols-1">
                <p class = "portfolio-body"> Logo design and interior + exterior packaging artwork for candle branding project,  NO.9. The branding focused on a whimsical feel and was complemented by bright, fun colours and simplistic illustrations.</p>
                </div>
            </div>

            <div class = "packaging-container">
            <div class = "grid grid-cols-1 all-image">
                <img src={no91} alt={"no9-full"} style = {{padding: 50}}/>
            </div>
           </div>
           <div class = "packaging-container">
            <div class = "grid grid-cols-1 all-image">
                <img src={no92} alt={"no9-full"} style = {{padding: 50}}/>
            </div>
           </div>

    </div>    
    )
} 