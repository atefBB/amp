const mix = require('laravel-mix');

mix.scripts([
    'custom.min.js',
    'ga.min.js'
], 'app.js');
