import "./deliveryButtons.css"
import logo from "./UberEats.png"

export const ButtonUber = () => {
    return (
        <>
            <div className="delivery__button button--uber">
                    <p className="button--text">MENU COMPLETO EN</p>
                    <img src={logo} className="button--logo"/>
            </div>
        </>
    )
}