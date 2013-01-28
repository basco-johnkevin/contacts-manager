<?php

class BaseModel extends Eloquent {

    protected $rules = array();

    protected $messages = array();

    protected $errors;

    public function validate($data)
    {
        // make a new validator object
        $v = \Validator::make($data, $this->rules, $this->messages);
       
        // check for failure
        if ($v->fails())
        {
            // set errors and return false
            $this->errors = $v->errors();

            return false;
        }
       
        // validation pass
        return true;
    }

    public function errors()
    {
        return $this->errors;
    }


}