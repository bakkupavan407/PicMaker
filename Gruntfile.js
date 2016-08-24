module.exports = function(grunt) {

    var initConfigObj = {
        pkg: grunt.file.readJSON('package.json'),
        jshint: {
            files: ['Gruntfile.js', 'index.js', 'js/*.js', 'js/controllers/*.js', 
                'js/services/*.js',
                '!/js/lib/**/*.js'
            ]
        }
    };

    grunt.initConfig(initConfigObj);

    // load the plugin provides the jshint task
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-sass');

    // Default task(s)
    grunt.registerTask('default', ['jshint']);
};
