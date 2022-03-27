import ClickList from "./components/ClickList";

function App() {
    return (
            <div className="App">
                <ClickList number={123}>
                    <h1>Title</h1>
                    <div>Ola web developers!</div>
                </ClickList>
            </div>
    )
}

export default App
