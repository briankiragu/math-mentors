//******* ROLLUNDER SCRIPT
var urlimg="/mmm/images";
var pageid="";
var nFlag="button1";     // Not highlighted or selected
var sFlag="button2";   // Selected menu option
var hFlag="button2";   // Highlighted menu option
var hsFlag="button2"; // Highlighted and Selected
var sufx=".gif";
var enableedit=true;  // enables page edit features

function initpage(pgid) {

	pageid=pgid + "";
	//PRELOAD ALL ROLLUNDER IMAGES
	preloadimgs(urlimg + nFlag + sufx, urlimg + sFlag + sufx,
		urlimg + hFlag + sufx, urlimg + hsFlag + sufx );

	selectmnu();
}

function preloadimgs() {
  var doc=document,j; 
  if(doc.images){
    if(!doc.imgss) doc.imgss=new Array();
    var i,ln=doc.imgss.length,k=preloadimgs.arguments; 
    for(i=0; i<k.length; i++) {
      doc.imgss[ln]=new Image; doc.imgss[ln++].src=k[i];}
  }
}

function selectmnu() {
   var sbtn;
   sbtn=document.getElementById("btn_" + pageid);
   if (sbtn.style) { sbtn.style.background="url(" + urlimg + "/" + hFlag + sufx + ")"; }
}

function rollon(nthis) {
   var p,nm;
   nm=nthis.id + "";
   if (nm.indexOf("btn_")==0) {
	nm=nm.substring(4);
	if (nm==pageid) {
	  nthis.style.background="url(" + urlimg + "/" + hsFlag + sufx + ")";}
	else {
	  nthis.style.background="url(" + urlimg + "/" + hFlag + sufx + ")"; }
   }
}

function rolloff(nthis) {
   var p,nm;
   nm=nthis.id + "";
   if (nm.indexOf("btn_")==0) {
	nm=nm.substring(4);
	if (nm==pageid) {
	  nthis.style.background="url(" + urlimg + "/" + sFlag + sufx + ")"; }
	else {
	  nthis.style.background="url(" + urlimg + "/" + nFlag + sufx + ")";}
   }
}

function gotopage(sURL) {
	window.location=sURL;
}
