// JavaScript Document
// 获取相关元素
var carousel=document.getElementById("carousel");
var left=document.getElementById("left");
var right=document.getElementById("right");
var lis=document.getElementById("littlerull").getElementsByTagName("li");
// 存储图片的数组
var arr=["images/img1.jpg","images/img2.jpg","images/img3.jpg"];
// 设置图片切换的初始索引
var idx=0;
// 图片自动变换
var timer=setInterval(slide,2000);
function slide(){
	idx++;
	if(idx===arr.length){
		idx=0;
	}
	change();
	
}

function change(){
	carousel.src=arr[idx];
// 底部导航切换
	for(var i=0;i<lis.length;i++){
		lis[i].classList.remove("on");
		}
	   lis[idx].classList.add("on");
	}
//鼠标滑过容器，停止自动轮播，鼠标离开容器，继续自动轮播
    banner.onmouseover=function(){
		clearInterval(timer)
	}
	banner.onmouseout=function(){
		
		timer=setInterval(slide,2000);
		}
// 左右导航
	left.onclick=function(){
		idx--;
		if(idx<0){
			idx=arr.length-1;
			}
			change();
		}
	right.onclick=function(){
		slide();
			
			}
// 底部导航
	for(var i=0;i<lis.length;i++){
			lis[i].index=i;
			lis[i].onclick=function(){
				idx=this.index;
				change();
				}
		}