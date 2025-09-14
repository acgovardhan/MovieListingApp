
const Movie = ({ movie: { Year, Poster, Title, Type } }) => {
  return (
    <div className="movie">
      <img
        src={Poster !== 'N/A' ? Poster : 'https://placehold.co/300x200/gray/white?text=N\/A&font=montserrat'}
        alt={Title}
      />

      <div className="movie-content">
        <p>{Year}</p>
        <span>{Type}</span>
        <h3>{Title}</h3>
      </div>
    </div>
  )
}

export default Movie
