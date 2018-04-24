/**
 * TemperaturedataController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

  getTemp: function (req, res) {
    return res.ok('temp');
  },

};
