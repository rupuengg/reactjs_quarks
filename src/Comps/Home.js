import React, { Component } from 'react';

class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            date: new Date(),
            is_show: true
        };
    }

    componentDidMount() {
        this.timerId = setInterval(() => {
            this.tick();
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timerId)
    }

    tick = () => {
        this.setState({
            date: new Date()
        });
    }

    toggleDate = () => {
        this.setState({
            is_show: !this.state.is_show
        });
    }

    render() {
        return (
            <div>
                <h3>
                    {this.state.is_show && <strong>{this.state.date.toLocaleTimeString()}</strong>}
                    <br /><br /><br />
                    <button onClick={this.toggleDate}>{this.state.is_show ? 'Hide' : 'Show'}</button>
                </h3>
            </div>
        );
    }
}

export default Home;