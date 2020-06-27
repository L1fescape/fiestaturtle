const path = require('path')
const nodeExternals = require('webpack-node-externals')

const root = path.resolve(__dirname, '..')
const server = path.resolve(__dirname)
const dist = path.resolve(root, 'build/server')

const isDev = process.env.NODE_ENV === 'development'

module.exports = {
  mode: isDev ? 'development' : 'production',
  target: 'node',
  externals: [nodeExternals()],
  entry: path.resolve(server, 'index.ts'),
  output: {
    filename: 'app.js',
    path: path.resolve(dist),
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  module: {
    rules: [{ test: /\.tsx?$/, loader: 'ts-loader' }],
  },
  node: {
    __filename: true,
    __dirname: true,
  },
}
