<?php if (!defined('BASEPATH'))
	exit('No direct script access allowed');

class Signin_model extends CI_Model
{
	function __construct()
	{
		parent::__construct();
	}

	function get_user($id)
	{
		$this->db->where('ID', $id);
		return $this->db->get('users')->row();
	}

	public function login_user($email, $pass)
	{

		$this->db->select('*');
		$this->db->from('users');
		$this->db->where('Email', $email);
		$this->db->where('Password', $pass);

		// var_dump($query);
		if ($query = $this->db->get()) {
			return $query->row();
		} else {
			return false;
		}
	}
	public function check_user($email)
	{

		$this->db->select('*');
		$this->db->from('users');
		$this->db->where('Email', $email);
		$query = $this->db->get();

		if ($query->num_rows() > 0) {
			return TRUE;
		} else {
			return FALSE;
		}
	}
}
