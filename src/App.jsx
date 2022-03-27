import ClickList from "./components/ClickList";
import ClickListItem from "./components/ClickListItem";

function App() {
    return (
            <div className="App">
                <ClickList>
                    <ClickListItem></ClickListItem>
                    <ClickListItem></ClickListItem>
                    <ClickListItem></ClickListItem>
                </ClickList>
            </div>
    )
}

export default App
