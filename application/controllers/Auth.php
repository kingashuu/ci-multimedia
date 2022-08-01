<?php if (!defined('BASEPATH')) 
				exit('No direct script access allowed');

class Auth extends CI_Controller 
{
	function __construct() 
	{
        parent::__construct();
        $this->load->model('Users_model');
        $this->load->model('Signin_model');
		$this->load->model('Employee_model');
        $this->load->model('Application_settings_model');
        
		$this->load->helper('form');
		$this->load->helper('security');
		$this->load->library('form_validation');

	}
	
	public function index(){
        $data = array();
        if($this->session->userdata('isUserLoggedIn')){
            $data['_view'] = 'users/users_list';
            $this->load->view('layouts/main',$data);
        }else{
            $data['title'] = 'Login Page';
            $this->load->view('login');
        }
    } 

    public function Noaccess(){
        $data = array();
        if($this->session->userdata('isUserLoggedIn')){
            $data['_view'] = 'noaccess';
            $this->load->view('layouts/main',$data);
        }else{
            $data['title'] = 'Login Page';
            $this->load->view('login');
        }
    }

    public function login() {
 
        if(!$this->session->userdata('isUserLoggedIn')){
            $this->form_validation->set_rules('email', 'Email', 'required');
            $this->form_validation->set_rules('password', 'Password', 'required');
    
            if ($this->form_validation->run() == FALSE) {
                $this->index();
            } else {
                $email = $this->input->post('email');
                $password = $this->input->post('password');
                
                $user = $this->Signin_model->check_user($email);
                if(!$user OR $user ==NULL ) {
                    $this->session->set_flashdata('login_error', 'ይህ መለያ አይታወቅም, እባኮ መለያዎንና የይለፍ ቃሉን በትክክል ያስገቡ', 300);
                    redirect('Auth/login');
                }else{

                    $login_data = $this->Signin_model->login_user($email, md5($password));
                    
                    if(!$login_data OR $user ==NULL) {
                        $this->session->set_flashdata('login_error', 'የተሳሳተ መለያና የይለፍ ቃል! የእባኮ መለያዎንና የይለፍ ቃሉን በትክክል ያስገቡ', 300);
                        redirect('Auth/login');
                    }else if($login_data->Is_Active != 1) {
                            $this->session->set_flashdata('login_error', 'ይህ አካዉንት ተዘግቱዋል። እባኮ ሲስትም ሀላፊዉን (adminstrator) ያናግሩ.', 300);
                            redirect('Auth/login');
                    }else{
						
						$emp_data = $this->Employee_model->get_by_id($login_data->Employee_ID);
						
                        $data = array(
                            'user_id' => $login_data->ID,
                            'employee_id' => $login_data->Employee_ID,
							'employee_name' => $emp_data->First_Name." ".$emp_data->Middle_Name,
							'employee_job_titel' => $emp_data->Job_Title,
                            'isUserLoggedIn' => TRUE,
                            'user_lavel' => $login_data->Access_Level,
                            'email' => $login_data->Email,
                            'app_setting' => $this->Application_settings_model->get_by_id(1)
                        );
                            
                        $this->session->set_userdata($data);
                        redirect('welcome');

                    }
                } 
            } 
        }else{
            redirect('welcome');
        }    
    }

    public function logout(){
        $this->session->unset_userdata('isUserLoggedIn');
        $this->session->unset_userdata('userId');
        $this->session->sess_destroy();
        redirect('Auth');
    }
}