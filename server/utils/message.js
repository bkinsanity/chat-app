var generateMessage = (from, text) => {
    return {
        from, text, 
        createAt: new Date().getTime()
    };
}

var generateLocationMessage = (from, latitude, longitude) => {
    return {
        from, 
        url: `http://www.google.com/maps?q=${latitude},${longitude}`, 
        createAt: new Date().getTime()
    };
}

module.exports = {generateMessage, generateLocationMessage};