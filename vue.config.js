module.exports = {
    devServer: {
	    disableHostCheck: true,
  	    public: 'dev.oneadif.com',
	    port: 8082,
	    watchOptions: {
	        ignored: /public/
	    }
    },
    pages: {
        index: {
            entry: 'src/main.js',
            template: 'src/html/index.html',
            filename: 'index.html'
        }
    }
}
