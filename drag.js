var zIndex = 1;
window.onload = function ()
{
	var oDrag1 = document.getElementById("photo01");
	var oDrag2 = document.getElementById("photo02");
	var oDrag3 = document.getElementById("photo03");
	drag(oDrag1);
	drag(oDrag2);
	drag(oDrag3);
};
var cengshu=0;
function drag(oDrag)
{
	var disX = dixY = 0;
	oDrag.onmousedown = function (event)
	{
		var event = event || window.event;
		disX = event.clientX - this.offsetLeft;
		disY = event.clientY - this.offsetTop;		
		oDrag.style.position='fixed';
		oDrag.style.zIndex=cengshu++;
		//var oTemp = document.createElement("div");
		//oTemp["id"] = "temp";
		//oTemp.style.left = this.currentStyle ? this.currentStyle["left"] : getComputedStyle(this, null)["left"];
		//oTemp.style.top = this.currentStyle ? this.currentStyle["top"] : getComputedStyle(this, null)["top"];
		//oTemp.style.zIndex = zIndex++;
		//document.body.appendChild(oTemp);
		
		document.onmousemove = function (event)
		{
			var event = event || window.event;
			var iL = event.clientX - disX;
			var iT = event.clientY - disY;
			var maxL = document.documentElement.clientWidth - oDrag.offsetWidth;
			var maxT = document.documentElement.clientHeight - oDrag.offsetHeight
			
			iL <= 0 && (iL = 0);
			iT <= 0 && (iT = 0);
			iL >= maxL && (iL = maxL);
			iT >= maxT && (iT = maxT);
			
			oDrag.style.left = iL + "px";
			oDrag.style.top = iT + "px";
			return false;
		};
		
		document.onmouseup = function ()
		{
			document.onmousemove = null;
			document.onmouseup = null;
			oDrag.style.left = oTemp.style.left;
			oDrag.style.top = oTemp.style.top;
			oDrag.style.zIndex = oTemp.style.zIndex;
			document.body.removeChild(oTemp);
			oDrag.releaseCapture && oDrag.releaseCapture()
		};
		
		this.setCapture && this.setCapture();		
		return false
	}	
}