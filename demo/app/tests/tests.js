var NsDonatix = require("nativescript-ns-donatix").NsDonatix;
var nsDonatix = new NsDonatix();

describe("greet function", function() {
    it("exists", function() {
        expect(nsDonatix.greet).toBeDefined();
    });

    it("returns a string", function() {
        expect(nsDonatix.greet()).toEqual("Hello, NS");
    });
});