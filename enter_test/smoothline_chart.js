// JavaScript Document
 var myChart1 = echarts.init(document.getElementById('middler'));
let result1;
let ret1;
// let names=[];
// let nums=[];
function loadXMLDoc(cb1) {

    var xmlhttp;
    let months=[];
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
            // document.getElementById("main").innerHTML=xmlhttp.responseText;
            result1 = xmlhttp.responseText;
            // document.getElementById("myDiv").innerHTML=data
            ret1 = JSON.parse(result1);

            if(ret1.code === 200){

                  // ret = obj.data;
                 // ret1 =JSON.stringify(ret);
                let list = ret1.data.xAxis
                console.log(list.length);
                let list1 = ret1.data.series

                 for(let i=0;i<list.length;i++){
                     months.push(list[i])
                     // return names;
                 //
                 }
                  for(let i=0;i<list1.length;i++){
                     nums.push(list1[i])
                      // return nums;
                 //
                 }
                 // document.getElementById("main").innerHTML=ret1;
                // let data1 = ret.data;


                // return ret1;
                 console.log(ret1)
               }


            // console.log(result);
        }
    }


    xmlhttp.open("GET", "https://edu.telking.com/api/?type=month", true);

    xmlhttp.send();
    setTimeout(function(){
        cb1({months,nums});
    }, 1000);

}

// function loadXMLDoc1(cb){
//     setTimeout(function(){
//         cb({names,nums});
//     }, 1000);
// }
// 初始 option
option1 = {
    color: ['#3398DB'],
	title:{
		text:'曲线图数据显示',
		left:'center',
		top:'20px'
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
		height:'70%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: [
        {
		axisLine:{
			show:false,
		},
            type:'category',
            data:[],
            axisTick: {
				show:false,
                alignWithLabel: true
            }
        }
    ],
    yAxis:[

        {  axisLine:{
			show:false,
		},
		 name:'',
            type:'value',
			axisLabel:{
				formatter:'{value}人'
				},
				axisTick:{
					show:false,

					},
					splitLine:{
						lineStyle:{
							type:'dashed'
							}

						}
        }
    ],
    series: [
        {
            name:'',
            type:'line',
			areaStyle:{normal:{color:'#D9ECFF'}},
			smooth:true,
			itemStyle:{normal:{label:{show:true}}},
            data:[]
        }
    ]
};
// loadXMLDoc()
loadXMLDoc(function(data){
    // if (data.code === 200){
    //     let ret = data.data;
    //
    // }
    // let obj =eval('('+ data +')')
    // let obj = JSON.parse(data);
    // if(obj.code === 200){
    //     let ret = obj.data;
    //     let ret1 =JSON.stringify(ret);
    //     document.getElementById("main").innerHTML=ret1;
    //     console.log(ret)
    // }
    // console.log(obj);
    // document.getElementById("main").innerHTML=data;
    // console.log(data);
    myChart1.setOption({
        xAxis: {
            data: data.months
        },
        series: [{
            // 根据名字对应到相应的系列

            name: '人数',
            data: data.nums
        }]
    });
    console.log(data);

    });
myChart1.setOption(option1);