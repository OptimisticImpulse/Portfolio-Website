const { override, fixBabelImports, addLessLoader, adjustStyleLoaders } = require('customize-cra');

module.exports = {
    webpack: override(
      addWebpackModuleRule({
        test: [/\.css$/, /\.less$/],
        use: ['style-loader', 'css-loader', 'postcss-loader', { loader: 'less-loader' }]
      })
    )
  }
  // Add `javascriptEnabled` and antd theme configuration
  // to the Less loader
  adjustStyleLoaders(({ use: [, , postcss] }) => {
    const postcssOptions = postcss.options;
    postcss.options = { postcssOptions };
  })