// All links-related publications

import { Meteor } from 'meteor/meteor';
import { Links } from '../links.js';
import { Stations } from '../stations.js';

Meteor.publish('links.all', function () {
  return Links.find();
});

Meteor.publish('stations.all', function () {
  return Stations.find();
});
