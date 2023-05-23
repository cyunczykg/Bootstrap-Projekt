display_contact_form = function () {
	/** Getting the tag article */
	v_footer = document.getElementsByClassName('c-form')[0];

	//Description
	v_form_desc = document.createElement('div');
	v_form_desc.setAttribute('class', 'cform-title');
	v_form_desc.appendChild(document.createTextNode('Skontaktuj się z nami'));
	v_footer.appendChild(v_form_desc);

	/** Form element creation */
	v_form_contact = document.createElement('form');
	v_form_contact.setAttribute('id', 'formcontact');
	v_form_contact.setAttribute('method', 'post');
	v_form_contact.setAttribute('accept-charset', 'UTF-8');

	/** Subject field creation */
	v_input_sujet = document.createElement('textarea');
	v_input_sujet.setAttribute('name', 'subject');
	v_input_sujet.setAttribute('required', true);
	v_input_sujet.setAttribute('placeholder', 'Treść zapytania...');

	/** Adding the field subject in the form */
	v_form_contact.appendChild(v_input_sujet);

	v_input_new_line = document.createElement('br');
	v_form_contact.appendChild(v_input_new_line);

	v_input_label = document.createElement('label');
	v_input_label.appendChild(document.createTextNode('Nadawca'));
	v_input_label.setAttribute('class', 'remark');

	v_input_antispam = document.createElement('input');
	v_input_antispam.setAttribute('name', 'remark');
	v_input_antispam.setAttribute(
		'pattern',
		'[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$'
	);
	v_input_antispam.setAttribute('placeholder', 'name@domain.com');
	v_input_antispam.setAttribute('class', 'remark');

	v_form_contact.appendChild(v_input_label);
	v_form_contact.appendChild(v_input_antispam);

	/** Adding the form at the end of the tag article*/
	v_footer.appendChild(v_form_contact);
};

if (window.addEventListener) {
	window.addEventListener('load', display_contact_form, false); // IE9, Chrome, FireFox
}
