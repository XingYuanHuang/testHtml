jQuery.support.cors = true
//头尾js公共调用
var heardJs = "http://121.52.221.196:9080/script/0/1907110940508742.js";
var footJs = "http://121.52.221.196:9080/script/0/1905291355321263.js";
var citys = new Array();
var pointers = new Array();
var pointersObj = new Object();
function getWeatherInfo() {
	var key = 'f8eb8688bb994762a1af3733ddacf83d';
	var from = '1'; //1 pc,2 app
	var appid = 'hbskqzlzdjcjfbxt';

	var requestTime = new Date().getTime() + "";
	var sign_r = appid + requestTime;
	var sign = hex_md5(sign_r);
	var param = new Object();
	param.from = from;
	param.key = key;
	param.requestTime = requestTime;
	param.sign = sign;

	param = JSON.stringify(param);


	var h;
	$.ajax({
		url: 'http://121.52.221.207/jimp/link.do',
		method: 'post',
		// header: ,
		data: {
			param: param
		},
		type: 'get',
		dataType: 'text', //string/xml/html/scipt/json/text 
		async: false,
		success: function(result) {
            getCitys(result);
        },
		fail: function(data) {
			console.log(data);
		},
		error: function(data) {
			$('#noResult').show();
		}
	});
}

function getCitys(result) {
	fillAqiTitle(result);
    var obj = $(result).find("Citys");
    var i = 0;
    // var jsonResult = getJsonResult(result);
	$($(obj).children()).each(function (index) {
		var field = $(this);
		var city = getJsonResult(field);
		city.index = index;
		citys.push(city);
		addPointInfor(index,city.pointers)
    })
	fillCityInfo();
}
function fillAqiTitle(result){
	var obj = $(result).find("System");
	var system = getJsonResult(obj);
	$("#aqi_title_city").empty();
	$("#aqi_title_city").html(system.citytitle)
	$("#aqi_title_pointer").empty();
	$("#aqi_title_pointer").html(system.pointertitle);
	
}

function fillCityInfo() {
	var tdText = "";
	$(citys).each(function () {
		var color = this.color;
		color = color.substring(2,color.length);
        var  tdTextSingle= "<tr onclick=showPointInfo('"+this.index+"')><td>"+this.name+"</td> <td>"+this.level+"</td>" +
			" <td><div class='tl tl_l' style='background-color: #"+color+"'></div></td> <td>"+this.aqi+"</td> <td>"+(this.maxpoll?this.maxpoll:'无')+"</td> </tr>"
        tdText+=tdTextSingle;
	});
	$("#city_info").html(tdText);
	// showPointInfo('石家庄市');
	showPointInfo(0)
}

function getJsonResult(xmlNode) {
	var obj = new Object();
    $($(xmlNode).children()).each(function () {
    	if($(this)[0].children.length){
            obj[$(this)[0].tagName.toLowerCase()] = $(this)[0].children;
		}else{
            obj[$(this)[0].tagName.toLowerCase()] = $(this)[0].textContent;
		}

    })
	return obj;
}

function addPointInfor(index,pointers){
	var tdText = "";
	$(pointers).each(function () {
		var point = getJsonResult(this);
		var color = point.color;
		color = color.substring(2,color.length);
		var  tdTextSingle= "<tr ><td>"+point.name+"</td> <td>"+point.level+"</td>" +
			" <td><div class='tl tl_l' style='background-color: #"+color+"'></div></td> <td>"+point.aqi+"</td> <td>"+point.maxpoll+"</td> </tr>"
		tdText+=tdTextSingle;
	});
	pointersObj["pointerArr"+index] = tdText;
}

function showPointInfo(index){
	$("#city_pointer_info").html(pointersObj["pointerArr"+index]);
}



