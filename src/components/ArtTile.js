import "./ArtTile.scss";

const ArtTile = ({image, alt, onClick}) => {
  return (
    <div className="artTile" onClick={onClick}>
      <img src={image} alt={alt}/>

    </div>
  )
}

export default ArtTile;