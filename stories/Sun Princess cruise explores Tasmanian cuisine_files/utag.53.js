//tealium universal tag - utag.53 ut4.0.201708220515, Copyright 2017 Tealium.com Inc. All Rights Reserved.
var _sf_startpt=_sf_startpt||(new Date()).getTime();var _sf_async_config={};var _cbq=window._cbq=(window._cbq||[]);try{(function(id,loader,u){try{u=utag.o[loader].sender[id]={}}catch(e){u=utag.sender[id]};u.ev={'view':1};u.initialized=false;u.data={"qsp_delim":'&',"kvp_delim":'=',"base_url":'//static.chartbeat.com/js/chartbeat.js',"uid":"36976","domain":"theaustralian.com.au","canonical":"true"};u.map={};u.extend=[function(a,b){var win=window,sec='',ctv='',classList=document.body.className.split(/\s+/),cnt=[],i=0;win._sf_async_config=win._sf_async_config||{};if(win.utag_data.net_article_byline){win._sf_async_config.authors=win.utag_data.net_article_byline;}else if(document.querySelector){var get_author=(document.querySelector('.byline cite'))?document.querySelector('.byline cite'):'';if(get_author){win._sf_async_config.authors=get_author.innerHTML.trim();}}
if(utag_data.pc_memtype){if(utag_data.pc_memtype==='registered'){_cbq.push(['_acct','lgdin']);}
if(utag_data.pc_memtype==='subscriber'){_cbq.push(['_acct','paid']);}
if(utag_data.pc_memtype==='anonymous'){_cbq.push(['_acct','anon']);}}else{for(var i=0;i<classList.length;i++){if(classList[i]==='user-registered'){_cbq.push(['_acct','lgdin']);}
if(classList[i]==='user-subscriber'){_cbq.push(['_acct','paid']);}
if(classList[i]==='user-anonymous'){_cbq.push(['_acct','anon']);}}}
if(win.utag_data&&(win.utag_data.net_sec1||win.utag_data.net_section)){if(win.utag_data.net_section){var allSections=[utag_data.net_section,utag_data.net_subsec,utag_data.net_subsubsec,utag_data.net_subsubsubsec,utag_data.net_subsubsubsubsec];}else{var allSections=[utag_data.net_sec1,utag_data.net_sec2,utag_data.net_sec3,utag_data.net_sec4,utag_data.net_sec5,utag_data.net_sec6];}
sectionData=[];for(var i=0;i<allSections.length;i++){if(allSections[i]&&typeof allSections[i]!=='undefined'){sectionData.push(allSections[i]);}}
sec+=sectionData.join();}
if(win.utag_data&&win.utag_data.net_content_type){cnt=win.utag_data.net_content_type.split('+');if(win.utag_data.net_content_type.indexOf('video')<0){cnt.push('no_video');}
sec+=','+cnt.join();}
if(win.utag_data.pc_conttypegrant){sec+=',pc.v.'+win.utag_data.pc_conttypegrant;ctv+=win.utag_data.pc_conttypegrant;}
if(win.utag_data.pc_conttyperule){sec+=',pc.ct.'+win.utag_data.pc_conttyperule;if(ctv!==''){sec+=',pc.ctv.'+win.utag_data.pc_conttyperule+'_'+ctv;}}
win._sf_async_config.sections=sec;win._sf_async_config.path=location.pathname;}];u.send=function(a,b,c,d,e,f){if(u.ev[a]||typeof u.ev.all!='undefined'){for(c=0;c<u.extend.length;c++){try{d=u.extend[c](a,b);if(d==false)return}catch(e){}};for(d in utag.loader.GV(u.map)){if(b[d]!==undefined&&b[d]!==""){e=u.map[d].split(",");for(f=0;f<e.length;f++){u.data[e[f]]=b[d];if(!u.data.hasOwnProperty(e[f])){_sf_async_config[e[f]]=b[d];}}}}
_sf_async_config.uid=u.data.uid;_sf_async_config.domain=u.data.domain;_sf_async_config.useCanonical=((u.data.canonical=="true")?true:false);if(!u.initialized){u.initialized=true;_sf_endpt=(new Date()).getTime();u.head=document.getElementsByTagName('head')[0];u.scr=document.createElement('script');u.scr.src=u.data.base_url;u.head.appendChild(u.scr);}}}
try{utag.o[loader].loader.LOAD(id)}catch(e){utag.loader.LOAD(id)}})('53','newsltd.taus');}catch(e){}
