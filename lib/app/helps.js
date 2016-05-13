var pkgInfo = require('../../package.json');

module.exports.help = function(){
	var helpStr = '\nUsage: dimagen [options]\n\n'
    +'Options:\n\n'
    +'    i, init          create a new blog and init\n'
    +'    n, new           create a new article\n'
    +'    s, server        start dimagen server\n'
    +'    g, generate      generate your all posts to htmls in blog folder\n'
    +'    d, deploy        deploy dimagen to github(only git supported currently)\n'
    +'    sample           create a sample for dimagen\n'
    +'    r, remove        remove an article\n'
    +'    -h, --help       get helps of dimagen\n'
    +'    -v, --version    get dimagen version\n';
    console.log(helpStr);
}

module.exports.version = function(){
	console.log(pkgInfo.version)
}