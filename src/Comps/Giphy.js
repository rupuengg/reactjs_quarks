import React, { Component } from 'react';

const API_KEY = 'GgXqUe6QV4Ipwt8SHKFMFVAd4vmKQH8P';
const LIMIT = 5;
const API_URL = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&limit=${LIMIT}&offset=0&rating=G&lang=en`;

class Giphy extends Component {
    constructor(props) {
        super(props);

        this.state = {
            search_term: "test",
            results: []
        }
    }

    handleChange = (e) => {
        this.setState({
            search_term: this.search.value
        }, () => {
            if (this.state.search_term && this.state.search_term.length > 1) {
                if (this.state.search_term.length % 2 === 0) {
                    this.getList()
                }
            }
        })
    }

    getList = () => {
        fetch(`${API_URL}&q=${this.state.search_term}`)
            .then((response) => {
                if (response.status !== 200) {
                    throw new Error("There are some error");
                }

                response.json().then((res) => {
                    this.setState({
                        results: res.data
                    })
                });
            })
            .catch((err) => {
                console.log(err);
            })
    }

    componentDidMount() {
        this.getList()
    }

    render() {
        const results = this.state.results.map((ele) =>
            <li key={ele.id}>
                {ele.title}
            </li>
        );

        return (
            <div className="Giphy-box">
                <div className="Search">
                    <input name="search" ref={input => this.search = input} autoComplete="off" placeholder="Search for..." onChange={this.handleChange} />
                </div>
                <div className="Results">
                    <p>Search for "{this.state.search_term}"</p>
                    <ul>{results}</ul>
                </div>
            </div>
        );
    }
}

export default Giphy;