<script type="text/template" id="add_contact_form">
	<form id="add-contact-form">
		<input type="text" name="name" id="name" placeholder="name">
		<input type="text" name="email" id="email" placeholder="email">
		<input type="submit" id="submit-btn">
	</form>
</script>

<script type="text/template" id="contact-template">
	<td><%- name %></td>
	<td><%- email %></td>
	<td><a href="#" id="contact-<%- id %>" class="delete-btn">Delete</a></td>
</script>

<h3>I'm a simple contact manager web app made with Backbone.js + Laravel 4 + Bootstrap + LESS.</h3>

<div id="add-contact-form-con"></div>

<div id="contact-list-con">
	<table border="1" id="contact-list-table">
		<tr>
			<th>Name</th>
			<th>Email</th>
			<th>Actions</th>
		</tr>
	</table>
</div>
