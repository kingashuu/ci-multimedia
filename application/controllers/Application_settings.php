<?php

if (!defined('BASEPATH'))
    exit('No direct script access allowed');

class Application_settings extends CI_Controller
{
    public $Controller_Roles = array('updateSetting');

    function __construct()
    {
        parent::__construct();

        if(!$this->session->userdata('isUserLoggedIn')){
            redirect('Auth/login');
        }
        
        /*if($this->session->userdata('user_lavel') != 0){
            redirect('Auth/Noaccess');
        }*/

        $this->uploadPath = 'uploads/application/'; 
        $this->load->model('Application_settings_model');
        //$this->load->model('User_roles_model');
        $this->load->library('form_validation');
    }

    public function index()
    {
        $data = array(
            'application_settings_data' => $this->Application_settings_model->get_all(),
            'start' => 0,
        );
        $data['_view'] = 'application_settings/application_settings_list';
        $this->load->view('layouts/main', $data);
    }

    public function read($id)
    {
        $row = $this->Application_settings_model->get_by_id($id);
        if ($row) {
            $data = array(
                'ID' => $row->ID,
                'Office_Name' => $row->Office_Name,
                'Application_Title' => $row->Application_Title,
                'Abbreviations' => $row->Abbreviations,
                'Email_Address' => $row->Email_Address,
                'Phone' => $row->Phone,
                'TIN' => $row->TIN,
                'Favicon' => $row->Favicon,
                'Logo' => $row->Logo,
                'Language' => $row->Language,
                'Footer_Text' => $row->Footer_Text,
            );

            $data['_view'] = 'application_settings/application_settings_read';
            $this->load->view('layouts/main', $data);
        } else {
            $this->session->set_flashdata('message', $this->lang->line('Not_found_Msg'));
            redirect(site_url('application_settings'));
        }
    }

    public function get()
    {
        $row = $this->Application_settings_model->get_by_id(1);

        if ($row) {
            $data = array(
                'ID' => $row->ID,
                'Office_Name' => $row->Office_Name,
                'Application_Title' => $row->Application_Title,
                'Abbreviations' => $row->Abbreviations,
                'Email_Address' => $row->Email_Address,
                'Phone' => $row->Phone,
                'TIN' => $row->TIN,
                'Favicon' => $row->Favicon,
                'Logo' => $row->Logo,
                'Language' => $row->Language,
                'Footer_Text' => $row->Footer_Text,
            );
            return $data;
        } else {
            return null;
        }
    }

    public function update($id)
    {
        $row = $this->Application_settings_model->get_by_id($id);

        if ($row) {

            $data = array(
                'button' => 'ይመዝገብ',
                'action' => site_url('application_settings/update_action'),
                'ID' => set_value('ID', $row->ID),
                'Office_Name' => set_value('Office_Name', $row->Office_Name),
                'Application_Title' => set_value('Application_Title', $row->Application_Title),
                'Abbreviations' => set_value('Abbreviations', $row->Abbreviations),
                'Email_Address' => set_value('Email_Address', $row->Email_Address),
                'Phone' => set_value('Phone', $row->Phone),
                'TIN' => set_value('TIN', $row->TIN),
                // 'Favicon' => set_value('Favicon', $row->Favicon),
                'Logo' => set_value('Logo', $row->Logo),
                'Language' => set_value('Language', $row->Language),
                'Footer_Text' => set_value('Footer_Text', $row->Footer_Text),
            );

            $data['_view'] = 'application_settings/application_settings_form';
            $this->load->view('layouts/main', $data);
        } else {
            $this->session->set_flashdata('message', $this->lang->line('Not_found_Msg'));
            redirect(site_url('application_settings'));
        }
    }

