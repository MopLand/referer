/*
	日期 ：20:30 2011/1/24
	作者 ：Lay
	QQ    : 329118098
	Email	: veryide@qq.com
	Blog	: http://www.veryide.com/
	版本 ：V1.0

	/////////////////////////////////////

	搜索引擎来路分析工具
	
	referer		来路地址，仅供测试用
	
	返回：
		Search				搜索引擎名称
		Keyword				搜索关键字
		Referer				来路地址
*/
var Referer = function( referer ){
	
	//搜索引擎
	this.Search = "";
	
	//关键字
	this.Keyword = "";
	
	//来路URL
	this.Referer = referer ? referer : document.referrer;
	
	//提供商
	this.Engine = new Array(				
		["google","q"],
		["yahoo","p"],
		["msn","q"],
		["aol","query"],
		["aol","encquery"],
		["lycos","query"],
		["ask","q"],
		["altavista","q"],
		["search","q"],
		["netscape","s"],
		["cnn","query"],
		["looksmart","qt"],
		["about","terms"],
		["mamma","query"],
		["alltheweb","q"],
		["gigablast","q"],
		["voila","kw"],
		["virgilio","qs"],
		["live","q"],
		["baidu","wd"],
		["alice","qs"],
		["seznam","w"],
		["yandex","text"],
		["najdi","q"],
		["soso","w"],
		["youdao","q"],
		["115","q"],
		["gougou","search"],
		["localhost","q"]
	);

	/*
		获取URL参数
		key	参数名称
		url		URL链接，默认为当前URL
	*/
	this.Get = function( key , url ){

		var url = url ? url : location.href;	
		var v = '';
		var o = url.indexOf( key + "=" );
		if (o != -1){
			o += key.length + 1 ;
			e = url.indexOf("&", o);
			if (e == -1){
				e = url.length;
			}
			v = url.substring(o, e);
		}

		return v;
	}

	/*
		执行分析操作
	*/
	this.Init = function(){
		
		//没有来路
		if( !this.Referer ) return;
						
		//协议长度
		var prot = this.Referer.indexOf("://");
		
		//获取域名
		var host = this.Referer.substring( prot + 3 ,this.Referer.length );
		
		//去掉域名以后的内容
		host = host.indexOf("/") == -1 ? host : host.substring( 0 , host.indexOf("/") ).toLowerCase();

		//提供商长度
		var leng = this.Engine.length;
		
		//遍历提供商
		for( var i=0; i < leng; i++ ){
		
			//找到提供商
			if( host.indexOf( this.Engine[i][0] ) > -1 ){
			
				//搜索引擎名称
				this.Search = this.Engine[i][0];
				
				//搜索关键字
				this.Keyword = this.Get( this.Engine[i][1] , this.Referer ).replace(/\+/g,' ');
				
				break;
			}
			
		}
		
		return { "Search" : this.Search , "Keyword" : this.Keyword , "Referer" : this.Referer };
		
	}
	
	this.Init();
	
}