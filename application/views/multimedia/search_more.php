<link rel="stylesheet" href="<?php echo base_url('resources/plugins/bootstrap-wysihtml5/bootstrap3-wysihtml5.min.css'); ?>">
<script src="<?php echo base_url('resources/plugins/ckeditor/ckeditor.js'); ?>"></script>
<script src="<?php echo base_url('resources/plugins/bootstrap-wysihtml5/bootstrap3-wysihtml5.all.min.js'); ?>"></script>
<script>
  $(function() {
    // Replace the <textarea id="editor1"> with a CKEditor
    // instance, using default configuration.
    CKEDITOR.replace('editor1')
    //bootstrap WYSIHTML5 - text editor
    $('.textarea').wysihtml5()
  })
</script>
<div class="row">
  <div class="col-md-12">
    <div class="box box-info">
      <div class="box-header with-border">
      </div>
      <!-- /.box-header -->
      <div class="box-body">
        <div class="row">
          <div class="col-md-5">
            <?php
            if ($multimedia['Type'] == '.mp4') {
            ?>
              <video playsinline controls crossorigin poster="<?php echo base_url('mediaFile/shutterstock_1523634989.png'); ?>" width="420">
                <!-- <source src="<?= base_url() ?>mediaFile/<?= $multimedia['Attachment']; ?>" type="video/mp4" /> -->
                <source src="<?php echo base_url('resource/Attachment/') . $multimedia['Attachment']; ?>" type="video/mp4" />
                <!-- <source src="/path/to/video.webm" type="video/webm" /> -->
                <!-- Captions are optional -->
                <!-- <track kind="captions" label="English captions" src="/path/to/captions.vtt" srclang="en" default /> -->
              </video>

            <?php
            } elseif ($multimedia['Type'] == '.mp3') {
            ?>
              <audio crossorigin playsinline controls id="player">
                <source src="<?php echo base_url('mediaFile/cinematic-time-lapse-115672.mp3'); ?>" type="audio/mp3" />
                <source src="/path/to/audio.ogg" type="audio/ogg" />
              </audio>
            <?php
            } elseif ($multimedia['Type'] == '.jpg' || '.PNG') {
            ?>
              <img class="img-responsive text-center" src="<?php echo base_url('resource/Attachment/') . $multimedia['Attachment']; ?>" alt="<?php $multimedia['Name']; ?>">
            <?php
            }

            ?>
          </div>
          <!-- /.col -->
          <div class="col-md-7">
            <h3 class="profile-username text-center"><?= $multimedia['Name']; ?></h3>
            <div class="box-body">
              <strong><i class="fa fa-book margin-r-5" aria-hidden="true"></i> Description</strong>
              <p class="text-muted">
                <?= $multimedia['Description']; ?>
              </p>
              <hr>
              <div class="row">
                <div class="col-md-4">
                  <strong><i class="glyphicon glyphicon-qrcode margin-r-5"></i> Code</strong>

                  <p class="text-muted"><?= $multimedia['Code']; ?></p>
                </div>
                <div class="col-md-4">
                  <strong><i class="glyphicon glyphicon-cd margin-r-5"></i> File Type</strong>

                  <p class="text-muted"><?= $multimedia['Type']; ?></p>
                </div>
                <div class="col-md-4">
                  <strong><i class="glyphicon glyphicon-compressed margin-r-5"></i> File Size</strong>

                  <p class="text-muted"><?= $multimedia['Size']; ?></p>
                </div>
              </div>
              <div class="row">
                <div class="col-md-4">
                  <strong><i class="glyphicon glyphicon-list margin-r-5"></i> Classification</strong>
                  <p>
                    <?php
                    if ($multimedia['Classification'] == "") {
                      echo "unknown";
                    }
                    $multimedia['Classification'];
                    ?>
                  </p>
                </div>
                <div class="col-md-4">
                  <strong><i class="glyphicon glyphicon-list-alt margin-r-5"></i> Sub Classification</strong>
                  <p>
                    <?= $multimedia['Sub_Classification'] ?>
                  </p>
                </div>
              </div>
              <hr>
              <div class="user-block">
                <img class="img-circle img-bordered-sm" src="<?php echo base_url('mediaFile/avatar.png'); ?>" alt="user image">
                <span class="username">
                  <a href="#"><?= $multimedia['Recorde_By']; ?></a>
                </span>
                <span class="description"><i class="fa fa-safari margin-r-5"></i>Posted at- <?= $multimedia['Recorde_Date']; ?></span>
              </div>
              <hr>
              <a href="<?php echo base_url('resource/Attachment/') . $multimedia['Attachment']?> " class=" btn btn-lg btn-twitter btn-flat btn-block " download>
                <span class="glyphicon glyphicon-download-alt"></span>
                Download
              </a>
            </div>

          </div>
        </div>
        <!-- /.col -->
      </div>
      <!-- /.row -->
    </div>
    <!-- ./box-body -->
  </div>
  <!-- /.box -->
</div>