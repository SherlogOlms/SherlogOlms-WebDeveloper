/* Effets partagés : particules, halo souris, barre de progression, inclinaison des cartes */
(function(){
  var RM=window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches,fine=window.matchMedia&&matchMedia('(pointer: fine)').matches;
  var cv=document.getElementById('bg');if(!cv)return;var ctx=cv.getContext('2d'),W,H,DPR=Math.min(window.devicePixelRatio||1,2),pts=[],mouse={x:-9999,y:-9999};
  function size(){W=innerWidth;H=innerHeight;cv.width=W*DPR;cv.height=H*DPR;ctx.setTransform(DPR,0,0,DPR,0,0);var n=Math.round(Math.min(90,W*H/16000));pts=[];
    for(var i=0;i<n;i++)pts.push({x:Math.random()*W,y:Math.random()*H,vx:(Math.random()-.5)*.3,vy:(Math.random()-.5)*.3,r:Math.random()*1.5+.4,h:Math.random()});}
  size();addEventListener('resize',size);var cols=['59,240,255','139,92,255','255,79,216'];
  (function draw(){ctx.clearRect(0,0,W,H);
    for(var i=0;i<pts.length;i++){var p=pts[i];if(!RM){p.x+=p.vx;p.y+=p.vy;var dx=p.x-mouse.x,dy=p.y-mouse.y,d=Math.sqrt(dx*dx+dy*dy);if(d<140){p.x+=dx/d*1.6;p.y+=dy/d*1.6;}
      if(p.x<0)p.x=W;if(p.x>W)p.x=0;if(p.y<0)p.y=H;if(p.y>H)p.y=0;}
      var c=cols[p.h<.5?0:p.h<.82?1:2];ctx.beginPath();ctx.arc(p.x,p.y,p.r,0,6.283);ctx.fillStyle='rgba('+c+',.85)';ctx.fill();
      for(var j=i+1;j<pts.length;j++){var q=pts[j],ex=p.x-q.x,ey=p.y-q.y,e=ex*ex+ey*ey;if(e<13000){ctx.strokeStyle='rgba('+c+','+(.16*(1-e/13000))+')';ctx.lineWidth=.7;ctx.beginPath();ctx.moveTo(p.x,p.y);ctx.lineTo(q.x,q.y);ctx.stroke();}}}
    if(!RM)requestAnimationFrame(draw);})();
  var glow=document.querySelector('.glow'),prog=document.querySelector('.progress');
  addEventListener('pointermove',function(e){mouse.x=e.clientX;mouse.y=e.clientY;if(fine&&glow){glow.style.left=e.clientX+'px';glow.style.top=e.clientY+'px';}},{passive:true});
  function sc(){if(!prog)return;var h=document.documentElement.scrollHeight-innerHeight;prog.style.transform='scaleX('+(h>0?scrollY/h:0)+')';}
  addEventListener('scroll',sc,{passive:true});sc();
  if(fine&&!RM)document.querySelectorAll('.proj').forEach(function(el){
    el.addEventListener('pointermove',function(e){var r=el.getBoundingClientRect(),x=(e.clientX-r.left)/r.width,y=(e.clientY-r.top)/r.height;
      el.style.transform='perspective(900px) rotateY('+((x-.5)*9)+'deg) rotateX('+((.5-y)*9)+'deg)';el.style.setProperty('--mx',x*100+'%');el.style.setProperty('--my',y*100+'%');});
    el.addEventListener('pointerleave',function(){el.style.transform=''});});
})();
