$("meta[name='viewport']").attr('content', "width=device-width, initial-scale=0");

//头尾js公共调用
var heardJs="http://121.52.221.196:9080/script/0/1907110940508742.js";
var footJs="http://121.52.221.196:9080/script/0/1905291355321263.js";

//接口url
var jmopenUrl = 'http://app.gjzwfw.gov.cn';              //应用公共部分url
var jimpUrl = 'http://app.gjzwfw.gov.cn';                //接口公共url
var gjptUrl = 'http://www.gjzwfw.gov.cn';                  //国家平台url,用于调用头尾
var bannerImg = jmopenUrl + '/jmopen/jmopenpublic/images/';   //banner图设置
var IsLoginUrl = gjptUrl + '/fwmh/login/getUserMessage.do'; //判断用户是否登录链接

var hanwebCss = jmopenUrl + '/jmopen/jmopenpublic/css/hanweb.css';   //大汉css
var modelCss = jmopenUrl + '/jmopen/jmopenpublic/css/model.css';     //模态框css
var pageCss = jmopenUrl + '/jmopen/jmopenpublic/css/page.css';       //分页css
var publicCss = jmopenUrl + '/jmopen/jmopenpublic/css/public.css';       //公共css
var shareCss = jmopenUrl + '/jmopen/jmopenpublic/css/share.css';       //公共css

var JmopenJs = jmopenUrl + '/jmopen/jssdk/index1.js'; //jmopen公共js
var pageJs = jmopenUrl + '/jmopen/jmopenpublic/js/page.js';   //分页js
var moudelJs = jmopenUrl + '/jmopen/jmopenpublic/js/moudel.js';   //分页js
var shareJS = jmopenUrl + '/jmopen/jmopenpublic/js/share.js';   //分享
var md5Js = jmopenUrl + '/jmopen/jmopenpublic/js/md5.js';   //md5加密js
var linkJs = jmopenUrl + '/jmopen/jmopenpublic/js/link.js';   //面包屑链接
var checkJs = jmopenUrl + '/jmopen/jmopenpublic/js/check.js'; //input验证
var inputJs = jmopenUrl + '/jmopen/jmopenpublic/js/jquery.placeholder.min.js';   //input兼容性js
var MyTracksJs = jmopenUrl + '/jmopen/jmopenpublic/js/MyTracks.js'; //我的足迹埋点



//面包屑处地址监管查询

//面包屑处地址
var webIndex = 'http://121.52.221.196:9080';    // 首页
var webBw = webIndex+'/col/col143/index.html';  //部门服务
var webDf = webIndex+'/col/col157/index.html';   //地方服务
var webBm = webIndex+'/fwmh/bmfw/index.do';   //便民服务

var webFzfgw = 'http://ndrc.gjzwfw.gov.cn';  //国家发展改革委
var webJyb = 'http://moe.gjzwfw.gov.cn';  //教育部
var webGab = 'http://mps.gjzwfw.gov.cn';  //公安部
var webRsb = 'http://mohrss.gjzwfw.gov.cn';  //人力资源社会保障部
var webSwb = 'http://mofcom.gjzwfw.gov.cn';  //商务部
var webScjgzj = 'http://saic.gjzwfw.gov.cn';  //市场监管总局
var webQixj = 'http://cma.gjzwfw.gov.cn';  //气象局
var webKejb = 'http://most.gjzwfw.gov.cn'; //科技部
var webGyxxhb = 'http://miit.gjzwfw.gov.cn'; //工业和信息化部
var webAnqb = 'http://aq.gjzwfw.gov.cn';  //安全部
var webMinzb = 'http://mca.gjzwfw.gov.cn'; //民政部
var webSifb = 'http://moj.gjzwfw.gov.cn';  //司法部
var webCaizb = 'http://mof.gjzwfw.gov.cn'; //财政部
var webZirzyb = 'http://mnr.gjzwfw.gov.cn'; //自然资源部
var webShengthjb = 'http://mee.gjzwfw.gov.cn'; //生态环境部
var webZhufcxjsb = 'http://mohurd.gjzwfw.gov.cn'; //住房城乡建设部
var webJiaotysb = 'http://mot.gjzwfw.gov.cn'; //交通运输部
var webShuilb = 'http://mwr.gjzwfw.gov.cn'; //水利部
var webNongyncb = 'http://mara.gjzwfw.gov.cn'; //农业农村部
var webWenhlyb = 'http://mct.gjzwfw.gov.cn';//文化旅游部
var webWeisjkw = 'http://nhc.gjzwfw.gov.cn'; //卫生健康委
var webTuiyjrb = 'http://mva.gjzwfw.gov.cn';//退役军人部
var webYingjb = 'http://chinasafety.gjzwfw.gov.cn'; //应急部
var webRenmyh = 'http://pbc.gjzwfw.gov.cn'; //人民银行
var webHaigzs = 'http://customs.gjzwfw.gov.cn'; //海关总署
var webShuiwzj = 'http://chinatax.gjzwfw.gov.cn';//税务总局
var webGuangdzj = 'http://nrta.gjzwfw.gov.cn';//广电总局
var webTiyzj = 'http://sport.gjzwfw.gov.cn';//体育总局
var webTongjj = 'http://stats.gjzwfw.gov.cn';//统计局
var webYilbzj = 'http://nhsa.gjzwfw.gov.cn'; //医疗保障局
var webGuogj = 'http://ggj.gjzwfw.gov.cn';//国管局
var webZongjj = '';//宗教局
var webQiaob = '';//侨办
var webWangxb = ''; //网信办
var webYinbjh = 'http://cbirc.gjzwfw.gov.cn'; //银保监会
var webZhengjh = 'http://csrc.gjzwfw.gov.cn';//证监会
var webLiangscbj = 'http://lswz.gjzwfw.gov.cn';//粮食储备局
var webNengyj = 'http://nea.gjzwfw.gov.cn';//能源局
var webGuofkgj ='http://sastind.gjzwfw.gov.cn';//国防科工局
var webYancj = 'http://ycj.gjzwfw.gov.cn';//烟草局
var webYimj = 'http://nia.gjzwfw.gov.cn';//移民局
var webLincj = 'http://forestry.gjzwfw.gov.cn';//林草局
var webTielj = 'http://nra.gjzwfw.gov.cn'; //铁路局
var webMinhj = 'http://caac.gjzwfw.gov.cn';//民航局
var webYouzj = 'http://spb.gjzwfw.gov.cn';//邮政局
var webWenwj = 'http://ncha.gjzwfw.gov.cn';//文物局
var webZhongyyj = '';//中医药局
var webMeikajj = '';//煤矿安监局
var webWaihj = 'http://safe.gjzwfw.gov.cn';//外汇局
var webYaojj = 'http://nmpa.gjzwfw.gov.cn';//药监局
var webZhiscqj = 'http://sipo.gjzwfw.gov.cn';//知识产权局
var webDangaj = 'http://saac.gjzwfw.gov.cn';//档案局
var webBaomj = 'http://gjbmj.gjzwfw.gov.cn';//保密局
var webMimj = 'http://oscca.gjzwfw.gov.cn';//密码局
var webXinwcbs= 'http://sapprft.gjzwfw.gov.cn';//新闻出版署
var webNongyyh = webIndex+'/col/col371/index.html';//农业银行
var webJiansyh = '';//建设银行
var webGongsyh = '';//工商银行
var webZhonggyh = '';//中国银行

