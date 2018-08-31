'use strict';

var should = require('chai').should();
var pitcore = require('../');

describe('#versionGuard', function() {
  it('global._pitcore should be defined', function() {
    should.equal(global._pitcore, pitcore.version);
  });

  it('throw an error if version is already defined', function() {
    (function() {
      pitcore.versionGuard('version');
    }).should.throw('More than one instance of pitcore');
  });
});
