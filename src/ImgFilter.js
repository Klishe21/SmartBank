import alimentacion from "../src/assets/images/alimentacion.svg"
import salud from "../src/assets/images/salud.svg"
import transporte from "../src/assets/images/transporte.svg"
import utilidades from "../src/assets/images/utilidades.svg"
import otros from "../src/assets/images/otros.svg"
import { Icono, IconoTema } from "./Components/UI"

export default (type) => {
    const Img = {
        Restaurante: <IconoTema src={alimentacion} alt="restaurant"/>,
        Salud: <IconoTema src={salud} alt="salud"/>,
        Transporte: <IconoTema src={transporte} alt="transporte"/>,
        Utilidades: <IconoTema src={utilidades} alt="utilidades"/>,
        default: <IconoTema src={otros} alt="otros"/>
    };
    return Img[type] || Img["default"]
}