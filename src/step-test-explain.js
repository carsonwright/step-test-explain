function StepTestExplain(stepTest){
  stepTest.prototype.explain = function(){
    return this.events.map((item)=>{
      return {
        name: item.name,
        example: item.cb.toString()
      }
    })
  }
  stepTest.explain = function(reporter = report){
    let explained = this.tests.map((test)=>{
      return {
        name: test.name,
        examples: test.explain()
      }
    })

    reporter(explained);
  }

  function report(explanation){
    let r = ""
    explanation.forEach(function(test){
      r += "## " + test.name + "\n"
      test.examples.map(function(step){
        r += "### " + step.name + "\n"
        r += "```" + "\n"
        r += step.example + "\n"
        r += "```" + "\n"
      })
    })
    console.log(r);
  }

  return stepTest;
}


if(typeof module != "undefined"){
  module.exports = StepTestExplain;
}