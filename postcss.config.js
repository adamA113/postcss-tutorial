module.exports = {
    plugins: [
        require('postcss-import'),
        require('postcss-mixins'),
        require("stylelint"),
        require('postcss-preset-env')({ stage: 1 }),
        // require('postcss-nested'),
        // require('cssnano'),
    ],
}