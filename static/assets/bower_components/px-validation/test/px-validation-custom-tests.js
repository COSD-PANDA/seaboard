// This is the wrapper for custom tests, called upon web components ready state
function runCustomTests() {
  // Place any setup steps like variable declaration and initialization here

  // This is the placeholder suite to place custom tests in
  // Use testCase(options) for a more convenient setup of the test cases
  suite('Custom Automation Tests for px-validation', function() {
    var px_validation = document.getElementById('px_validation_1');

    suiteSetup(function(done){
      flush(function(){
        done();
      });
    });

    test('Check there is a single px-validator child defined on test fixture', function(){
      assert.lengthOf(Polymer.dom(px_validation).children, 1);
    });
    test('Integer isNumber validation returns true', function() {
      assert.isTrue(px_validation.validate(2).passedValidation);
    });
    test('String representation of number via isNumber validation returns true', function() {
      assert.isTrue(px_validation.validate('2').passedValidation);
    });
  });
}
