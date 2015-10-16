ContactManager.Views.ContactForm = Backbone.View.extend({
    template: ContactManager.templates.addcontact,

    events: {
        'click .contact--submit': 'onFormSubmit'
    },

    onFormSubmit: function(e) {
        e.preventDefault();
        this.trigger('form:submitted', {
            name: this.$('.js-contact--name').val(),
            email: this.$('.js-contact--email').val(),
            tel: this.$('.js-contact--tel').val()
        });
    },

    render: function() {
        var html = this.template();
        this.$el.append(html);
        return this;
    }
});
