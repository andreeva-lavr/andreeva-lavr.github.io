/* <script src = "Таблица3.js"></script> */

document.writeln("<table class='instruction2' style='z-index:2;' >");
document.writeln("<tr>");
document.write("<td id='1unit'>"+"<img class='Sp' src='image/1unit.png' "+'onclick='+"selection('1unit')"+'>'+"</td>");
document.write("<td id='2unit'>"+"<img class='Sp' src='image/2unit.png' "+'onclick='+"selection('2unit')"+'>'+"</td>");
document.write("<td id='3unit'>"+"<img class='Sp' src='image/3unit.png' "+'onclick='+"selection('3unit')"+'>'+"</td>");
document.write("<td id='4unit'>"+"<img class='Sp' src='image/4unit.png' "+'onclick='+"selection('4unit')"+'>'+"</td>");
document.write("<td id='5unit'>"+"<img class='Sp' src='image/5unit.png' "+'onclick='+"selection('5unit')"+'>'+"</td>");
document.write("<td id='6unit'>"+"<img class='Sp' src='image/6unit.png' "+'onclick='+"selection('6unit')"+'>'+"</td>");
document.writeln("</tr>");
document.writeln("<tr>");
document.write("<td id='7unit'>"+"<img class='Sp' src='image/7unit.png' "+'onclick='+"selection('7unit')"+'>'+"</td>");
document.write("<td id='8unit'>"+"<img class='Sp' src='image/8unit.png' "+'onclick='+"selection('8unit')"+'>'+"</td>");
document.write("<td id='9unit'>"+"<img class='Sp' src='image/9unit.png' "+'onclick='+"selection('9unit')"+'>'+"</td>");
document.write("<td id='10unit'>"+"<img class='Sp' src='image/10unit.png' "+'onclick='+"selection('10unit')"+'>'+"</td>");
document.write("<td id='11unit'>"+"<img class='Sp' src='image/11unit.png' "+'onclick='+"selection('11unit')"+'>'+"</td>");
document.write("<td id='12unit'>"+"<img class='Sp' src='image/12unit.png' "+'onclick='+"selection('12unit')"+'>'+"</td>");
document.writeln("</tr>");
document.writeln("<tr>");
document.write("<td id='13unit'>"+"<img class='Sp' src='image/13unit.png' "+'onclick='+"selection('13unit')"+'>'+"</td>");
document.write("<td id='14unit'>"+"<img class='Sp' src='image/14unit.png' "+'onclick='+"selection('14unit')"+'>'+"</td>");
document.write("<td id='15unit'>"+"<img class='Sp' src='image/15unit.png' "+'onclick='+"selection('15unit')"+'>'+"</td>");
document.write("<td id='16unit'>"+"<img class='Sp' src='image/16unit.png' "+'onclick='+"selection('16unit')"+'>'+"</td>");
document.write("<td id='17unit'>"+"<img class='Sp' src='image/17unit.png' "+'onclick='+"selection('17unit')"+'>'+"</td>");
document.write("<td id='18unit'>"+"<img class='Sp' src='image/18unit.png' "+'onclick='+"selection('18unit')"+'>'+"</td>");
document.writeln("</tr>");
document.writeln("<tr>");
document.write("<td id='19unit'>"+"<img class='Sp' src='image/19unit.png' "+'onclick='+"selection('19unit')"+'>'+"</td>");
document.write("<td id='20unit'>"+"<img class='Sp' src='image/20unit.png' "+'onclick='+"selection('20unit')"+'>'+"</td>");
document.write("<td id='21unit'>"+"<img class='Sp' src='image/21unit.png' "+'onclick='+"selection('21unit')"+'>'+"</td>");
document.write("<td id='22unit'>"+"<img class='Sp' style='background:#ddd' src='image/22unit.png' "+'onclick='+"selection('22unit')"+'>'+"</td>");
document.write("<td id='23unit'>"+"<img class='Sp' style='background:#ddd' src='image/23unit.png' "+'onclick='+"selection('23unit')"+'>'+"</td>");
document.write("<td id='24unit'>"+"<img class='Sp' src='image/24unit.png' "+'onclick='+"selection('24unit')"+'>'+"</td>");
document.writeln("</tr>");
document.writeln("</table>");
/*  Показать-скрыть Таблицы */
function Open(NR){
if (document.getElementById(NR).style.display == 'block')
{document.getElementById(NR).style.display = 'none';}
else {document.getElementById(NR).style.display = 'block';}
}
/*  Выбор фишек */
var s=0;
function selection(n){
s=s+1;
var arr = [3,document.getElementById('agent1'),document.getElementById('agent2'),document.getElementById('agent3')]
arr[s].src="image/"+n+".png";
	if (s==3){
		val=Math.floor(Math.random()*(24))+1;
		document.getElementById('agent4').src="image/"+val+"unit.png";
		unit=val+'unit';
		
	}
i<arr.length; i++;
}


