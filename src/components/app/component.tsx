import * as React from 'react'
import * as cn from 'classnames'
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'
import { Player, Browser } from 'src/components'
import { Song, Queue } from 'src/models'
import { isSameSong, getCurrentSong, getSongID } from 'src/utils'
import './styles.scss'

export interface AppProps {}

const songs: Song[] = [
  {
    title: 'Nomad',
    artist: 'Tor',
  },
  {
    title: '',
    artist: 'there',
  },
]

type Menu = 'queue'

export const App: React.FC<AppProps> = () => {
  const [playing, setPlaying] = React.useState(false)
  const [queue, setQueue] = React.useState<Queue>()
  const [menuOpen, setMenu] = React.useState<boolean>(false)
  const onPrevClick = () => {}
  const onNextClick = () => {}
  const onPlayClick = () =>
    setPlaying(playing => {
      if (!queue || !queue.songs.length) {
        return false
      }
      return !playing
    })

  const onQueuePlay = (index: number) => {
    setQueue(queue => ({
      ...queue,
      index,
    }))
    setPlaying(true)
  }
  const onQueueAdd = (song: Song) => {
    if (!queue) {
      setQueue({
        index: 0,
        songs: [song],
      })
      setPlaying(true)
    } else {
      setQueue(queue => ({
        ...queue,
        songs: queue.songs.concat([song]),
      }))
    }
  }

  const curSong = getCurrentSong(queue)
  const queueSongs = queue ? queue.songs : []

  return (
    <div className="app">
      <div className="player-container">
        <Player
          curSong={curSong}
          playing={playing}
          onPrevClick={onPrevClick}
          onNextClick={onNextClick}
          onPlayClick={onPlayClick}
        >
          <div className="menu" onClick={() => setMenu(open => !open)}>
            <Icon icon="list-alt" />
            {` (${queueSongs.length})`}
          </div>
        </Player>
      </div>
      <div className="main">
        <div className="browser-container">
          <Browser songs={songs} onSongClick={song => onQueueAdd(song)} />
        </div>
        <div className={cn('menu-container', menuOpen && 'open')}>
          <Browser
            songs={queueSongs}
            onSongClick={(song, index) => onQueuePlay(index)}
          />
        </div>
      </div>
    </div>
  )
}
