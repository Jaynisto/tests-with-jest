const  countOccurrences = (str,letter) => {
    let count = 0;
    const splitted = str.split('');
    for( let i = 0; i < splitted.length; i++){
        if(splitted[i] === letter){
            count++;
        }
    }
    return count;
}

module.exports = countOccurrences;