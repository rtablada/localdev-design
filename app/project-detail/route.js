import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return {
      title: 'Ember.js Application',
      plugins: ['node', 'ember'],
      folderLocation: '~/sites/my-ember-app'
    };
  }
});
