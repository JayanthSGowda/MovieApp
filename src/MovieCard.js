import {Component} from 'react';

class MovieCard extends Component {
    
    handleFav = () => {
        return this.setState({fav:!this.state.fav})
    }
    handleCart = () => {
        this.setState({inCart:!this.state.inCart})
    }
  render() {
    const {title, plot, price, rating, star,fav, isInCart,poster} = this.props.movie;
    
    return (

        <div className="main">
            <div className='movie-card'>
                <div className='left'>
                    <img alt='Poster' src={poster}/>
                
                </div>
                <div className='right'>
                    <div className='title'>{title}</div>
                    <div className='plot'>{plot}</div>
                    <div className='price'>{price}</div>
                    <div className='footer'>
                        <div className='rating'>{rating}</div>
                        <div className='star-dis'>
                            <img className='str-btn' src='https://cdn-icons-png.flaticon.com/128/1828/1828901.png'
                            onClick={()=>this.props.removeStars(this.props.movie)}
                            alt='decrease'/>
                            <img className='stars' src='https://cdn-icons-png.flaticon.com/128/1828/1828884.png' alt='star'/>
                            <img className='str-btn' 
                            src='https://cdn-icons-png.flaticon.com/128/3524/3524388.png'
                            onClick={()=>this.props.addStars(this.props.movie)}
                            alt='increase'/>
                            <span>  {star}</span> 
                        </div>  
                        {/* {fav?<button onClick={this.handleFav} className='favourite-btn'>Favourite</button>:<button onClick={this.handleFav} className='unfavourite-btn'>Remove</button>} */}
                        
                        <button onClick={()=>this.props.handleFav(this.props.movie)} className={fav?'unfavourite-btn':'favourite-btn'}>{fav?'Unfavourite':'Favourite'}</button>
                        <button onClick={()=>this.props.handleCart(this.props.movie)} className={isInCart?'unfavourite-btn':'cart-btn'}>{isInCart?'Remove':"Add to Cart"}</button>
                    </div>                
                </div>

            </div>
        </div>
        
    );
  }
}
export default MovieCard;