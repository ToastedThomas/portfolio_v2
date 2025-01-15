import "./ArtTile.scss";

const ArtTile = ({image, onClick}) => {
  return (
    <div className="artTile" onClick={onClick}>
      <img src={image} />

    </div>
  )
}

export default ArtTile;