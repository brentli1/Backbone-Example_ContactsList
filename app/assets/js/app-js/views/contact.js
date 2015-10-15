ContactManager.Views.Contact = Backbone.View.extend({
	tagName: 'li',
	className: 'contact--wrap',
	template: ContactManager.templates.contact,

	render: function() {
	  var html = this.template(this.model.toJSON());
	  this.$el.append(html);
	  return this;
	}
});