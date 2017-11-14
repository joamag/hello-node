const assert = require("assert");
const hello = require("../dist/hello");

describe("hello", function() {
    describe("#hello", function() {
        it("should return proper value", async () => {
            assert.equal(hello.hello(), "world");
        });
    });
});
