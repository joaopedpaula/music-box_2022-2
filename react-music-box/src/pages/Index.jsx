import { useNavigate } from "react-router-dom";
import imgWaves from "../assets/imagens/sound-waves-pink.png";

import Navbar from "../components/Navbar";

function Index () {

    const navegar = useNavigate(); // cria constante com instância do useNavigate()

    return (
        <>

            <Navbar />
            <div className="container index">
                <div className="index-content">
                    <div className="box-text-index">
                        <div className="info-index">
                            <p className="display">a música certa para o seu mood</p>
                            <p className="subtitle">organize suas músicas preferidas por categorias e aproveite cada batida</p>
                        </div>
                        <div className="img-index"></div>
                        <button onClick={() => navegar("/musicas")} className="btn">começar</button> {/* invocando instância do useNavigate() para navegar entre rotas */}
                        {/* const navegar passando o parâmetro "/musicas" para navegar até a rota parametrizada */}
                    </div>
                    <img src={imgWaves} alt="" className="index-img"/>
                </div>
            </div>
        </>
    )
}

export default Index;