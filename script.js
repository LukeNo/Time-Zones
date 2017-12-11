function zegarek(offs){
 offs=offs+lato_offset;
 var g,m,s,teraz=new Date();
 with(teraz){
  setTime(getTime()+(offs*3600000));
  g=getUTCHours(); m=getUTCMinutes(); s=getUTCSeconds()}
 
 var czas=" "+(g<10?"0":"")+g;
 czas+=(m<10?":0":":")+m;
 czas+=(s<10?":0":":")+s;
 return czas;
}

function zegarStart(){
 var lato=new Date(2017,7,1), teraz=new Date();
 lato_offset=(teraz.getTimezoneOffset()==lato.getTimezoneOffset())?1:0;
 ustawCzas();
 setInterval('ustawCzas()',1000);
}

function ustawCzas(){
 function Czas(id,offs){
  document.clock.elements[id].value=zegarek(offs);
 }
 Czas("vancouver", -8);
 Czas("mexico", -6);
 Czas("newyork", -5);
 Czas("buenos", -3);
 Czas("london", 0);
 Czas("warshaw", 1);
 Czas("moscow", 3);
 Czas("teheran", 3.5);
 Czas("dehli", 5.5);
 Czas("beijin", 8);
 Czas("tokyo", 9);
}
