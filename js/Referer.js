 var Referer=function(referer){this.Search="";this.Keyword="";this.Referer=referer?referer:document.referrer;this.Engine=new Array(["google","q"],["yahoo","p"],["msn","q"],["aol","query"],["aol","encquery"],["lycos","query"],["ask","q"],["altavista","q"],["search","q"],["netscape","s"],["cnn","query"],["looksmart","qt"],["about","terms"],["mamma","query"],["alltheweb","q"],["gigablast","q"],["voila","kw"],["virgilio","qs"],["live","q"],["baidu","wd"],["alice","qs"],["seznam","w"],["yandex","text"],["najdi","q"],["soso","w"],["youdao","q"],["115","q"],["gougou","search"],["localhost","q"]); this.Get=function(key,url){var url=url?url:location.href;var v='';var o=url.indexOf(key+"=");if(o!=-1){o+=key.length+1;e=url.indexOf("&",o);if(e==-1){e=url.length;};v=url.substring(o,e);};return v;} ;this.Init=function(){if(!this.Referer)return;var prot=this.Referer.indexOf("://");var host=this.Referer.substring(prot+3,this.Referer.length);host=host.indexOf("/")==-1?host:host.substring(0,host.indexOf("/")).toLowerCase();var leng=this.Engine.length;for(var i=0;i<leng;i++){if(host.indexOf(this.Engine[i][0])>-1){this.Search=this.Engine[i][0];this.Keyword=this.Get(this.Engine[i][1],this.Referer).replace(/\+/g,' ');break;}};return{"Search":this.Search,"Keyword":this.Keyword,"Referer":this.Referer};};this.Init();}
