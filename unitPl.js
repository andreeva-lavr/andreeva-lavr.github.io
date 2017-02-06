/* <script src = "unitPl.js"></script> */
window.addEventListener('load', function unit(){
var block1 = document.getElementById('block1')
var startx = 0
var dist = 0
// ontouchstart - начало движения пальца
		block1.addEventListener('touchstart', function(e){
			var touchobj = e.changedTouches[0]
			startx = parseInt(touchobj.pageX)
			starty = parseInt(touchobj.pageY)
document.getElementById('X1').innerHTML ='X:'+startx;
document.getElementById('Y1').innerHTML ='Y:'+starty;
			e.preventDefault()
		}, false)
// ontouchmove - движение пальца по экрану
			block1.addEventListener('touchmove', function(e){
			var touchobj = e.changedTouches[0]
			var distX = parseInt(touchobj.pageX) - startx
			var distY = parseInt(touchobj.pageY) - starty
				var arr = document.getElementsByClassName('Bl2');
			    	for(var i=0; i<arr.length; i++){
				arr[i].style.left=distX +startx -25+'px';
				arr[i].style.top=distY + starty -25+'px';
				}
			e.preventDefault()
		}, false)
}, false)


