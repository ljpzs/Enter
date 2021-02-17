// JavaScript Document
var left = 0;
// 设置滑块的初始速度
var iSpeed = 0;
function move(obj,iTarget){
 clearInterval(obj.timer);
 //设置水平导航条的滑块移动效果
 obj.timer = setInterval(function(){
 iSpeed+=(iTarget-left)/5;
 iSpeed*=0.50;
 left+=iSpeed;
 obj.style.left = left+'px';
 if(Math.round(iSpeed)==0&&Math.round(left)==iTarget){
  clearInterval(obj.timer);
 }
 },35);
}
window.onload = function(){
// 获取相关元素
 var aLi = document.getElementById('menuline').getElementsByTagName('li');
 var oBlock = document.getElementById('block_box');
 var iNow = 0;
 // 声明一个立即执行函数实现导航条鼠标划过有滑块效果
 for(var j=0;j<aLi.length-1;j++){
 (function(index1){
  aLi[j].onmouseover = function(){
  //oBlock.style.left = index*aLi[0].offsetWidth+'px';
  move(oBlock,index1*aLi[0].offsetWidth);
  };
// 当鼠标离开导航条时，滑块回到鼠标点击过的标签位置上
  aLi[j].onmouseout = function(){
  //oBlock.style.left = 0;
  move(oBlock,iNow*aLi[0].offsetWidth);
  };
// 点击后滑块固定在当前点击的条目上
  aLi[j].onclick = function(){
  iNow=index1;
  };
 })(j);
 }
};
