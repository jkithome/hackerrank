function main() {
    var t = parseInt(readLine());
    for(var a = 0; a< t; a++){
        var n = parseInt(readLine());
        var height = 1;
        if(n === 0) {
            console.log(1);
        } else {
            for(var i = 1; i <= n; i++) {
                if(i % 2 !== 0) {
                    height *= 2;
                } else {
                    height += 1;
                }
            }
            console.log(height);
        }
    }

}
