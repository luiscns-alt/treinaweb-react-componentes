import ClickList from "./components/ClickList";
import ClickListItem from "./components/ClickListItem";
import MyVideo from "./components/MyVideo";

function App() {
    return (
            <div className="App">
                <MyVideo src="https://storage.coverr.co/videos/a1V2JYqeQW4tNzRy6KP902Gt00C2UscR8N?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBJZCI6Ijg3NjdFMzIzRjlGQzEzN0E4QTAyIiwiaWF0IjoxNjQ4NDAyNDYxfQ.9_LwN8aIGdextyEdDmmtj7MpH6YxgxIXteapLPqn33w" />
                <ClickList>
                    <ClickListItem></ClickListItem>
                    <ClickListItem></ClickListItem>
                    <ClickListItem></ClickListItem>
                </ClickList>
            </div>
    )
}

export default App
