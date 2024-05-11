import './kuum_hero.css'

export const Kuum_hero = () => {
    return (
        <>
            <div className="kuum__hero">
                <div className='kuum__hero--data'>

                    <div className="kuum__hero--data--text">
                        <h2 className='kuum__hero--data--text--h2'>Tu cafetería favorita</h2>
                        <h1 className='kuum__hero--data--text--h1'>Kuum Café</h1>
                        <h3 className='kuum__hero--data--text--h3'>Compartir un café es de las más puras maneras de amar</h3>
                    </div>
                    <a className='kuum__hero--data--a' href='#menu'>Ver menu</a>
                </div>
            </div>
        </>
    )
}