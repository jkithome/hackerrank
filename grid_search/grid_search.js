function main() {
    var t = parseInt(readLine());
    for(var a0 = 0; a0 < t; a0++){
        var R_temp = readLine().split(' ');
        var R = parseInt(R_temp[0]);
        var C = parseInt(R_temp[1]);
        var G = [];
        for(var G_i = 0; G_i < R; G_i++){
           G[G_i] = readLine().split('');
        }
        var r_temp = readLine().split(' ');
        var r = parseInt(r_temp[0]);
        var c = parseInt(r_temp[1]);
        var P = [];
        for(var P_i = 0; P_i < r; P_i++){
           P[P_i] = readLine().split('');
        }
        var y = [];
        var firstTerm = P[0][0];
        // Check for all instances of the pattern first term to avoid checking
        //indices that are not important to our search
        G.forEach(function(e,i,a) {
            e.forEach(function(element, index, array) {
                if (element === firstTerm) {
                    y.push([i,index]);
                }
            });
        });

        var presence;
        var len = y.length
        for(var m = 0; m < len; m++) {
           var arr = y[m];
           var p1 = arr[0];
           var p2 = arr[1];
            for(var i = 0; i < r; i++) {
                for (var j = 0; j < c; j++) {
                    if(G[p1+i] === undefined) {
                       presence = 'NO'
                        break;
                    }
                    if(G[p1+i][p2+j] !== undefined && G[p1+i][p2+j] === P[i][j]) {
                        presence = 'YES';
                    } else {
                        presence = 'NO';
                        break;
                    }
                }
                if(  presence === 'NO') {
                break;
            }
            }
            if(  presence === 'YES') {
                break;
            }
        };

        console.log(presence);
    }

}