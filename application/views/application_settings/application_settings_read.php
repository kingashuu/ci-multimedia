<div class="row">
    <div class="col-md-12">
        <div class="box box-info">
            <div class="box-header with-border">
                <h3 class="box-title">Application Setting List</h3>
            
            <div class="box-body">
              <div class="row clearfix">  	




	<!-- /.box-header -->
	<div class="box-body">
	<div class="row">
		<div class="col-xs-6">
			<div class="row">
						<div class="col-xs-4"><label>ድርጅቱ ስም</label></div>
						<div class="col-xs-8"><?php echo $Office_Name; ?></div>
					</div>
		<div class="row">
						<div class="col-xs-4"><label> አፕሊኬሽን ስም </label></div>
						<div class="col-xs-8"><?php echo $Application_Title; ?></div>
					</div>
		<div class="row">
						<div class="col-xs-4"><label> አፕሊኬሽን ምፃረ ቃል </label></div>
						<div class="col-xs-8"><?php echo $Abbreviations; ?></div>
					</div>
		<div class="row">
						<div class="col-xs-4"><label> ኢሜል </label></div>
						<div class="col-xs-8"><?php echo $Email_Address; ?></div>
					</div>
		<div class="row">
						<div class="col-xs-4"><label> ስልክ ቁጥር </label></div>
						<div class="col-xs-8"><?php echo $Phone; ?></div>
					</div>
					<div class="row">
						<div class="col-xs-4"><label> ተ.እ.ታ </label></div>
						<div class="col-xs-8"><?php echo $TIN; ?></div>
					</div>
		<div class="row">
						<div class="col-xs-4"><label> ቋንቋ </label></div>
						<div class="col-xs-8"><?php echo $Language; ?></div>
					</div>
		<div class="row">
						<div class="col-xs-4"><label> አፕሊኬሽን ግርጌ መልእክት </label></div>
						<div class="col-xs-8"><?php echo $Footer_Text; ?></div>
					</div>
		</div>
		<div class="col-xs-6">
			<div class="row">
				<div class="col-xs-4"><label>ሎጎ</label></div>
				<div class="col-xs-8">
					<img src="<?php echo (!empty($Logo)) ? base_url('uploads/application/' . $Logo) : base_url('uploads/application/default.png'); ?>" style="width:50%">
				</div>
			</div>
		</div>
	</div>

	 <div class="row">
					<div class="col-xs-2"></div>
					<div class="col-xs-10"><a href="<?php echo site_url('application_settings') ?>" class="btn btn-default btn-sm"> ተመለስ </a></div>
				</div>
	

	</div>

	</div>
	

	</div>
	</div>
	
