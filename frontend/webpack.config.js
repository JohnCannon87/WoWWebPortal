// Webpack configuration for React
const path = require('path');
module.exports = {
entry: './src/index.jsx',
output: {
// Output bundle to build/bundle.js (will be copied by Gradle)
filename: 'bundle.js',
path: path.resolve(__dirname, 'build'),
},
mode: 'production',
module: {
rules: [
{
test: /\.jsx?$/,
exclude: /node_modules/,
use: { loader: 'babel-loader' }
},
{
test: /\.css$/,
use: ['style-loader', 'css-loader']
}
]
},
resolve: {
extensions: ['.js', '.jsx']
}
};