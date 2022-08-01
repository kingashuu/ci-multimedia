<!-- DataTables -->
<link rel="stylesheet" href="<?php echo base_url('resources/plugins/datatables.net-bs');  ?>/css/dataTables.bootstrap.min.css">
<!-- DataTables -->
<script src="<?php echo base_url('resources/plugins/datatables.net');  ?>/js/jquery.dataTables.min.js"></script>
<script src="<?php echo base_url('resources/plugins/datatables.net-bs');  ?>/js/dataTables.bootstrap.min.js"></script>
<script>
  $(function() {
    $('#example1').DataTable()
    $('#example2').DataTable({
      'paging': true,
      'lengthChange': false,
      'searching': false,
      'ordering': true,
      'info': true,
      'autoWidth': false
    })
  })
</script>

<!-- Default box -->
<div class="box">
  <div class="box-header with-border">
    <h3 class="box-title">Search by</h3>

    <div class="box-tools pull-right">
      <button type="button" class="btn btn-box-tool" data-widget="collapse" data-toggle="tooltip" title="Collapse">
        <i class="fa fa-minus"></i></button>
      <button type="button" class="btn btn-box-tool" data-widget="remove" data-toggle="tooltip" title="Remove">
        <i class="fa fa-times"></i></button>
    </div>
  </div>
  <div class="box-body">

    <script>
      var site_url = "<?php echo site_url(); ?>";
      $(document).ready(function() {
        $('.changeclm').on('change', function(e) {

          var search_by = $('searchby').val();
          var value = $(this).val();
          var clm_name = $('option:selected', this).attr('clm_name');

          var id = $('option:selected', this).attr('id');
          // alert('>>>'+id+'<<<->>'+clm_name+'<<-->>'+value);
          if (value == '') {
            alert('select any column');
          } else {
            if (confirm('Are you sure you want to change?')) {
              //  alert(value);
              $.ajax({
                type: 'POST',
                data: {
                  value: value,
                  clm_name: clm_name,
                  id: id,
                  searchby: searchby
                },
                url: site_url + "multimedia/get_search_values_by_clm",
                success: function(responsedata) {
                  //  alert(responsedata);

                  $('#view-load-id').html(responsedata);
                },
                error: function(jqXHR, textStatus, errorThrown) {
                  alert(jqXHR.responseText)
                }
              });
            } else {
              return false;
            }


          }
        });
      });
    </script>
    <script>
      var site_url = "<?php echo site_url(); ?>";
      $(document).ready(function() {
        $('.clmchange').on('change', function(e) {
          var value = $(this).val();
          if (value == '') {
            alert('select any column');
          } else {
            //  alert(value);
            $.ajax({
              type: 'POST',
              data: {
                value: value
              },
              url: site_url + "/multimedia/get_search_values_by_" + value,
              success: function(responsedata) {
                //   alert(responsedata);

                $('.tabledata-s').html(responsedata);
              },
              error: function(jqXHR, textStatus, errorThrown) {
                alert(jqXHR.responseText)
              }
            });
          }
        });


      });
    </script>
    <div class="col-md-12">
      <?php echo form_open('multimedia/search_by_clm'); ?>
      <div class="col-md-4">
        <input class="form-control" type="text" name="searchby" id="searchby" placeholder="Search query">
      </div>
      <div class="col-md-2">
        <div class="form-group">
          <select name="column_name" class="form-control clmchange">
            <option value="">select </option>
            <option value="Classification">Classification </option>
            <option value="Sub_Classification">Sub Classification </option>
          </select>
        </div>
      </div>
      <div class="col-md-4">
        <div class="form-group">
          <select name="value_id" class="form-control tabledata-s">
            <option value="">select </option>
          </select>
        </div>
      </div>
      <div class="col-md-2">
        <input type="submit" class="btn btn-success pull-left" value="search">
      </div>
      <?php echo form_close(); ?>
    </div>




  </div>
  <!-- /.box-body -->
  <div class="box-footer">

  </div>
  <!-- /.box-footer-->
</div>
<!-- /.box -->


<div class="row">
  <div class="col-md-12">

    <div class="box">
      <div class="box-header with-border">
        <h3 class="box-title">Multimedia Search Resut</h3>

        <div class="box-tools pull-right">
          <button type="button" class="btn btn-box-tool" data-widget="collapse" data-toggle="tooltip" title="Collapse">
            <i class="fa fa-minus"></i></button>
          <button type="button" class="btn btn-box-tool" data-widget="remove" data-toggle="tooltip" title="Remove">
            <i class="fa fa-times"></i></button>
        </div>
      </div>
      <div class="box-body">




        <?php echo $this->session->flashdata('alert_msg'); ?>
        <div class="box-body table-responsive no-padding">

          <table id="example1" class="table table-striped">
            <thead>
              <tr>
                <th>#</th>
                <th>Attachment</th>
                <th>Code</th>
                <th>Name</th>
                <th>Recorde Date</th>
                <th>Classification</th>
                <th>Sub Classification</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <?php $i = $noof_page + 1;
              if (isset($multimedia) && $multimedia != null) {
                foreach ($multimedia as $m) { ?>
                  <tr>
                    <td><?php echo $i++; ?></td>
                    <td><img width="60" height="60" src="<?php echo base_url('resource/Attachment/') . $m['Attachment']; ?>"></td>
                    <td><?php echo $m['Code']; ?></td>
                    <td><?php echo $m['Name']; ?></td>
                    <td><?php echo $m['Recorde_Date']; ?></td>
                    <td><?php echo $m['Classification']; ?></td>
                    <td><?php echo $m['Sub_Classification']; ?></td>

                    <td>
                      <a href="<?php echo site_url('multimedia/search_more/' . $m['M_ID']); ?>" class="btn btn-defualt btn-xs"><span class="fa fa-eye"></span> View</a>
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