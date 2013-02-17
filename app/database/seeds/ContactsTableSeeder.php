<?php

class ContactsTableSeeder extends Seeder {

    public function run()
    {
        DB::table('contacts')->delete();

        DB::table('contacts')->insert(array( 
 												'name' =>  'kevin', 
 				   								'email' => 'basco.johnkevin@gmail.com'
 				   					  ));
    }

}