import "./kuum_menu.css"
import { kuum_menu } from "../../data"
import { ButtonUber } from "../helpers/DeliveryButtons/ButtonUber"
import { ButtonRappi } from "../helpers/DeliveryButtons/ButtonRappi"


export const Kuum_menu = () => {

    const route = "./images/kuum/menu/"

    return (
        <>
            <div className="kuum__menu">
                <div className="kuum__menu__text">
                    <p className="kuum__menu__text--title">Hay que pedir un café</p>
                    <p className="kuum__menu__text--text">Mucho café y brebajes relacionados</p>
                </div>
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
                    <a href="https://www.ubereats.com/store/kuum-cafe-ciudad-guzman/agUSKzQvUxa9A90JoJSJNw?diningMode=DELIVERY" target="_blank" rel="noopener noreferrer">
                    <ButtonUber/>
                    </a>
                    <a href="https://www.rappi.com.mx/restaurantes/1930170903-kuum-cafe" target="_blank" rel="noopener noreferrer">
                    <ButtonRappi/>
                    </a>
                </div>
            </div>
        </>
    )
}