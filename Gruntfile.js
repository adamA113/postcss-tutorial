module.exports = function(grunt) {

    grunt.initConfig({
        postcss: {
            options: {
                processors: [
                    require('postcss-import')(),
                    require('postcss-mixins'),
                    require("stylelint"),
                    require('postcss-preset-env')({ stage: 1 }),
                    // require('postcss-nested'),
                    // require('cssnano')(),
                ]
            },
            dist: {
                src: 'src/style.css',
                dest: 'public/style.css'
            }
        }
    })

    grunt.loadNpmTasks('@lodder/grunt-postcss');
}