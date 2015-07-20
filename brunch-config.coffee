exports.config =
  # See http://brunch.io/#documentation for docs.
  files:
    javascripts:
      joinTo:
        'scripts/libraries.js': /^bower_components/
        'scripts/app.js': /^app/
    stylesheets:
      joinTo:
        'styles/vendor.css': /(?!app)/
        'styles/app.css' : /^app\/styles\/app.less$/
      order:
        before:['^bower_components']
    templates:
      joinTo: 'app.js'
