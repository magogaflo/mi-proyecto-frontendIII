import React, { Component } from "react";
//import CardPreguntas from "./CardPreguntas";
const preguntas = [
  {
    id: "1",
    historia:
      "Un día como cualquiera te vas a dormir, lo siguiente que sabes es que te despertas en el medio de un bosque.",
    opciones: {
      a: "Pedir ayuda a los gritos.",
      b: "Mirar a mi alrededor.",
    },
  },
  {
    id: "2a",
    historia:
      "Instantáneamente entras en pánico por lo bizarro de la situación y gritas: -Aiiudaaaa. Nadie responde. Detrás de un árbol enfrente tuyo se asoma lo que parece ser una bola de pelo de 2 metros.",
    opciones: {
      a: "Te levantás y caminás lentamente hacia atrás.",
      b: "Te levantás y salís corriendo.",
    },
  },
  {
    id: "2b",
    historia:
      "Miras a tu alrededor y ves solo árboles, plantas y hongos, Detrás de un árbol enfrente tuyo se asoma lo que parece ser una bola de pelo de 2 metros.",
    opciones: {
      a: "Te levantás y caminás lentamente hacia atrás.",
      b: "Te levantás y salís corriendo.",
    },
  },
  {
    id: "3a",
    historia:
      "Lento y sin sacarle la mirada de encima te vas alejando de la cosa peluda. Ves que de golpe se mueve y empieza a correr hacia vos, no distinguis que es pero salis corriendo. Escuchas de golpe un grito proveniente de la cosa peluda: -Esperaaa!!",
    opciones: {
      a: "Le haces caso y esperas.",
      b: "Mira si voy a esperar, sigo corriendo.",
    },
  },
  {
    id: "3b",
    historia:
      "Al levantarte ves que se mueve y empieza a correr hacia vos, no distinguís que és pero salís corriendo pensando que puede ser un oso. Escuchas de golpe un grito proveniente de la cosa peluda: -Esperaaa!!",
    opciones: {
      a: "Le haces caso y esperas.",
      b: "Mira si voy a esperar, sigo corriendo.",
    },
  },
  {
    id: "4a",
    historia:
      "Paras de correr y al darte vuelta con algo de miedo ves que lo que te perseguía se detiene, te quedas sin palabras al ver que es un oso gigante con la cara de una señora muy maquillada que te dice; -Si querés llorar, llora pero estás en un sueño mi amor.",
    opciones: {
      a: "Me río en la cara del oso-señora.",
      b: "Me pongo a bailar.",
    },
  },
  {
    id: "4b",
    historia:
      "El miedo no deja tu cuerpo y hace bien así que seguís corriendo, sin darte cuenta te tropezas con una piedra y quedas de cara con lo que te perseguía, lo que ves es ridículo, un oso gigante con la cara de una señora muy maquillada que te dice; -Si querés llorar, llora pero estás en un sueño mi amor.",
    opciones: {
      a: "Me río en la cara del oso-señora.",
      b: "Me pongo a bailar.",
    },
  },
  {
    id: "5a",
    historia:
      "Te empezas a reir como nunca, y de una forma bastante molesta la verdad. El oso-señora se cansa de vos y te da una sólida bofetada en la cara con su brazo de 60kg que te tuerce el cuello y te despierta instantáneamente. FIN.",
    opciones: { a: "FIN.", b: "FIN." },
  },
  {
    id: "5b",
    historia:
      "Por alguna razón decidís ponerte a bailar, el oso-señora no entiende porqué, los animales del bosque no entienden porqué, yo que escribo esto no entiendo porqué, nadie entiende porqué. El oso-señora se cansa de tu bailecito y te da una sólida bofetada en la cara con su brazo de 60kg que te tuerce el cuello y te despierta instantáneamente. FIN.",
    opciones: { a: "FIN", b: "FIN" },
  },
];
let listas= [];
export default class ListaPreguntas extends Component {
  constructor(props) {
    super(props);
    this.state = {
      select:listas,
    };
  }

  componentWillUnmount(){
    alert("Componente desmontado")
}

  mostrar(data, option) {   
    this.state.select = [];
    let index = parseInt(data.id) + 1 + option;
    for (var i in preguntas) {
      if (index === preguntas[i].id) {
        this.state.select.push(preguntas[i]);
        break;
      }
    }

    this.setState({});
  }

  render() {
    if (listas.length <= 0) {
     listas.push(preguntas[0]);
    }
    const resultado = (
      <div >
        {this.state.select.map((pregunta) => {
          return (
            <div key={pregunta.id}>
              
              <p className="historia">{pregunta.historia}</p>
              <button className="botonA" onClick={() => this.mostrar(pregunta, "a")}>
                {pregunta.opciones.a = 'A' }
              </button>

              <button className="botonB" onClick={() => this.mostrar(pregunta, "b")}>
                {pregunta.opciones.b = 'B'}
              </button>
            </div>
          );
        })}
      </div>
    );
    return <div className="container">{resultado}</div>;
  }
}
