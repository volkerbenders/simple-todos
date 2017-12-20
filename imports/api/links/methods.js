// Methods related to links

import { Meteor } from 'meteor/meteor'
import { check } from 'meteor/check'
import { Links } from './links.js'
import { Stations } from './stations.js'
import { HTTP } from 'meteor/http'

Meteor.methods({
  'links.insert' (title, url) {
    check(url, String)
    check(title, String)

    return Links.insert({
      url,
      title,
      createdAt: new Date()
    })
  },
  'stations.insert' (name, eva) {
    console.log('Meteor.methods: stations.insert name: >' + name + '<, eva: >' + eva + '<')
    check(name, String)
    check(eva, String)

    return Stations.insert({
      name,
      eva,
      createdAt: new Date()
    })
  },
  'stations.insert.db.station' (stationData) {
    console.log('Meteor.methods: stations.insert.db.station stationData: >' + JSON.stringify(stationData) + '<')

    return Stations.insert({
      stationData,
      createdAt: new Date()
    })
  },
  'stations.remove' (id) {
    console.log('Meteor.methods: stations.remove id: >' + id + '<')
    check(id, String)

    return Stations.remove(id)
  },
  'stations.query' (name) {
    var apiKey = JSON.stringify(Meteor.settings.bahn.apiKey)
    var stationUrl = JSON.stringify(Meteor.settings.bahn.stationApi)
    stationUrl = 'https://api.deutschebahn.com/stada/v2/stations?searchstring=' + name

    console.log('method: stations.query... (key: ' + apiKey + ')')
    console.log('method: stations.query... (stationUrl: ' + stationUrl + ')')
    var header = 'Authorization: Bearer 0c1ae5fed3483ba37d1e65b929f5630b'
    var headerObject = {'Authorization': 'Bearer 0c1ae5fed3483ba37d1e65b929f5630b'}
    //header = "'Authorization: Bearer 0c1ae5fed3483ba37d1e65b929f5630b', 'Accept: application/json'"
    console.log('method: stations.query... (header: ' + JSON.stringify(header) + ')')
    /*
    headers: {
      'Accept': 'application/json',
      'Authorization': 'Bearer 0c1ae5fed3483ba37d1e65b929f5630b'
    }
    */
    try {
      //const result = HTTP.call('GET', stationUrl, {
      //  headers: header
      //})
      const result = HTTP.call('GET', stationUrl, {
        headers: headerObject
      })
      //console.log('result: ' + JSON.stringify(result))
      //Stations.insert(result)
      Meteor.call('stations.insert.db.station', result, (error) => {
        if (error) {
          console.err('Error inserting db Station: ' + JSON.stringify(error))
        }
      })
      return true
    } catch (e) {
      // Got a network error, timeout, or HTTP error in the 400 or 500 range.
      console.log('error networking: ' + JSON.stringify(e))
      return false
    }
  }

})
