var gulp, { src, dest, series } = require('gulp')
var ts = require('gulp-typescript')
const minify = require('gulp-minify');
var tsProject = ts.createProject('tsconfig.json')
const merge = require('merge2')
const del = require('del')
const webpack = require('webpack')
var sftp = require('gulp-sftp');

function clean() {
    return del(['./dist/**','./definitions/**']);
}

function compile(){
    var tsResult = tsProject.src()
        .pipe(tsProject());
 
    return merge([
        tsResult.dts.pipe(gulp.dest('definitions')),
        tsResult.js.pipe(minify({
            ext:{
                min:'.js',
            },
            noSource: true,
            preserveComments: 'some'
        })).pipe(gulp.dest('dist'))
    ]);
}

exports.default = series(clean, compile);

const webpackProd = require('./webpack.prod.js')

function prod() {
    return new Promise((resolve, reject) => {
        webpack(webpackProd, (err, stats) => {
            if (err) {
                return reject(err)
            }
            if (stats.hasErrors()) {
                return reject(new Error( '\n' + stats.compilation.errors.map( e => e.message ).join('\n') ))
            }
            resolve()
        })
    })
}

function manifiest() {
    return src(['./manifiest/**/*.js']).pipe(dest('./dist/'))
}

const buildProd = series(clean, prod, manifiest);
exports.prod = buildProd

//remotePath
function upload(){
    return src(['./build/**/*'])
        .pipe(sftp({
            host: '10.96.46.160',
            user: 'seblsrv',
            pass: 'seblsrv',
            key: { location: '~/.ssh/id_rsa' },
            remotePath: '/oracle/siebel/ai_custom/scripts/siebel/custom/Scripts/StoryBoard'
        }));
}

const deploy = series(buildProd, upload)
exports.deploy = deploy