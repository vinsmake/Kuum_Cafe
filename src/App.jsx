import { Kuum_brush } from './components/kuum_brush/Kuum_brush'
import { Kuum_hero } from './components/kuum_hero/Kuum_hero'
import { Kuum_menu } from './components/kuum_menu/Kuum_menu'
import { Kuum_us } from './components/kuum_us/Kuum_us'
import './normalize.css'
import './styles.css'

export const App = () => {
  return (
  <>
    <Kuum_hero/>
    <Kuum_brush/>
    <Kuum_us/>
    <Kuum_brush/>
    <Kuum_menu/>
    <Kuum_brush/>

  </>
  )
}