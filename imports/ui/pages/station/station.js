import './station.html'

import '../../components/hello/hello.js'
import '../../components/info/info.js'
import '../../components/station/station.js'
import { Stations } from '/imports/api/links/stations.js'

Template.Station_data.onCreated(function () {
  Meteor.subscribe('stations.getById', 'R3weXdsQ9fzyT36Mb')
})

Template.Station_data.helpers({
  stations() {
    console.log('get id from flowrouter')
    const id = FlowRouter.getParam('_id')
    console.log('got id <' + id + '>')
    //const s =
    return Stations.find(id)
  }
})
