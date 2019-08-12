const Country = require('../models/country');

exports.index = (req, res) => {
  Country.find()
    .then(countries => res.status(200).json(countries))
    .catch(err => res.status(404).send(err));
};


exports.show = (req, res) => {
  Country.findOne({
    _id: req.params.id
  })
    .then(country => res.status(200).json(country))
    .catch(err => res.status(404).json(err));
};


exports.create = async (req, res) => {
  Country.create(req.body)
    .then(() => res.status(200).json({ success: "New country created" }))
    .catch(err => res.status(404).json(err));
};


exports.update = (req, res) => {
  Country.updateOne({
    _id: req.body.id
  }, req.body, {
      runValidators: true
    })
    .then(() => res.status(200).json({ success: "Country updated" }))
    .catch(err => res.status(404).json(err));
};


exports.destroy = (req, res) => {
  Country.deleteOne({
    _id: req.body.id
  })
    .then(() => res.status(200).json({ success: "Country deleted" }))
    .catch(err => res.status(404).json(err));
};