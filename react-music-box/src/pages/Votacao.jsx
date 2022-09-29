import React from "react";

import Candidato from "../components/Candidato"; // importando componente Candidato

function Votacao() { // função que representa o componente <Votacao />, que será exportado ao final
    return (
        <> 
            <h1>VOTE NA SUA BATATOSA FAVORITA: </h1>

            <Candidato nome="Batata Frita" /> <br />
            <Candidato nome="Batata com Cebola" /> <br />
            <Candidato nome="Batata Assada" /> <br />
            <Candidato nome="Batata Rústica" /> <br />
            <Candidato nome="Batata Palha" /> <br />
        
        </>
    );  
}

export default Votacao; // exportando componente Votacao para ser usado em outros módulos