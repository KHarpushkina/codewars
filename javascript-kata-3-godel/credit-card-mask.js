function maskify(cc) {
    return cc.replace(/.(?=.{4,}$)/g, '#');
}


console.log(maskify("4556364607935616"));
console.log(maskify("64607935616"));
console.log(maskify("1"));
console.log(maskify(""));