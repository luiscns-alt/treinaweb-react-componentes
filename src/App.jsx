import React, { Component } from 'react';
import './App.css';

import ClickList from './components/ClickList';
import ClickListItem from './components/ClickListItem';
import MyVideo from './components/MyVideo';
import Time from './components/Time'
import { MyContext } from "./services/MyContext";

class App extends Component {

    constructor(props) {
        super(props);
        this.item1 = React.createRef();
        this.item2 = React.createRef();

        this.state = {
            selectedItem: this.item1,
            username: 'Luis Carlos'
        }

        this.toggleItem = this.toggleItem.bind(this);
    }

    toggleItem() {
        this.setState(({ selectedItem }) => {
            return {
                selectedItem: (selectedItem === this.item1 ? this.item2 : this.item1)
            }
        })
    }

    render() {
        return (
                <div className="App">
                    <div>
                        <ul>
                            <li ref={this.item1} />
                            <li ref={this.item2} />
                        </ul>
                        <Time container={this.state.selectedItem.current} />
                        <button onClick={this.toggleItem}>Toggle</button>
                    </div>

                    <MyContext.Provider value={this.state} >
                        <MyVideo src="https://app.coverr.co/s3/mp4/Albert-Dock.mp4" />
                        <ClickList>
                            <ClickListItem></ClickListItem>
                            <ClickListItem></ClickListItem>
                            <ClickListItem></ClickListItem>
                        </ClickList>
                    </MyContext.Provider>
                </div>
        );
    }
}

export default App;
