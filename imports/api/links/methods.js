// Methods related to links

import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { Links } from './links.js';
import { Stations } from './stations.js';

Meteor.methods({
  'links.insert'(title, url) {
    check(url, String);
    check(title, String);

    return Links.insert({
      url,
      title,
      createdAt: new Date(),
    });
  },
  'stations.insert'(stationName, eva) {
    check(stationName, String);
    check(eva, String);

    return Stations.insert({
      stationName,
      eva,
      createdAt: new Date(),
    });
  },
});
