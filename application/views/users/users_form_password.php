
        <form action="<?php echo $action; ?>" method="post">
	 <div class="row">
	 <div class="form-group col-md-6 col-sm-6 col-xs-12">
	    <div class="form-group col-md-12 col-sm-12 col-xs-12">
            <label for="Password">የይለፍ ኮድ [Password] * <?php echo form_error('Password') ?></label>
            <input type="Password" class="form-control input-sm" name="Password" id="Password" placeholder="የይለፍ ኮድ [Password]" <?php //echo $Password; ?> />
        </div>
        <div class="form-group col-md-12 col-sm-12 col-xs-12">
            <label for="Password">የይለፍ ኮድ [Password] በድጋሚ* <?php echo form_error('Password2') ?></label>
            <input type="Password" class="form-control input-sm" name="Password2" id="Password2" placeholder="የይለፍ ኮድ [Password] በድጋሚ" <?php //echo $Password; ?> />
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