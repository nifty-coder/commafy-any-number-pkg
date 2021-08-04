const commafy = (number) => {
    if (typeof number === undefined || number === null) {
        number = '';
        console.error("Number is incorrect!");
    }

    const str = number.toString().split('.');

    if (str[0].length >= 3) {
        str[0] = str[0].replace(/(\d)(?=(\d{3})+$)/g, '$1,');
    }
    
    if (str[1] && str[1].length >= 5) {
        str[1] = str[1].replace(/(\d{3})/g, '$1 ');
    }
    
    return str.join('.');
};

module.exports = {
    commafyNumber: commafy
};