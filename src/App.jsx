import MeuComponent from "./components/component";
import Time from "./components/Time";
import MyButton from "./components/MyButton";

function App() {
    const dados = {
        nome: "Maria",
        sobrenome: "Souza",
        idade: 20
    }
    return (
            <div className="App">
                <MyButton />
            </div>
    )
}

export default App
