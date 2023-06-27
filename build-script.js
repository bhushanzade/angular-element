const concat = require('concat');
build = async () => {
    console.log("Srcipt Running");
    const files = [
        './dist/demo-angular-element/runtime.js',
        './dist/demo-angular-element/polyfills.js',
        './dist/demo-angular-element/main.js',
    ];
    await concat(files, './dist/demo-angular-element/angular-element.js');
}
build();