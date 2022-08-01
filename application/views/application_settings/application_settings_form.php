

<div class="row">
    <div class="col-md-12">
        <div class="box box-info">
            <div class="box-header with-border">
                <h3 class="box-title">Application Setting</h3>
            
            <div class="box-body">
              <div class="row clearfix">  


 <div class="row">
   <div class="col-md-12">

       <!-- /.box-header -->
       <div class="box-body">


         <form action="<?php echo $action; ?>" method="post" enctype="multipart/form-data">
         <div class="form-group col-xs-6">
             <label for="varchar">ድርጅቱ ስም <?php echo form_error('Office_Name') ?></label>
             <input type="text" class="form-control input-sm" name="Office_Name" id="Office_Name" placeholder="ድርጅቱ ስም" value="<?php echo $Office_Name; ?>" />
           </div>
           <div class="form-group col-xs-8">
             <label for="int">አፕሊኬሽን ስም <?php echo form_error('Application_Title') ?></label>
             <input type="text" class="form-control input-sm" name="Application_Title" id="Application_Title" placeholder="አፕሊኬሽን ስም" value="<?php echo $Application_Title; ?>" />
           </div>
           <div class="form-group col-xs-4">
             <label for="varchar">ምፃረ ቃል <?php echo form_error('Abbreviations') ?></label>
             <input type="text" class="form-control input-sm" name="Abbreviations" id="Abbreviations" placeholder="ምፃረ ቃል" value="<?php echo $Abbreviations; ?>" />
           </div>
           <div class="form-group col-xs-6">
             <label for="varchar"> ኢሜል <?php echo form_error('Email_Address') ?></label>
             <input type="text" class="form-control input-sm" name="Email_Address" id="Email_Address" placeholder="ኢሜል" value="<?php echo $Email_Address; ?>" />
           </div>
           <div class="form-group col-xs-6">
             <label for="varchar"> ስልክ ቁጥር <?php echo form_error('Phone') ?></label>
             <input type="text" class="form-control input-sm" name="Phone" id="Phone" placeholder="ስልክ ቁጥር" value="<?php echo $Phone; ?>" />
           </div>
           <div class="form-group col-xs-6">
             <label for="varchar"> ተ.እ.ታ <?php echo form_error('TIN') ?></label>
             <input type="text" class="form-control input-sm" name="TIN" id="TIN" placeholder="ተ.እ.ታ" value="<?php echo $TIN; ?>" />
           </div>
           <div class="form-group col-xs-6">
             <label for="varchar">ቋንቋ <?php echo form_error('Language') ?></label>
             <input type="text" class="form-control input-sm" name="Language" id="Language" placeholder="ቋንቋ" value="<?php echo $Language; ?>" />
           </div>
           <div class="form-group col-xs-6">
             <label for="varchar">ግርጌ መልእክት <?php echo form_error('Footer_Text') ?></label>
             <input type="text" class="form-control input-sm" name="Footer_Text" id="Footer_Text" placeholder="ግርጌ መልእክት" value="<?php echo $Footer_Text; ?>" />
           </div>
           <div class="form-group col-xs-6">
             <label for="varchar">ሎጎ [Only .png permited] <?php echo form_error('Logo') ?></label>
             <input type="file" class="form-control input-sm" name="Logo" id="Logo" placeholder="ሎጎ" value="<?php echo $Logo; ?>" />
           </div>
           <div class="col-xs-12">
             <input type="hidden" name="ID" value="<?php echo $ID; ?>" />
             <button type="submit" class="btn btn-success btn-sm"> <i class="fa fa-check"></i> ይመዝገብ </button>
             <a href="<?php echo site_url('application_settings') ?>" class="btn btn-default btn-sm">ተመለስ</a>
           </div>
         </form>



       </div>
     </div>
   </div>

   </div>
     </div>
   </div>
