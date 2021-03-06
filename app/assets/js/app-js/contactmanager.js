window.ContactManager = {
	Models: {},
	Collections: {},
	Views: {},

	start: function(data) {
		var contacts = new ContactManager.Collections.Contacts(data.contacts),
        router = new ContactManager.Router();

    router.on('route:home', function() {
      router.navigate('contacts', {
        trigger: true,
        replace: true
      });
    });

    router.on('route:showContacts', function() {
      var contactsView = new ContactManager.Views.Contacts({
        collection: contacts
      });

      $('.main-container').html(contactsView.render().$el);
    });

    router.on('route:newContact', function() {
      var newContactView = new ContactManager.Views.ContactForm({
        model: new ContactManager.Models.Contact()
      });

      newContactView.on('form:submitted', function(attrs) {
        attrs.id = contacts.isEmpty() ? 1 : (_.max(contacts.pluck('id')) + 1);
        contacts.add(attrs);
        router.navigate('contacts', true);
      });

      $('.main-container').html(newContactView.render().$el);
    });

    router.on('route:editContact', function(id) {
      var contact = contacts.get(id),
          editContactForm;
          if(contact) {
            editContactForm = new ContactManager.Views.ContactForm({
              model: contact
            });

            $('.main-container').html(editContactForm.render().$el);
          } else {
            router.navigate('contacts', true);
          }

      editContactForm.on('form:submitted', function(attrs) {
        contact.set(attrs);
        router.navigate('contacts', true);
      });
    });

    Backbone.history.start();
	}
};
