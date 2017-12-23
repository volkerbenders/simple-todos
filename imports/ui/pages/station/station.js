import './station.html'

import '../../components/hello/hello.js'
import '../../components/info/info.js'
import '../../components/station/station.js'
import { Stations } from '/imports/api/links/stations.js'

Template.Station_data.onCreated(function () {
  Meteor.subscribe('stations.getById', 'R3weXdsQ9fzyT36Mb')
})

Template.Station_data.helpers({
  /*
  station () {
    console.log('get id from flowrouter')
    const id = FlowRouter.getParam('_id')
    console.log('got id <' + id + '>')

    const station = Stations.findOne(id)
    console.log('got station <' + station + '>')
    console.log('got station <' + JSON.stringify(station) + '>')
    return station
  },
  */
  stationName () {
    console.log('get id from flowrouter')
    const id = FlowRouter.getParam('_id')
    console.log('got id <' + id + '>')

    const station = Stations.findOne(id)
    console.log('got station <' + station + '>')
    console.log('got station <' + JSON.stringify(station) + '>')
    return station.result[0].name
  },
  address () {
    const id = FlowRouter.getParam('_id')
    const station = Stations.findOne(id)
    const mailingAddress = station.result[0].mailingAddress

    console.log('Mailng Adress: ' + mailingAddress)
    console.log('Mailng Adress: ' + JSON.stringify(mailingAddress))
    var address = mailingAddress.street + ', ' + mailingAddress.zipcode + ' ' + mailingAddress.city
    console.log('Mailng Adress: ' + address)
    //return 'volker war hioer' //JSON.stringify(address)
    return address
  }
})
