const catchAsync = require('../utils/catchAsync');

module.exports.createOne = (Model) => {
  return catchAsync(async (req, res, next) => {
    const doc = await Model.create(req.body);
    if (!doc) {
      return next(new Error('Something went very wrong here'));
    }
    res.status(201).json({
      status: 'success',
      data: doc
    });
  });
}

module.exports.getAll = (Model) => {
  return catchAsync(async (req, res, next) => {
    const doc = await Model.find();
    if (!doc) {
      return next(new Error('Something went very wrong here'));
    }
    res.status(200).json({
      status: 'success',
      data: doc,
    });
  });
}

module.exports.getOne = (Model) => {
  return catchAsync(async (req, res, next) => {
    const doc = await Model.findById(req.params.id);
    if (!doc) {
      return next(new Error('Something went very wrong here'));
    }
    res.status(200).json({
      status: 'success',
      data: doc,
    });
  });
}

module.exports.updateOne = (Model) => {
  return catchAsync(async (req, res, next) => {
    const doc = await Model.findByIdAndUpdate(req.params.id, req.body);
    if (!doc) {
      return next(new Error('Something went very wrong here'));
    }
    res.status(200).json({
      status: 'success',
      data: doc,
    });
  });
}

module.exports.deleteOne = (Model) => {
  return catchAsync(async (req, res, next) => {
    await Model.findByIdAndDelete(req.params.id);
    res.status(204).json({
      status: 'success',
      data: null,
    });
  });
}