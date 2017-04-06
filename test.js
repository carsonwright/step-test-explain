const StepTest = require("step-test");
const explain = require("./build/step-test-explain")(StepTest);

Speak = {
  sais: [],
  say: function(thing){
    this.sais.push(thing);
  },
  speak: function(){
    console.log(this.sais);
  }
}

StepTest.test("Speak")
.step("Say Hello", function(){
  Speak.say("Hello");
})
.step("Say Goodbye", function(){
  Speak.say("Goodbye");
})
.step("Mock Console", function(){
  var t = this;
  console.oLog = console.log;
  console.log = function(data){
    t.data = data;
  };
})
.step("Speak", function(){
  Speak.speak();
})
.expect("Should have said Hello and Goodbye", function(){
  var log = JSON.stringify(this.data);
  var e = JSON.stringify(["Hello", "Goodbye"]);
  console.log = console.oLog;
  this.ok(log == e);
}).play();

StepTest.explain()