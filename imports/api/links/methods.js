// Methods related to links

import { Meteor } from 'meteor/meteor'
import { check } from 'meteor/check'
import { Links } from './links.js'
import { Stations } from './stations.js'

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
  'stations.remove' (id) {
    console.log('Meteor.methods: stations.remove id: >' + id + '<')
    check(id, String)

    return Stations.remove(id)
  }
})
