!editcom !size $(eval 
var rn=[-1,3];
var bm="Nice.";
var sm="LOL";
var bs="😳";
var wr="💀";
var cm=1;

function f(m){
return Math.floor(Math.random()*((m[1]+1)-m[0])+m[0]);
}

var o=[f(rn),f(rn)];
var rnd;
var p=[0,1]
if(f(p)==0)rnd=o[0];
else rnd=0[1];
var msg="";
if(cm==1) 
{
if(rnd==rn[0])msg=wr;
else if(rnd==rn[1])msg=bs;
else if(rnd<(rn[0]+rn[1])/2)msg=sm;
else msg=bm;
}
var usr;
if("$(query)"=="") usr="$(user)";
else usr="$(query)";

usr+"'s PP size is "+rnd+"inch. "+msg;
)