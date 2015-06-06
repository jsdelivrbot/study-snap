(function() {
  'use strict';

  module.exports = function () {

    this.Then(/^I should see the title "([^"]*)"$/, function (expectedTitle, callback) {
      this.browser.
        getTitle().should.become(expectedTitle).and.notify(callback);
    });

    this.Then(/^I should see the element "([^"]*)" with value "([^"]*)"$/, function (elementSelector, value, callback) {
      this.browser.
        getText(elementSelector).should.become(value).and.notify(callback);
    });

  };
})();
