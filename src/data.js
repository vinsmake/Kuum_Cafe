/*  HERO */
export const kuum_hero = {
    kicker: 'Tu cafetería favorita',
    title: 'Kuum Café',
    subtitle: 'Compartir un café es de las más puras maneras de amar',
    btn: 'Ver menu'
}

/*  US */
import spinning_plate from "../src/assets/images/kuum/us/spinning_plate.png"
export const kuum_us = {
    kicker: 'Nuestra historia',
    title: 'Kuum Café',
    text: 'Sucio es el nombre que se le da a las bebidas con leche cuando se le agrega un espresso, por ejemplo: chai sucio (chai latte con espresso) o matcha sucio (matcha latte con espresso). También es común utilizar el verbo “ensuciar” para pedir una dosis de café en las bebidas en lugar de usar el término “sucio”.',
    spinning_plate: spinning_plate
}

/*  MENU */
import espresso_sensillo from "../src/assets/images/kuum/menu/espresso_sencillo.png"
import americano_olla from "../src/assets/images/kuum/menu/americano_olla.png"
import flat_white from "../src/assets/images/kuum/menu/flat_white.png"
import cappuccino from "../src/assets/images/kuum/menu/cappuccino.png"
import moccha from "../src/assets/images/kuum/menu/moccha.png"
import dirty_chai from "../src/assets/images/kuum/menu/dirty_chai.png"
import chocolate_kuum from "../src/assets/images/kuum/menu/chocolate_kuum.png"
import matcha_latte from "../src/assets/images/kuum/menu/matcha_latte.png"
import iced_matcha_latte from "../src/assets/images/kuum/menu/iced_matcha_latte.png"
import spring_matcha from "../src/assets/images/kuum/menu/spring_matcha.png"
import koldbrew from "../src/assets/images/kuum/menu/koldbrew.png"
import carajillo_kuum from "../src/assets/images/kuum/menu/carajillo_kuum.png"
export const kuum_menu = {
    title: '¿Y si pedimos un café?',
    legend: 'Nuestros cafés y brebajes favoritos. ',
    link_uber: 'https://www.ubereats.com/store/kuum-cafe-ciudad-guzman/agUSKzQvUxa9A90JoJSJNw?diningMode=DELIVERY',
    link_rappi: 'https://www.rappi.com.mx/restaurantes/1930170903-kuum-cafe',
    menu: [
        {
            title: 'Espresso Sencillo',
            description: 'Shot sencillo de café.',
            img: espresso_sensillo
        },
        {
            title: 'Americano de Olla',
            description: 'Americano (con espresso doble) pero con un toquecito a café de olla.',
            img: americano_olla
        },
        {
            title: 'Flat White',
            description: 'Espresso doble y 150 ml de leche texturizada.',
            img: flat_white
        },
        {
            title: 'Cappuccino',
            description: 'Espresso doble, leche teturizada muy espumadita.',
            img: cappuccino
        },
        {
            title: 'Moccha',
            description: "Cappuccino con un pump de chocolate hershey's.",
            img: moccha
        },
        {
            title: 'Dirty Chai',
            description: 'Mezcla de especias elaborada artesanalmente, leche y espresso doble.',
            img: dirty_chai
        },
        {
            title: 'Chocolate Kuum',
            description: 'Chocolate rey amargo en agua y espresso doble.',
            img: chocolate_kuum
        },
        {
            title: 'Matcha Latte',
            description: 'Matcha con un toque de vainilla y leche.',
            img: matcha_latte
        },
        {
            title: 'Iced Matcha Latte',
            description: 'Matcha con un toque de vainilla, leche y mucho hielo.',
            img: iced_matcha_latte
        },
        {
            title: 'Spring Matcha',
            description: 'Sparkling water, zumo de limón, menta, matcha y vainilla con muuuucho hielo.',
            img: spring_matcha
        },
        {
            title: 'Koldbrew',
            description: 'Extracción en frío 36 hrs.',
            img: koldbrew
        },
        {
            title: 'Carajillo Kuum',
            description: 'Espresso doble, licor artesanal de hierbas y especias, jarabe de olla y koldbrew.',
            img: carajillo_kuum
        }
    ]
}

/* CLIENTS */
import profile1 from "../src/assets/images/kuum/clients/profile1.png"
import profile2 from "../src/assets/images/kuum/clients/profile2.png"
import profile3 from "../src/assets/images/kuum/clients/profile3.png"
import profile4 from "../src/assets/images/kuum/clients/profile4.png"
import profile5 from "../src/assets/images/kuum/clients/profile5.png"
export const kuum_clients =
    [
        {
            profile: 'Amante del café de especialidad',
            text: 'El Espresso Sencillo es simplemente espectacular. Es el shot perfecto para empezar el día con energía, sin duda uno de mis café de especialidad favoritos por su sabor intenso y bien balanceado.',
            image: profile1
        },
        {
            profile: 'Fan de las fusiones',
            text: 'El Americano de Olla es mi favorito. Me encanta cómo han fusionado el clásico americano con un toquecito de café de olla, creando un sabor único y auténtico que no encuentras en otros lugares.',
            image: profile2
        },
        {
            profile: 'Amante de las bebidas con leche',
            text: 'Soy un gran fan del Flat White. La combinación del espresso doble con la de leche texturizada es perfecta. La leche está espumada de tal manera que cada sorbo es suave y delicioso.',
            image: profile3
        },
        {
            profile: 'Entusiasta del chocolate',
            text: 'El Moccha es absolutamente divino. La mezcla de cappuccino con chocolate es la combinación perfecta para satisfacer mi antojo de algo dulce y cremoso. ¡Es como un abrazo en una taza!',
            image: profile4
        },
        {
            profile: 'Aficionado a las bebidas innovadoras',
            text: 'Cuando crees que probaste todo, aparece el Spring Matcha. Lograr combinar tantos ingredientes y seguir siendo refrescante es simplemente maravilloso. Es la opción perfecta para los días calurosos.',
            image: profile5
        },
    ]
