function convert()
{
   var k=document.getElementById("kg").value ;
   var pounds=k*2.2046;
   var miligram=k*1000000;
   var ton=k*0.0011023;
   var ounce= k*35.274;
   var pp=document.getElementById("p").value=pounds;
   var mil=document.getElementById("mg").value=miligram;
   var ton1=document.getElementById("ton").value=ton;
   var ou=document.getElementById("ou").value=ounce;

}