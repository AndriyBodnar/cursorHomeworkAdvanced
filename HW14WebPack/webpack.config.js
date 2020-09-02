const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
};
module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};
// module.exports = {
//   module: {
//     rules: [
//       {
//         test: /\.m?js$/,
//         exclude: /(node_modules|bower_components)/,
//         use: {
//           loader: "babel-loader",
//           options: {
//             presets: ["@babel/preset-env"],
//           },
//         },
//       },
//     ],
//   },
// };

// module.exports = {
//   module: {
//     rules: [
//       {
//         test: /\.html$/i,
//         loader: "html-loader",
//       },
//     ],
//   },
// };


// module.exports = {
//   module: {
//     rules: [
//       {
//         test: /\.(png|jpe?g|gif)$/i,
//         use: [
//           {
//             loader: 'file-loader',
//           },
//         ],
//       },
//     ],
//   },
// };