import * as path from 'path'
import * as http from 'http'
import * as express from 'express'

const webDist = path.resolve(__dirname, '../build/web')

export interface ServerConfig {
  port: string
  onReady?(): void
}

export interface Server {
  (config: ServerConfig): http.Server
}

export const Server: Server = ({ port, onReady }) => {
  const app = express()
  const server = http.createServer(app)

  app.use(express.static(webDist))

  app.get('/api/playlists', (_, res) => {
    res.json({
      playlists: [],
    })
  })

  app.get('*', (_, res) => {
    res.sendFile(path.resolve(webDist, 'index.html'))
  })

  server.listen(port, function () {
    console.log(`server initialized: ${port}`)
    if (onReady) onReady()
  })

  return server
}

