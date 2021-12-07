import React from 'react';

import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { removeFavorite } from '../actions/favoritesActions';
import { useParams, useHistory } from 'react-router-dom';



const FavoriteMovieList = (props) => {

    const { push } = useHistory();

    const favorites = props.favorites;
    console.log(favorites);

    const handleRemove = (id) => {
        props.removeFavorite(id);
        push("/movies");
    }
    
    return (<div className="col-xs savedContainer">
        <h5>Favorite Movies</h5>
        {props.displayFav &&
            favorites.map(movie=>{
                return <div key={movie.id}>
                    <Link className="btn btn-light savedButton" to={`/movies/${movie.id}`}>
                        {movie.title}
                        <Link to={"/movies"}>
                        <span onClick={()=>handleRemove(movie.id)}><span class="material-icons">remove_circle</span></span>
                        </Link>
                    </Link> 
                </div>
            })
        }
    </div>);
}


const mapStateToProps = (state) => {
    return({
        favorites: state.favR.favorites,
        displayFav: state.favR.displayFavorites
    })
}

const mapActionsToProps = {
    removeFavorite
}

export default connect(mapStateToProps, mapActionsToProps)(FavoriteMovieList);