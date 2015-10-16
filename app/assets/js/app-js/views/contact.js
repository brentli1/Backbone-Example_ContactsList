ContactManager.Views.Contact = Backbone.View.extend({
	tagName: 'li',
	className: 'contact--wrap',
	template: ContactManager.templates.contact,

    events: {
        'click .js-delete-contact':'onClickDelete'
    },

    initialize: function() {
        this.listenTo(this.model, 'remove', this.remove);
    },

    onClickDelete: function(e) {
        e.preventDefault();
        this.model.collection.remove(this.model);
    },

	render: function() {
	  var html = this.template(this.model.toJSON());
	  this.$el.append(html);
	  return this;
	}
});