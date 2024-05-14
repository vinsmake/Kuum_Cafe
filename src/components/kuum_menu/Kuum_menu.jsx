import "./kuum_menu.css"
import { kuummenudata } from "./kuummenudata"
import imagen from "../../../public/images/kuum/menu/Cappuccino.png"


export const Kuum_menu = () => {

    const route = "./images/kuum/menu/"

    return (
        <>
            <div className="kuum__menu">
                <div className="kuum__menu__data">

                    {
                        kuummenudata.map(item => (
                            <div className="kuum__menu__data__item" key={item.title}>
                                <img src={route + item.title + ".png"}
                                /* <img src={imagen} */className="kuum__menu__data__item--img"/>
                                <div className="kuum__menu__data__item--data">
                                <h4 className="kuum__menu__data__item--data--title">{item.title}</h4>
                                <p className="kuum__menu__data__item--data--p">{item.description}</p>
                                </div>
                            </div>
                        ))
                    }

                </div>
            </div>
        </>
    )
}