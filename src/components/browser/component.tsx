import * as React from 'react'
import { Controls } from 'src/components'
import { Song, SongID } from 'src/models'
import { isSameSong } from 'src/utils'
import './styles.scss'

export interface BrowserProps {
  songs: Song[]
  onSongClick(song: Song, index: number): void
}

export const Browser: React.FC<BrowserProps> = ({ songs, onSongClick }) => (
  <div className="browser">
    {!songs.length && <p>it's empty</p>}
    {songs.map((song, i) => (
      <div key={i} className="song">
        <div className="control">
          <Controls.play onClick={() => onSongClick(song, i)} />
        </div>
        <div className="info">
          {song.title} - {song.artist}
        </div>
      </div>
    ))}
  </div>
)
