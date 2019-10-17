export const addUpToFirst = function(n) {
    let total = 0;
    for(let i=0; i<= n; i++ ) {
        total += i;
    }
    return total;
}

export const addUpToSecond = function(n) {
    return n * (n + 1) / 2;
}