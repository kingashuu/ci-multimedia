<div class="row">
  <div class="col-md-12">
    <div class="box">
      <div class="box-header with-border">
        <h3 class="box-title">Multimedia Listing</h3>
        <div class="box-tools pull-right">
          <button type="button" class="btn btn-box-tool" data-widget="collapse" data-toggle="tooltip" title="Collapse">
            <i class="fa fa-minus"></i></button>
          <button type="button" class="btn btn-box-tool" data-widget="remove" data-toggle="tooltip" title="Remove">
            <i class="fa fa-times"></i></button>
        </div>
      </div>
      <div class="box-body">
        <a href="<?php echo site_url('multimedia/add'); ?>" class="btn btn-success btn-sm">Add Multimedia File</a>

        <?php echo $this->session->flashdata('alert_msg'); ?>
        <div class="table-responsive">
          <table id="example1" class="table table-striped">
            <thead>
              <tr>
                <th>#</th>
                <th>Attachment</th>
                <th>Code</th>
                <th>Name</th>
                <th>Classification</th>
                <th>Sub Classification</th>
                <th>Recorde By</th>
                <th>Recorde Date</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <?php $i = $noof_page + 1;
              if (isset($multimedia) && $multimedia != null) {
                foreach ($multimedia as $m) { ?>
                  <tr class="text-center">
                    <td><?php echo $i++; ?></td>
                    <td>
                      <?php
                      // $type= $m['Type'];
                      if ($m['Type'] == '.mp4') {
                        // ||'.WEBM' ||'.MPG' || '.MP2' || '.MPEG' || '.MPE' || '.MPV' || '.OGG' ||  '.M4P' || '.M4V' || '.AVI' || '.WMV' || '.MOV' || 
                      ?>
                        <video width="180" height="100">
                          <source src="<?php echo base_url('resource/Attachment/') . $m['Attachment']; ?>" type="video/mp4">
                          <source src="movie.ogg" type="video/ogg">
                        </video>
                      <?php
                      } elseif ($m['Type'] == '.jpg' || $m['Type'] == '.png') {

                      ?>
                        <img width="100" height="100" src="<?php echo base_url('resource/Attachment/') . $m['Attachment']; ?>">
                      <?php
                      } elseif ($m['Type'] == '.mp3')  {

                      ?>
                        <img width="100" height="100" src="<?php echo base_url('mediaFile/download.png'); ?>">


                      <?php
                      }
                      ?>

                    </td>
                    <td><?php echo $m['Code']; ?></td>
                    <td style="width: 150px;"><?php echo $m['Name']; ?></td>
                    <td><?php echo $m['Classification_Name']; ?></td>
                    <td><?php echo $m['Sub_Classification_Name']; ?></td>
                    <td><?php echo $m['Recorde_By']; ?></td>
                    <td><?php echo $m['Recorde_Date']; ?></td>
                    <td>

                      <a href="<?php echo site_url('multimedia/view_more/' . $m['M_ID']); ?>" class="btn btn-defualt btn-xs"><span class="fa fa-eye"></span> View</a>
                      <a href="<?php echo site_url('multimedia/edit/' . $m['M_ID']); ?>" class="btn btn-info btn-xs"><span class="fa fa-pencil"></span> Edit</a>
                      <a onclick="return confirm('Are you sure You want to delete?')" href="<?php echo site_url('multimedia/remove/' . $m['M_ID']); ?>" class="btn btn-danger btn-xs"><span class="fa fa-trash"></span> Delete</a>
                    </td>
                  </tr>
              <?php }
              } else {
                echo 'No data found';
              }


              ?>
            </tbody>
          </table>
          <div class="pull-right">
            <?php echo $this->pagination->create_links(); ?>
          </div>
        </div>

      </div>
    </div>

  </div>