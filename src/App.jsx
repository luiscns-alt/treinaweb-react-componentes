import MeuComponent, { MeusComponent } from "./components/component";

function App() {
    const nome = 'Title';
    const Title = MeusComponent[nome];
    return (
            <div className="App">
                <MeuComponent nome={'Luis Carlos'} />
                <MeusComponent.Title />
                <Title nome={'Luis'} />
            </div>
    )
}

export default App
