"use strict";

function StepTestExplain(stepTest) {
  stepTest.prototype.explain = function () {
    return this.events.map(function (item) {
      return {
        name: item.name,
        example: item.cb.toString()
      };
    });
  };
  stepTest.explain = function () {
    var reporter = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : report;

    var explained = this.tests.map(function (test) {
      return {
        name: test.name,
        examples: test.explain()
      };
    });

    reporter(explained);
  };

  function report(explanation) {
    var r = "";
    explanation.forEach(function (test) {
      r += "## " + test.name + "\n";
      test.examples.map(function (step) {
        r += "### " + step.name + "\n";
        r += "```" + "\n";
        r += step.example + "\n";
        r += "```" + "\n";
      });
    });
    console.log(r);
  }

  return stepTest;
}

if (typeof module != "undefined") {
  module.exports = StepTestExplain;
}
