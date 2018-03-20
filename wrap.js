function wrap (str, colNum) {
    if (typeof colNum !== 'number') {
        throw Error();
    }
    return str;
}


module.exports = wrap;