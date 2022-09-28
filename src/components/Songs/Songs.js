import Song from '../Song/Song';
import './Songs.css';
import data from '../../songs.json';

const Songs = () => {
  return (
    <div>
      <h3>Select Todays Best</h3>
    <div className='song-container'>
    {
        data.map(song => <Song
           song={song}
           key={song.id}
           ></Song>)
      }
    </div>
    </div>
  );
};

export default Songs;