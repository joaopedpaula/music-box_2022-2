import api from "../api";
import { useEffect } from "react";
import { useState } from "react";
import imgHalfCircles from "../assets/imagens/half-circles-pink-blue.png";
import Navbar from "../components/Navbar";

function Adicionar () {

    const [titulo, setTitulo] = useState("");
    const [artista, setArtista] = useState("");
    const [genero, setGenero] = useState("");
    const [ano, setAno] = useState("");
    const [imagem, setImagem] = useState("");

    useEffect(() => {
        console.log("RESUMO DOS ESTADOS: ")
        console.log("titulo: ", titulo)
        console.log("artista: ", artista)
        console.log("genero: ", genero)
        console.log("ano: ", ano)
        console.log("imagem: ", imagem)
    }, [titulo, artista, genero, ano, imagem]);
    // quando algum dos estados mudar, printa no console o valor de todos

    function adicionarMusica(evento) {

        evento.preventDefault();

        console.log("EVENTO: ", evento)


        /*  
            const novaMusicaComEstados = {
                titulo: titulo,
                artista,
                genero,
                ano,
                imagem,
            } 
        */
        
        const novaMusicaComEvento = {
            ano: evento.target.ipt_ano.value,           // acessando input "ipt_ano" do formulário através do atributo "name" para obter seu valor
            genero: evento.target.ipt_genero.value,     // acessando input "ipt_genero" do formulário através do atributo "name" para obter seu valor
            imagem: evento.target.ipt_imagem.value,     // acessando input "ipt_imagem" do formulário através do atributo "name" para obter seu valor
            titulo: evento.target.ipt_titulo.value,     // acessando input "ipt_titulo" do formulário através do atributo "name" para obter seu valor
            artista: evento.target.ipt_artista.value,   // acessando input "ipt_artista" do formulário através do atributo "name" para obter seu valor
        }

        console.log("NOVA MÚSICA:", novaMusicaComEvento);

        api.post("", novaMusicaComEvento )
        .then((res) => console.log("res: ", res))
        .catch((error) => console.error(error))
        
    }

    return (
        <>
            <Navbar />

            <div className="container">
                <div className="add-music">

                    <div className="formulario">

                        <h1>adicionar</h1>

                        <br/>

                        <form onSubmit={adicionarMusica}>
                            <label>Música: <br/>
                                <input 
                                    name="ipt_titulo"
                                    type="text"
                                    defaultValue={titulo} 
                                    onChange={(e) => {setTitulo(e.target.value)}} 
                                />
                            </label>
                            <br/>
                            <label>Artista: <br/>
                                <input 
                                    name="ipt_artista"
                                    type="text" 
                                    defaultValue={artista} 
                                    onChange={(e) => {setArtista(e.target.value)}} 
                                />
                            </label>
                            <br/>
                            <label>Genêro: <br/>
                                <input 
                                    name="ipt_genero"
                                    type="text" 
                                    defaultValue={genero} 
                                    onChange={(e) => {setGenero(e.target.value)}} 
                                />
                            </label>
                            <br/>
                            <label>Ano de Lançamento: <br/>
                                <input 
                                    name="ipt_ano"
                                    type="text" 
                                    defaultValue={ano} 
                                    onChange={(e) => {setAno(e.target.value)}} 
                                />
                            </label>
                            <br/>
                            <label> Imagem (url): <br/>
                                <input 
                                    name="ipt_imagem"
                                    type="text" 
                                    defaultValue={imagem} 
                                    onChange={(e) => {setImagem(e.target.value)}} 
                                />
                            </label>
                            <br/>
                            <button className="btn">Enviar</button>

                        </form>
                    </div>

                    <div className="img-lateral">
                        <img src={imgHalfCircles} alt="" />
                    </div>

                </div>
            </div>
        </>
    )
}

export default Adicionar;