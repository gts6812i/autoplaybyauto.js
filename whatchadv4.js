//有耐久二,骑马,驱逐,耐久一
//屏幕1080*2280

var checkarr=[0,0,1,0,0,1];
//qima=1,quzhu=1,naijiu1=1,to60=1,tili=1,naijiu2=1



var endnum=1;//设置执行几次
var atime=1200;//滑动操作的延时，控制滑动后摇，操作时感觉不到

for(var i=0;i<=endnum-1;i++){
    
toast("开始");
sleep(1000);
//click(894,2111);
var closebtn=id("tt_video_ad_close_layout");



if(checkarr[0]==1){
click(726,1397);
closebtn.click();
sleep(1000);//骑马
}

if(checkarr[5]==1){
click(816,1936);
closebtn.click();
sleep(1000);//耐久2

}

swipe(781,1536,846,929,1000);
sleep(atime);


swipe(781,1736,846,871,1000);
sleep(atime);
swipe(789,1536,856,870,1000);
sleep(1000);
//swipe(700,1400,800,1250,1000);//到前三个,有有耐久二,骑马就关掉，只有骑马就打开。
sleep(atime);




click(862,688);
closebtn.click();
sleep(1000);//重生一，

exit()
click(809,1294);
closebtn.click();
sleep(1000);//重生二，


if(checkarr[1]==1){
click(829,1842);
closebtn.click();
sleep(1000);//驱逐

}


swipe(781,1536,846,929,1000);
sleep(atime);

if(checkarr[2]==1){
click(791,1728);
closebtn.click();
sleep(atime);//工具耐久。
}


swipe(781,1536,846,929,1000);
sleep(atime);

if(checkarr[3]==1){
click(862,1589);
closebtn.click();
sleep(atime);//活到60。
}



swipe(873,1934,921,363,1000);//到后三个。
sleep(atime);

if(checkarr[4]==1){
click(796,711);
closebtn.click();//节约体力。
sleep(1000);
}

click(832,1253);
closebtn.click();//新手生存。
sleep(1000);


click(794,1842);
closebtn.click();//第二次机会。
sleep(1000);


swipe(921,493,873,1934,1000);//往前滑到前三个
sleep(1000);
swipe(781,446,846,1920,1000);
sleep(1000);
swipe(700,446,800,1926,1000);
sleep(atime);
//到顶部

//y轴区间446 1926
toast("结束");
log("第"+i+"次");

}
exit();

//2020.10.22我想把每次点击写成函数，输入参数。判断是不是？要点击。
