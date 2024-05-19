import "./deliveryButtons.css"
import logo from "./Rappi.png"

export const ButtonRappi = () => {
    return (
        <>
            <div className="delivery__button button--rappi">
                    <p className="button--text">MENU COMPLETO EN</p>
                    <img src={logo} className="button--logo"/>
            </div>
        </>
    )
}