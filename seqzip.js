module.exports.zip = async function (seq) {
    let tmp = [];
    for (let i = 0; i < seq.length; i++) {
        let d = -1;
        for (let j = i + 1; j < seq.length && seq[j - 1] + 1 === seq[j]; j++) {
            d = j;
        }
        if (d !== -1) {
            tmp.push([i, d]);
            i = d;
        } else tmp.push(i);
    }
    return tmp.reduce((acc, val) => {
        if (Array.isArray(val))
            if (val[1] - val[0] > 1) return acc + "," + seq[val[0]] + "-" + seq[val[1]];
            else return acc + "," + seq[val[0]] + "," + seq[val[1]];
        else return acc + "," + seq[val];
    }, "").replace(/^,+|,+$/g, '');
}