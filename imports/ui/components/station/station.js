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
  },
  'click .deleteButton' (event) {
    console.log('clicked "deleteButton" ' + event.target.value)
    Meteor.call('stations.remove', event.target.value, (error) => {
      if (error) {
        console.err('Error removing Station...')
      }
    })
  },
  'click .queryStation' (event) {
    const target = event.target
    var name = target.stationName
    name = 'Deggendorf'
    
    console.log('clcked queryStation "' + name + '"')
    Meteor.call('stations.query', name, (error) => {
      if (error) {
        console.err('Error Querying Station...')
      } else {
        console.log('Query for "' + name + '" was ok :-)')
      }
    })
  }
})
