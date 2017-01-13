
//--------------------------------------------------------------------------------------------

/* Constant */

const BOOL_YES_NO={Yes:'Yes', NO:'No'};

const FIELD_TYPES={select:'--select--',textField:'Text Field',textArea:'Text Area',file:'File',dropDown:'Dropdown',radioButton:'RadioButton',checkbox:'Checkbox'};

const TEXT_BOX_DEFAULT={type:'text',placeholder:'Enter Text'};

const PRICE_TYPE={type1:"Percent",type2:"Fixed"};

const INPUT_TEXT_FIELD = "input_text_field";

const INPUT_RADIO_FIELD = "input_radio_field";

const INPUT_DROPDOWN_FIELD = "input_dropdown_field";

const INPUT_TEXTAREA_FIELD="input_text_area_field";


//----------------------------------------------------------------------------------------------

/*Variables*/


/*
* @var inputTextFieId 
* 
* This variable stores current Id sequence number for input_text_field
*/

var inputTextFieldId=0;



/*
* @var inputRadioFieldId 
* 
* This variable stores current Id sequence number for inputRadioFieldId
*/
var inputRadioFieldId=0;



/*
* @var multiOptionId 
* 
* This variable stores current Id sequence number for multiOption menu
*/
var  multiOptionId=0;



/*
* @var inputRadioFieldId 
* 
* This variable stores current Id sequence number for inputDropDownFieldId
*/
var inputDropDownFieldId=0;



/* stores the id sequence of table*/

var tableId=0;



/* Id sequence for input text Area box field*/

var inputTextAreaFieldId=0;



var divId=0;





function addTextField(divName,attributes){
	var append="<input id="+getNewId(INPUT_TEXT_FIELD);
	for (var key in attributes) {
	if(key=="name"){
	append=append+" "+key+"="+attributes[key]+parseInt(getNewId(INPUT_TEXT_FIELD)+1);	
	}
	append=append+" "+key+"='"+attributes[key]+"'";
	}
	if(!divName)
		return append+">";
}

//-----------------------------------------------------------------------------------------------*/





//------------------------------------------------------------------------------------------------------

/*@param String divName 	Div name Where radio button has to be appended 
* @param String type    	type of input field "radio"
* @param String name    	name will be assigned to radio button
* @param Array values          	various values to be displayed for radio select
* @param Integer defaultSelect  default select to any radio items 
//* @param String cssClass        css class to be applied
* 
* @return  
*/

function addRadioButton1(divName,attributes,keyValues,defaultSelect){
	var append="";
	var i=1;
	for(var key in keyValues){
		
		append+="<input ";
		for(var key1 in attributes){
			append+=key1+"='"+attributes[key1]+"' ";
		}
		append+=key+"='"+keyValues[key]+"' ";
		if(i==defaultSelect){
			append+=" checked";
		}
		append+=" > "+key+" <br>";
		i++;
	}
	$("."+divName).append(append);
}


function addRadioButton(divName,type,name,values,defaultSelect,cssClass){
	var select="";
	for(var i=0;i<values.length;i++){

		if(i==defaultSelect-1){
			select="checked";

		}
	 $("."+divName).append("<input type="+type+" name ="+ name+" value="+ values[i]+" class="+cssClass+" "+select+">"+ values[i]+"<br>");

		if(select){
		select="";
		}
	}
}


//-------------------------------------------------------------------------------------------------------------

var f=true;


function optionChanged(event){
	var divId=event['path'][5]['id'];
	var id=	event['target']['id'];
	var selected=$('#'+id).find(":selected").text();

		if(selected=='Yes' || selected=='No')
			return;
	if(selected=='Text Field' || selected=='Text Area'|| selected=='File' ){

		$("#"+divId).children().last().replaceWith(makeSingleOptionBox());

		}
	else {
			$("#"+divId).children().last().replaceWith(makeMultiOptionBox());
		}

	
}



//-------------------------------------------------------------------------------------------------------------


/*@param String divName 		Div name Where drop down menu has to be appended 
* @param String name    		name will be assigned to drop down menu
* @param AssociativeArray keyValue    	Various values to be displayed for radio select
* @param Integer label 		 	label for dropdown menu
* //@param String cssClass       		css class to be applied
* 
* @return  
*/


function addDropdownMenu(divName,attributes,keyValue){

	var append=" <select id='"+getNewId(INPUT_DROPDOWN_FIELD)+"' onchange='optionChanged(event);'";
	
	for (var key in attributes) { 
		
		if(attributes.hasOwnProperty(key))
	 append=append+" "+key+"='"+attributes[key]+"'";
	}
	append+="'>";
	
	for (var key1 in keyValue) 
	{
		
		if(keyValue.hasOwnProperty(key1)){

		append=append+("<option class='list_option_id' value ='"+key1+"'>"+keyValue[key1]+"</option>");
	}
}
	
	if(!divName)
	 return append;
	$("."+divName).append(append);

}


//--------------------------------------------------------------------------------------------------

function makeNewDiv(jumbotron)
{
	divId++;
	return "<div class='row "+jumbotron+"' id='divId_"+divId+"'></div>";

}


function addNewOption(divName){

	var div=makeNewDiv("jumbotron");
	var innerDiv=makeNewDiv();
	var id=extractDivId(div);
	$("."+divName).append(div);
	$("#"+id).append(makeTable());
	$("#"+id).append(innerDiv);
}

function extractDivId(div) {
	var index=div.indexOf(" id");
	var index2=div.indexOf("'",index);
	var index3=div.indexOf("'",index2+1);
	var id=div.substring(index2+1,index3);
	return id;
	}




//----------------------------------------------------------------------------------------------------

