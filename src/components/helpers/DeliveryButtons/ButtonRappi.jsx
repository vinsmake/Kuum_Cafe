import "./deliveryButtons.css"
import logo from "./Rappi.png"

export const ButtonRappi = () => {
    return (
        <>
            <div className="delivery__button button--rappi">
                    <p>HACER PEDIDO EN</p>
                    <img src={logo} className="button--rappi--logo"/>
            </div>
        </>
    )
}