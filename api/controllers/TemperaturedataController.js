/**
 * TemperaturedataController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

  getTemp: async function (req, res) {
    var temp = await Temperaturedata.find();
    return res.ok(temp);
  },

};
