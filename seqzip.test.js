const seqzip = require("./seqzip")
const assert = require("chai").assert


it("single", async function () {
    assert.equal(await seqzip.zip([1]), "1")
});

it("two", async function () {
    assert.equal(await seqzip.zip([1, 2]), "1,2")
});

it("five", async function () {
    assert.equal(await seqzip.zip([1, 3, 5, 7, 9]), "1,3,5,7,9")
});

it("sequence", async function () {
    assert.equal(await seqzip.zip([1, 2, 3, 4, 5, 6, 7, 8]), "1-8")
});

it("single + sequence", async function () {
    assert.equal(await seqzip.zip([1, 3, 4, 5, 6, 7, 8]), "1,3-8")
});

it("single + 2 sequence", async function () {
    assert.equal(await seqzip.zip([1, 3, 4, 5, 6, 7, 8, 10, 11, 12]), "1,3-8,10-12")
});

it("single + 2 sequence + single", async function () {
    assert.equal(await seqzip.zip([1, 3, 4, 5, 6, 7, 8, 10, 11, 12, 14]), "1,3-8,10-12,14")
});

it("2 sequence", async function () {
    assert.equal(await seqzip.zip([3, 4, 5, 6, 7, 8, 10, 11, 12]), "3-8,10-12")
});

it("single + 2 sequence + two", async function () {
    assert.equal(await seqzip.zip([1, 3, 4, 5, 6, 7, 8, 10, 11, 12, 14, 15]), "1,3-8,10-12,14,15")
});

it("single + 2 sequence + single + sequence", async function () {
    assert.equal(await seqzip.zip([1, 3, 4, 5, 6, 7, 8, 10, 11, 12, 14, 16, 17, 18]), "1,3-8,10-12,14,16-18")
});