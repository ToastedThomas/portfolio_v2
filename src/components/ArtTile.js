import "./ArtTile.scss";

const ArtTile = ({image}) => {
  return (
    <div className="artTile">
      <img src={image} />

    </div>
  )
}

export default ArtTile;