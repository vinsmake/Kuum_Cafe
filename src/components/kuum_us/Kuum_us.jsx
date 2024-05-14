import "./kuum_us.css"
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import { kuum_us } from "../../data";


export const Kuum_us = () => {

    const {spinning_plate, kicker, title, text} = kuum_us

    const imgAnimation = useScrollAnimation('roll-in-right 2s ease-out both', 'roll-in-left 2s ease-out both');

    return (
    <>
        <div className="kuum__us">
            <div className="kuum__us__data">
            <div className="kuum__us__data__text">
                <h4 className="kuum__us__data__text--span">{kicker}</h4>
                <h2 className="kuum__us__data__text--title">{title}</h2>
                <p className="kuum__us__data__text--text">{text}</p>
                </div>
            <div className="kuum__us__data__image">
                <img src={spinning_plate} className="kuum__us__data__image--src" 
                title="Photo by Nathan Dumlao on Unsplash"
                ref={imgAnimation}
                />
            </div>
            </div>
        </div>
    </>
    )
}