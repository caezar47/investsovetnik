var nav = $('[data-aside-nav]');
var manager = $('[data-aside-manager]');
//console.log(container.length);
//if(container.length > 0) {	
	var manager_h = manager.height();
	console.log(manager_h);
	//console.log(100%  - manager_h+'px');
	if($(document).width() > 1199) {	
		nav.css({"height": "calc(100% - "+manager_h+"px)"});
	} else {
		nav.css({"height": "auto"});
	}
//} 