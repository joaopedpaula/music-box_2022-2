import imagemLogo from "../assets/imagens/logo-verde.png"; // importando recurso de imagem para logo como uma variável
import imagemAvatar from "../assets/imagens/avatar.png"; // importando recurso de imagem para avatar como uma variável

function Navbar() {
    return (
        <>
        {/* ao utilizarmos {imagemLogo} ou {imagemAvatar} no "src" de uma imagem, o recurso que importamos e armazenamos na variável será renderizado */}
        <nav>
            <div className="container">
                <img src={imagemLogo} alt="Logo" className="logo" />  
                <img src={imagemAvatar} alt="Avatar" className="avatar" />
            </div>
        </nav>
        </>
    );
}
    
export default Navbar;