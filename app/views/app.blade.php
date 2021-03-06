<script type="text/template" id="contact-template">
	<td class="name-edit"><%- name %></td>
	<td class="email-edit"><%- email %></td>
	<td><a href="#" id="contact-<%- id %>" class="delete-btn">Delete</a></td>
</script>


<script type="text/template" id="home-template">
	
	<div class="row" id="title-con">
		<div class="span12">
			<h3>I'm a simple contacts manager web app made with Backbone.js + Laravel 4 + Bootstrap + LESS.</h3>
		</div>
	</div>

	<div class="row">
		<div class="span12">
			<div id="add-contact-form-con">
				<form>
					<h3>Add a new contact</h3>
					<p class="error"></p>
					<input type="text" name="name" id="name" placeholder="name">
					<input type="text" name="email" id="email" placeholder="email">
					<input type="submit" id="submit-btn" class="btn btn-primary">
				</form>
			</div>
		</div>
	</div>

	<div id="contact-list-con">
		<table class="table table-bordered table-striped" id="contact-list-table">
			<tr id="contact-list-table-header-row">
				<th id="table-header" colspan="3">List of all recorded contacts</th>
			</tr>
		 	<tr id="contact-list-table-headings-row">
				<th width="45%">Name</th>
				<th width="45%">Email</th>
				<th width="10%">Action</th>
			</tr>
		</table>
	</div>

</script>

<div id="main-content"></div>

