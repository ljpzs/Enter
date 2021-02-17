// JavaScript Document
 var myChart3 = echarts.init(document.getElementById('last2'));
let result3;
let ret3;
function loadXMLDoc(cb) {

    var xmlhttp;
    let weeks=[];
    let nums=[];
    if (window.XMLHttpRequest) {
        //  IE7+, Firefox, Chrome, Opera, Safari 浏览器执行代码
        xmlhttp = new XMLHttpRequest();
    } else {
        // IE6, IE5 浏览器执行代码
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function () {

        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            result3 = xmlhttp.responseText;
            ret3 = JSON.parse(result3);

            if(ret3.code === 200){

                  
                let list = ret3.data.xAxis
                console.log(list.length);
                let list1 = ret3.data.series

                 for(let i=0;i<list.length;i++){
                     weeks.push(list[i])
                   
                 }
                  for(let i=0;i<list1.length;i++){
                     nums.push(list1[i])
                     
                 }
                 
                 console.log(ret3)
               }


            // console.log(result);
        }
    }


    xmlhttp.open("GET", "https://edu.telking.com/api/?type=week", true);

    xmlhttp.send();
    setTimeout(function(){
        cb({weeks,nums});
    }, 3000);

}

// 初始 option
option3 = {
    color: ['#3398DB'],
	title:{
		text:'柱状图数据显示',
		left:'center',
		top:'30px'
		},
    tooltip: {
        trigger: 'axis',
        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
		height:'65%',
        containLabel: true
    },
    xAxis: [
        {
		axisLine:{
			show:false,
		},
            type: 'category',
            data: [],
            axisTick: {
				show:false,
                alignWithLabel: true
            }
        }
    ],
    yAxis: [

        {  axisLine:{
			show:false,
		},
		axisTick:{
			show:false

			},
		 name:'商品数',
            type: 'value'
        }
    ],
    series: [
        {
            name: '商品数',
            type: 'bar',
            barWidth: '35%',
            data: []
        }
    ]
};

loadXMLDoc(function (data3) {
    myChart3.setOption({
        xAxis: {
            data: data3.weeks
        },
        series: [{
            // 根据名字对应到相应的系列
            name: '商品数',
            data: data3.nums
        }]
    });
});
myChart3.setOption(option3);