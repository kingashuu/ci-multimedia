
<div class="row">
    <div class="col-md-12">
        <div class="box box-info">
            <div class="box-header with-border">
                <h3 class="box-title">Employee From</h3>
            
            <div class="box-body">
              <div class="row clearfix">  	


<script src="https://lipis.github.io/bootstrap-sweetalert/dist/sweetalert.js"></script>
<link rel="stylesheet" href="https://lipis.github.io/bootstrap-sweetalert/dist/sweetalert.css" />
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>

        <div class="row" style="margin-bottom: 10px">
            <div class="col-md-4">
                <?php echo anchor(site_url('users/create'),'<i class="fa fa-plus"></i> አዲስ', 'class="btn btn-success btn-sm"'); ?>
            </div>
            <div class="col-md-4 text-center">
                <div style="margin-top: 8px" id="message">
                    <?php echo $this->session->userdata('s_message') <> '' ? $this->session->userdata('message') : ''; ?>
                    <?php echo $this->session->userdata('e_message') <> '' ? $this->session->userdata('message') : ''; ?>
                </div>
            </div>
            <div class="col-md-1 text-right">
            </div>
            <div class="col-md-3 text-right">
                <form action="<?php echo site_url('users/index'); ?>" class="form-inline" method="get">
                    <div class="input-group">
                        <input type="text" class="form-control input-sm" name="q" value="<?php echo $q; ?>">
                        <span class="input-group-btn">
                            <?php 
                                if ($q <> '')
                                {
                                    ?>
                                    <a href="<?php echo site_url('users'); ?>" class="btn btn-default btn-sm">ከአዲስ</a>
                                    <?php
                                }
                            ?>
                          <button class="btn btn-info btn-sm" type="submit">ፈልግ</button>
                        </span>
                    </div>
                </form>
            </div>
        </div>

    <div class="row">
        <div class="col-xs-12 table-responsive">

        <table class="table table-bordered" style="margin-bottom: 10px">
            <tr>
                <th>#</th>
                <th>Employee</th>
                <th>Username</th>
                <th>Access Level</th>
                <th>Created Date</th>
                <th>Status</th>
                <th>Actions</th>
            </tr><?php
            foreach ($users_data as $users)
            {
                if($users->Access_Level ==0)
                    continue;
                ?>
                <tr id="<?php echo $users->ID; ?>">
			<td width="80px"><?php echo ++$start ?></td>
			<td><?php 	foreach($employees as $employee){
							if($users->Employee_ID == $employee->ID){
								echo $employee->First_Name." ".$employee->Middle_Name;
                                break;
							}     
						}?></td>
			<td><?php echo $users->Email ?></td>
			<td><?php if($users->Access_Level == 1)
                            echo 'System Admininstrator'; 
                        else if($users->Access_Level == 2)
                            echo 'Admin Head';
                        else if($users->Access_Level == 3)
                            echo 'User';  
                            
            ?></td>
            <td><?php echo $users->Created_Date ?></td>
            <td><?php echo ($users->Is_Active == 1)?'<small class="label label-success"> የሚያገለግል </small> ': '<small class="label label-danger"><i class="fa fa-clock-o"></i> የተዘጋ </small>' ?></td>
             
			
			<td style="text-align:center" width="250px">
				<?php 
                
				echo anchor(site_url('users/read/'.$users->ID),'<i class="fa fa-file-text-o" aria-hidden="true"></i>', 'class="btn btn-info btn-sm"'); 
				echo ' &nbsp; '; 
				echo anchor(site_url('users/update/'.$users->ID),'<i class="fa fa-pencil-square-o" aria-hidden="true"></i>', 'class="btn btn-warning btn-sm"'); 
				echo ' &nbsp; '; 
                echo anchor(site_url('users/password_update/'.$users->ID),'<i class="fa fa-key" aria-hidden="true"></i>', 'class="btn btn-warning btn-sm"'); 
				echo ' &nbsp; ';
				echo anchor(site_url('users/delete/'),'<i class="fa fa-trash-o" aria-hidden="true"></i>',array('class'=>"btn btn-danger btn-sm",'onclick'=>"return confirm('Are You Sure ?')")); 
                ?>
                <!--a href="#" class="btn btn-default" onclick="javasciprt: return confirm('Are You Sure ?');" ><i class="fa fa-file-excel-o"></i></a-->
                <!--a href="http://localhost/aims/aims/user/deleteuser/" class="btn btn-danger btn-sm" onclick="return confirm('Do you want delete this record')">FN Delete</a-->
                <!--button type="submit" class="btn btn-danger remove"> Delete</button-->
            </td>
		</tr>
                <?php
            }
            ?>
        </table>

        </div>
    </div>
        <div class="row">
            <div class="col-md-6">
                <a href="#" class="btn btn-secondary btn-sm">Total Record : <?php echo $total_rows ?></a>
	    </div>
            <div class="col-md-6 text-right">
                <?php echo $pagination ?>
            </div>
        </div>

        </div>
        </div>
        </div>

    <script type="text/javascript">
    $(".remove").click(function(){
        var id = $(this).parents("tr").attr("id");

       swal({
        title: "መረጃዉ እዲሰረዝ ይፈልጋሉ?",
        text: "መረጃዉ ከተሰረዘ መመለስ አይቻልም!",
        type: "warning",
        showCancelButton: true,
        confirmButtonClass: "btn-danger",
        confirmButtonText: "አዎ ይጥፋ!",
        cancelButtonText: "አይ አይጥፋ!",
        closeOnConfirm: false,
        closeOnCancel: false
      },
      function(isConfirm) {
        if (isConfirm) {
          $.ajax({
             url: DOMAIN+'users/delete/'+id,
             type: 'DELETE',
             error: function() {
                //alert('Something is wrong');
                swal("ስህተት", "እንደገና ይሞክሩ", "error");
             },
             success: function(data) {
                $("#"+id).remove();
                swal("ተሰርዙዋል!", "መረጃዉ ተሰርዙዋል", "success");
             }
          });
        } else {
          swal("ተመለስ", "መረጃዉ አልተሰረዘም", "error");
        }
      });
    });
</script>