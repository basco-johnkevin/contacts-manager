<?php

class AppController extends BaseController {
	
	public function render()
	{
		$this->layout->content = View::make('app');
	}

}