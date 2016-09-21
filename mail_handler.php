
<?php
  $custemail = $_POST['custemail'].PHP_EOL;
  $custname = $_POST['custname'].PHP_EOL;
  $custmessage = $_POST['custmessage'].PHP_EOL;
  $custsubject = $_POST['custsubject'].PHP_EOL;

echo "<script type='text/javascript'>alert('Thank you');</script>";

  if( ! ini_get('date.timezone') )
{
    date_default_timezone_set('GMT');
}
  $list = array (
    array('Date', 'Name', 'Email', 'Subject','Message'),
    array(date("Y-m-d"), $custname, $custemail, $custsubject ,$custmessage),
);

$fp = fopen('registers.xls', 'a');

foreach ($list as $fields) {
    fputcsv($fp, $fields, "\t", '"');
}

if(! $fp) {
  echo "<script type='text/javascript'>alert('Sorry, there was a problem submitting your form. Please try again.');</script>";
}

?>