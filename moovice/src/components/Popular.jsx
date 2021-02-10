import React from 'react';

class Popular extends React.Component {

    constructor(props) {

        super(props);

        this.state = {
            movies: [],
        }

    }

  
    componentDidMount() {

        fetch('https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=4ba7a0b430074bec33494026c1ada710')
            .then(res => res.json())
            .then(json => {
                this.setState({
                    movies: json,
                })
            }).catch((err) => {
                console.log(err);
            });

    }

  
    render() {



        return (
            <div className="App">
                <ul>
                    {this.state.movies.map(movie => (
                        <li>
                            Title: {movie.title}
                        </li>
                    ))}
                </ul>
            </div>
        );

    }

}

export default Popular;