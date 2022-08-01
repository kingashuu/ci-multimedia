<?php

if (!defined('BASEPATH'))
    exit('No direct script access allowed');

class Users extends CI_Controller
{
    function __construct()
    {
        parent::__construct();
        $this->load->model('Users_model');
        $this->load->model('Employee_model');
        $this->load->library('form_validation');

        if(!$this->session->userdata('isUserLoggedIn')){
            redirect('Auth/login');
        }
        
        if($this->session->userdata('user_lavel') != 0){
           redirect('Auth/Noaccess');
        }     
    }

    public function index()
    {
        $q = urldecode($this->input->get('q', TRUE));
        $start = intval($this->input->get('start'));
        
        if ($q <> '') {
            $config['base_url'] = base_url() . 'users/?q=' . urlencode($q);
            $config['first_url'] = base_url() . 'users/?q=' . urlencode($q);
        } else {
            $config['base_url'] = base_url() . 'users/';
            $config['first_url'] = base_url() . 'users/';
        }

        $config['per_page'] = 10;
        $config['page_query_string'] = TRUE;
        $config['total_rows'] = $this->Users_model->total_rows($q);
        $users = $this->Users_model->get_limit_data($config['per_page'], $start, $q);

        $this->load->library('pagination');
        $this->pagination->initialize($config);

        $data = array(
            'users_data' => $users,
            'q' => $q,
            'pagination' => $this->pagination->create_links(),
            'total_rows' => $config['total_rows'],
            'start' => $start,
        );
        $data['employees'] = $this->Employee_model->get_all();
        $data['PageTitle'] = 'የሲስተም ተጠቃሚ ዝርዝር';
        //$this->load->view('users/users_list', $data);
        $data['_view'] = 'users/users_list';
		$this->load->view('layouts/main',$data);
    }

    public function read($id) 
    {
        $row = $this->Users_model->get_by_id($id);
        if ($row) {
            $data = array(
            'ID' => $row->ID,
            'Employee_ID' => $row->Employee_ID,
            'Email' => $row->Email,
            'Is_Active' => $row->Is_Active,
            'Password' => $row->Password,
            'Access_Level' => $row->Access_Level,
            'Created_Date' => $row->Created_Date,
	        );

            $data['employees'] = $this->Employee_model->get_all();
            //$this->load->view('users/users_read', $data);
            $data['PageTitle'] = "የሲስተም ተጠቃሚ ምልከታ";
            $data['_view'] = 'users/users_read';
            $this->load->view('layouts/main',$data);
        } else {
            $this->session->set_flashdata('e_message', 'መረጃዉ አልተገኘም');
            redirect(site_url('users'));
        }
    }

    public function create() 
    {
        $data = array(
            'button' => 'መዝግብ',
            'action' => site_url('users/create_action'),
            'ID' => set_value('ID'),
            'Employee_ID' => set_value('Employee_ID'),
            'Email' => set_value('Email'),
            'Is_Active' => set_value('Is_Active'),
            'Password' => set_value('Password'),
            'Password2' => set_value('Password2'),
            'Access_Level' => set_value('Access_Level'),
            'Created_Date' => set_value('Created_Date'),
        );

        $data['employees'] = $this->Employee_model->get_all();
        $data['PageTitle'] = "የሲስተም ተጠቃሚ ቅጽ";
        //$this->load->view('users/users_form', $data);
        $data['_view'] = 'users/users_form';
		$this->load->view('layouts/main',$data);
    }
    
    public function create_action() 
    {
        $this->_rules();

        if ($this->form_validation->run() == FALSE) {
            $this->create();
        } else {

        $ciphertext = md5($this->input->post('Password',TRUE));

            $data = array(
                'Employee_ID' => $this->input->post('Employee_ID',TRUE),
                'Email' => $this->input->post('Email',TRUE),
                'Is_Active' => $this->input->post('Is_Active',TRUE),
                'Password' => $ciphertext,
                'Access_Level' => $this->input->post('Access_Level',TRUE),
                'Created_Date' => date('Y-m-d H:i:s'),//$this->input->post('Created_Date',TRUE),
            );

            $this->Users_model->insert($data);
            $this->session->set_flashdata('s_message', 'መረጃዉ ተመዝግቡዋል');
            redirect(site_url('users'));
        }
    }
    
    public function update($id) 
    {
        $row = $this->Users_model->get_by_id($id);

        if ($row) {
            $data = array(
                'button' => 'ይመዝገብ',
                'action' => site_url('users/update_action'),
                'ID' => set_value('ID', $row->ID),
                'Employee_ID' => set_value('Employee_ID', $row->Employee_ID),
                'Email' => set_value('Email', $row->Email),
                'Is_Active' => set_value('Is_Active', $row->Is_Active),
                //'Password' => set_value('Password', $row->Password),
                'Access_Level' => set_value('Access_Level', $row->Access_Level),
                //'Created_Date' => set_value('Created_Date', $row->Created_Date),
            );

            $data['employees'] = $this->Employee_model->get_all();
            $data['PageTitle'] = "Update user";
            //$this->load->view('users/users_form', $data);
            $data['_view'] = 'users/users_update_form';
            $this->load->view('layouts/main',$data);
        } else {
            $this->session->set_flashdata('e_message', 'መረጃዉ አልተገኘም');
            redirect(site_url('users'));
        }
    }
    
