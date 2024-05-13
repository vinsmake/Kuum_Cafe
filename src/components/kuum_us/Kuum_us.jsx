import "./kuum_us.css"
import plate from  "../../../public/images/kuum/plate.png"
import { useScrollAnimation } from "../../hooks/useScrollAnimation";


export const Kuum_us = () => {

    const imgAnimation = useScrollAnimation('roll-in-right 2s ease-out both', 'roll-in-left 2s ease-out both');

    return (
    <>
        <div className="kuum__us">
            <div className="kuum__us__data">
            <div className="kuum__us__data__text">
                <h4 className="kuum__us__data__text--span">Nuestra historia</h4>
                <h2 className="kuum__us__data__text--title">Kuum Café</h2>
                <p className="kuum__us__data__text--text">Sucio es el nombre que se le da a las bebidas con leche cuando se le agrega un espresso, por ejemplo: chai sucio (chai latte con espresso) o matcha sucio (matcha latte con espresso). También es común utilizar el verbo “ensuciar” para pedir una dosis de café en las bebidas en lugar de usar el término “sucio”.</p>
            </div>
            <div className="kuum__us__data__image">
                <img src={plate} className="kuum__us__data__image--src" 
                title="Photo by Nathan Dumlao on Unsplash"
                ref={imgAnimation}
                />
            </div>
            </div>
        </div>
    </>
    )
}