
import "./kuum_brush.css"
import brush from "./brush.png"
import brushDesktop from "./brushDesktop.png"

export const Kuum_brush = () => {
    return (
        <>
            <div className="kuum_brush">
                <picture>
                    <source srcSet={brushDesktop} media="(min-width: 1024px)"/>
                    <img src={brush} className="kuum_brush--img" />
                </picture>
            </div>
        </>
    )
}