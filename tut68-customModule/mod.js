console.log("THis is Mod file");

const average = (arr) => {
    let sum =0;
    arr.forEach(element => {
        sum+=element;
    });
    return sum/arr.length;
}

module.exports = {
    avg : average
}