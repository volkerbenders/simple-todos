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
  'click .queryStation' (event, template) {
    const target = event.target
    var name = target.stationName

    // https://forums.meteor.com/t/how-to-get-value-of-an-input-text/2884/3
    console.log('clcked template "' + template + '"')
    name = template.find('.stationName').value
    console.log('clicked queryStation "' + name + '"')
    console.log('clcked queryStation JSON.stringify(target): "' + JSON.stringify(target) + '"')
    //name = 'Deggendorf'
    //name = 'Bocholt'

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
