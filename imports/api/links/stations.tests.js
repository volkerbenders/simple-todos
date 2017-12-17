// Tests for the behavior of the links collection
//
// https://guide.meteor.com/testing.html

import { Meteor } from 'meteor/meteor';
import { assert } from 'meteor/practicalmeteor:chai';
import { Stations } from './stations.js';

if (Meteor.isServer) {
  describe('Stations collection', function () {
    it('insert correctly', function () {
      const linkId = Stations.insert({
        name: 'Entenhausen',
        eva: '113',
      });
      const added = Links.find({ _id: linkId });
      const collectionName = added._getCollectionName();
      const count = added.count();

      assert.equal(collectionName, 'stations');
      assert.equal(count, 1);
    });
  });
}
