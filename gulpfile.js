var gulp = require('gulp');
var nodemon = require('nodemon');

gulp.task('default', ['nodemon']);

gulp.task('nodemon', function(){
  return nodemon({
    script: './server.js',
    exec: 'babel-node --debug',
    ext: 'js',
    watch: ['./']
  });
});
