!function(e){var n=e.Livefyre||(e.Livefyre={});if(n.pending_REQUIRE=n.pending_REQUIRE||[],n.pending_ON=n.pending_ON||[],!n.initialized){n.require=function(e,i){n.pending_REQUIRE.push(arguments)},n.on=function(){n.pending_ON.push(arguments)},Livefyre.require.amd=!0,n.fulfillPending=function(i){for(var t,r=e.Livefyre,o=n["pending_"+i.toUpperCase()]||[];t=o.shift();)r[i].apply(r,t)};var i=e.location.protocol;0!==i.indexOf("http")&&(i="https:");var t=i+"//cdn.livefyre.com/libs/Livefyre/v1.1.4/builds/1520553728855/Livefyre.min.js",r=["on","require"];!function(e,n){var i=document.getElementsByTagName("head")[0]||document.documentElement,t=document.createElement("script"),r=!1;t.src=e,t.onload=t.onreadystatechange=function(){r||this.readyState&&"loaded"!==this.readyState&&"complete"!==this.readyState||(r=!0,n(),t.onload=t.onreadystatechange=null,i&&t.parentNode&&i.removeChild(t))},i.insertBefore(t,i.firstChild)}(t,function(){for(var e=r.length-1;e>=0;e--)n.fulfillPending(r[e])}),n.initialized=!0}}(window);