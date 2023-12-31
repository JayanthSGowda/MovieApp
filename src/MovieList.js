import {Component} from 'react';
import MovieCard from './MovieCard';

class MovieList extends Component {
    constructor(){
        super();
        this.state = {
            movies : [
                {
                  title: 'The Avengers',                  
                  plot:
                    "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.",
                  poster:
                    'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
                  rating: '8.0',            
                  price: 99,            
                  star: 0,
                  fav: false,
                  isInCart: false                  
                },
                {
                  title: 'The Dark Knight',                  
                  plot:
                    'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.',
                  poster:
                    'https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg',                  
                  rating: '9.0',            
                  price: 199,            
                  star: 0,            
                  fav: false,
                  isInCart: false                  
                },
                {
                  title: 'Iron Man',                 
                  plot:
                    'After being held captive in an Afghan cave, billionaire engineer Tony Stark creates a unique weaponized suit of armor to fight evil.',                  
                  poster:
                    'https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg',                  
                  rating: '7.9',            
                  price: 139,            
                  star: 0,            
                  fav: false,
                  isInCart: false                  
                }]
        }

        
    }
    handleInc = (movie) => {
        if(movie.star<5){
            const {movies} = this.state;
        const index = movies.indexOf(movie);
        movies[index].star+=.5;
        this.setState({movies});
        }
    }
    handleDec = (movie) => {
        if(movie.star>0){
            const {movies} = this.state;
        const index = movies.indexOf(movie);
        movies[index].star-=.5;
        this.setState({movies});
        }
    }
    handleFav = (e) => {
      const {movies} = this.state;
      const index = movies.indexOf(e);
      movies[index].fav = !movies[index].fav;
      this.setState({movies});
    }
    handleCart = (e) => {
      const {movies} = this.state;
      const index = movies.indexOf(e);
      movies[index].isInCart = !movies[index].isInCart;
      this.setState({movies});
    }
    render() {
        // const {title, plot, price, rating, stars, fav, inCart} = this.state;
        const {movies} = this.state;
        // const movieComponents = movies.map(movie => {
        //     return <MovieCard key={movie.title} movie={movie}/>
        // });
        return (
            <>
                {movies.map((movie)=>(
                    <MovieCard key={movie.title} movie={movie} 
                    removeStars={this.handleDec}
                    addStars={this.handleInc}
                    handleCart={this.handleCart}
                    handleFav={this.handleFav}/>))}
            </>
        )
    }
}
export default MovieList;