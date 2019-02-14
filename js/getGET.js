function parseGetUrl(uri){
    var gp= uri.substr(uri.indexOf('?')+1, uri.length).split('&');
    return gp;
}
function getParams(uri){
    a=parseGetUrl(uri);
    var i, j, b={};
    for(i=0;i<a.length;i++){
        c=a[i].split('=');
        b[c[0]]=c[1];
    }
    return b;
}