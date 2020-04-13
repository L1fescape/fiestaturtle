import { Song, Queue } from 'src/models'

export function getSongID(song: Song): string {
  return btoa(`${song.artist}${song.title}`)
}

export function isSameSong(songA?: Song, songB?: Song) {
  if (!songA || !songB) {
    return false
  }
  return getSongID(songA) === getSongID(songB)
}

export function getCurrentSong(queue: Queue): Song | undefined {
  if (!queue || typeof queue.index === 'undefined') {
    return
  }
  return queue.songs[queue.index]
}
