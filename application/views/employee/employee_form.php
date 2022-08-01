<div class="row">
    <div class="col-md-12">
        <div class="box box-info">
            <div class="box-header with-border">
                <h3 class="box-title">Employee From</h3>
            
            <div class="box-body">
              <div class="row clearfix">  	



        <form action="<?php echo $action; ?>" method="post" enctype="multipart/form-data">
	    <div class="form-group col-xs-4">
            <label for="varchar">First Name <?php echo form_error('First_Name') ?></label>
            <input type="text" class="form-control input-sm" name="First_Name" id="First_Name" placeholder="First Name" value="<?php echo $First_Name; ?>" />
        </div>
	    <div class="form-group col-xs-4">
            <label for="varchar">Middle Name <?php echo form_error('Middle_Name') ?></label>
            <input type="text" class="form-control input-sm" name="Middle_Name" id="Middle_Name" placeholder="Middle Name" value="<?php echo $Middle_Name; ?>" />
        </div>
	    <div class="form-group col-xs-4">
            <label for="varchar">Last Name <?php echo form_error('Last_Name') ?></label>
            <input type="text" class="form-control input-sm" name="Last_Name" id="Last_Name" placeholder="Last Name" value="<?php echo $Last_Name; ?>" />
        </div>
		<div class="form-group col-xs-6">
            <label for="varchar">ID Number <?php echo form_error('ID_Number') ?></label>
            <input type="text" class="form-control input-sm" name="ID_Number" id="ID_Number" placeholder="ID_Number" value="<?php echo $ID_Number; ?>" />
        </div>
	    <div class="form-group col-xs-12">
            <label for="varchar">Sex <?php echo form_error('Sex') ?></label><br>
			<label class="radio-inline">
			  <input name="Sex" id="radio2" value="Male" <?php echo ($Sex == "Male")? "checked=checked" : ""; ?> type="radio"> ወንድ
			</label>
			<label class="radio-inline">
			  <input name="Sex" id="radio3" value="Female" <?php echo ($Sex == "Female")? "checked=checked" : ""; ?> type="radio"> ሴት
			</label>
		</div>
	    <div class="form-group col-xs-6">
            <label for="varchar">Phone <?php echo form_error('Phone') ?></label>
            <input type="text" class="form-control input-sm" name="Phone" id="Phone" placeholder="Phone" value="<?php echo $Phone; ?>" />
        </div>
		<div class="form-group col-xs-6">
            <label for="varchar">Moblie <?php echo form_error('Moblie') ?></label>
            <input type="text" class="form-control input-sm" name="Moblie" id="Moblie" placeholder="Moblie" value="<?php echo $Moblie; ?>" />
        </div>
	    <div class="form-group col-xs-6">
            <label for="varchar">Email <?php echo form_error('Email') ?></label>
            <input type="text" class="form-control input-sm" name="Email" id="Email" placeholder="Email" value="<?php echo $Email; ?>" />
        </div>
	    <div class="form-group col-xs-6">
            <label for="varchar">Address <?php echo form_error('Address') ?></label>
            <input type="text" class="form-control input-sm" name="Address" id="Address" placeholder="Address" value="<?php echo $Address; ?>" />
        </div>
	    <div class="form-group col-xs-6">
            <label for="int">Department <?php echo form_error('Department') ?></label>
            <input type="text" class="form-control input-sm" name="Department" id="Department" placeholder="Department" value="<?php echo $Department; ?>" />
        </div>
		<div class="form-group col-xs-6">
            <label for="varchar">የስራ መደብ <?php echo form_error('Job_Title') ?></label>
            <input type="text" class="form-control input-sm" name="Job_Title" id="Job_Title" placeholder="የስራ መደብ" value="<?php echo $Job_Title; ?>" />
        </div>
		<div class="form-group col-xs-6">
            <label for="varchar">Photo <?php echo form_error('Photo') ?></label>
            <input type="file"  name="Photo" id="Photo" placeholder="Photo" value="<?php echo $Photo; ?>" />
			<p class="help-block"> Photo </p>
				<?php if(!empty($Photo)){ ?>
                    <div class="img-box">
                        <img src="<?php echo base_url('uploads/photos/'.$Photo); ?>" style="width: 10em; height: 10em">
                    </div>
                <?php }else{?>
                    <div class="img-box">
                        <img src="<?php echo base_url('uploads/photos/default.jpg'); ?>" style="width: 10em; height: 10em">
                    </div>
				<?php } ?>
		</div>
		<div class="form-group col-xs-12">
			<input type="hidden" name="ID" value="<?php echo $ID; ?>" /> 
			<button type="submit" class="btn btn-info btn-sm"><?php echo $button ?></button> 
			<a href="<?php echo site_url('employee') ?>" class="btn btn-default btn-sm">Cancle</a>
		</div>
	</form>

                </div>
                </div>
                </div>