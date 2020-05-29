
 function parseStringAsArray(arrayAsStrings){
    return arrayAsStrings.split(',').map(tech => tech.trim());
}
module.exports = parseStringAsArray;