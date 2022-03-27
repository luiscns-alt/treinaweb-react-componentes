import MeuComponent, { MeusComponent } from "./components/component";

function App() {
    const nome = 'Title';
    const Title = MeusComponent[nome];
    return (
            <div className="App">
                <MeuComponent />
                <MeusComponent.Title />
                <Title />
            </div>
    )
}

export default App
