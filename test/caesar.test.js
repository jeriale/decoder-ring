const expect = require("chai").expect;
const caesar = require("../src/caesar");

describe("caesar()", () => {
    describe("shift values", () => {
        it("should return false if a shift value is not present", () => {
            const actual = caesar("input", null, false);
            expect(actual).to.equal(false);
        });
        it("should return false if a shift value is equal to 0", () => {
            const actual = caesar("input", 0, false);
            expect(actual).to.equal(false);
        });
        it("should return false if a shift value is greater than 25", () => {
            const actual = caesar("input", 26, false);
            expect(actual).to.equal(false);
        });
        it("should return false if a shift value is less than -25", () => {
            const actual = caesar("input", -26, false);
            expect(actual).to.equal(false);
        });
    });
    describe("encoding a message", () => {
        it("should encode a message by translating each letter by shift value", () => {
            const actual = caesar("Input", 3, true);
            expect(actual).to.equal("lqsxw");
        });
        it("encoded message should wrap when a letter exceeds the alphabet after Z", () => {
            const actual = caesar("Xylophone", 5, true);
            expect(actual).to.equal("cdqtumtsj");
        });
        it("encoded message should wrap when a letter exceeds the alphabet before A", () => {
            const actual = caesar("Apple", -5, true);
            expect(actual).to.equal("vkkgz");
        });
        it("encoded message should preserve spaces", () => {
            const actual = caesar("Apple Apple Apple", -5, true);
            expect(actual).to.equal("vkkgz vkkgz vkkgz");
        });
    });
    describe("decoding a message", () => {
        it("should encode a message by translating each letter by shift value", () => {
            const actual = caesar("Lqsxw", 3, false);
            expect(actual).to.equal("input");
        });
        it("encoded message should wrap when a letter exceeds the alphabet before A", () => {
            const actual = caesar("Cdqtumtsj", 5, false);
            expect(actual).to.equal("xylophone");
        });
        it("encoded message should wrap when a letter exceeds the alphabet after Z", () => {
            const actual = caesar("Vkkgz", -5, false);
            expect(actual).to.equal("apple");
        });
        it("decoded message should preserve spaces", () => {
            const actual = caesar("vkkgz vkkgz vkkgz", -5, false);
            expect(actual).to.equal("apple apple apple");
        });
    });
});