var webBeiJing = 'http://beijing.gjzwfw.gov.cn';//北京
var webTianJIn = 'http://tj.gjzwfw.gov.cn';//天津
var webHeBei = 'http://hbzwfw.gjzwfw.gov.cn';//河北
var webShanXi = 'http://sxzwfw.gjzwfw.gov.cn';//山西
var webNeiMengGu = 'http://nmg.gjzwfw.gov.cn';//内蒙古
var webLiaoNing = 'http://lnzwfw.gjzwfw.gov.cn';//辽宁
var webJiLin = 'http://jlzwfw.gjzwfw.gov.cn';//吉林
var webHeiLongJiang = 'http://hljzwzx.gjzwfw.gov.cn';//黑龙江
var webShangHai = 'http://sh.gjzwfw.gov.cn'; //上海
var webJiangSu = 'http://jszwfw.gjzwfw.gov.cn'; //江苏
var webZheJiang = 'http://zjzwfw.gjzwfw.gov.cn'; //浙江
var webAnHui = 'http://ahzwfw.gjzwfw.gov.cn'; //安徽
var webFuJian = 'http://fjbs.gjzwfw.gov.cn';//福建
var webJiangXi = 'http://jxzwfww.gjzwfw.gov.cn';//江西
var webShanDong = 'http://sd.gjzwfw.gov.cn'; //山东
var webHeNan = 'http://hnzwfw.gjzwfw.gov.cn';//河南
var webHuNan ='http://hunan.gjzwfw.gov.cn';//湖南
var webHuBei = 'http://hubei.gjzwfw.gov.cn'; //湖北
var webGuangDong = 'http://gdzwfw.gjzwfw.gov.cn'; //广东
var webGuangXi = 'http://gxzf.gjzwfw.gov.cn';//广西
var webHaiNan = 'http://hainan.gjzwfw.gov.cn';//海南
var webChongQing = 'http://cq.gjzwfw.gov.cn'; //重庆
var webSiChuan = 'http://sczwfw.gjzwfw.gov.cn'; //四川
var webGuiZhou = 'http://gzegn.gjzwfw.gov.cn'; //贵州
var webYunNan = 'http://yn.gjzwfw.gov.cn';//云南
var webXiZang = 'http://xzzwfw.gjzwfw.gov.cn';//西藏
var webShanXiS = 'http://shaanxi.gjzwfw.gov.cn';//陕西
var webGanSu = 'http://gszwfw.gjzwfw.gov.cn';//甘肃
var webQingHai = 'http://qhzwfw.gjzwfw.gov.cn';//青海
var webNingXia = 'http://nx.gjzwfw.gov.cn';//宁夏
var webXinJiang = 'http://xinjiang.gjzwfw.gov.cn';//新疆
var webXinJiangBT = 'http://xjbt.gjzwfw.gov.cn';//新疆兵团
















