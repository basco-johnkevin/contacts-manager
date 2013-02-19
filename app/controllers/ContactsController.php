<?php

class ContactsController extends BaseController {

	/**
	 * Display a listing of the resource.
	 *
	 * @return Response
	 */
	public function index()
	{
		$limit = Input::get('perPage');
		$offset = (Input::get('page') - 1) * $limit;

	 	$contacts = Contact::skip($offset)
									->take($limit)
									->get();

		//$contacts = Contact::all();

		return $contacts;
		// $input = Input::get('perPage');
		// return $input;

		// $contacts = Contact::all();
		// return $contacts;
	}

	/**
	 * Show the form for creating a new resource.
	 *
	 * @return Response
	 */
	public function create()
	{
		
	}

	/**
	 * Store a newly created resource in storage.
	 *
	 * @return Response
	 */
	public function store()
	{
		$input = Input::json();

		$contact = Contact::create(array(
						'name' => $input->name,
						'email' => $input->email,
				   ));


		return $contact;
	}

	/**
	 * Display the specified resource.
	 *
	 * @return Response
	 */
	public function show($id)
	{
		//
	}

	/**
	 * Show the form for editing the specified resource.
	 *
	 * @return Response
	 */
	public function edit($id)
	{
		//
	}

	/**
	 * Update the specified resource in storage.
	 *
	 * @return Response
	 */
	public function update($id)
	{
		//
	}

	/**
	 * Remove the specified resource from storage.
	 * Returns the id of the contact that has been deleted on success or returns a json {failed: 'true'}
	 *
	 * @return Response
	 */
	public function destroy($id)
	{
		$contact = Contact::find($id);

		if ($contact->delete()) {
			return $contact->id;
		} else {
			return json_encode(array('failed' => 'true'));
		}
	}

}