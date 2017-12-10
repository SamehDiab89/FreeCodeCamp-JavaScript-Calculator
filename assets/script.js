
var arr = [];
var resultArr = [];
var number = /\d+/g;
var nonNumber = /\D/g;
// var nonNumber = /^(\+|-|\*|\/|=)$/;
var num;
var nonNum;
$(".view").text("Yor Calculator is Ready");
$(".result").text("Press = to show Your Result ");



$("#1").click(function() {
	arr.push(1);
	$(".view").text(arr.join(""));
	// num = arr.join("").match(number);
})

$("#2").click(function() {
	arr.push(2);
	$(".view").text(arr.join(""));
})

$("#3").click(function() {
	arr.push(3);
	$(".view").text(arr.join(""));
})

$("#4").click(function() {
	arr.push(4);
	$(".view").text(arr.join(""));
})

$("#5").click(function() {
	arr.push(5);
	$(".view").text(arr.join(""));
})

$("#6").click(function() {
	arr.push(6);
	$(".view").text(arr.join(""));
})

$("#7").click(function() {
	arr.push(7);
	$(".view").text(arr.join(""));
})

$("#8").click(function() {
	arr.push(8);
	$(".view").text(arr.join(""));
})

$("#9").click(function() {
	arr.push(9);
	$(".view").text(arr.join(""));
})

$("#a-0").click(function() {
	arr.push(0);
	$(".view").text(arr.join(""));
})

$('#check').change(function() {
    // this will contain a reference to the checkbox   
    if (this.checked) {
    	$(".view").text("Yor Calculator is Ready");
    	$("button").prop("disabled",false);
        console.log('On');
    } else {
        console.log('Off');
        $(".view").text("Yor Calculator is Off");
        arr = [];
        $("button").prop("disabled",true);
    }
});

$("#10").click(function() {

	if(arr.length < 1) {
		$(".result").text("Please Do Calculations first");
	} else if(arr.length === 1){
		$(".result").text("Please Do Calculations first");
	} else {
		num = array(arr);
		nonNum = noNumber();
		var resultText = results(num, nonNum);
		$(".result").text(resultText);
	}
	 
})

$("#11").click(function() {
	arr.push('.');
	$(".view").text(arr.join(""));
})

$("#12").click(function() {
	if(arr[arr.length-1]/1 != arr[arr.length-1]){
		$(".view").text("Multi calculations without numbers, press Number or = ");
	} else {
		arr.push('+');
		$(".view").text(arr.join(""));
	}
	
})

$("#13").click(function() {
	if(arr[arr.length-1]/1 != arr[arr.length-1]){
		$(".view").text("Multi calculations without numbers, press Number or = ");
	} else {
		arr.push('-');
		$(".view").text(arr.join(""));
	}
	
})

$("#14").click(function() {
	if(arr[arr.length-1]/1 != arr[arr.length-1]){
		$(".view").text("Multi calculations without numbers, press Number or = ");
	} else {
		arr.push('*');
		$(".view").text(arr.join(""));
	}
	
})

$("#15").click(function() {
	if(arr[arr.length-1]/1 != arr[arr.length-1]){
		$(".view").text("Multi calculations without numbers, press Number or = ");
	} else {
		arr.push('/');
		$(".view").text(arr.join(""));
	}
	
})

$("#16").click(function() {
	arr.pop();
	$(".view").text(arr.join(""));
})

$("#17").click(function() {
	arr = [];
	$(".view").text("Yor Calculator is Ready");
	$(".result").text("Press = to show Your Result ");
})



function array(arr) {
	var finalArray = [];
	var num ='';
	for (var i = 0; i < arr.length; i++) {
		if(!(arr[i] == '+' || arr[i] == '-' || arr[i] == '*' || arr[i] == '/')){
			num += arr[i];
		} else if(arr[i] == '+' || arr[i] == '-' || arr[i] == '*' || arr[i] == '/') {
			finalArray.push(num);
			num ='';
		} 

	}
	finalArray.push(num);
	return finalArray;
}


function noNumber() {
	var array = arr.join("").match(nonNumber);
	var array1 = [];

	for (var i = 0; i < array.length; i++) {
		if(array[i] != "."){
			array1.push(array[i]);
		}
	}

	return array1;
}



var numarray = ["1","2","3", "4", "5"];
var nonarray = ['+','-', '*', '/'];

function results(numarr, nonum) {
	var list = [];
	var result;
	for (var i = 0; i < numarr.length; i++) {
		list.push(numarr[i]);
		if(nonum[i]){
			list.push(nonum[i]);
		}
	}
	if(list[list.length-1]/1 != list[list.length-1]){
		list.pop();
	}


	for (var i = 0; i < list.length; i++) {
		if(i === 0 ) {
			result = list[i]/1;
		}

		if(list[i] === '+') {
			result = result + (list[i+1]/1);
		} else if (list[i] === '-'){
			result = result - (list[i+1]/1);
		} else if (list[i] === '*') {
			result = result * (list[i+1]/1);
		} else if (list[i] === '/') {
			result = result / (list[i+1]/1);
		}
	}

	console.log(result);
	return result.toFixed(2);
}

// results(numarray, nonarray);

