<?php
class Login_model extends CI_Model{
  
function validate($user_name, $password){
    $this->db->where('User_Name', $user_name);
    $this->db->where('isDeleted', 0);
    $query = $this->db->get('users');

    //$user = $query->result(); //array
    $user = $query->row_array(); //object


    if(!empty($user)){
      if(verifyHashedPassword($password, $user['Password'])){
        return $user;
      }else{
        return array();
      }
    }else{
      return array();
    }
}

 
 
}