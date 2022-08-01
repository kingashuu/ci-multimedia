<?php
defined('BASEPATH') OR exit('No direct script access allowed');

/*
| -------------------------------------------------------------------------
| URI ROUTING
| -------------------------------------------------------------------------
| This file lets you re-map URI requests to specific controller functions.
|
| Typically there is a one-to-one relationship between a URL string
| and its corresponding controller class/method. The segments in a
| URL normally follow this pattern:
|
|	example.com/class/method/id/
|
| In some instances, however, you may want to remap this relationship
| so that a different class/function is called than the one
| corresponding to the URL.
|
| Please see the user guide for complete details:
|
|	https://codeigniter.com/user_guide/general/routing.html
|
| -------------------------------------------------------------------------
| RESERVED ROUTES
| -------------------------------------------------------------------------
|
| There are three reserved routes:
|
|	$route['default_controller'] = 'welcome';
|
| This route indicates which controller class should be loaded if the
| URI contains no data. In the above example, the "welcome" class
| would be loaded.
|
|	$route['404_override'] = 'errors/page_missing';
|
| This route will tell the Router which controller/method to use if those
| provided in the URL cannot be matched to a valid route.
|
|	$route['translate_uri_dashes'] = FALSE;
|
| This is not exactly a route, but allows you to automatically route
| controller and method names that contain dashes. '-' isn't a valid
| class or method name character, so it requires translation.
| When you set this option to TRUE, it will replace ALL dashes in the
| controller and method URI segments.
|
| Examples:	my-controller/index	-> my_controller/index
|		my-controller/my-method	-> my_controller/my_method
*/
$route['default_controller'] = 'Dashboard/index';
$route['404_override'] = '';
$route['translate_uri_dashes'] = FALSE;
$route['admin'] = 'Welcome/login';
$route['logout'] = 'Welcome/login';
$route['classification'] = 'Classification/index';
$route['classification/(:any)'] = 'Classification/$1';
$route['classification/(:any)/(:any)'] = 'Classification/$1/$2';
$route['api/classification/get_all'] = 'api/Classification/get_all';
$route['api/classification/addnew'] = 'api/Classification/addnew';
$route['api/classification/edit'] = 'api/Classification/edit';
$route['api/classification/remove'] = 'api/Classification/remove'; 
                  
$route['multimedia'] = 'Multimedia/index';
$route['multimedia/(:any)'] = 'Multimedia/$1';
$route['multimedia/(:any)/(:any)'] = 'Multimedia/$1/$2';
$route['api/multimedia/get_all'] = 'api/Multimedia/get_all';
$route['api/multimedia/addnew'] = 'api/Multimedia/addnew';
$route['api/multimedia/edit'] = 'api/Multimedia/edit';
$route['api/multimedia/remove'] = 'api/Multimedia/remove'; 
                  
$route['sub_classification'] = 'Sub_classification/index';
$route['sub_classification/(:any)'] = 'Sub_classification/$1';
$route['sub_classification/(:any)/(:any)'] = 'Sub_classification/$1/$2';
$route['api/sub_classification/get_all'] = 'api/Sub_classification/get_all';
$route['api/sub_classification/addnew'] = 'api/Sub_classification/addnew';
$route['api/sub_classification/edit'] = 'api/Sub_classification/edit';
$route['api/sub_classification/remove'] = 'api/Sub_classification/remove'; 
                  
