import { useNavigate } from "react-router-dom";
import imgWaves from "../assets/imagens/sound-waves-pink.png";

function Index () {

    const navegar = useNavigate(); // cria constante com instância do useNavigate()

    return (
        <>
            <div class="container index">
                <div class="index-content">
                    <div class="box-text-index">
                        <div class="info-index">
                            <p class="display">a música certa para o seu mood</p>
                            <p class="subtitle">organize suas músicas preferidas por categorias e aproveite cada batida</p>
                        </div>
                        <div class="img-index"></div>
                        <button onClick={() => navegar("/musicas")} class="btn">começar</button> {/* invocando instância do useNavigate() para navegar entre rotas */}
                        {/* const navegar passando o parâmetro "/musicas" para navegar até a rota parametrizada */}
                    </div>
                    <img src={imgWaves} alt="" class="index-img"/>
                </div>
            </div>
        </>
    )
}

export default Index;