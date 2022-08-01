<?php

if (!defined('BASEPATH'))
    exit('No direct script access allowed');

class Application_settings_model extends CI_Model
{

    public $table = 'application_settings';
    public $id = 'ID';
    public $order = 'DESC';

    function __construct()
    {
        parent::__construct();
    }

    // get all
    function get_all()
    {
        $this->db->order_by($this->id, $this->order);
        return $this->db->get($this->table)->result();
    }

    // get data by id
    function get_by_id($id)
    {
        $this->db->where($this->id, $id);
        return $this->db->get($this->table)->row();
    }
    
    // get total rows
    function total_rows($q = NULL) {
        $this->db->like('ID', $q);
	$this->db->or_like('Application_Title', $q);
	$this->db->or_like('Abbreviations', $q);
	$this->db->or_like('Email_Address', $q);
	$this->db->or_like('Phone', $q);
	$this->db->or_like('Favicon', $q);
	$this->db->or_like('Logo', $q);
	$this->db->or_like('Language', $q);
	$this->db->or_like('Footer_Text', $q);
	$this->db->from($this->table);
        return $this->db->count_all_results();
    }

    // get data with limit and search
    function get_limit_data($limit, $start = 0, $q = NULL) {
        $this->db->order_by($this->id, $this->order);
        $this->db->like('ID', $q);
	$this->db->or_like('Application_Title', $q);
	$this->db->or_like('Abbreviations', $q);
	$this->db->or_like('Email_Address', $q);
	$this->db->or_like('Phone', $q);
	$this->db->or_like('Favicon', $q);
	$this->db->or_like('Logo', $q);
	$this->db->or_like('Language', $q);
	$this->db->or_like('Footer_Text', $q);
	$this->db->limit($limit, $start);
        return $this->db->get($this->table)->result();
    }

    // insert data
    function insert($data)
    {
        $this->db->insert($this->table, $data);
    }

    // update data
    function update($id, $data)
    {
        $this->db->where($this->id, $id);
        $this->db->update($this->table, $data);
    }

    // delete data
    function delete($id)
    {
        $this->db->where($this->id, $id);
        $this->db->delete($this->table);
    }

}

/* End of file Application_settings_model.php */
/* Location: ./application/models/Application_settings_model.php */
/* Please DO NOT modify this information : */
/* Developed by Afronex Tech Hub  2018-11-20 08:54:05 */
/* https://www.afronex.com */