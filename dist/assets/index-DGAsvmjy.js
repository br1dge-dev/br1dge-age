(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function o(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(t){if(t.ep)return;t.ep=!0;const s=o(t);fetch(t.href,s)}})();const g="0x80BfB857770a802f7eF375921AD5E83c76214a2d",y="WEGQIS7RDT26JJKRCVB6ZKNS5V186Q1TYQ";let f=null;function a(e,n){return Math.random()*(n-e)+e}function l(e){const n=["zero","one","two","three","four","five","six","seven","eight","nine","ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen"],o=["","","twenty","thirty","forty","fifty","sixty","seventy","eighty","ninety"];return e<20?n[e]:e<100?o[Math.floor(e/10)]+(e%10?"-"+n[e%10]:""):e.toString()}async function h(){try{const n=await(await fetch(`https://api.etherscan.io/api?module=account&action=txlist&address=${g}&startblock=0&endblock=99999999&sort=asc&apikey=${y}`)).json();if(n.status==="1"&&n.result.length>0){const o=n.result[0];f=parseInt(o.timeStamp)*1e3;const i=n.result.length;d(),w(i),setInterval(d,1e3)}else console.error("Keine Transaktionen gefunden")}catch(e){console.error("Fehler beim Abrufen der Transaktionen:",e)}}function d(){if(!f)return;const e=new Date,n=new Date(f),o=e-n,i=Math.floor(o/(1e3*60*60*24*365)),t=Math.floor(o%(1e3*60*60*24*365)/(1e3*60*60*24*30)),s=Math.floor(o%(1e3*60*60*24*30)/(1e3*60*60*24)),c=Math.floor(o%(1e3*60*60*24)/(1e3*60*60)),m=Math.floor(o%(1e3*60*60)/(1e3*60)),u=Math.floor(o%(1e3*60)/1e3);window.ageWordSizes||(window.ageWordSizes=[a(4.8,5.6),a(3.2,3.8),a(3.2,3.8),a(2.2,2.7),a(2.1,2.5),a(1.5,1.8),a(1.4,1.7),a(1.1,1.3),a(1.1,1.3),a(.95,1.1),a(.8,1),a(.6,.8)]);const r=window.ageWordSizes,p=document.getElementById("age-cloud");p.innerHTML=`
      <div style="display:flex;justify-content:center;align-items:flex-end;gap:1.6rem;margin-bottom:0.2em;">
        <span class="age-word" style="font-size:${r[0]}rem;">${l(i)}</span>
        <span class="age-word" style="font-size:${r[1]}rem;align-self:flex-end;">years</span>
      </div>
      <div style="display:flex;justify-content:center;align-items:flex-end;gap:1.4rem;margin-bottom:0.2em;">
        <span class="age-word" style="font-size:${r[2]}rem;">${l(t)}</span>
        <span class="age-word" style="font-size:${r[3]}rem;align-self:flex-end;">months</span>
      </div>
      <div style="display:flex;justify-content:center;align-items:flex-end;gap:1.2rem;margin-bottom:0.2em;">
        <span class="age-word" style="font-size:${r[4]}rem;">${l(s)}</span>
        <span class="age-word" style="font-size:${r[5]}rem;align-self:flex-end;">days</span>
      </div>
      <div style="display:flex;justify-content:center;align-items:flex-end;gap:1.1rem;margin-bottom:0.2em;">
        <span class="age-word" style="font-size:${r[6]}rem;">${l(c)}</span>
        <span class="age-word" style="font-size:${r[7]}rem;align-self:flex-end;">hours</span>
      </div>
      <div style="display:flex;justify-content:center;align-items:flex-end;gap:1rem;margin-bottom:0.2em;">
        <span class="age-word" style="font-size:${r[8]}rem;">${l(m)}</span>
        <span class="age-word" style="font-size:${r[9]}rem;align-self:flex-end;">minutes</span>
      </div>
      <div style="display:flex;justify-content:center;align-items:flex-end;gap:0.9rem;">
        <span class="age-word" style="font-size:${r[10]}rem;">${l(u)}</span>
        <span class="age-word" style="font-size:${r[11]}rem;align-self:flex-end;">seconds</span>
      </div>
    `}function w(e){document.getElementById("transactionCount").textContent=e}h();
