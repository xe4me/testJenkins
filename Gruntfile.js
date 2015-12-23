/*global module:false*/

module.exports = function(grunt) {
	grunt.initConfig({
		 shell: {
		        options: {
		            stderr: false
		        },
		        target: {
		            command: 'echo "'+(new Date())+'" >> gruntbuilds.txt '
		        }
		    }
	})

	grunt.loadNpmTasks('grunt-shell');
	grunt.registerTask('build', ['shell']);

};
