import imagemEdit from "../assets/imagens/edit-icon.png" // importando recurso de imagem de edit (lápis) como uma variável
import imagemDelete from "../assets/imagens/delete-icon.png" // importando recurso de imagem de delete (lixeira) como uma variável

function CardMusica(props) {
    return (
        <>
            {/* ao utilizarmos {imagemEdit} ou {imagemDelete} no "src" de uma imagem, o recurso que importamos e armazenamos na variável será renderizado */}
            <div className="card-music">
                <div className="icons">
                    <img src={imagemEdit} alt="" />
                    <img src={imagemDelete} alt="" />
                </div>
                <div className="info-music">
                    <p>
                        <strong className="card-title">música: </strong>
                        <input className="input-music-enable" type="text" defaultValue={props.titulo} />
                    </p>
                    <p>
                        <strong className="card-title">artista: </strong>
                        <input className="input-music-enable" type="text" defaultValue={props.artista} />
                    </p>
                    <p>
                        <strong className="card-title">gênero: </strong>
                        <input className="input-music-enable" type="text" defaultValue={props.genero} />
                    </p>
                    <p>
                        <strong className="card-title">ano: </strong>
                        <input className="input-music-enable" type="text" defaultValue={props.ano} />
                    </p>
                    <button className="btn-salvar-enable">Salvar</button>
                </div>
            </div>
    {/* 
        acima, estamos utilizando as props recebidas como valor da input;
        precisamos utilizar o atributo "defaultValue", pois o "value" é um valor apenas para leitura, e não irá alterar o valor do campo ao digitar;
    */}

        </>
    );
}

export default CardMusica;