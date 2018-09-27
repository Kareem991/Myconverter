$(function(){
var url = "https://allorigins.me/get?method=raw&url=" + encodeURIComponent("https://themoneyconverter.com/USD/EGP.aspx") + "&callback=?";
var text2;
var text3;
$.get(url, function(response) {
var markup = '<div><p>'+response+'</p></div>';
var parser = new DOMParser();
var el = parser.parseFromString(markup, "text/html");
  var obj = $(el).find('#res1');
  var text= obj.text();
   text2= text.slice(33,39);
 });
url = "https://allorigins.me/get?method=raw&url=" + encodeURIComponent("https://themoneyconverter.com/RUB/EGP.aspx") + "&callback=?";
$.get(url, function(response) {
var markup = '<div><p>'+response+'</p></div>';
var parser = new DOMParser();
 var el = parser.parseFromString(markup, "text/html");
  var obj = $(el).find('#res1');
  var text= obj.text();
   text3= text.slice(33,39);
});  
 var usd=document.getElementById("1");
var egp=document.getElementById("2");
var select = document.getElementById("selection");
var currency=select.options[select.selectedIndex].value;
var text1= document.getElementById('text1');
function change(){
currency=select.options[select.selectedIndex].value;
text1.innerHTML=currency+':';
}
select.addEventListener('change',change);
//currency=select.options[select.selectedIndex].value;
//text1.innerHTML=currency+':';


function convert () {
if(currency==="USD")
var pounds= Number(text2)*usd.value;
else
var pounds = Number(text3)*usd.value;
pounds=Math.round(pounds * 100) / 100;
egp.value=pounds;
}

usd.addEventListener("input",convert);

});

