<?php

if (!defined('BASEPATH'))
    exit('No direct script access allowed');

class Employee extends CI_Controller
{
    function __construct()
    {
        parent::__construct();
        //$this->load->model('Department_model');
        //$this->load->model('Departments_model');
        $this->load->model('Employee_model');
        $this->load->library('form_validation');

        $this->uploadPath = 'uploads/photos/'; 

        if(!$this->session->userdata('isUserLoggedIn')){
            redirect('Auth/login');
        }
        
        /*if($this->session->userdata('user_lavel') != 0){
            redirect('Auth/Noaccess');
        }*/
            
    }

    public function index()
    {
        /*
        $q = urldecode($this->input->get('q', TRUE));
        $start = intval($this->input->get('start'));
        
        if ($q <> '') {
            $config['base_url'] = base_url() . 'employee/?q=' . urlencode($q);
            $config['first_url'] = base_url() . 'employee/?q=' . urlencode($q);
        } else {
            $config['base_url'] = base_url() . 'employee/';
            $config['first_url'] = base_url() . 'employee/';
        }

        $config['per_page'] = 50;
        $config['page_query_string'] = TRUE;
        $config['total_rows'] = $this->Employee_model->total_rows($q);
        $employee = $this->Employee_model->get_limit_data($config['per_page'], $start, $q);
		$department = $this->Department_model->get_all();

        $this->load->library('pagination');
        $this->pagination->initialize($config);*/

        $data = array(
            'employee_data' => $this->Employee_model->get_all(),
            'start' => 0,
        );
		
        $data['stock'] = $data['office'] = $data['employeemenu'] = true; 

        //$data['department'] = $this->Department_model->get_all();
        //$data['all_departments'] = $this->Departments_model->get_all_departments();
		$data['PageTitle'] = 'የሰራተኛ (አስረካቢ / ተረካቢ) መረጃ መዝገቦች ዝርዝር';
		$data['_view'] = 'employee/employee_list';
		$this->load->view('layouts/main',$data);
    }

    public function read($id) 
    {
        $row = $this->Employee_model->get_by_id($id);
        if ($row) {
            $data = array(
            'ID' => $row->ID,
            'First_Name' => $row->First_Name,
            'Middle_Name' => $row->Middle_Name,
            'Last_Name' => $row->Last_Name,
            'Sex' => $row->Sex,
            'Job_Title' => $row->Job_Title,
            'Phone' => $row->Phone,
            'Email' => $row->Email,
            'Moblie' => $row->Moblie,
            'Address' => $row->Address,
            'Department' => $row->Department,
            'ID_Number' => $row->ID_Number,
            'Photo' => $row->Photo,
            );
			
            //$department = $this->Department_model->get_all();
            //$data['departments'] = $this->Departments_model->get_all();
			//$data['department'] = $department;
			$data['PageTitle'] = 'የሰራተኛ (አስረካቢ / ተረካቢ) መረጃ መዝገብ ምልከታ';
			$data['_view'] = 'employee/employee_read';
			$this->load->view('layouts/main',$data);
        } else {
            $this->session->set_flashdata('e_message', 'መረጃዉ አልተገኘም');
            redirect(site_url('employee'));
        }
    }

    public function create() 
    {
        $data = array(
            'button' => 'ይመዝገብ',
            'action' => site_url('employee/create_action'),
            'ID' => set_value('ID'),
            'First_Name' => set_value('First_Name'),
            'Middle_Name' => set_value('Middle_Name'),
            'Last_Name' => set_value('Last_Name'),
            'Sex' => set_value('Sex'),
            'Job_Title' => set_value('Job_Title'),
            'Phone' => set_value('Phone'),
            'Email' => set_value('Email'),
            'Moblie' => set_value('Moblie'),
            'Address' => set_value('Address'),
            'Department' => set_value('Department'),
            'ID_Number' => set_value('ID_Number'),
            'Photo' => set_value('Photo'),
            );
        
        //$department = $this->Department_model->get_all();	
        //$data['departments'] = $this->Departments_model->get_all();
		//$data['department'] = $department;
		$data['PageTitle'] = 'አዲስ ሰራተኛ (አስረካቢ / ተረካቢ) መረጃ መመዝገቢያ ቅጽ';
		$data['_view'] = 'employee/employee_form';
		$this->load->view('layouts/main',$data);
    }
    
