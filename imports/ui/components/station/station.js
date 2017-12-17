import { Stations } from '/imports/api/links/stations.js';
import { Meteor } from 'meteor/meteor';
import './station.html';

Template.station.onCreated(function () {
  Meteor.subscribe('stations.all');
});

Template.station.helpers({
  stations() {
    return Stations.find({});
  },
});

Template.station.events({
  'submit .info-station-add'(event) {
    event.preventDefault();

    const target = event.target;
    const name = target.name;
    const eva = target.eva;

    var data = {}
    console.log('submit .info-station-add')
    Meteor.call('stations.insert', title.value, url.value, (error) => {
      if (error) {
        alert(error.error);
      } else {
        title.value = '';
        url.value = '';
      }
    });
  },
});
