import { useEffect, useState } from "react";

import api from "../api"; // importando a instância do Axios de "api.js"

function Musicas() {

    const [musicas, setMusicas] = useState( [] ); // criando estado de vetor para uma lista de músicas  

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
            <button onClick={listar}>Listar Músicas</button>

            {
                // percorrendo o vetor de músicas, onde para cada objeto, retorna um elemento div que usa os atributos daquele objeto de música (id e titulo)
                // ao utilizar um vetor para criar objetos com o ".map()" devemos indicar qual será a chave (key) do elemento (que deve ser única), afim de identificar o elemento
                musicas.map((musica) => (
                    <div key={musica.id}>
                        { musica.titulo }
                    </div>
                ))
            }
            {/* 

                Documentação do ".map()": 
                    - https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/map


                Por padrão, o React não consegue renderizar listas ou objetos, por isso precisamos iterá-los a fim de criar um elemento para ser renderizado;
                "map()" é uma função nativa do JS, que serve para percorrer um vetor e devolver um novo vetor ao final das iterações;  
                Utilizando o "musicas.map", estamos iterando cada música do estado "musicas";
                A cada iteração, estamos utilizando o parâmetro "musica" (qualquer nome), que representa o próprio objeto de "musica" que está sendo iterado naquele momento;
                Com uma função de callback ("arrow function" ou "função anônima"), podemos retornar um novo elemento JSX no lugar do objeto "musica" que estamos iterando no momento, para renderizá-lo na tela;

                Exemplos:
                    [1, 2, 3, 4].map( function (numero) {
                        return ( <div>Eu sou o número {numero}</div> );
                    })
                    
                    - No exemplo acima, temos um vetor com 4 posições que será iterado;
                    - Para cada item do vetor, o ".map()" retornará uma div na função anônima usada como callback;
                    - O parâmetro "numero" representa o item do vetor que está sendo iterado no momento, e será utilizado no corpo da div para interpolar seu valor e exibir o número;
            */}
        </>
    );
}

export default Musicas;