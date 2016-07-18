(function (Kotlin) {
  'use strict';
  var _ = Kotlin.defineRootPackage(null, /** @lends _ */ {
    test: function () {
      Kotlin.println('Sialalalala');
    }
  });
  Kotlin.defineModule('worker', _);
}(Kotlin));
