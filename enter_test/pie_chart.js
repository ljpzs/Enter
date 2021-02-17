// JavaScript Document
 var myChart2 = echarts.init(document.getElementById('last'));

let result2;
let ret2;

function loadXMLDoc(cb2) {

    var xmlhttp;
     var rs = [];

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
            result2 = xmlhttp.responseText;
            // document.getElementById("myDiv").innerHTML=data
            ret2 = JSON.parse(result2);

            if(ret2.code === 200){
                for(var res in ret2.data.xAxis){
                    rs.push({
                        name:ret2.data.xAxis[res],
                        value:ret2.data.series[res]
                    });

                }

                  
                 console.log(ret2)
               }


            // console.log(result);
        }
    }


    xmlhttp.open("GET", "https://edu.telking.com/api/?type=week", true);

    xmlhttp.send();
    setTimeout(function(){
        cb2({rs});
    }, 2000);

}

option2={
	title:{
		text:'饼状图数据显示',
		left:'center',
		top:'30px'
		},
	 series : [
                 {
                    name: '访问来源',
                    type: 'pie',    // 设置图表类型为饼图
                    radius: '55%',  // 饼图的半径，外半径为可视区尺寸（容器高宽中较小一项）的 55% 长度。
                    data:[]      // 数据数组，name 为数据项名称，value 为数据项值


                }
            ]

	};
loadXMLDoc(function (data2) {
    myChart2.setOption({
       series : [
                 {
                    name: '访问来源',
                    type: 'pie',    // 设置图表类型为饼图
                    radius: '55%',
                    data:data2.rs      // 数据数组，name 为数据项名称，value 为数据项值


                }
            ]
        });
});
myChart2.setOption(option2);

