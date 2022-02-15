import newlogo from './static/newlogo.svg'


export default function WedDev () {
    return (
        <div>
        <div class = "grid grid-cols-1">
            <div class = "logo">
            <img src={newlogo} alt={"logo"} style = {{height: 300}} class = "center"/> 
            </div>
        </div>

        <div class = "portfolio-description m-auto">
                <div class = "grid grid-cols-1">
                <p class = "portfolio-card-title center">COMING SOON</p> <br></br>
                </div>
            </div>
        </div>
    )
}