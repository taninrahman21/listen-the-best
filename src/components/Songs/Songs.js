import Song from '../Song/Song';
import './Songs.css';

const Songs = ({songs, handleAddToCart}) => {

  return (
    <div>
      <h3>Select Today's Best</h3>
    <div className='song-container'>
      {
        songs.map(song => <Song
           song={song}
           key={song.id}
           handleAddToCart = {handleAddToCart}
           ></Song>)
      }
    </div>
    </div>
  );
};

export default Songs;