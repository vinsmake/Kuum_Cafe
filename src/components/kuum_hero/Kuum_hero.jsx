import { kuum_hero } from '../../data'
import './kuum_hero.css'

export const Kuum_hero = () => {

    const {kicker, title, subtitle, btn} = kuum_hero

    return (
        <>
            <div className="kuum__hero">
                <div className='kuum__hero--data'>

                    <div className="kuum__hero--data--text">
                        <h2 className='kuum__hero--data--text--h2'>{kicker}</h2>
                        <h1 className='kuum__hero--data--text--h1'>{title}</h1>
                        <h3 className='kuum__hero--data--text--h3'>{subtitle}</h3>
                    </div>
{/*                     <a className='kuum__hero--data--a' href='#menu'>{btn}</a>
 */}                </div>
            </div>
        </>
    )
}