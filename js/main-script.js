$(document).ready(function(){
	var _images = ['images/portrait.jpg','images/portrait2.jpg'];
	//preload second images
	$("<img />").attr('src','images/portrait2.jpg');
	
	//change images
	setInterval(function(){ 
	
		$('#portrait-wrapper').fadeOut(800,function(){
				var _current = $('#portrait-image').data('current').toString();
				switch(_current){
					case "1":
						$('#portrait-image').attr('src',_images[1]).data('current','2');
					break;
					case "2":
						$('#portrait-image').attr('src',_images[0]).data('current','1');
					break;
				}
				$(this).fadeIn(800);
		});	
	}, 7000);
})
