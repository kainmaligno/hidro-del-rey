import Acre from '../../images/galery/01acre.jpg'
import Aureum from '../../images/galery/02aureum.jpg'
import Berserker from '../../images/galery/03berserker.jpg'
import WitchBlood from '../../images/galery/04witchBlood.jpg'
import Pyment from '../../images/galery/05pyment.jpg'
import Camazotz from '../../images/galery/06camazotz.jpg'
import Caballeros from '../../images/galery/07caballerosNegros.jpg'
import Pumpkin from '../../images/galery/08pumpkin.jpg'
import Once from '../../images/galery/09onceEspeciada.jpg'
import STPatrick from '../../images/galery/10san_patricio.jpg'
import Hipocras from '../../images/galery/11hipocras.jpg'
import Clasica from '../../images/galery/12clasica.jpg'
const formatNumber=(num)=> num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
const thousands_separators  = (num) =>
{
  var num_parts = num.toString().split(".");
  num_parts[0] = num_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return num_parts.join(".");
}
const compoCards = [
  { 
    id:1,
    img:Clasica,
    title: "Hidromiel Clasica",
    text: "Fermento de miel con especias y nuestro mejorado metodo e inigualable sabor!",
    bottles: true,
    price24: 1080,
    price12:600,
    showButtons: true,
    categoria:"linea"
  },
  {
    id:2,
    img:Acre,
    title: "Hidromiel Acre",
    text:
      "fermento de miel de abeja 100% natural con durazno que posee un sabor agridulce",
    bottles: true,
    price24: 1080 ,
    price12:600,
    showButtons: true,
    categoria:"linea"
  },
  {
    id:3,
    img:Aureum,
    title: "Hidromiel Aureum",
    text: "La hidromiel Aureum es un fermento con toques frutales y aflorados.",
    bottles: true,
    price24: 1920,
    price12: 750,
    showButtons: true,
    categoria:"premium"
  },
  {
    id:4,
    img:Berserker,
    title: "Hidromiel Berserker (Clásica)",
    text:
      "Fermento de miel de abeja 100% natural, acompañado de la sensación burbujeante típica de una hidromiel joven",
    bottles: true,
    price24: 1080,
    price12:600,
    showButtons: true,
    categoria:"linea"
  },
  {
    id:5,
    img:WitchBlood,
    title: "Hidromiel Witch blood",
    text: "Hidromiel Witch blood con Zarza que posee un sabor agridulce",
    bottles: true,
    price24: 1080,
    price12:600,
    showButtons: true,
    categoria:"linea"
  },
  {
    id:6,
    img:Pyment,
    title: "Hidromiel Pyment",
    text: "Hidromiel Pyment que contiene un toque de jugo de uva ",
    bottles: true,
    price24: 1080,
    price12:600,
    showButtons: true,
    categoria:"linea"
  },
  {
    id:7,
    img:Camazotz,
    title: "Hidromiel Camazotz",
    text: "Hidromiel con Cacao, que posee un sabor agridulce",
    bottles: true,
    price24: 1080,
    price12:600,
    showButtons: true,
    categoria:"linea"
  },
  { 
    id:8,
    img:Caballeros,
    title: "Hidromiel Caballeros negros",
    text:
      "Hidromiel de Caballeros Negros es un fermento de miel de abeja 100% natural con Café",
    bottles: true,
    price24: 1080,
    price12:600,
    showButtons: true,
    categoria:"linea"
  },
  {
    id:9,
    img:Pumpkin,
    title: "Hidromiel Pumpkin ",
    text:
      "Posee un sabor agridulce acompañado de la sensación burbujeante típica de una hidromiel joven ",
    bottles: true,
    price24: 1080,
    price12:600,
    showButtons: true,
    categoria:"temporada"
  },
  { 
    id:10,
    img:Once,
    title: "Hidromiel Once (especiada)",
    text: " Hidromiel Once, elaborada con especias que le dan un toque único",
    bottles: true,
    price24: 1080,
    price12:600,
    showButtons: true,
    categoria:"linea"
  },
  {
    id:11,
    img:STPatrick,
    title: "Hidromiel San Patricio",
    text:
      "Fermento de abeja 100% natural que posee un sabor agridulce con temática de san patricio",
    bottles: true,
    price24: 1080,
    price12:600,
    showButtons: true,
    categoria:"temporada"
  },
  {
    id:12,
    img:Hipocras,
    title: "Hidromiel Hipocrás ",
    text: "Hidromiel con canela, clavo y especias que posee un sabor agridulce",
    bottles: true,
    price24: 1080,
    price12:600,
    showButtons: true,
    categoria:"temporada"
  }
 
]
export default compoCards
