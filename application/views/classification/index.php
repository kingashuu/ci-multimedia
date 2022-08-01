<div class="row">
    <div class="col-md-12">



              <div class="box">
        <div class="box-header with-border">
          <h3 class="box-title">Classification  Listing</h3>
          <div class="box-tools pull-right">
            <button type="button" class="btn btn-box-tool" data-widget="collapse" data-toggle="tooltip" title="Collapse">
              <i class="fa fa-minus"></i></button>
                <button type="button" class="btn btn-box-tool" data-widget="remove" data-toggle="tooltip" title="Remove">
              <i class="fa fa-times"></i></button>
          </div>
        </div>
        <div class="box-body">  


                <a href="<?php echo site_url('classification/add'); ?>" class="btn btn-success btn-sm"> Add Classification </a> 
            
                <div class="row clearfix">
   <?php echo $this->session->flashdata('alert_msg');?>
            <div class="box-body table-responsive">
                <table id="example1" class="table table-striped">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Classification Code</th>
                            <th>Classification Name</th>
                            <th>Description</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                    <?php $i=$noof_page+1; 
           if(isset($classification) && $classification!=null)
           {
           foreach($classification as $c){ ?>
                    <tr>
                    <td><?php echo $i++; ?></td>
                    <td><?php echo $c['Classification_Code']; ?></td>
                    <td><?php echo $c['Classification_Name']; ?></td>
                    <td><?php echo $c['Description']; ?></td>
                     <td><a href="<?php echo site_url('classification/edit/'.$c['C_ID']); ?>" class="btn btn-info btn-xs"><span class="fa fa-pencil"></span> Edit</a> 
                         <a
                            onclick="return confirm('Are you sure You want to delete?')"
                             href="<?php echo site_url('classification/remove/'.$c['C_ID']); ?>" class="btn btn-danger btn-xs"><span class="fa fa-trash"></span> Delete</a>
                     </td>
                    </tr>
                     <?php }
                    
                           }else{
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

