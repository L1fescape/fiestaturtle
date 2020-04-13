import * as React from 'react'
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'
import { Song } from 'src/models'
import './styles.scss'

type controls = 'next' | 'prev' | 'play'

interface ControlProps {
  playing?: boolean
  onClick(): void
}

export const Controls: { [key in controls]: React.FC<ControlProps> } = {
  next: ({ onClick }) => (
    <button className="next" onClick={onClick}>
      <Icon icon="step-forward" />
    </button>
  ),
  prev: ({ onClick }) => (
    <button className="prev" onClick={onClick}>
      <Icon icon="backward" />
    </button>
  ),
  play: ({ onClick, playing }) => (
    <button className="play" onClick={onClick}>
      <Icon icon={playing ? 'pause' : 'play'} />
    </button>
  ),
}

export interface PlayerProps {
  curSong?: Song
  playing: boolean
  onPrevClick(): void
  onNextClick(): void
  onPlayClick(): void
}

export const Player: React.FC<PlayerProps> = ({
  curSong,
  children,
  playing,
  onPrevClick,
  onNextClick,
  onPlayClick,
}) => (
  <div className="player">
    <div className="current-song">
      {'🎵'}
      {curSong && (
        <span className="title">
          {curSong.title} - {curSong.artist}
        </span>
      )}
    </div>
    <div className="controls">
      <Controls.prev onClick={onPrevClick} />
      <Controls.play playing={playing} onClick={onPlayClick} />
      <Controls.next onClick={onNextClick} />
    </div>
    <div className="meta">{children}</div>
  </div>
)
