import DS from 'ember-data';

export default DS.Model.extend({
  start_time: DS.attr('date'),
  has_started: DS.attr('boolean'),
  current_round: DS.attr('number'),

  teams: DS.hasMany('team', { inverse: 'matches' }),
  winner: DS.belongsTo('team', { inverse: null })
});
