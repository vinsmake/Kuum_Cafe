import { kuum_hero } from '../../data'
import './kuum_hero.css'

export const Kuum_hero = () => {

    const {kicker, title, subtitle, btn} = kuum_hero

    return (
        <>
            <div className="kuum__hero">
                <div className='kuum__hero--data'>

                    <div className="kuum__hero--data--text">
                        <p className='kuum__hero--data--text--h2'>{kicker}</p>
                        <p className='kuum__hero--data--text--h1'>{title}</p>
                        <p className='kuum__hero--data--text--h3'>{subtitle}</p>
                    </div>
                    <a className='kuum__hero--data--a' href='#menu'>{btn}</a>
                </div>
            </div>
        </>
    )
}