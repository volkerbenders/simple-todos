import { Stations } from '/imports/api/links/stations.js'
import { Meteor } from 'meteor/meteor'
import './station.html'

Template.station.onCreated(function () {
  Meteor.subscribe('stations.all')
})

Template.station.helpers({
  stations() {
    return Stations.find({})
  }
})

Template.station.events({
  'submit .info-station-add'(event) {
    event.preventDefault()
    console.log('submit .info-station-add')

    const target = event.target
    const name = target.stationName
    const eva = target.eva

    Meteor.call('stations.insert', name.value, eva.value, (error) => {
      if (error) {
        //alert(error.error)
      } else {
        name.value = ''
        eva.value = ''
      }
    })
  }
})
