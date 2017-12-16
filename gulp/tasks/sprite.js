//this gulp is used to create sprite easily and confeinieance 
//   v--0.0.0.1
//   created 16/12/2017
//   by ali said ali  i am the most complete fighter in the world
// code tips'
/* fig 101 means we use this so that no confilt will not happing 
 somethimes we need one task to happen before another task so we use dependence so that we tell gulp to finish task 1 then run task 2 */



var gulp      = require('gulp'),
    svgSprite = require('gulp-svg-sprite'),
    rename    = require('gulp-rename'),
    del    = require('del');   

var config = {
  mode: {
    css: {
      sprite: 'sprite.svg',
      render: {
        css: {
          template:'./gulp/templates/sprite.css'
        }
      }
    }
  }
}

// to delete the sprite file each time we need to create new sprite so that we start clean root 

gulp.task('beginClean', function() {
  return del(['./app/temp/sprite', './app/assets/images/sprite']);

});

// to create sprite 

gulp.task('createSprite', ['beginClean'], function() {
  return gulp.src('./app/assets/images/icons/**/*.svg')
    .pipe(svgSprite(config))
    .pipe(gulp.dest('./app/temp/sprite/'));
});
 
// to copy sprite css to another file from temp file
gulp.task('copySpriteCSS', ['createSprite'],function(){
  return gulp.src('./app/temp/sprite/css/*.css')
    .pipe(rename('_sprite.css'))
    .pipe(gulp.dest('./app/assets/styles/modules'));
});

// to copy sprite image to another file from temp file
gulp.task('copySpriteGH', ['createSprite'], function(){
  return gulp.src('./app/temp/sprite/css/**/*.svg')
    .pipe(gulp.dest('./app/assets/images/sprite'));
});

// to delete temp becouse we dont need any more 

gulp.task('endClean', ['copySpriteGH', 'copySpriteCSS'], function(){
  return del('./app/temp/sprite');
});

 // to run all tasks in one time 
 gulp.task('icons', ['beginClean', 'createSprite', 'copySpriteGH', 'copySpriteCSS','endClean']);







































// var gulp = require('gulp'),
// svgSprite = require('gulp-svg-sprite'),
// rename = require('gulp-rename');

// var config = {
//   mode: {
//     css: {
//       sprite: 'sprite.svg',
//       render: {
//         css: {
//           template:'./gulp/templates/sprite.css'
//         }
//       }
//     }
//   }
// }

// gulp.task('createSprite', function(){
//   return gulp.src('./app/assets/images/icons/**/*.svg')
//     .pipe(svgSprite(config))
//     .pipe(gulp.dest('./app/temp/sprite/'));
// });

// gulp.task('copySpriteCSS', ['createSprite'], function(){
//   return gulp.src('./app/temp/sprite/css/*.css')
//     .pipe(rename('_sprite.css'))
//     .pipe(gulp.dest('./app/assets/styles/modules'));
// });

// gulp.task('copySpriteGH', ['createSprite'], function(){
//   return gulp.src('./app/temp/sprite/css/**/*.svg')
//     .pipe(gulp.dest('./app/assets/images/sprite'));
// });


// gulp.task('icons', ['createSprite', 'copySpriteGH', 'copySpriteCSS']);