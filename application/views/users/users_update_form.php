
        <form action="<?php echo $action; ?>" method="post">
	 <div class="row">
	 <div class="form-group col-md-6 col-sm-6 col-xs-12">
	    <div class="form-group col-md-12 col-sm-12 col-xs-12">
            <label for="Employee_ID">የሲስተም ተጠቃሚ ስም * <?php echo form_error('Employee_ID') ?></label>
            <input type="text" class="form-control input-sm" name="Employee_ID" id="Employee_ID" placeholder="Employee ID" value="<?php
             foreach($employees as $employee){
                if($employee->ID == $Employee_ID){
                    echo $employee->First_Name." ".$employee->Middle_Name;
                    break;
                }
                }
            ?>" readonly/>

        </div>
	    <div class="form-group col-md-12 col-sm-12 col-xs-12">
            <label for="varchar">መለያ ስም [Username] * <?php echo form_error('Email') ?></label>
            <input type="text" class="form-control input-sm" name="Email" id="Email" placeholder="መለያ ስም [Username]" value="<?php echo $Email; ?>" />
        </div>
	    <div class="form-group col-md-12 col-sm-12 col-xs-12">
            <label for="Access_Level">የስራ ድርሻ * <?php echo form_error('Access_Level') ?></label>
            <!--input type="number" class="form-control input-sm" name="Access_Level" id="Access_Level" placeholder="Access Level" value="<?php echo $Access_Level; ?>" /-->
            <select class="form-control" name="Access_Level" id="Access_Level">
                <option value="">የስራ ድርሻ ምረጥ</option>
                <option value="1" <?php echo ($Access_Level == 1)?"selected" : "";?>>System Admininstrator</option>
                <option value="2" <?php echo ($Access_Level == 2)?"selected" : "";?>>ቢሮ ሀላፊ</option>
                <option value="3" <?php echo ($Access_Level == 3)?"selected" : "";?>>እቶር ኪፐር</option>
                <option value="4" <?php echo ($Access_Level == 4)?"selected" : "";?>>እስቶክ ክለርክ </option>
                <option value="5" <?php echo ($Access_Level == 5)?"selected" : "";?>>የቢሮ ሰራተኛ</option>
                <option value="6" <?php echo ($Access_Level == 6)?"selected" : "";?>>ኦዲተር</option>
            </select>
        </div>
        <div class="form-group col-md-12 col-sm-12 col-xs-12">
            <label for="varchar">አካዉንቱ ያለበት ሁኔታ *<?php echo form_error('Is_Active') ?></label>
            <!--input type="text" class="form-control input-sm" name="Is_Active" id="Is_Active" placeholder="Is Active" value="<?php //echo $Is_Active; ?>" /-->
            <select class="form-control" name="Is_Active" id="Is_Active">
                <option value="">አካዉንቱ ያለበት ሁኔታ ምረጥ</option>
                <option value="1" <?php echo ($Is_Active == 1)?"selected" : "";?>>የሚያገለግል</option>
                <option value="2" <?php echo ($Is_Active == 0)?"selected" : "";?>>የተዘጋ</option>
            </select>
        </div>
	    <div class="form-group col-md-6 col-sm-6 col-xs-12">
	    <input type="hidden" name="ID" value="<?php echo $ID; ?>" /> 
	    <button type="submit" class="btn btn-info btn-sm"><?php echo $button ?></button> 
	    <a href="<?php echo site_url('users') ?>" class="btn btn-default btn-sm">ተመለስ</a>
	    </div>
	 	</div>
	 	<div class="form-group col-md-6 col-sm-6 col-xs-12">
	 		&nbsp;
	 	</div>
	 	</div>
	</form>