    public function create_action() 
    {
        $this->_rules();

        if ($this->form_validation->run() == FALSE) {
            $this->create();
        } else {

            
            if(!empty($_FILES['Photo']['name'])){ 
				$imageName = $_FILES['Photo']['name']; 
				 
				// File upload configuration 
				$config['upload_path'] = $this->uploadPath; 
				$config['allowed_types'] = 'jpg|jpeg|png|gif'; 
				 
				// Load and initialize upload library 
				$this->load->library('upload', $config); 
				$this->upload->initialize($config); 
				 
				// Upload file to server 
				$this->upload->do_upload('Photo');
				if($this->upload->do_upload('Photo')){ 
					// Uploaded file data 
					$fileData = $this->upload->data(); 
					$imgData['file_name'] = $fileData['file_name']; 
				}else{ 
					$error = $this->upload->display_errors();  
					$this->session->set_flashdata('upload_message', $error);  
				} 
			} 

			
			if(empty($error)){ 
                $data = array(
                    'First_Name' => $this->input->post('First_Name',TRUE),
                    'Middle_Name' => $this->input->post('Middle_Name',TRUE),
                    'Last_Name' => $this->input->post('Last_Name',TRUE),
                    'Sex' => $this->input->post('Sex',TRUE),
                    'Job_Title' => $this->input->post('Job_Title',TRUE),
                    'Phone' => $this->input->post('Phone',TRUE),
                    'Email' => $this->input->post('Email',TRUE),
                    'Moblie' => $this->input->post('Moblie',TRUE),
                    'Address' => $this->input->post('Address',TRUE),
                    'Department' => $this->input->post('Department',TRUE),
                    'ID_Number' => $this->input->post('ID_Number',TRUE),
                    'Photo' =>  $imgData['file_name'],
                );

                $this->Employee_model->insert($data);
				$this->session->set_flashdata('s_message', 'መረጃዉ ተመዝግቧል');
				redirect(site_url('employee'));
			}else{
				$this->session->set_flashdata('e_message', 'መረጃዉ አልተመዘገበም እንደገና ይሞክሩ');
				redirect(site_url('employee'));
			}
        }
    }
    
    public function update($id) 
    {
        $row = $this->Employee_model->get_by_id($id);

        if ($row) {
            $data = array(
            'button' => 'ይመዝገብ',
            'action' => site_url('employee/update_action'),
            'ID' => set_value('ID', $row->ID),
            'First_Name' => set_value('First_Name', $row->First_Name),
            'Middle_Name' => set_value('Middle_Name', $row->Middle_Name),
            'Last_Name' => set_value('Last_Name', $row->Last_Name),
            'Sex' => set_value('Sex', $row->Sex),
            'Job_Title' => set_value('Job_Title', $row->Job_Title),
            'Phone' => set_value('Phone', $row->Phone),
            'Email' => set_value('Email', $row->Email),
            'Moblie' => set_value('Moblie', $row->Moblie),
            'Address' => set_value('Address', $row->Address),
            'Department' => set_value('Department', $row->Department),
            'ID_Number' => set_value('ID_Number', $row->ID_Number),
            'Photo' => set_value('Photo', $row->Photo),
            );
						
            //$department = $this->Department_model->get_all();
            //$data['departments'] = $this->Departments_model->get_all();
			//$data['department'] = $department;
			$data['PageTitle'] = 'የነባር ሰራተኛ (አስረካቢ / ተረካቢ)  መረጃ ማሻሻያ ቅጽ';
			$data['_view'] = 'employee/employee_form';
			$this->load->view('layouts/main',$data);
        } else {
            $this->session->set_flashdata('e_message', 'መረጃዉ አልተገኘም');
            redirect(site_url('employee'));
        }
    }
    
