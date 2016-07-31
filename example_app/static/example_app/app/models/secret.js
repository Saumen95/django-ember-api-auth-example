import DS from 'ember-data';

export default DS.Model.extend({
  owner: DS.belongsTo('user'),
  body: DS.attr('string'),
});