    public function update_action()
    {
        $this->_rules();

        if ($this->form_validation->run() == FALSE) {
            $this->update($this->input->post('ID', TRUE));
        } else {

            $row = $this->Application_settings_model->get_by_id($this->input->post('ID', TRUE));
			$prevImage = $row->Logo;

            if(!empty($_FILES['Logo']['name'])){ 
				$imageName = $_FILES['Logo']['name']; 
				 
				// File upload configuration 
				$config['upload_path'] = $this->uploadPath; 
				$config['allowed_types'] = 'jpg|jpeg|png|gif'; 
				 
				// Load and initialize upload library 
				$this->load->library('upload', $config); 
				$this->upload->initialize($config); 
				 
				// Upload file to server 
				$this->upload->do_upload('Logo');
				if($this->upload->do_upload('Logo')){ 
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
			} 

			
			if(empty($error)){ 
                $data = array(
                    'Office_Name' => $this->input->post('Office_Name', TRUE),
                    'Application_Title' => $this->input->post('Application_Title', TRUE),
                    'Abbreviations' => $this->input->post('Abbreviations', TRUE),
                    'Email_Address' => $this->input->post('Email_Address', TRUE),
                    'Phone' => $this->input->post('Phone', TRUE),
                    'TIN' => $this->input->post('TIN', TRUE),
                    'Favicon' => $imgData['file_name'], //$this->input->post('Favicon', TRUE),
                    'Logo' =>  $imgData['file_name'],
                    'Language' => $this->input->post('Language', TRUE),
                    'Footer_Text' => $this->input->post('Footer_Text', TRUE),
                );

                //$this->Employee_model->update($this->input->post('ID', TRUE), $data);
                $this->Application_settings_model->update($this->input->post('ID', TRUE), $data);
                
                $app_data = $this->Application_settings_model->get_by_id(1);
                $this->session->unset_userdata('app_setting');
                $this->session->set_userdata('app_setting', $app_data);

                $this->session->set_flashdata('s_message', 'መረጃዉ ተቀይሯል');
				redirect(site_url('application_settings'));
			}else{
				$this->session->set_flashdata('e_message', 'መረጃዉ አልተመዘገበም እንደገና ይሞክሩ');
				redirect(site_url('application_settings'));
			}

            /*
            $config['upload_path'] = './uploads/application/';
            $config['allowed_types'] = 'png|jpg';
            $config['overwrite'] = TRUE;
            $config['file_name'] = 'logo at ' . time();
            // $config['max_size'] = 2000;
            // $config['max_width'] = 1500;
            // $config['max_height'] = 1500;

            $this->load->library('upload', $config);
            $this->upload->do_upload('Logo');
            if (!$this->upload->do_upload('Logo')) {
                $this->session->set_flashdata('message', $this->upload->display_errors());
                redirect(site_url('application_settings'));
            } else {

                $upload_data = $this->upload->data();
                $data = array(
                    'Office_Name' => $this->input->post('Office_Name', TRUE),
                    'Application_Title' => $this->input->post('Application_Title', TRUE),
                    'Abbreviations' => $this->input->post('Abbreviations', TRUE),
                    'Email_Address' => $this->input->post('Email_Address', TRUE),
                    'Phone' => $this->input->post('Phone', TRUE),
                    'TIN' => $this->input->post('TIN', TRUE),
                    'Favicon' => $upload_data['file_name'], //$this->input->post('Favicon', TRUE),
                    'Logo' => $upload_data['file_name'],
                    'Language' => $this->input->post('Language', TRUE),
                    'Footer_Text' => $this->input->post('Footer_Text', TRUE),
                );

                $this->Application_settings_model->update($this->input->post('ID', TRUE), $data);
                
                $app_data = $this->Application_settings_model->get_by_id(1);
                $this->session->unset_userdata('app_setting');
                $this->session->set_userdata('app_setting', $app_data);

                $this->session->set_flashdata('message', $this->lang->line('Updated_Msg'));
                redirect(site_url('application_settings'));
            }*/



        }
    }


    public function _rules()
    {
        $this->form_validation->set_rules('Application_Title', 'application title', 'trim|required');
        $this->form_validation->set_rules('Abbreviations', 'abbreviations', 'trim|required');
        //$this->form_validation->set_rules('Email_Address', 'email address', 'trim|required');
        //$this->form_validation->set_rules('Phone', 'phone', 'trim|required');
        //$this->form_validation->set_rules('Favicon', 'favicon', 'trim|required');
        //$this->form_validation->set_rules('Logo', 'logo', 'trim|required');
        //$this->form_validation->set_rules('Language', 'language', 'trim|required');
        //$this->form_validation->set_rules('Footer_Text', 'footer text', 'trim|required');

        $this->form_validation->set_rules('ID', 'ID', 'trim');
        $this->form_validation->set_error_delimiters('<span class="text-danger">', '</span>');
    }

}

/* End of file Application_settings.php */
/* Location: ./application/controllers/Application_settings.php */
/* Please DO NOT modify this information : */
/* Developed by Afronex Tech Hub  2018-11-20 08:54:05 */
/* https://www.afronex.com */