<section class="content-header">
  <h1>
    Add New Multimedia
  </h1>
</section>


<section class="content">
  <div class="row">
    <div class="col-md-12">
      <div class="box box-info">
        <div class="box-header with-border">

          <div class="box-body">
            <link rel="stylesheet" href="<?php echo base_url('resources/plugins/bootstrap-wysihtml5/bootstrap3-wysihtml5.min.css'); ?>">
            <script src="<?php echo base_url('resources/plugins/ckeditor/ckeditor.js'); ?>"></script>
            <script src="<?php echo base_url('resources/plugins/bootstrap-wysihtml5/bootstrap3-wysihtml5.all.min.js'); ?>"></script>
            <script>
              $(function() {
                //bootstrap WYSIHTML5 - text editor
                $('.textarea').wysihtml5()
                // Replace the <textarea id="editor1"> with a CKEditor
                // instance, using default configuration.
                CKEDITOR.replace('editor1')

              })
            </script>
            <div class="row">
              <div class="col-md-12">
                <?php echo form_open_multipart('multimedia/add'); ?>
                <!-- <div class="col-sx-12 col-sm-6 col-md-6">
                  <label for="Code" class="control-label"> <span class="text-danger"></span>Code</label>
                  <div class="form-group">
                    <input type="text" name="Code" value="<?php echo $this->input->post('Code'); ?>" class="form-control " id="Code" />
                    <span class="text-danger"><?php echo form_error('Code'); ?></span>
                  </div>
                </div> -->
                <div class="col-sx-12 col-sm-12 col-md-12">
                  <label for="Name" class="control-label"> <span class="text-danger"></span>Name</label>
                  <div class="form-group">
                    <input type="text" name="Name" value="<?php echo $this->input->post('Name'); ?>" class="form-control " id="Name" />
                    <span class="text-danger"><?php echo form_error('Name'); ?></span>
                  </div>
                </div>

                <div class="col-sx-12 col-sm-12 col-md-4">
                  <label for="Attachment" class="control-label"> <span class="text-danger"></span>Attachment</label>
                  <div class="form-group">
                    <input type="file" name="Attachment" value="<?php echo $this->input->post('Attachment'); ?>" class="form-control " id="Attachment" />
                    <span class="text-danger"><?php echo form_error('Attachment'); ?></span>
                  </div>
                </div>
                <div class="col-sx-12 col-sm-4 col-md-4">
                  <label for="Classification" class="control-label"> <span class="text-danger"></span> Classification</label>
                  <div class="form-group">
                    <select name="Classification" class="form-control">
                      <option value="">Select Classification</option>
                      <?php
                      foreach ($all_classification as   $classification) {
                        $selected = ($classification['Classification_Name'] == $this->input->post('Classification')) ? ' selected="selected"' : "";
                        echo '<option value="' . $classification['Classification_Name'] . '" ' . $selected . '>' . $classification['Classification_Name'] . '</option>';
                      }
                      ?>
                    </select>
                    <span class="text-danger"><?php echo form_error('Classification'); ?></span>
                  </div>
                </div>
                <div class="col-sx-12 col-sm-4 col-md-4">
                  <label for="Sub_Classification" class="control-label"> <span class="text-danger"></span> Sub Classification</label>
                  <div class="form-group">
                    <select name="Sub_Classification" class="form-control">
                      <option value="">Select Sub Classification</option>
                      <?php
                      foreach ($all_sub_classification as   $sub_classification) {
                        $selected = ($sub_classification['Sub_Classification_Name'] == $this->input->post('Sub_Classification')) ? ' selected="selected"' : "";
                        echo '<option value="' . $sub_classification['Sub_Classification_Name'] . '" ' . $selected . '>' . $sub_classification['Sub_Classification_Name'] . '</option>';
                      }
                      ?>
                    </select>
                    <span class="text-danger"><?php echo form_error('Sub_Classification'); ?></span>
                  </div>
                </div>
                <!-- <div class="col-sx-12 col-sm-4 col-md-4">
                <label for="Type" class="control-label"> <span class="text-danger"></span>Type</label>
                <div class="form-group">
                  <input type="text" name="Type" value="<?php echo $this->input->post('Type'); ?>" class="form-control " id="Type" />
                  <span class="text-danger"><?php echo form_error('Type'); ?></span>
                </div>
              </div> -->
                <div class="col-sx-12 col-sm-6 col-md-6">
                  <label for="Recorde_Date" class="control-label"> <span class="text-danger"></span>Recorde Date</label>
                  <div class="form-group">
                    <input type="date" name="Recorde_Date" value="<?php echo $this->input->post('Recorde_Date'); ?>" class="has-datepicker form-control" data-date-format='YYYY-MM-DD' id="Recorde_Date" />
                    <span class="text-danger"><?php echo form_error('Recorde_Date'); ?></span>
                  </div>
                </div>
                <div class="col-sx-12 col-sm-6 col-md-6">
                  <label for="Recorde_By" class="control-label"> <span class="text-danger"></span>Recorde By</label>
                  <div class="form-group">
                    <input type="text" name="Recorde_By" value="<?php echo $this->input->post('Recorde_By'); ?>" class="form-control " id="Recorde_By" />
                    <span class="text-danger"><?php echo form_error('Recorde_By'); ?></span>
                  </div>
                </div>

                <!-- <h2>new added</h2> -->

                <!-- <div class="col-sx-12 col-sm-6 col-md-3">
                <label for="Code" class="control-label"> <span class="text-danger"></span>Upload_Date</label>
                <div class="form-group">
                  <input type="text" name="Upload_Date" value="<?php echo $this->input->post('Upload_Date'); ?>" class="form-control " id="Upload_Date" />
                  <span class="text-danger"><?php echo form_error('Upload_Date'); ?></span>
                </div>
              </div> -->
                <!-- <div class="col-sx-12 col-sm-6 col-md-3">
                <label for="Code" class="control-label"> <span class="text-danger"></span>Upload_by</label>
                <div class="form-group">
                  <input type="text" name="Upload_by" value="<?php echo $this->input->post('Upload_by'); ?>" class="form-control " id="Upload_by" />
                  <span class="text-danger"><?php echo form_error('Upload_by'); ?></span>
                </div>
              </div> -->

                <div class="col-sx-12 col-sm-4 col-md-6">
                  <label for="Language" class="control-label"> <span class="text-danger"></span>Language</label>
                  <div class="form-group">

                    <?php
                    $options = array(
                      ''   => 'please select Language',
                      'Amharic'  => 'Amharic',
                      'Afaan Oromoo'  => 'Afaan Oromoo',
                      'Somali'  => 'Somali',
                    );

                    echo form_dropdown('Language', $options, 'select',  'class="form-control"')
                    ?>
                    <span class="text-danger"><?php echo form_error('Sub_Classification'); ?></span>
                  </div>
                </div>
                <div class="col-sx-12 col-sm-4 col-md-6">
                  <label for="Video_Type" class="control-label"> <span class="text-danger"></span>Video Type</label>
                  <div class="form-group">


                    <?php
                    $options = array(
                      ''   => 'please select...',
                      'RAW'  => 'RAW',
                      'Edited'  => 'Edited',
                    );

                    echo form_dropdown('Video_Type', $options, 'select',  'class="form-control"')
                    ?>
                    <span class="text-danger"><?php echo form_error('Sub_Classification'); ?></span>
                  </div>
                </div>

                <hr>


                <div class="col-sx-12 col-sm-12 col-md-12">
                  <label for="Description" class="control-label"> <span class="text-danger"></span>Description</label>
                  <div class="form-group">
                    <textarea name="Description" class="form-control   textarea" id="Description"><?php echo $this->input->post('Description'); ?></textarea>
                    <span class="text-danger"><?php echo form_error('Description'); ?></span>
                  </div>
                </div>





                <div class="col-sx-12 col-sm-12 col-md-12">
                  <label for=" " class="control-label"> </label>
                  <div class="form-group">
                    <button type="submit" class="btn btn-success">
                      <i class="fa fa-check"></i> Save
                    </button>
                  </div>
                </div>
                <?php echo form_close(); ?>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>