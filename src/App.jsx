import MeuComponent from "./components/component";

function App() {
    const dados = {
        nome: "Maria",
        sobrenome: "Souza",
        idade: 20
    }
    return (
            <div className="App">
                <MeuComponent {...dados} />
            </div>
    )
}

export default App
