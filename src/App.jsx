import MeuComponent from "./components/component";
import Time from "./components/Time";

function App() {
    const dados = {
        nome: "Maria",
        sobrenome: "Souza",
        idade: 20
    }
    return (
            <div className="App">
                <Time  />
                <MeuComponent {...dados} />
            </div>
    )
}

export default App
