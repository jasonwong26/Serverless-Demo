import {} from "dotenv/config";
import webpack from "webpack";
import path from "path";
import copyWebpackPlugin from "copy-webpack-plugin";

const LOADER_OPTIONS = {
  debug: true,
  minimize: true,
};
const BUILD_OPTIONS = {
  NODE_ENV: "development"
};
const ENV_SETTINGS = Object.assign({}, process.env, BUILD_OPTIONS);

const COPY_OPTIONS = [
  {
    from: 'src/aws-config.json',
    to: 'aws-config.json'
  }
];

const config = {
  devtool: "inline-source-map",
  mode: "development",
  target: 'node',
  entry: ["./src/todos2"],
  externals: [ "aws-sdk" ], // modules to be excluded from bundled file,
  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  },
  output: {
    libraryTarget: 'commonjs',
    path: path.resolve(__dirname, "dev"),
    publicPath: "/",
    filename: "todos.js"
  },
  plugins: [
    new webpack.EnvironmentPlugin(ENV_SETTINGS),
    new webpack.LoaderOptionsPlugin(LOADER_OPTIONS)
  ],
  module: {
    rules: [
      { test: /\.(ts|tsx)?$/, include: path.join(__dirname, "src"), exclude: [/\.(spec|test)\.(ts|tsx)$/], loader: "ts-loader" }
    ]
  }
};



module.exports = config;
