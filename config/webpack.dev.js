const path = require("path");
const { VueLoaderPlugin } = require("vue-loader");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require('webpack');
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development", // 开发模式
  entry: path.resolve(__dirname, "../src/main.js"), // 入口文件
  // web server
  devtool: 'cheap-module-source-map',
  devServer: {
    static: {
    directory: path.resolve(__dirname, "../dist"), // 打包后的文件路径 directory:目录
    },
    open: true, //自动打开浏览器
    compress: false, //启动gzip压缩
    port: 9000, // 端口号
  },
  output: {
    clean: true, // 清理 /dist 文件夹
    filename: "js/[name].min.js", // 打包后的文件名称
    path: path.resolve(__dirname, "../dist"), // 打包后的目录
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "../public/index.html"),
    }),
    new MiniCssExtractPlugin({
      filename: "css/[name].css"
    }),
  ],
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader",
      },
      {
        test: /\.(gif|png|jpe?g)$/i,
        type: "asset",
        parser: {
          dataUrlCondition: {
            maxSize: 8 * 1024,
          },
        },
        generator: {
          filename: "imgs/[hash:8].[name][ext]",
        },
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/, //媒体文件
        type: "asset/resource",
        generator: {
          filename: "media/[name][ext]",
        },
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/i, // 字体
        type: "asset/resource",
        generator:{
          filename:"fonts/[name][ext]"
        }
      },
      {
        test:/\.js$/,
        loader:"babel-loader",
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"], // 从右向左解析原则
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [["autoprefixer"]],
              },
            },
          },
          "sass-loader",
        ], // scss的loader
      },
    ],
  },
  // 配置模块如何解析
  resolve: {
    alias: {
      vue$: "vue/dist/vue.runtime.esm.js",    // 末尾添加 $，以表示精准匹配
      "@": path.resolve(__dirname, "../src"),
    },
    extensions: ["*", ".js", ".json", ".vue"],  // 尝试按顺序解析这些后缀名。如果有多个文件有相同的名字，但后缀名不同，webpack 会解析列在数组首位的后缀的文件 并跳过其余的后缀
  }
};
