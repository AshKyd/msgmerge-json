const assert = require("assert");
const msgMerge = require("../src/index.js");

describe("msgMerge", () => {
  it("should create empty values in dest file", () => {
    const src = { hello: "hello", world: "world" };
    const dest = {};
    const output = msgMerge(src, dest);
    assert.deepEqual(output, { hello: "", world: "" });
  });

  it("should create empty values in dest file with nested objects", () => {
    const src = { hello: { world: "world", universe: "universe" } };
    const dest = {};
    const output = msgMerge(src, dest);
    assert.deepEqual(output, { hello: { world: "", universe: "" } });
  });

  it("should create empty values in dest file with deeply nested objects", () => {
    const src = {
      hello: {
        world: "world",
        universe: { marvel: "Marvel Cinematic", riverdale: "Archie Comics" }
      },
      goodbye: {
        cruel: "world"
      }
    };
    const dest = {};
    const output = msgMerge(src, dest);
    assert.deepEqual(output, {
      hello: {
        world: "",
        universe: { marvel: "", riverdale: "" }
      },
      goodbye: {
        cruel: ""
      }
    });
  });

  it("should retain existing values", () => {
    const src = { hello: "world" };
    const dest = { hello: "mondo" };
    const output = msgMerge(src, dest);
    assert.deepEqual(output, dest);
  });

  it("should remove missing values", () => {
    const src = { hello: "world" };
    const dest = { hello: "mondo", goodbye: "adiaŭo" };
    const output = msgMerge(src, dest);
    assert.deepEqual(output, { hello: "mondo" });
  });
});
