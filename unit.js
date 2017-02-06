/* <script src = "unit.js"></script> */
		function unitPc(n){
/* Определяем тип браузера */
	var ie = 0;var op = 0;var ff = 0;var browser = navigator.userAgent;if (browser.indexOf("Opera") != -1) op = 1;else {if (browser.indexOf("MSIE") != -1) ie = 1;else {if (browser.indexOf("Firefox") != -1) ff = 1;}} 
	block = document.getElementById(n);
	delta_x = 0;delta_y = 0;
/* Ставим обработчики событий на нажатие и отпускание клавиши мыши */
	block.onmousedown = saveXY;if (op || ff) {block.addEventListener("onmousedown", saveXY, false);}
	document.onmouseup = clearXY;
/* При нажатии кнопки мыши попадаем в эту функцию */
	function saveXY(obj_event) {
/* Получаем текущие координаты курсора */
	if (obj_event) {
	x = obj_event.pageX;
	y = obj_event.pageY;
	}
	else {
	x = window.event.clientX;
	y = window.event.clientY;
	if (ie) {y -= 2;x -= 2;}}
/* Узнаём текущие координаты блока  */
		Width_block = block.offsetWidth; // Ширина блока
		Height_block = block.offsetHeight; // Высота блока
	    x_block = block.offsetLeft; // Поз_Х блока
//document.getElementById('X1').innerHTML ='X:'+x_block;
	    y_block = block.offsetTop; // Поз_Y блока
//document.getElementById('Y1').innerHTML ='Y:'+y_block;
/* Узнаём смещение */
		Width_delta_x = Width_block - x;
		Height_delta_y = Height_block - y;
	    delta_x = x_block - x;
	    delta_y = y_block - y;	
/* При движении курсора устанавливаем вызов функции moveWindow */
	    document.onmousemove = moveBlock;
	    if (op || ff) document.addEventListener("onmousemove", moveBlock, false);}
	  function clearXY() {
	    document.onmousemove = null; // При отпускании мыши убираем обработку события движения мыши
	  }
		  function moveBlock(obj_event) {
/* Получаем новые координаты курсора мыши */
		    if (obj_event) {
		      x = obj_event.pageX;
		      y = obj_event.pageY;
		    }
		    else {
		      x = window.event.clientX;
		      y = window.event.clientY;
		      if (ie) {
			y -= 2;
			x -= 2;
		      }}
/* Вычисляем новые координаты блока */
			new_x = delta_x + x;
			if (new_x<0) new_x=0;	
		   	new_y = delta_y + y;
			if (new_y<0) new_y=0;
// my_Block1 Перемещаем блок1		
			if (n=='block1') {var arr = document.getElementsByClassName('Bl2');}
		    for(var i=0; i<arr.length; i++){
			arr[i].style.left=new_x + 'px';
			arr[i].style.top=new_y + 'px';
			}
			return false;
		}
	}

