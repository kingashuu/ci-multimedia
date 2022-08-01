
<div class="row">
    <div class="col-md-12">
        <div class="box box-info">
            <div class="box-header with-border">
                <h3 class="box-title">Application Setting List</h3>
            
            <div class="box-body">
              <div class="row clearfix">  



				<div class="row" style="margin-bottom: 10px">
					<div class="col-md-4">

					</div>
					<div class="col-md-4 text-center">
						<div style="margin-top: 8px" id="message">
							<?php echo $this->session->userdata('s_message') <> '' ? "<p class='text-success'>".$this->session->userdata('s_message')."</p>" : ''; ?>
							<?php echo $this->session->userdata('e_message') <> '' ? "<p class='text-danger'>".$this->session->userdata('e_message')."</p>" : ''; ?>
							<?php echo $this->session->userdata('upload_message') <> '' ? "<p class='text-danger'>".$this->session->userdata('upload_message')."</p>" : ''; ?>
						</div>
					</div>
					<div class="col-md-4 text-right">
						<?php //echo anchor(site_url('application_settings/create'), $this->lang->line('New'), 'class="btn btn-success btn-sm"'); 
						?>
					</div>
				</div>

				<div class="row">
					<div class="col-xs-12 table-responsive">
						<table id="example1" class="table table-striped">

							<thead>
								<tr>
									<th>#</th>
									<th> Logo </th>
									<th> Office Name </th>
									<th> Application Title </th>
									<th> Abbreviations </th>
									<th> Email Address </th>
									<th> Phone </th>
									<th> Footer Text</th>
									<th> Actions </th>
								</tr>
							</thead>
							<tbody><?php
									foreach ($application_settings_data as $application_settings) {
									?>
									<tr>
										<td width="80px"><?php echo ++$start ?></td>
										<td><img src="<?php echo (!empty($application_settings->Logo)) ? base_url('uploads/application/' . $application_settings->Logo) : base_url('uploads/application/default.png'); ?>" style="width: 5em; height:5em"></td>
										<td><?php echo $application_settings->Office_Name ?></td>
										<td><?php echo $application_settings->Application_Title ?></td>
										<td><?php echo $application_settings->Abbreviations ?></td>
										<td><?php echo $application_settings->Email_Address ?></td>
										<td><?php echo $application_settings->Phone ?></td>
										<td><?php echo $application_settings->Footer_Text ?></td>
										<td>
											<a href="<?php echo site_url('application_settings/read/' . $application_settings->ID); ?> " class="btn btn-info btn-xs"><span class="fa fa-file-text-o"></span></a>
											<a href="<?php echo site_url('application_settings/update/' . $application_settings->ID); ?> " class="btn btn-info btn-xs"><span class="fa fa-pencil"></span></a>
										</td>
									</tr>
								<?php
									}
								?>

							</tbody>
						</table>
						<div class="pull-right">

						</div>
					</div>
				</div>


				
				</div>
					</div>
				</div>