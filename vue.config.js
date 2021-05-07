module.exports = {
    publicPath: '',
    pages:{
        index:{
            entry: 'src/pages/home/main.js',
            template: 'public/index.html',
            filename: 'index.html'
        },
        about:{
            entry: 'src/pages/about/main.js',
            template: 'public/about.html',
            filename: 'about.html'
        }
    },
};