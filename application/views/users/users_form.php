
        <div class="row">
    <div class="col-md-12">
        <div class="box box-info">
            <div class="box-header with-border">
                <h3 class="box-title">Employee From</h3>
            
            <div class="box-body">
              <div class="row clearfix">  	



        <form action="<?php echo $action; ?>" method="post">
	 <div class="row">
	 <div class="form-group col-md-6 col-sm-6 col-xs-12">
	    <div class="form-group col-md-12 col-sm-12 col-xs-12">
            <label for="Employee_ID">Employee * <?php echo form_error('Employee_ID') ?></label>
            <!--input type="number" class="form-control input-sm" name="Employee_ID" id="Employee_ID" placeholder="Employee ID" value="<?php //echo $Employee_ID; ?>" /-->
            <select class="form-control select2" name="Employee_ID" id="Employee_ID">
                <option value="">Select Employee</option>
                <?php foreach($employees as $employee){ ?>
                <option value="<?php echo $employee->ID;?>" <?php echo ($employee->ID == $Employee_ID)?"selected" : "";?>><?php echo $employee->First_Name." ".$employee->Middle_Name;?></option>
                <?php } ?>
            </select>
        </div>
	    <div class="form-group col-md-12 col-sm-12 col-xs-12">
            <label for="varchar">Username * <?php echo form_error('Email') ?></label>
            <input type="text" class="form-control input-sm" name="Email" id="Email" placeholder="Username" value="<?php echo $Email; ?>" />
        </div>
	    <div class="form-group col-md-12 col-sm-12 col-xs-12">
            <label for="Password">Password * <?php echo form_error('Password') ?></label>
            <input type="Password" class="form-control input-sm" name="Password" id="Password" placeholder="Password" <?php //echo $Password; ?> />
        </div>
        <div class="form-group col-md-12 col-sm-12 col-xs-12">
            <label for="Password">Password* <?php echo form_error('Password2') ?></label>
            <input type="Password" class="form-control input-sm" name="Password2" id="Password2" placeholder="Password" <?php //echo $Password; ?> />
        </div>

	    <div class="form-group col-md-12 col-sm-12 col-xs-12">
            <label for="Access_Level">Access_Level * <?php echo form_error('Access_Level') ?></label>
            <!--input type="number" class="form-control input-sm" name="Access_Level" id="Access_Level" placeholder="Access Level" value="<?php echo $Access_Level; ?>" /-->
            <select class="form-control" name="Access_Level" id="Access_Level">
                <option value="">Access_Level</option>
                <option value="1" <?php echo ($Access_Level == 1)?"selected" : "";?>>System Admininstrator</option>
                <option value="2" <?php echo ($Access_Level == 2)?"selected" : "";?>>Admin Head</option>

            </select>
        </div>
        <div class="form-group col-md-12 col-sm-12 col-xs-12">
            <label for="varchar">Status *<?php echo form_error('Is_Active') ?></label>
            <!--input type="text" class="form-control input-sm" name="Is_Active" id="Is_Active" placeholder="Is Active" value="<?php //echo $Is_Active; ?>" /-->
            <select class="form-control" name="Is_Active" id="Is_Active">
                <option value="">Account Status</option>
                <option value="1" <?php echo ($Is_Active == 1)?"selected" : "";?>>Active</option>
                <option value="2" <?php echo ($Is_Active == 0)?"selected" : "";?>>Inactive</option>
            </select>
        </div>
	    <div class="form-group col-md-6 col-sm-6 col-xs-12">
	    <input type="hidden" name="ID" value="<?php echo $ID; ?>" /> 
	    <button type="submit" class="btn btn-info btn-sm"><?php echo $button ?></button> 
	    <a href="<?php echo site_url('users') ?>" class="btn btn-default btn-sm">Cancle</a>
	    </div>
	 	</div>
	 	<div class="form-group col-md-6 col-sm-6 col-xs-12">
	 		&nbsp;
	 	</div>
	 	</div>
	</form>

    </div>
	 	</div>
                </div>