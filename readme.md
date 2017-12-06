# The MTV Stack 🎸
### Mix/Tailwind/Vue

Build package that includes:
 * [Laravel Mix](https://github.com/JeffreyWay/laravel-mix)
 * [Browsersync](https://www.npmjs.com/package/browser-sync)
 * [TailwindCSS](https://tailwindcss.com/)
 * [VueJS](https://vuejs.org/)
 * [Axios](https://www.npmjs.com/package/axios)

These files are pre-configured for WordPress themes. Run `npm install` and update the `themeName` and `domain` names in `webpack.mix.js` with your project's theme name and development domain.

Then, run one of the following to get started:

* `npm run watch` to auto-compile watched styles and scripts. Add `:3000` to your development domain in the browser to use Browsersync.
* `npm run dev` to compile (but not minify) watched styles and scripts
* `npm run hot` to watch styles and scripts with [hot reloading](https://github.com/JeffreyWay/laravel-mix/blob/master/docs/hot-module-replacement.md)
* `npm run production` to compile and minify styles and scripts


This package is minimal and **does *not* include Bootstrap, SASS, jQuery**, or other common tools you may be more comfortable with. Mix makes it easy to add these back in if you need to, but after getting acquainted with Tailwind and Vue you may not miss them as much as you think.