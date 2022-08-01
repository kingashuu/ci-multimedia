<?php

if (!defined('BASEPATH'))
    exit('No direct script access allowed');

class Employee_model extends CI_Model
{

    public $table = 'employee';
    public $id = 'ID';
    public $order = 'DESC';

    function __construct()
    {
        parent::__construct();
    }

    // get all
    function get_all()
    {
        $this->db->where("Department !=", "Admin");
        $this->db->order_by($this->id, $this->order);
        return $this->db->get($this->table)->result();
    }

    function get_selected_employee($emp_role){

        $this->db->order_by('employee.ID', $this->order);

        $this->db->select('employee.ID as ID, First_Name, Middle_Name, Last_Name, Sex, Job_Title, Phone,
        employee.Email as Email, Moblie, Address, Department, ID_Number, Photo, users.ID as User_ID, users.Email as User_Name,
        Is_Active, Access_Level, Created_Date');
        
        $this->db->where("Department !=", "Admin");
        $this->db->where("Access_Level", $emp_role);

        $this->db->from('employee');
        $this->db->join('users', 'employee.ID = users.Employee_ID');

        $query = $this->db->get();
        return $query->result();
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
	$this->db->or_like('First_Name', $q);
	$this->db->or_like('Middle_Name', $q);
	$this->db->or_like('Last_Name', $q);
	$this->db->or_like('Sex', $q);
	$this->db->or_like('Job_Title', $q);
	$this->db->or_like('Phone', $q);
	$this->db->or_like('Email', $q);
	$this->db->or_like('Moblie', $q);
	$this->db->or_like('Address', $q);
	$this->db->or_like('Department', $q);
  $this->db->or_like('ID_Number', $q);
  $this->db->where("Department !=", "Admin");
	$this->db->from($this->table);
        return $this->db->count_all_results();
    }

    // get data with limit and search
    function get_limit_data($limit, $start = 0, $q = NULL) {
        $this->db->order_by($this->id, $this->order);
        $this->db->like('ID', $q);
	$this->db->or_like('First_Name', $q);
	$this->db->or_like('Middle_Name', $q);
	$this->db->or_like('Last_Name', $q);
	$this->db->or_like('Sex', $q);
	$this->db->or_like('Job_Title', $q);
	$this->db->or_like('Phone', $q);
	$this->db->or_like('Email', $q);
	$this->db->or_like('Moblie', $q);
	$this->db->or_like('Address', $q);
	$this->db->or_like('Department', $q);
  $this->db->or_like('ID_Number', $q);
  $this->db->where("Department !=", "Admin");
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

    /*
        * Get employee by ID 
      */ 
      function get_employee($ID)
      {
        try{
           return $this->db->get_where('employee',array('ID'=>$ID))->row_array();
           } catch (Exception $ex) {
             throw new Exception('Employee_model Model : Error in get_employee function - ' . $ex);
           }  
      }
      /*
        * Get employee by  column name
      */ 
      function get_employeebyclm_name($clm_name,$clm_value)
      {
        try{
           return $this->db->get_where('employee',array($clm_name=>$clm_value))->row_array();
           } catch (Exception $ex) {
             throw new Exception('Employee_model Madel : Error in get_employeebyclm_name function - ' . $ex);
           }  
      }
     /*
        * Get All employee count 
      */ 
      function get_all_employee_count()
      {
        try{
           $this->db->from('employee');
           return $this->db->count_all_results();
           } catch (Exception $ex) {
             throw new Exception('Employee_model model : Error in get_all_employee_count function - ' . $ex);
           }  
      }
     /*
        * Get All with associated tables join employeecount 
      */ 
      function get_all_with_asso_employee()
      {
        try{
          $query = $this->db->get(); 
            if($query->num_rows() != 0){
               return $query->result_array();
            }else{
                return false;
            }
           } catch (Exception $ex) {
             throw new Exception('Employee_model model : Error in get_all_with_asso_employee function - ' . $ex);
           }  
      }
      /*
          * Get all employee 
      */ 
      function get_all_employee($params = array())
      {
        try{
              $this->db->order_by('ID', 'desc');
              $this->db->where("Department !=", "Admin");
              if(isset($params) && !empty($params)){
               $this->db->limit($params['limit'], $params['offset']);
              }
               return $this->db->get('employee')->result_array();
           } catch (Exception $ex) {
             throw new Exception('Employee_model model : Error in get_all_employee function - ' . $ex);
           }  
      } 
      /*
         * function to add new employee 
      */
      function add_employee($params)
      {
        try{
          $this->db->insert('employee',$params);
        return $this->db->insert_id();
           } catch (Exception $ex) {
             throw new Exception('Employee_model model : Error in add_employee function - ' . $ex);
           }  
      }
      /* 
          * function to update employee 
      */
      function update_employee($ID,$params)
      {
        try{
            $this->db->where('ID',$ID);
        return $this->db->update('employee',$params);
           } catch (Exception $ex) {
             throw new Exception('Employee_model model : Error in update_employee function - ' . $ex);
           }  
       }
     /* 
          * function to delete employee 
      */
       function delete_employee($ID)
       {
        try{
             return $this->db->delete('employee',array('ID'=>$ID));
           } catch (Exception $ex) {
             throw new Exception('Employee_model model : Error in delete_employee function - ' . $ex);
           }  
       }
      /*
        * Get employee by  column name where not in particular id
      */ 
      function get_employeebyclm_name_not_id($clm_name,$clm_value,$where_cond)
      {
        try{
            $this->db->where('ID!=', $where_cond);
           return $this->db->get_where('employee',array($clm_name=>$clm_value))->row_array();
           } catch (Exception $ex) {
             throw new Exception('Employee_model model : Error in get_employeebyclm_name_not_id function - ' . $ex);
           }  
      }
     /*
        * Get All with associated tables join employeecount 
      */ 
      function get_all_with_asso_employee_by_cat($column_name=null,$value_id=null,$params=array())
      {
        try{
          $query = $this->db->get(); 
            if($query->num_rows() != 0){
               return $query->result_array();
            }else{
                return false;
            }
           } catch (Exception $ex) {
             throw new Exception('Employee_model model : Error in get_all_with_asso_employee_by_cat function - ' . $ex);
           }  
      }
      /*
          * Get all employee_by_cat 
      */ 
      function get_all_employee_by_cat($column_name=null,$value_id=null,$params=array())
      {
        try{
              $this->db->order_by('ID', 'desc');
              $this->db->where($column_name, $value_id);
              if(isset($params) && !empty($params)){
               $this->db->limit($params['limit'], $params['offset']);
              }
               return $this->db->get('employee')->result_array();
           } catch (Exception $ex) {
             throw new Exception('Employee_model model : Error in get_all_employee_by_cat function - ' . $ex);
           }  
      } 

}

/* End of file Employee_model.php */
/* Location: ./application/models/Employee_model.php */
/* Please DO NOT modify this information : */
/* Developed by Afronex Tech Hub Application Development Team  2018-07-05 01:24:27 */
/* https://www.afronexhub.com */