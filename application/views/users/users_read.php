
    <table class="table">
	    <tr><td>የሲስተም ተጠቃሚ ስም</td><td><?php 
		foreach($employees as $employee){
			if($Employee_ID == $employee->ID){
				echo $employee->First_Name." ".$employee->Middle_Name;
				break;
			}     
		}
		?></td></tr>
	    <tr><td>መለያ ስም [Username] </td><td><?php echo $Email; ?></td></tr>
	    <tr><td>አካዉንቱ ያለበት ሁኔታ</td><td><?php echo ($Is_Active == 1)?"የሚያገለግል": "የተዘጋ"; ?></td></tr>
	    <!--tr><td>Password</td><td><?php //echo $Password; ?></td></tr-->
	    <tr><td>የስራ ድርሻ</td><td><?php
		if( $Access_Level == 1)
			echo 'System Admininstrator'; 
		else if($Access_Level == 2)
			echo 'ቢሮ ሀላፊ';
		else if($Access_Level == 3)
			echo 'እቶር ኪፐር'; 
		else if($Access_Level == 4)
			echo 'እስቶክ ክለርክ';
		else if($Access_Level == 5)
			echo 'የቢሮ ሰራተኛ';  
		else if($Access_Level == 6)
			echo 'ኦዲተር';  
		?></td></tr>
	    <tr><td>አካዉንቱ የተፈጠረበት ቀን</td><td><?php echo $Created_Date; ?></td></tr>
	    <tr><td></td><td><a href="<?php echo site_url('users') ?>" class="btn btn-default">ተመለስ</a></td></tr>
	</table>