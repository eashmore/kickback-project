import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.modelFor('matches').get('lastObject');
  },

  setupController(controller, model) {
    controller.set('model', model);
    
    controller.simulateMatch(model);
  }
});
