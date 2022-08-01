
<div class="row">
    <div class="col-md-12">
        <div class="box box-info">
            <div class="box-header with-border">
                <h3 class="box-title">Employee view</h3>
            
            <div class="box-body">
              <div class="row clearfix">  	



<div class="row">
	<div class="col-md-8">
        <table class="table">
		<tr><td class="text-right" width="250px">ID_Number :</td><td class="text-left"><?php echo $ID_Number; ?></td></tr>
	    <tr><td class="text-right">Name :</td><td class="text-left"><?php echo $First_Name." ".$Middle_Name." ".$Last_Name; ?></td></tr>
	    <tr><td class="text-right">Sex :</td><td class="text-left"><?php echo $Sex; ?></td></tr>
	    <tr><td class="text-right">Phone :</td><td class="text-left"><?php echo $Phone; ?></td></tr>
	    <tr><td class="text-right">Email :</td><td class="text-left"><?php echo $Email; ?></td></tr>
	    <tr><td class="text-right">Moblie :</td><td class="text-left"><?php echo $Moblie; ?></td></tr>
	    <tr><td class="text-right">Address :</td><td class="text-left"><?php echo $Address; ?></td></tr>
		<tr><td class="text-right">Job_Title :</td><td class="text-left"><?php echo $Job_Title; ?></td></tr>
	    <tr><td class="text-right">Department :</td><td class="text-left"><?php echo $Department;?></td></tr>
	    <tr><td></td><td><a href="<?php echo site_url('employee') ?>" class="btn btn-default">Cancle</a></td></tr>
	</table>
	</div>
	<div class="col-md-4">
		<img src="<?php echo (!empty($Photo))? base_url('uploads/photos/'.$Photo): base_url('uploads/photos/default.jpg'); ?>" style="width: 20em; height:20em">
	</div>
</div>

</div>
</div>
</div>