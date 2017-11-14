const assert = require("assert");
const hello = require("../lib");

describe("hello", function() {
    describe("#hello", function() {
        it("should return proper value", async () => {
            assert.equal(hello.hello(), "world");
        });
    });
});
