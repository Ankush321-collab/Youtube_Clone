module.exports = (model) => async (req, res, next) => {
  const doc = await model.findById(req.params.id);
  if (!doc) return res.status(404).json({ success: false, message: 'Not found' });
  if (doc.owner.toString() !== req.user._id) return res.status(403).json({ success: false, message: 'Forbidden' });
  next();
};
