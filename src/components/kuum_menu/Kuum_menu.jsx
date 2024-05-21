import "./kuum_menu.css"
import { kuum_menu } from "../../data"
import { ButtonUber } from "../helpers/DeliveryButtons/ButtonUber"
import { ButtonRappi } from "../helpers/DeliveryButtons/ButtonRappi"


export const Kuum_menu = () => {

    const { menu, title, legend, link_uber, link_rappi } = kuum_menu;

    return (
        <>
            <div className="kuum__menu">
                
                <div className="kuum__menu__text">
                    <h1 className="kuum__menu__text--title">{title}</h1>
                    <p className="kuum__menu__text--text">{legend}</p>
                </div>


                <div className="kuum__menu__data">


                    {
                        menu.map(item => (
                            <div className="kuum__menu__data__item" key={item.title}>
                                <img src={item.img}
                                    className="kuum__menu__data__item--img" />
                                <div className="kuum__menu__data__item--data">
                                    <h4 className="kuum__menu__data__item--data--title">{item.title}</h4>
                                    <p className="kuum__menu__data__item--data--p">{item.description}</p>
                                </div>
                            </div>
                        ))
                    }

                </div>
                <div className="kuum__menu__buttons">
                    <a href={link_uber} target="_blank" rel="noopener noreferrer">
                        <ButtonUber />
                    </a>
                    <a href={link_rappi} target="_blank" rel="noopener noreferrer">
                        <ButtonRappi />
                    </a>
                </div>
            </div>
        </>
    )
}