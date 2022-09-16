const fromDollarToYen = (dollar) => {
    return Math.round( (127.9*dollar/1.2) * 10) / 10

}

module.exports = {
    fromDollarToYen
}