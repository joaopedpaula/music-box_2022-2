import { useState, useEffect } from "react";

import api from "../api"; // importando a instância do Axios de "api.js"

import Navbar from "../components/Navbar";
import CardMusica from "../components/CardMusica";

function Musicas() {

    const [musicas, setMusicas] = useState( [] ); // criando estado de vetor para uma lista de músicas  

    /*
        - Utilizando a função "useEffect()", poderemos implementar alguma funcionalidade que será executada dinamicamente, baseado na alteração de estados, onde:
                * No primeiro parâmetro, o useEffect recebe uma função de callback ("função anônima" ou uma "arrow function") para ser executada
                * No segundo parâmetro, o useEffect recebe um vetor que possui quais estados ele deve observar, onde a cada alteração no estado observado, o efeito executará a função de callback passada no primeiro parâmetro

            - Uma "função anônima" é uma função que não possui um nome e será executada assim que for lida no script;
                * function (parametroRecebido) {  console.log("Recebi este parâmetro: " + parametroRecebido)  }

            - Uma "arrow function" (função de seta) é uma função anônima encurtada;
                * (parametroRecebido) => {  console.log("Recebi este parâmetro: " + parametroRecebido)  }
    */

    useEffect(() => { listar() }, [])

    function listar() {
        console.log("Requisição está sendo feita: ");

        api.get()                               // invocando o método "get" do axios utilizando a URL base instanciada em "api.js"
        .then(function (respostaObtida) {       // método get responde uma Promise que será resolvida, e quando obtiver uma resposta, cairá no "then" recebendo a resposta como parâmetro
            console.log(respostaObtida.data);   // exibindo o atributo "data", que possui o vetor de dados do objeto de resposta que foi recebido
            setMusicas(respostaObtida.data);    // utilizando o setter para alterar o valor do estado (useState) de "musicas"        
        })
        .catch((errorOcorrido) => {             // caso a requisição falhe, o "catch" pegará o erro, recebendo como parâmetro de uma função
            console.log(errorOcorrido)          // exibindo o erro que ocorreu na requisição
        });
    }


    return (
        <>
            {/* utilizando componente de Navbar */}
            <Navbar />

            <div className="container">
                <div className="filter">
                    <button className="btn">Adicionar</button>
                </div>
            </div>

            <div className="container">
                <div className="music-boxes">
                {/* 
                    exemplo de como passar objeto único como props utilizando JSON
                    <CardMusica musica={ {titulo: "In the End", artista: "Linkin Park", genero: "Rock", ano: "2000"} }/> 
                */}

                <CardMusica titulo="In the End" artista="Linkin Park" genero="Rock" ano="2000"/>
                <CardMusica titulo="Preciso me Encontrar" artista="Cartola" genero="MPB/samba" ano="1989"/>
                <CardMusica titulo="Pais e Filhos" artista="Legião Urbana" genero="Rock Nacional" ano="1989"/>
                
                {
                    /*
                        utilizando método ".map()" para iterar o vetor, usando cada objeto para renderizar um componente CardMusica;
                        "() => {}" é uma arrow function, onde retornamos um elemento "<CardMusica />" para cada item do vetor;
                        "musica" é o nome dado ao parâmetro que representa o objeto que está sendo iterado naquele momento;
                        "index" é o nome dado ao parâmetro que representa a posição do objeto dentro do vetor, gerado automaticamente pelo ".map()";
                        "musica.xpto" serve para acessar um atributo do objeto de música, para utilizá-lo como props no componente;
                    */
                       musicas.map((musica, index) => {
                        /* 
                            também podemos passar um objeto único como props utilizando JSON, como neste exemplo: 
                                <CardMusica key={index} musica={ {titulo: "In the End", artista: "Linkin Park", genero: "Rock", ano: "2000"} }/> 
                        */
                        return (    
                            <CardMusica 
                                key={musica.id} 
                                titulo={musica.titulo}
                                artista={musica.artista}
                                genero={musica.genero}
                                ano={musica.ano}
                            />
                        );
                    })
                }
                
                </div>
            </div>
        </>
    );
}

export default Musicas;