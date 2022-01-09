$(document).ready(function(){
	$('#resutl').hide();
if(location.href.indexOf('?code=')>-1)
{
	var code=location.href.split('?code=')[1];
	$('#code-generate').val(code);
	$('#generateBtn').click();
}
});

$('#generateBtn').click(function(){
		let code=$('#code-generate').val();
		let width=$('#code-width').val();
		if(!width)
			width=200;
		$('#resutl').attr('width',width);
		let imageSrc= `/img/${code}/${width}`;
		$('#resutl').attr('src',imageSrc);
		
		$('#resutl').show();
});