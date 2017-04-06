
> step-test-explain@0.2.0 test /Users/carsonnwright/Projects/step-test-explain
> node test.js

## Speak
### Say Hello
```
function (){
  Speak.say("Hello");
}
```
### Say Goodbye
```
function (){
  Speak.say("Goodbye");
}
```
### Mock Console
```
function (){
  var t = this;
  console.log = function(data){
    t.log = data;
  };
}
```
### Speak
```
function (){
  Speak.speak();
}
```
### Should have said Hello and Goodbye
```
function (){
  var log = JSON.stringify(this.log);
  var e = JSON.stringify(["Hello", "Goodbye"]);
  this.ok(log == e);
}
```

