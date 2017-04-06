# Step Test Explain
The reason for this plugin is to be able to generate semi human readable documentation from your test suite. This is helpful because you have living documentation that is reflected by passing tests rather than an out of date faq or an unexplained system. An example of the generated output can be found here https://github.com/carsonwright/step-test-explain/blob/master/documentation.md

### Use Cases
An api or a lib that one has created and deployed to be consumed by other developers.

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
1. Remove Function Wrappers
Right now function wrappers are printed with the test, this is not very helpful and detracts from the cleanliness of the generated report.
```
function(){
// test code
}
```
2. Add extra functions for adding descriptions and accepted / required parameters within a step and expected returns
3. the ability to skip steps that are not helpful to documentation
