$(document).ready(function(){
$('#download').hide();
	$('#generateBtn').click(function(){
	$('#result').html('');
	var codeHtml= getGenerateQRcode($('#code-generate').val(), $('#code-width').val(), $('#code-hight').val(), 1,$('#code-border').prop('checked'));
	$('#result').html(codeHtml);
	$('#download').show();
	});

	$('#download').click(
	
	function(){
	var fileName=prompt("Enter file name : ","QR-Code");
	var a = document.createElement('a');
a.href = $('#result div img').attr("src");
a.download = fileName+".png";
document.body.appendChild(a);
a.click();
document.body.removeChild(a);
	}
	);
	});