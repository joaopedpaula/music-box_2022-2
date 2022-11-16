import axios from "axios"; // importando a biblioteca "axios"

// criando constante que possui uma instância do Axios, com uma configuração de URL base
const api = axios.create({
    baseURL: "https://6334c57fea0de5318a08be26.mockapi.io/musicas" // URL base para realizar as requisições
})

export default api; // exportando a instância pré-configurada do Axios para ser utilizada em outros módulos