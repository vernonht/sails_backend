/**
 * TemperaturedataController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */
var moment = require('moment');

module.exports = {

  getTemp: async function (req, res) {
    if(!req.param('all') && !req.param('daterange')){
      var now = new Date(),
      start = now.getFullYear()+'/'+(now.getMonth()+1)+'/'+now.getDate();
      var temp = await Temperaturedata.find({createdAt: {'>=':new Date(start)}});
    }
    else if(!req.param('all') && req.param('daterange')){
      var now = new Date(),
      start = moment().subtract(req.param('daterange'), 'days').format('YYYY/MM/DD')
      var temp = await Temperaturedata.find({createdAt: {'>=':new Date(start)}});
    }
    else if (req.param('all')){
      var temp = await Temperaturedata.find();
    }
    return res.ok(temp);
  },

};
