module.exports = {
  entry: './src/rayt.js',
  output: {
    path: __dirname + '/build',
    filename: 'rayt.js',
    libraryTarget: 'umd'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['env']
        }
      }
    ]
  }
}
