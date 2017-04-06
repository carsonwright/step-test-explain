# Step Test Explain
The reason for this plugin is to be able to generate semi human readable documentation from your test suite. This is helpful because you have living documentation that is reflected by passing tests rather than an out of date faq or an unexplained system.

### Setup
```
const StepTest = require("step-test");
const explain = require("./build/step-test-explain")(StepTest);

```


### Explain
```
// Your Tests
StepTest.explain()
```

### Generate README.md from test
```
node test.js > README.md
```

### Todo:
Right now function wrappers are printed with the test, this is not very helpful and detracts from the cleanliness of the generated report.
```
function(){
// test code
}
```

