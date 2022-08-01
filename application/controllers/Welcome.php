<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Welcome extends CI_Controller {

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
        // if (!$this->session->userdata('isUserLoggedIn')) {
        //     redirect('Auth/login');
        // }

	}
	
	public function index(){
        $data = array();
        if($this->session->userdata('isUserLoggedIn')){
			$data['_view'] = 'dashboard';
			$this->load->view('layouts/main',$data);
        }else{
            $data['title'] = 'Login Page';
            $this->load->view('admin_login');
        }
    } 

    public function Noaccess(){
        $data = array();
        if($this->session->userdata('isUserLoggedIn')){
            $data['_view'] = 'noaccess';
            $this->load->view('layouts/main',$data);
        }else{
            $data['title'] = 'Login Page';
            $this->load->view('admin_login');
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
                    redirect('welcome/login');
                }else{

                    $login_data = $this->Signin_model->login_user($email, md5($password));
                    
                    if(!$login_data OR $user ==NULL) {
                        $this->session->set_flashdata('login_error', 'የተሳሳተ መለያና የይለፍ ቃል! የእባኮ መለያዎንና የይለፍ ቃሉን በትክክል ያስገቡ', 300);
                        redirect('welcome/login');
                    }else if($login_data->Is_Active != 1) {
                            $this->session->set_flashdata('login_error', 'ይህ አካዉንት ተዘግቱዋል። እባኮ ሲስትም ሀላፊዉን (adminstrator) ያናግሩ.', 300);
                            redirect('welcome/login');
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
        redirect('welcome');
    }


	// public function index()
	// {
	// 	$data['_view'] = 'dashboard';
    //     $this->load->view('layouts/main',$data);
	// }
	// public function login()
	// {
	// 	$this->load->library('form_validation');
	// 	$this->form_validation->set_rules('password','Password','required');
	// 	$this->form_validation->set_rules('username','username','required'); 
	// 	if($this->form_validation->run())     
    //     { 
    //     		$username=$this->input->post('username');
    //     		$password=$this->input->post('password');
	// 			if($username!="username@gmail.com" && $password!="admin123")
    //     		{ 
	// 				$this->session->set_flashdata('alertDmessage','Invalid Username or password'); 
	// 				  $this->session->set_flashdata('login_msg', '<div class="alert alert-danger text-center">Login Failed!! Please try again.</div>');
	// 				redirect('admin');
    //     		}
    //     		else
    //     		{
 	// 				redirect('Dashboard/index');
    //     		}
	// 	}
    //     else
    //     { 
 	// 		$data['logintype'] = 'admin';
	// 		$this->load->view('admin_login',$data);
    //     }
		 
	// }
}
