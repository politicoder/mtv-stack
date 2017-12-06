const { mix } = require('laravel-mix');

const config = {
    themeName: 'engage',
    domain: 'engage.dev'
};

const tailwindcss = require('tailwindcss');
mix.setPublicPath('public');


/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.browserSync({
    proxy: config.domain,
    files: ["public/**/*.css", "public/**/*.php", "public/**/*.twig"]
});

mix.js('./build/scripts/scripts.js', 'public/wp-content/themes/'+config.themeName+'/assets/js/scripts.js')
   .postCss('./build/styles/utilities.css', 'public/wp-content/themes/'+config.themeName+'/assets/css/utilities.css', [
        tailwindcss('./build/tailwind.js')
    ]);