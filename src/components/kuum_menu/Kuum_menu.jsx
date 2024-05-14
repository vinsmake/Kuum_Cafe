import "./kuum_menu.css"
import { kuummenudata } from "./kuummenudata"


export const Kuum_menu = () => {

    const route = "./images/kuum/menu/"

    return (
        <>
            <div className="kuum__menu">
                <div className="kuum__menu__data">

                    {
                        kuummenudata.map(item => (
                            <div className="kuum__menu__data__item" key={item.title}>
                                <img src={`${route}${item.title}.jpg`}></img>
                                <h4>{item.title}</h4>
                                <p>{item.description}</p>
                            </div>
                        ))
                    }

                </div>
            </div>
        </>
    )
}