    public function update_action() 
    {
        $this->_rules();

        if ($this->form_validation->run() == FALSE) {
            
            $this->update($this->input->post('ID', TRUE));
        
        } else {

			$row = $this->Employee_model->get_by_id($this->input->post('ID', TRUE));
			$prevImage = $row->Photo;


			if(!empty($_FILES['Photo']['name'])){ 
				$imageName = $_FILES['Photo']['name']; 
				 
				// File upload configuration 
				$config['upload_path'] = $this->uploadPath; 
				$config['allowed_types'] = 'jpg|jpeg|png|gif'; 
				 
				// Load and initialize upload library 
				$this->load->library('upload', $config); 
				$this->upload->initialize($config); 
				 
				// Upload file to server 
				$this->upload->do_upload('Photo');
				if($this->upload->do_upload('Photo')){ 
					// Uploaded file data 
					$fileData = $this->upload->data(); 
					$imgData['file_name'] = $fileData['file_name'];
					
					// Remove old file from the server  
					if(!empty($prevImage)){ 
						@unlink($this->uploadPath.$prevImage);  
					} 
				}else{ 
					$error = $this->upload->display_errors();
					$this->session->set_flashdata('upload_message', $error);  
				} 
			}else{
                $imgData['file_name'] = $prevImage;
            } 

			
			if(empty($error)){ 
                $data = array(
                    'First_Name' => $this->input->post('First_Name',TRUE),
                    'Middle_Name' => $this->input->post('Middle_Name',TRUE),
                    'Last_Name' => $this->input->post('Last_Name',TRUE),
                    'Sex' => $this->input->post('Sex',TRUE),
                    'Job_Title' => $this->input->post('Job_Title',TRUE),
                    'Phone' => $this->input->post('Phone',TRUE),
                    'Email' => $this->input->post('Email',TRUE),
                    'Moblie' => $this->input->post('Moblie',TRUE),
                    'Address' => $this->input->post('Address',TRUE),
                    'Department' => $this->input->post('Department',TRUE),
                    'ID_Number' => $this->input->post('ID_Number',TRUE),
                    'Photo' =>  $imgData['file_name'],
                );

                $this->Employee_model->update($this->input->post('ID', TRUE), $data);
                $this->session->set_flashdata('s_message', 'መረጃዉ ተቀይሯል');
				redirect(site_url('employee'));
			}else{
				$this->session->set_flashdata('e_message', 'መረጃዉ አልተመዘገበም እንደገና ይሞክሩ');
				redirect(site_url('employee'));
			}

        }
    }
    
    public function delete($id) 
    {
        $row = $this->Employee_model->get_by_id($id);

        if ($row) {
            $this->Employee_model->delete($id);
            $this->session->set_flashdata('s_message', 'መረጃዉ ተሰርዟል');
            redirect(site_url('employee'));
        } else {
            $this->session->set_flashdata('e_message', 'መረጃዉ አልተገኘም');
            redirect(site_url('employee'));
        }
    }

    public function _rules() 
    {
	$this->form_validation->set_rules('First_Name', 'first name', 'trim|required');
	$this->form_validation->set_rules('Middle_Name', 'middle name', 'trim|required');
	//$this->form_validation->set_rules('Last_Name', 'last name', 'trim|required');
	$this->form_validation->set_rules('Sex', 'sex', 'trim|required');
	$this->form_validation->set_rules('Job_Title', 'job title', 'trim|required');
	//$this->form_validation->set_rules('Phone', 'phone', 'trim|required');
	//$this->form_validation->set_rules('Email', 'email', 'trim|required');
	//$this->form_validation->set_rules('Moblie', 'moblie', 'trim|required');
	//$this->form_validation->set_rules('Address', 'address', 'trim|required');
	$this->form_validation->set_rules('Department', 'department', 'trim|required');
	//$this->form_validation->set_rules('ID_Number', 'id number', 'trim|required');

	$this->form_validation->set_rules('ID', 'ID', 'trim');
	$this->form_validation->set_error_delimiters('<span class="text-danger">', '</span>');
    }

}

/* End of file Employee.php */
/* Location: ./application/controllers/Employee.php */
/* Please DO NOT modify this information : */
/* Developed by Afronex Tech Hub  2018-11-20 08:54:05 */
/* https://www.afronex.com */