import { useState } from "react"; // importando useState
import api from "../api"; // importando instância do Axios configurada com a URL base

import imgEdit from "../assets/imagens/edit-icon.png" // importando recurso de imagem de edit (lápis) como uma variável
import imgDelete from "../assets/imagens/delete-icon.png" // importando recurso de imagem de delete (lixeira) como uma variável
import imgCapaPadrao from "../assets/imagens/capa.png"; // importando imagem de capa padrão

function CardMusica(props) {

    /*
        Utilizando operador ternário para definir o valor inicial da imagem de fundo
        O operador ternário funciona como um "if-else" de uma linha só: 
            
            condicao  ?  saida_se_true :  saida_se_false

        Abaixo, estamos criando uma constante "imagem", que é um objeto de configuração de estilo, com a propriedade "backgroundImage".
        Utilizando esse objeto, podemos alterar a imagem de fundo da div da classe "card-musica".
        E como imagem, estamos utilizando um operador ternário, onde como condição, usamos o "props.imagem":

            props.imagem ? props.imagem : imgCapaPadrao

        Portanto, validamos se "props.imagem" está vazio, onde:
            Caso contenha algum valor armazenado, retornamos o próprio "props.imagem" como valor.
            Mas caso esteja vazio, retornamos o valor do recurso "imgCapaPadrao".
    */

    const imagem = {
        backgroundImage: `url(${ props.imagem ? props.imagem : imgCapaPadrao })`
    }

    const [editando, setEditando] = useState(false);

    const [titulo, setTitulo] = useState(props.titulo);
    const [artista, setArtista] = useState(props.artista);
    const [genero, setGenero] = useState(props.genero);
    const [ano, setAno] = useState(props.ano);

    function atualizarMusica() {

        /* 
            Podemos utilizar um atalho para definir JSON caso os atributos do JSON possuam a mesma identificação de alguma variavel ou estado.
            Com isso, o próprio JS irá reconhecer que "em algum lugar do código existe algo identificado como 'titulo',
                no qual quero referenciar e adicionar o seu valor ao atributo 'titulo' do JSON que estou criando"

            const musicaAtual = {  titulo, artista, genero, ano }
        */
        const musicaAtual = {
            titulo: titulo,
            artista: artista,
            genero: genero,
            ano: ano,
        }

        const id = props.id;

        // enviando dados para API, passando qual será o id da música a ser alterada
        api.put(`${id}`, musicaAtual) 

        setEditando(false); // saindo do modo de edição
    }

    return (
        <>
            {/* ao utilizarmos {imgEdit} ou {imgDelete} no "src" de uma imagem, o recurso que importamos e armazenamos na variável será renderizado */}
            <div style={imagem} className="card-music">
                <div className="icons">
                    <img onClick={ () => setEditando(true) /* habilitando o modo de edição */ } src={imgEdit} alt="" /> 
                    <img src={imgDelete} alt="" />
                </div>
                <div className="info-music">
                    <p>
                        <strong className="card-title">Música: </strong>
                        <input 
                            disabled={!editando} // desabilitado se o modo de edição estiver desabilitado
                            className={editando ? "input-music-enable" : "input-music-disabled"} // desabilitado se o modo de edição estiver desabilitado
                            type="text" 
                            defaultValue={props.titulo}
                            onInput={(evento) => setTitulo(evento.target.value)}  // pegando valor do campo através do evento e armazenando o valor no estado "titulo"
                        />
                    </p>
                    <p>
                        <strong className="card-title">Artista: </strong>
                        <input 
                        disabled={!editando} // desabilitado se o modo de edição estiver desabilitado
                        className={editando ? "input-music-enable" : "input-music-disabled"} // desabilitado se o modo de edição estiver desabilitado
                        type="text" 
                        defaultValue={props.artista}
                        onInput={(evento) => setArtista(evento.target.value)} // pegando valor do campo através do evento e armazenando o valor no estado "artista"
                         />
                    </p>
                    <p>
                        <strong className="card-title">Gênero: </strong>
                        <input 
                        disabled={!editando} // desabilitado se o modo de edição estiver desabilitado
                        className={editando ? "input-music-enable" : "input-music-disabled"} // desabilitado se o modo de edição estiver desabilitado
                        type="text" 
                        defaultValue={props.genero}
                        onInput={(evento) => setGenero(evento.target.value)} // pegando valor do campo através do evento e armazenando o valor no estado "genero"
                         />
                    </p>
                    <p>
                        <strong className="card-title">Ano: </strong>
                        <input 
                        disabled={!editando} // desabilitado se o modo de edição estiver desabilitado
                        className={editando ? "input-music-enable" : "input-music-disabled"} // desabilitado se o modo de edição estiver desabilitado
                        type="text" 
                        defaultValue={props.ano}
                        onInput={(evento) => setAno(evento.target.value)} // pegando valor do campo através do evento e armazenando o valor no estado "ano"
                        />
                    </p>

                    <button 
                        onClick={atualizarMusica}
                        className={
                            editando 
                            ? "btn-salvar-enable" 
                            : "btn-salvar-disabled"
                        }>Salvar</button>
                </div>
            </
            div>
    {/* Acima, estamos utilizando as props recebidas como valor da input e precisamos utilizar o atributo "defaultValue", pois o "value" é um valor apenas para leitura, e não irá alterar o valor do campo ao digitar */}

        </>
    );
}

export default CardMusica;