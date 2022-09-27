/* 
    Um arquivo JSX funciona exatamente como um arquivo JS;
    A única diferença, é que no arquivo JSX, o VSCode irá sugerir algumas sintaxes próprias para JSX;
    Exemplo:
        Ao digitar "div" no retorno da função, o VSCode irá sugerir a tag "<div></div>", então basta apertar enter para completar;

*/

const root = document.getElementById('root'); // referenciando o elemento <div id="root"></div>, identificado como "root" no arquivo index.html

/* 
    criando função "Candidato" que retorna um bloco com um elemento "h1" que usa a props "nome", um "h2" com o total de votos do Candidato e um botão para votar, onde: 

        Candidato - nome da função, deve ser identificada em PascalCase para que reconheça a sintaxe de componentes React;
        (props) - indica que a função receberá um objeto de parâmetro/argumento dinâmico, que por convenção, é nomeado de "props" (propriedades);
        return () - indica o retorno da função, normalmente é um trecho JSX (sintaxe HTML dentro do código JS);
        <> </> - representam um React.Fragment, que é um elemento que serve para englobar outras tags, sem aplicar nenhuma regra adicional (o retorno deve conter somente 1 elemento);
        { xpto } - as chaves indicam que utilizaremos um JS dentro do fragmento JSX, onde conseguimos interpolar valores (funciona como o `${ xpto }` para interpolar no JS vanilla)
*/

function Candidato(props) {
    /*
        Não podemos utilizar variáveis, pois elas não são observadas pelo gerenciador de estados do React;
        Caso utilizemos uma variável, ela só será renderizada no componente quando o componente for criado/montado;
        Após a montagem do componente, caso a variável seja atualizada, ela não irá alterar o conteúdo na página (não irá renderizar de novo), por mais que seu valor já esteja atualizado;
        
            var votos = 0;
    */

    const [votos, setVotos] = React.useState(0);  // Precisamos criar um State (estado) para que o React consiga gerenciar o valor daquele estado;

    function votar() { // uma função dentro de um componente pode ser utilizada normalmente em qualquer lugar do componente (como um método privado de uma classe Java);

        setVotos(votos + 1); // utilizando o setter "setVotos" useState para alterar o valor do estado de "votos";

    }

    // O "return" é fundamental para os componentes React, uma vez que irão retornar o fragmento JSX com os elementos que deverão ser renderizados;
    return (
        <>
            <h1>{props.nome}</h1>
            <h2>Votos: {votos}</h2>
            <button onClick={votar}>Votar</button>

        </>
    );
}

/*
    Criando funcao 'Votacao' que retorna diversos componentes 'Candidato' (função criada acima):
        <> </> - representam um React.Fragment, que é um elemento que serve para englobar outras tags, sem aplicar nenhuma regra adicional (o retorno deve conter somente 1 elemento);
        <Candidato /> - serve para criar uma instância do componente Candidato() declarado acima, que retornará o código JSX e será interpretado;
        nome="" - é um atributo que ao ser adicionado ao componente, indica que ele utilizará props/parâmetros (neste caso, estou usando o atributo "nome", que será usado no componente Candidato através da sintaxe "props.nome");
*/
function Votacao() {
    return (
        <> 
            <h1>VOTE NA SUA BATATOSA FAVORITA: </h1>

            <Candidato nome="Batata Frita" /> <br /> {/* invocando o componente Candidato, passando como parâmetro o título "Batata Frita" */}
            <Candidato nome="Batata com Cebola" /> <br /> {/* invocando o componente Candidato, passando como parâmetro o título "Batata com Cebola" */} 
            <Candidato nome="Batata Assada" /> <br /> {/* invocando o componente Candidato, passando como parâmetro o título "Batata Assada" */}
            <Candidato nome="Batata Rústica" /> <br /> {/* invocando o componente Candidato, passando como parâmetro o título "Batata Rústica" */}
            <Candidato nome="Batata Palha" /> <br /> {/* invocando o componente Candidato, passando como parâmetro o título "Batata Palha" */}
        
        </>
    );
}

/* 
    Utilizando a biblioteca ReactDOM para:
        - Criar uma raíz no elemento HTML identificado pelo id "root";
        - Renderizar algum componente dentro daquele elemento enraízado;
    
    Neste caso, renderizará o componente '<Votacao />' dentro da '<div id="root"></div>' do arquivo index.html) 
*/
ReactDOM.createRoot(root).render(<Votacao />);