import "./kuum_menu.css"
import { kuum_menu } from "../../data"
import { ButtonUber } from "../helpers/DeliveryButtons/ButtonUber"
import { ButtonRappi } from "../helpers/DeliveryButtons/ButtonRappi"


export const Kuum_menu = () => {

    const route = "./images/kuum/menu/"

    return (
        <>
            <div className="kuum__menu">
                <div className="kuum__menu__data">

                    {
                        kuum_menu.map(item => (
                            <div className="kuum__menu__data__item" key={item.title}>
                                <img src={item.img}
                                /* <img src={imagen} */className="kuum__menu__data__item--img"/>
                                <div className="kuum__menu__data__item--data">
                                <h4 className="kuum__menu__data__item--data--title">{item.title}</h4>
                                <p className="kuum__menu__data__item--data--p">{item.description}</p>
                                </div>
                            </div>
                        ))
                    }

                </div>
                <div className="kuum__menu__buttons">
                    <ButtonUber/>
                    <ButtonRappi/>
                </div>
            </div>
        </>
    )
}