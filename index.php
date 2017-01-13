<html>
<head>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>

	
<script src="/jquery_lib/jquery_lib.js" >
	</script>
<link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">

</head>
	<body>


<!--



<div class="row generate ">

<br>
<button type="button" onclick="addRadioButton('generate','radio','gender',['male','female','others'],1);">Add Radio Button</button>


<button type="button" onclick="addTextField('generate','text','Enter Text','input');">Add Input Field</button> 


<button type="button" onclick="addTextField('generate',{type:'text',placeholder:'Enter_Text',class:'my-css-class'});">Add Input Field </button>




<input id="clickMe" type="button" value="Adddropdown" onclick="addDropdownMenu('generate',{name:'myList',required:''},{one:1, two:2, three:3,four:4}, 'Select List');" />

<input id="clickMe" type="button" value="Add text Area" onclick="addTextArea('generate',{rows:4, cols:5, name:'text-box',wrap:'soft'}, 'Select List');" />

</div> -->

<button type="button" onclick="addNewOption('mydiv');">Add New Option</button>

<button type="button" onclick="addRadioButton1('mydiv',{type:'radio',name:'gender',class:'radio form-control'},{Male:'male',Female:'female',Other:'other'},2);">Add Radio Option</button>

<div class="container">
<div class="row">
	<div class="row mydiv">
		
		
	</div>


</div>
</div>


<div class="ass"></div>


<?php 


if($_SERVER["REQUEST_METHOD"] == "POST"){

//echo "helllo";

//print_r($_POST)

//echo $_POST["gender"]."<br>";


//echo $_POST["myList"]."<br>";

//echo $_POST['first']."<br>";

//echo $_POST['last'];
}


?>


	</body>



</html>




