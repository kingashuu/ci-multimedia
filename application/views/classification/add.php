<div class="row">
    <div class="col-md-12">
        
    <div class="box">
        <div class="box-header with-border">
          <h3 class="box-title">New Classification</h3>
          <div class="box-tools pull-right">
            <button type="button" class="btn btn-box-tool" data-widget="collapse" data-toggle="tooltip" title="Collapse">
              <i class="fa fa-minus"></i></button>
                <button type="button" class="btn btn-box-tool" data-widget="remove" data-toggle="tooltip" title="Remove">
              <i class="fa fa-times"></i></button>
          </div>
        </div>
        <div class="box-body">  
          <div class="row clearfix">
    
    

              


<div class="row">
    <div class="col-md-12">
            <?php echo form_open('classification/add'); ?>
            <!-- <div class="col-xs-12 col-sm-12 col-md-12">
               <label for="Classification_Code" class="control-label"> <span class="text-danger"></span>Classification Code</label>
                <div class="form-group">
                  <input type="text" name="Classification_Code" value="<?php echo $this->input->post('Classification_Code'); ?>" class="form-control " id="Classification_Code" />
                   <span class="text-danger"><?php echo form_error('Classification_Code');?></span>
               </div>
             </div> -->
             <div class="col-xs-12 col-sm-12 col-md-12">
               <label for="Classification_Name" class="control-label"> <span class="text-danger"></span>Classification Name</label>
                <div class="form-group">
                  <input type="text" name="Classification_Name" value="<?php echo $this->input->post('Classification_Name'); ?>" class="form-control " id="Classification_Name" />
                   <span class="text-danger"><?php echo form_error('Classification_Name');?></span>
               </div>
             </div>

              <div class="col-xs-12 col-sm-12 col-md-12">
                <label for="Description" class="control-label"> <span class="text-danger"></span>Description</label>
                <div class="form-group">
                 <textarea name="Description" class="form-control  " id="Description"><?php echo $this->input->post('Description'); ?></textarea>
                  <span class="text-danger"><?php echo form_error('Description');?></span>
                </div>
              </div>
             <div class="col-xs-12 col-sm-12 col-md-12">
               <label for=" " class="control-label"> </label>
                <div class="form-group">
                   <button type="submit" class="btn btn-success"><i class="fa fa-check"></i> Save </button> 
               </div>
             </div>
            <?php echo form_close(); ?>
        </div>
    </div>
</div>



</div>
    </div>
</div>