    public function update_action() 
    {
        $this->_rules_update();

        if ($this->form_validation->run() == FALSE) {
            $this->update($this->input->post('ID', TRUE));
        } else {
            $data = array(
                //'Employee_ID' => $this->input->post('Employee_ID',TRUE),
                'Email' => $this->input->post('Email',TRUE),
                'Is_Active' => $this->input->post('Is_Active',TRUE),
                //'Password' => $this->input->post('Password',TRUE),
                'Access_Level' => $this->input->post('Access_Level',TRUE),
                //'Created_Date' => $this->input->post('Created_Date',TRUE),
                'Created_Date' => date('Y-m-d H:i:s'),
            );

            $this->Users_model->update($this->input->post('ID', TRUE), $data);
            $this->session->set_flashdata('s_message', 'መረጃዉ ተመዝግቡዋል');
            redirect(site_url('users'));
        }
    }


    public function password_update($id) 
    {
        $row = $this->Users_model->get_by_id($id);

        if ($row) {
            $data = array(
                'button' => 'ይመዝገብ',
                'action' => site_url('users/password_update_action'),
                'ID' => set_value('ID', $row->ID),
                'Password' => set_value('Password', ""),
            );

            $data['employees'] = $this->Employee_model->get_all();
            $data['PageTitle'] = "የሲስተም ተጠቃሚ ይለፍ ቃል ቅጽ";
            //$this->load->view('users/users_form_password', $data);
            $data['_view'] = 'users/users_form_password';
            $this->load->view('layouts/main',$data);
        } else {
            $this->session->set_flashdata('e_message', 'መረጃዉ አልተገኘም');
            redirect(site_url('users'));
        }
    }
    
    public function password_update_action() 
    {
        $this->_password_rules();

        if ($this->form_validation->run() == FALSE) {
            $this->password_update($this->input->post('ID', TRUE));
        } else {
            $ciphertext = md5($this->input->post('Password',TRUE));
            $data = array(
                'Password' => $ciphertext,
            );

            $this->Users_model->update($this->input->post('ID', TRUE), $data);
            $this->session->set_flashdata('s_message', 'መረጃዉ ተመዝግቡዋል');
            redirect(site_url('users'));
        }
    }
    
    public function delete($id) 
    {
        $row = $this->Users_model->get_by_id($id);

        if ($row) {
            $this->Users_model->delete($id);
            $this->session->set_flashdata('e_message', 'መረጃዉ ተሰርዙዋል');
            redirect(site_url('users'));
        } else {
            $this->session->set_flashdata('s_message', 'መረጃዉ አልተገኘም');
            redirect(site_url('users'));
        }
    }

    public function _rules() 
    {
	$this->form_validation->set_rules('Employee_ID', 'employee id', 'trim|required');
	$this->form_validation->set_rules('Email', 'email', 'trim|required');
	$this->form_validation->set_rules('Is_Active', 'is active', 'trim|required');
	$this->form_validation->set_rules('Password', 'password', 'trim|required|min_length[6]|max_length[20]');
	$this->form_validation->set_rules('Access_Level', 'access level', 'trim|required');
	//$this->form_validation->set_rules('Created_Date', 'created date', 'trim|required');

    $this->form_validation->set_rules('Password2','Confirmation Password', 'required|min_length[6]|max_length[20]|matches[Password]');

	$this->form_validation->set_rules('ID', 'ID', 'trim');
	$this->form_validation->set_error_delimiters('<span class="text-danger">', '</span>');
    }

    public function _password_rules() 
    {
	$this->form_validation->set_rules('Password', 'password', 'trim|required|min_length[6]|max_length[20]');
    $this->form_validation->set_rules('Password2','Confirmation Password', 'required|min_length[6]|max_length[20]|matches[Password]');

	$this->form_validation->set_rules('ID', 'ID', 'trim');
	$this->form_validation->set_error_delimiters('<span class="text-danger">', '</span>');
    }

    
    public function _rules_update() 
    {
	//$this->form_validation->set_rules('Employee_ID', 'employee id', 'trim|required');
	$this->form_validation->set_rules('Email', 'email', 'trim|required');
	$this->form_validation->set_rules('Is_Active', 'is active', 'trim|required');
	//$this->form_validation->set_rules('Password', 'password', 'trim|required|min_length[6]|max_length[20]');
	$this->form_validation->set_rules('Access_Level', 'access level', 'trim|required');
	//$this->form_validation->set_rules('Created_Date', 'created date', 'trim|required');

    //$this->form_validation->set_rules('Password2','Confirmation Password', 'required|min_length[6]|max_length[20]|matches[Password]');

	$this->form_validation->set_rules('ID', 'ID', 'trim');
	$this->form_validation->set_error_delimiters('<span class="text-danger">', '</span>');
    }

}