// handling click events

  $(document).on('click', '.delete', function(){ 

	 if($(this).attr('attr2')){
 		$("#"+$(this).attr('attr2')).remove();
 		return;
 }
	
	$(this).parent().parent().parent().parent().parent().remove();
});

  $(document).on('click', '.add-new-row', function(){ 
	var id=$(this).attr('attr');
	$("#"+id).append("<tr id=deleteId_"+multiOptionId+"><td>"+simplify());



});


//--------------------------------------------------------------------------------------------------------------

const hTitle="Title";
const hInputType="Input Type";
const hRequired="Is Required";
const hSortOrder="Sort Order";

function makeTable(){
	tableId++;
	var append="<table class='table' id=tableId_"+tableId+"><thead><tr><th>"+hTitle+"</th><th>"+hInputType+"</th><th>"+hRequired+"</th><th>"+hSortOrder+"</th><th>Delete</th></tr></thead><tbody><tr><td>";
	append=append+addTextField(false,TEXT_BOX_DEFAULT)+"</td><td>";
	append=append+addDropdownMenu(false,{attr:tableId,name:'mydropList',required:'',},FIELD_TYPES)+"</td><td>";
	append=append+addDropdownMenu(false,{name:'mydropList2',required:''},BOOL_YES_NO)+"</td><td>";
	append=append+addTextField(false,{type:'text',placeholder:''})+"</td><td>";
	append=append+addTextField(false,{type:'button',class:'delete',attr:tableId,value:'Delete'})+"</td><td>";
	append+="</tr></tbody></table>";
	return append;
}

const hPrice="Price";
const hPriceType="Price Type";
const hSku="SKU";

//-------------------------------------------------------------------------------------------------------------------

const hTitle1="Title";


function makeMultiOptionBox(){
	tableId++;
	var append="<table id=tableId_"+tableId +" class='table'><thead><tr><th>"+hTitle1+"</th><th>"+hPrice+" </th><th>"+hPriceType+"</th><th>"+hSku+"</th><th>"+hSortOrder+"</th><th>Delete</th></tr></thead><tbody id=tableBodyId_"+tableId+"><tr id=deleteId_"+multiOptionId+"><td>";
	append+=simplify();
	append+="</tr></tbody><tfoot><tr><td></td><td></td><td></td><td></td><td colspan='100' ><button attr=tableBodyId_"+tableId+" class='add-new-row' >Add New Row</button></td></tr></tfoot></table>";
	return append;
}



//---------------------------------------------------------------------------------------------------------------------
function simplify(){
	var append;
	append=addTextField(false,TEXT_BOX_DEFAULT)+"</td><td>";
	append=append+addTextField(false,TEXT_BOX_DEFAULT)+"</td><td>";
	append=append+addDropdownMenu(false,{name:'mydropList',required:''},PRICE_TYPE)+"</td><td>";
	append=append+addTextField(false,{type:'text',placeholder:''})+"</td><td>";
	append=append+addTextField(false,{type:'text',placeholder:''})+"</td><td>";
	append=append+addTextField(false,{type:'button',attr2:"deleteId_"+multiOptionId,class:'delete',value:'Delete',attr:tableId})+"</td><td>";
		multiOptionId++;

	return append;

	
}
var hMaxChar="Max Character";
//----------------------------------------------------------------------------------------------------------------------
function makeSingleOptionBox(){
	tableId++;
	var append="<table class='table' id=table_"+tableId+"><thead><tr><th>"+hPrice+"</th><th>"+hPriceType+"</th><th>"+hSku+"</th><th>"+hMaxChar+"</th></tr></thead><tbody><tr><td>";
	append=append+addTextField(false,TEXT_BOX_DEFAULT)+"</td><td>";
	append=append+addDropdownMenu(false,{name:'mydropList',required:''},PRICE_TYPE)+"</td><td>";
	append=append+addTextField(false,TEXT_BOX_DEFAULT)+"</td><td>";
	append=append+addTextField(false,TEXT_BOX_DEFAULT)+"</td><td>";

	append+="</tr></tbody></table>";
	return append;
}


//--------------------------------------------------------------------------------------------------------------------


/* @param String divName 					Div name Where drop down menu has to be appended //| false if only resulted string required 
* @param String name    				name will be assigned to drop down menu
* @param AssociativeArray keyValue    	Various values to be displayed for radio select
* @param Integer label 		 			label for dropdown menu
* //@param String cssClass       			css class to be applied 
**/



function addTextArea(divName,attributes){

	var append="<textarea id="+getNewId(INPUT_TEXTAREA_FIELD);

	for (var key in attributes) {
		if(attributes.hasOwnProperty(key))
		append=append+"  "+ key+"="+attributes[key];

	}
	$("."+divName).append("<br>"+append+"></textarea><br>");

}


//------------------------------------------------------------------------------------------------------------------------


/* @param String fieldType  		 
*   
* field type will be one of the following
* 1 text
* 2 radio
* 3 dropdown
* 4 text Area
*/




function getNewId(fieldType){


	if(fieldType==INPUT_TEXT_FIELD){
		return idGenerator(fieldType,++inputTextFieldId);
	}
	else if(fieldType==INPUT_RADIO_FIELD){
		return idGenerator(fieldType,++inputRadioFieldId);
		}
	else if(fieldType==INPUT_DROPDOWN_FIELD){
		return idGenerator(fieldType,++inputDropDownFieldId);	
	}
	else if(fieldType==INPUT_TEXTAREA_FIELD){
		return idGenerator(fieldType,++inputTextAreaFieldId);	
	}

}


//------------------------------------------------------------------------------------------------------------------

/* @param String fieldType  		 
* @param integer id
* @return id in string form 
*/


function idGenerator(fieldType,id){
	return fieldType+"_"+id;
}


//------------------------------------------------------------------------------------------------------------------------


