<div class="row">
    <div class="col-md-12">
    <div class="box">
        <div class="box-header with-border">
          <h3 class="box-title">Edit Sub Classification</h3>
          <div class="box-tools pull-right">
            <button type="button" class="btn btn-box-tool" data-widget="collapse" data-toggle="tooltip" title="Collapse">
              <i class="fa fa-minus"></i></button>
                <button type="button" class="btn btn-box-tool" data-widget="remove" data-toggle="tooltip" title="Remove">
              <i class="fa fa-times"></i></button>
          </div>
        </div>
        <div class="box-body">  
          <div class="row clearfix">

            <?php echo form_open('sub_classification/edit/'.$sub_classification['SC_ID']); ?>

            <div class="col-xs-12 col-sm-12 col-md-12">
               <label for="Sub_Classification_Code" class="control-label">  <span class="text-danger"></span>Sub Classification Code</label>
                <div class="form-group">
                  <input type="text" name="Sub_Classification_Code" value="<?php echo ($this->input->post('Sub_Classification_Code') ? $this->input->post('Sub_Classification_Code') : $sub_classification['Sub_Classification_Code']); ?>" class="form-control" id="Sub_Classification_Code" />
                    <span class="text-danger"><?php echo form_error('Sub_Classification_Code');?></span>
               </div>
             </div> 
             <div class="col-xs-12 col-sm-12 col-md-12">
            <label for="Classification" class="control-label">  <span class="text-danger"></span>  Classification</label>
            <div class="form-group">
              <select name="Classification" class="form-control">
                <option value="">select Classification</option>
                <?php  
 
                          foreach($all_classification as   $classification)
                          { 
                              $selected = ($classification['Classification_Name'] == $sub_classification['Classification']) ? ' selected="selected"' : "";
                            
                              echo '<option value="'.$classification['Classification_Name'].'" '.$selected.'>'.$classification['Classification_Name'].'</option>'; 
                          } 
                          ?>
                        </select>
                        <span class="text-danger"><?php echo form_error('Classification');?></span>
                      </div>
                    </div>
              <div class="col-xs-12 col-sm-12 col-md-12">
                <label for="Sub_Classification_Name" class="control-label">  <span class="text-danger"></span>Sub Classification Name</label>
                <div class="form-group">
                  <input type="text" name="Sub_Classification_Name" value="<?php echo ($this->input->post('Sub_Classification_Name') ? $this->input->post('Sub_Classification_Name') : $sub_classification['Sub_Classification_Name']); ?>" class="form-control" id="Sub_Classification_Name" />
                    <span class="text-danger"><?php echo form_error('Sub_Classification_Name');?></span>
               </div>
             </div> 
             <div class="col-xs-12 col-sm-12 col-md-12">
                <label for="Description" class="control-label">  <span class="text-danger"></span>Description</label>
                <div class="form-group">
                 <textarea name="Description" class="form-control    " id="Description"><?php echo ($this->input->post('Description') ? $this->input->post('Description') : $sub_classification['Description']); ?></textarea>
                 <span class="text-danger"><?php echo form_error('Description');?></span>
                </div>
              </div> 
              
        </div>
      </div>
            <div class="box-footer">
            <input type="hidden" name="SC_ID" value="<?php echo ($this->input->post('SC_ID') ? $this->input->post('SC_ID') : $sub_classification['SC_ID']); ?>" class="form-control" id="SC_ID" />
              <button type="submit" class="btn btn-success">
                <i class="fa fa-check"></i> Save
              </button>
            </div>
            <?php echo form_close(); ?>
        </div>
    </div>
</div>
</div>
