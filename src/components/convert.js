export default function convert(count) {
    let d = new Date(count);
    function to2Digits(n) { 
        return (n < 10 ? "0" : "") + n 
    }
    let res = to2Digits(d.getDate()) + "." + to2Digits(d.getMonth()+1) + "." + d.getFullYear();
    return res 
}
