(function(){var f=!0;document.querySelector(".reveal .slides").addEventListener("mousedown",function(d){var k=(Reveal.getConfig().zoomKey?Reveal.getConfig().zoomKey:"alt")+"Key",e=Reveal.getScale();d[k]&&f&&(d.preventDefault(),d=d.target.getBoundingClientRect(),zoom.to({x:d.left*e-20,y:d.top*e-20,width:d.width*e+40,height:d.height*e+40,pan:!1}))});Reveal.addEventListener("overviewshown",function(){f=!1});Reveal.addEventListener("overviewhidden",function(){f=!0})})();
var zoom=function(){function f(a,b){var c=k();a.width=a.width||1;a.height=a.height||1;a.x-=(window.innerWidth-a.width*b)/2;a.y-=(window.innerHeight-a.height*b)/2;if(l)if(1===b)document.body.style.transform="",document.body.style.OTransform="",document.body.style.msTransform="",document.body.style.MozTransform="",document.body.style.WebkitTransform="";else{var c=c.x+"px "+c.y+"px",d="translate("+-a.x+"px,"+-a.y+"px) scale("+b+")";document.body.style.transformOrigin=c;document.body.style.OTransformOrigin=
c;document.body.style.msTransformOrigin=c;document.body.style.MozTransformOrigin=c;document.body.style.WebkitTransformOrigin=c;document.body.style.transform=d;document.body.style.OTransform=d;document.body.style.msTransform=d;document.body.style.MozTransform=d;document.body.style.WebkitTransform=d}else 1===b?(document.body.style.position="",document.body.style.left="",document.body.style.top="",document.body.style.width="",document.body.style.height="",document.body.style.zoom=""):(document.body.style.position=
"relative",document.body.style.left=-(c.x+a.x)/b+"px",document.body.style.top=-(c.y+a.y)/b+"px",document.body.style.width=100*b+"%",document.body.style.height=100*b+"%",document.body.style.zoom=b);e=b;document.documentElement.classList&&(1!==e?document.documentElement.classList.add("zoomed"):document.documentElement.classList.remove("zoomed"))}function d(){var a=.12*window.innerWidth,b=.12*window.innerHeight,c=k();g<b?window.scroll(c.x,c.y-14/e*(1-g/b)):g>window.innerHeight-b&&window.scroll(c.x,c.y+
14/e*(1-(window.innerHeight-g)/b));h<a?window.scroll(c.x-14/e*(1-h/a),c.y):h>window.innerWidth-a&&window.scroll(c.x+14/e*(1-(window.innerWidth-h)/a),c.y)}function k(){return{x:void 0!==window.scrollX?window.scrollX:window.pageXOffset,y:void 0!==window.scrollY?window.scrollY:window.pageYOffset}}var e=1,h=0,g=0,m=-1,n=-1,l="WebkitTransform"in document.body.style||"MozTransform"in document.body.style||"msTransform"in document.body.style||"OTransform"in document.body.style||"transform"in document.body.style;
l&&(document.body.style.transition="transform 0.8s ease",document.body.style.OTransition="-o-transform 0.8s ease",document.body.style.msTransition="-ms-transform 0.8s ease",document.body.style.MozTransition="-moz-transform 0.8s ease",document.body.style.WebkitTransition="-webkit-transform 0.8s ease");document.addEventListener("keyup",function(a){1!==e&&27===a.keyCode&&zoom.out()});document.addEventListener("mousemove",function(a){1!==e&&(h=a.clientX,g=a.clientY)});return{to:function(a){if(1!==e)zoom.out();
else{a.x=a.x||0;a.y=a.y||0;if(a.element){var b=a.element.getBoundingClientRect();a.x=b.left-20;a.y=b.top-20;a.width=b.width+40;a.height=b.height+40}void 0!==a.width&&void 0!==a.height&&(a.scale=Math.max(Math.min(window.innerWidth/a.width,window.innerHeight/a.height),1));1<a.scale&&(a.x*=a.scale,a.y*=a.scale,f(a,a.scale),!1!==a.pan&&(m=setTimeout(function(){n=setInterval(d,1E3/60)},800)))}},out:function(){clearTimeout(m);clearInterval(n);f({x:0,y:0},1);e=1},magnify:function(a){this.to(a)},reset:function(){this.out()},
zoomLevel:function(){return e}}}();