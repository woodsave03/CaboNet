import type { Configuration } from 'webpack';

import { rules } from './webpack.rules';
import { plugins } from './webpack.plugins';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

rules.push({
  test: /\.css$/,
  use: process.env.NODE_ENV === 'production'
    ? [MiniCssExtractPlugin.loader, 'css-loader']
    : ['style-loader', 'css-loader'],
});

export const rendererConfig: Configuration = {
  entry: './src/index.tsx',
  mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
  devtool:
    process.env.NODE_ENV === 'production'
        ? 'source-map' // Good for production
        : 'inline-source-map', // No eval, CSP-friendly for dev
  module: {
    rules,
  },
  plugins: [
    ...plugins,
    ...(process.env.NODE_ENV === 'production'
      ? [new MiniCssExtractPlugin({ filename: '[name].css' })]
      : []
    ),
  ],
  resolve: {
    extensions: ['.js', '.ts', '.jsx', '.tsx', '.css'],
  },
};
