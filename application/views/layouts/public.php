<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>MAS - Media Archive System</title>
  <!-- Tell the browser to be responsive to screen width -->
  <meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport">
  <!-- Bootstrap 3.3.6 -->
  <link rel="stylesheet" href="<?php echo base_url('resources/css/bootstrap.min.css'); ?>">
  <!-- Font Awesome -->
  <link rel="stylesheet" href="<?php echo base_url('resources/css/font-awesome.min.css'); ?>">
  <!-- Ionicons -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/ionicons/2.0.1/css/ionicons.min.css">
  <!-- Datetimepicker -->
  <link rel="stylesheet" href="<?php echo base_url('resources/css/bootstrap-datetimepicker.min.css'); ?>">
  <!-- Theme style -->
  <link rel="stylesheet" href="<?php echo base_url('resources/css/AdminLTE.min.css'); ?>">
  <!-- AdminLTE Skins. Choose a skin from the css/skins
             folder instead of downloading all of them to reduce the load. -->
  <link rel="stylesheet" href="<?php echo base_url('resources/css/_all-skins.min.css'); ?>">
</head>

<style>
  .bg-img {
    background-image: url("<?php echo base_url('resources/img/logo.png'); ?>");
    background-color: #d2d6de;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    z-index: 1;
  }

  .bg {
    background-color: #d2d6de;
  }
</style>

<body class="hold-transition lockscreen bg-img ">
  <!-- Automatic element centering -->
  <div class="lockscreen-wrapper bg ">
    

    <!-- START LOCK SCREEN ITEM -->
    <div class="lockscreen-item">
      <!-- lockscreen image -->
      <div class="lockscreen-image">
        <img src="<?php echo base_url('resources/img/user2-160x160.jpg') ?>" alt="User Image">
      </div>
      <!-- /.lockscreen-image -->

      <!-- lockscreen credentials (contains the form) -->
      <div class="lockscreen-credentials">
        <div class="input-group">
          <input type="password" class="form-control" placeholder="password">
          <div class="input-group-btn">
            <button type="button" class="btn"><i class="fa fa-arrow-right text-muted"></i></button>
          </div>
        </div>
      </div>
      <!-- /.lockscreen credentials -->

    </div>
    <!-- /.lockscreen-item -->
  </div>
  <!-- /.center -->

  <!-- jQuery 2.2.3 -->
  <script src="<?php echo base_url('resources/js/jquery-2.2.3.min.js'); ?>"></script>
  <!-- Bootstrap 3.3.6 -->
  <script src="<?php echo base_url('resources/js/bootstrap.min.js'); ?>"></script>
</body>

</html>