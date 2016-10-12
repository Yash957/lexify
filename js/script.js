
//a function to show some text letter-by-letter
var showText = function (target, message, index, interval) {
	if (index < message.length) {
		$(target).append(message[index++]);
		setTimeout(function () { showText(target, message, index, interval); }, interval);
	}
}

//listener for the 'awardee' input
$('input.awardee').change(function() {
	$('#awardee').html(""); //clear previous
	showText('#awardee',$("input.awardee").val(), 0, 100);
});

//listener for the 'subject' input
$('input.subject').change(function() {
	$('#subject').html(""); //clear previous
	showText('#subject',$("input.subject").val(), 0, 100);
});

//the print button
$('button').click(function(){
     	window.print();
});
