
module.exports = function (schema, attractionType) {
  schema.set('toJSON', { virtuals: true }); // otherwise virtuals don't get sent to the front end, because `res.json` uses `JSON.parse` which calls `toJSON`
  schema.virtual('type').get(() => attractionType);
};
