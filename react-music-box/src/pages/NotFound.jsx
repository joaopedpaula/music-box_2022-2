import { useNavigate } from "react-router-dom";
import imgTarget from "../assets/imagens/target-red.png"
import Navbar from "../components/Navbar";

function NotFound () {

    const navigate = useNavigate()

    return (
        <>

            <Navbar />

            <div className="container">
                <div className="add-music">

                    <div className="formulario">

                        <h1>404</h1>

                        <p className="subtitle">se perdeu? nada para ver por aqui...</p>
                        <button
                            onClick={
                                () => navigate(-1)      // leva até a última rota acessada
                                // () => navigate("/")  // leva até a index
                            }
                        className="btn">voltar</button>
                    </div>

                    <div className="img-lateral">
                        <img src={imgTarget} alt="" />

                    </div>

                </div>
            </div>
        </>
    )
}

export default NotFound;