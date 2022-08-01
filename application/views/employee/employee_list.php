
<div class="row">
    <div class="col-md-12">
        <div class="box box-info">
            <div class="box-header with-border">
                <h3 class="box-title">Employees List</h3>
            
            <div class="box-body">
              <div class="row clearfix">  	



<div class="row" style="margin-bottom: 10px">
    <div class="col-md-4">
        <?php echo anchor(site_url('employee/create'),'<i class="fa fa-plus"></i> አዲስ የሰራተኛ ምዝገባ', 'class="btn btn-success btn-flat"'); ?>
    </div>
    <div class="col-md-4 text-center">
        <div style="margin-top: 8px" id="message">
            <?php echo $this->session->userdata('s_message') <> '' ? "<p class='text-success'>".$this->session->userdata('s_message')."</p>" : ''; ?>
            <?php echo $this->session->userdata('e_message') <> '' ? "<p class='text-danger'>".$this->session->userdata('e_message')."</p>" : ''; ?>
            <?php echo $this->session->userdata('upload_message') <> '' ? "<p class='text-danger'>".$this->session->userdata('upload_message')."</p>" : ''; ?>
        </div>
    </div>
    <div class="col-md-1 text-right">
    </div>
    <div class="col-md-3 table-toolbar-right text-right">
            <div class="btn-group">
                    <a href="#" class="btn btn-default btn-flat" onclick="$('#datatable').tableExport({type:'excel',escape:'false'});" ><i class="fa fa-file-excel-o"></i></a>
                    <a href="#" class="btn btn-default btn-flat" onclick="$('#datatable').tableExport({type:'doc',escape:'false'});" ><i class="fa fa-file-word-o"></i></a>
                    <!--a href="#" class="btn btn-default" onclick="$('#datatable').tableExport({type:'pdf',escape:'false'});"><i class="fa fa-file-pdf-o"></i></a-->
                    <a href="#" class="btn btn-default btn-flat" onclick="$('#datatable').tableExport({type:'png',escape:'false'});"><i class="fa fa-file-image-o"></i></a>
            </div>
    </div>
</div>

<hr>
<div class="row">
  <div class="col-md-12">

                <div class="table-responsive text-nowrap">
                        <table id="datatable" class="table table-bordered table-striped" style="margin-bottom: 10px">
                        <thead>
                            <tr>
                                <th class="text-nowrap">#</th>
                                <th class="text-nowrap">Photo</th>
                                <th class="text-nowrap">የመቂያ ቁጥር</th>
                                <th class="text-nowrap">Full Name</th>
                                <th class="text-nowrap">Sex</th>
                                <th class="text-nowrap">Job Title</th>
                                <th class="text-nowrap">Department</th>
                                <th class="text-nowrap text-center">Actions</th>
                            </tr>
                            </thead><tbody>
                            <?php
                            foreach ($employee_data as $employee)
                            {
                                if('AD00000' != $employee->ID_Number){
                                ?>
                                <tr>
                                    <td><?php echo ++$start ?></td>
                                    <td><img src="<?php echo (!empty($employee->Photo))? base_url('uploads/photos/'.$employee->Photo): base_url('uploads/photos/default.jpg'); ?>" style="width: 3em; height:3em"></td>
                                    <td><?php echo $employee->ID_Number ?></td>
                                    <td><?php echo $employee->First_Name." ".$employee->Middle_Name ?></td>
                                    <td><?php echo $employee->Sex ?></td>
                                    <td><?php echo $employee->Job_Title ?></td>
                                    <td><?php echo $employee->Department; ?></td>
                                    <td style="text-align:center">
                                        <?php 
                                        echo anchor(site_url('employee/read/'.$employee->ID),'<i class="fa fa-file-text-o" aria-hidden="true"></i>', 'class="btn btn-info btn-sm"'); 
                                        echo '  '; 
                                        echo anchor(site_url('employee/update/'.$employee->ID),'<i class="fa fa-pencil-square-o" aria-hidden="true"></i>', 'class="btn btn-warning btn-sm"'); 
                                        echo '  '; 
                                        echo anchor(site_url('employee/delete/'.$employee->ID),'<i class="fa fa-trash-o" aria-hidden="true"></i>','class="btn btn-danger btn-sm" onclick="javasciprt: return confirm(\'በእርግጥ መረጃዉ እንዲሰረዝ ይፈልጋሉ ?\')"'); 
                                        ?>
                                    </td>
                                </tr>
                                <?php
                                }
                            }
                            ?>
                            </tbody>
                <tfoot>
                <tr>
                                <th class="text-nowrap">#</th>
                                <th class="text-nowrap">Photo</th>
                                <th class="text-nowrap">የመቂያ ቁጥር</th>
                                <th class="text-nowrap">Full Name</th>
                                <th class="text-nowrap">Sex</th>
                                <th class="text-nowrap">Job Title</th>
                                <th class="text-nowrap">Department</th>
                                <th class="text-nowrap text-center">Actions</th>
                            </tr>
                        </tfoot>
                        </table>

  </div>
</div>

                        </div>
                        </div>
                        </div>


