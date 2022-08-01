<?php 
/*
    Generated by Manuigniter v2.0 
    www.manuigniter.com
*/
use Restserver\Libraries\REST_Controller;
defined('BASEPATH') OR exit('No direct script access allowed');
require APPPATH . '/libraries/REST_Controller.php';
require APPPATH . 'libraries/Format.php';
class Classification extends REST_Controller{
 function __construct()
 {
       parent::__construct();
      $this->load->model('Classification_model');
 } 
 /*
* Listing of classification
 */
public function get_all_post()
{
  try{
  $data['classification'] = $this->Classification_model->get_all_classification();
     if($data['classification'] && $data['classification']!=null){
       $classification_ar = array();
       foreach($data['classification'] as $c)
       {
       $c_ar = array();
       $c_ar['C_ID'] = $c['C_ID'];
       $c_ar['Classification_Name'] = $c['Classification_Name'];
       $c_ar['Classification_Code'] = $c['Classification_Code'];
       $c_ar['Description'] = $c['Description'];
       $classification_ar[] = $c_ar;
       }
       $response = array(
       'status' => 200,
       'message' => 'get all data Succesfully',
       'data' => $classification_ar,
       );
       $this->response($response, REST_Controller::HTTP_OK);
     }
     else{
       $response = array(
      'status' => 400,
      'message' => 'Detail is not found'
        );
       $this->response($response, REST_Controller::HTTP_OK); 
        }
       } catch (Exception $ex) {
             throw new Exception('Classification controller_name : Error in get_all_post function - ' . $ex);
        }  
}
 /*
  * Adding a new classification
  */
 function addnew_post()
 {  
  try{
      $params = array(
       'Classification_Name'=> $this->input->post('Classification_Name'),
       'Classification_Code'=> $this->input->post('Classification_Code'),
       'Description'=> $this->input->post('Description'),
        );
       $this->load->library('upload');
       $this->load->library('form_validation');
       if(isset($_POST) && count($_POST) > 0)     
        {  
            $C_ID= $this->Classification_model->add_classification($params);
   $data['classification'] = $this->Classification_model->get_classification($C_ID);
           $response = array(
            'status' => 200,
            'message' => 'Succesfully Added',
            'data' => $data
             );
           $this->response($response, REST_Controller::HTTP_OK);
        }
        else
        { 
           $response = array(
            'status' => 400,
            'message' => 'Not Added try again',
            'data' => ''
             );
           $this->response($response, REST_Controller::HTTP_OK);
        }
       } catch (Exception $ex) {
             throw new Exception('Classification controller_name : Error in new classification function - ' . $ex);
       }  
 }  
  /*
  * Editing a classification
 */
  function edit_post($C_ID)
 {   
  try{
   $data['classification'] = $this->Classification_model->get_classification($C_ID);
       $this->load->library('upload');
       $this->load->library('form_validation');
     if(isset($data['classification']['C_ID']))
      {
        $params = array(
           'Classification_Name'=> $this->input->post('Classification_Name'),
           'Classification_Code'=> $this->input->post('Classification_Code'),
           'Description'=> $this->input->post('Description'),
        );
          if(isset($_POST) && count($_POST) > 0)     
           {  
           $this->Classification_model->update_classification($C_ID,$params);
           $response = array(
            'status' => 200,
            'message' => 'Succesfully Updated',
            'data' => $C_ID
             );
           $this->response($response, REST_Controller::HTTP_OK);
           }
           else
          {
           $response = array(
            'status' => 400,
            'message' => 'Not Updated Try again',
            'data' => $C_ID
             );
           $this->response($response, REST_Controller::HTTP_OK);
          }
  }
       } catch (Exception $ex) {
             throw new Exception('Classification controller_name : Error in edit_post function - ' . $ex);
        }  
} 
/*
  * Deleting classification
  */
  function remove_post($C_ID)
   {
  try{
      $classification = $this->Classification_model->get_classification($C_ID);
  // check if the classification exists before trying to delete it
       if(isset($classification['C_ID']))
       {
         $this->Classification_model->delete_classification($C_ID);
           $response = array(
            'status' => 200,
            'message' => 'Succesfully Removed',
            'data' => $C_ID
             );
           $this->response($response, REST_Controller::HTTP_OK);
       }
       else
           $response = array(
            'status' => 400,
            'message' => 'Not Updated Try again',
            'data' => $C_ID
             );
           $this->response($response, REST_Controller::HTTP_OK);
       } catch (Exception $ex) {
             throw new Exception('Classification controller_name : Error in remove_post function - ' . $ex);
        }  
  }
 }