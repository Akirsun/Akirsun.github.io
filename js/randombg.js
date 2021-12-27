//必须已经设置背景图 即：_config.butterfly.yml background 必须有参数
//随机背景图片数组,图片可以换成图床链接，注意最后一条后面不要有逗号
var backimg =[
    "url(https://s4.ax1x.com/2021/12/26/T0pOBV.jpg)",
    "url(https://s4.ax1x.com/2021/12/26/T0pxNF.jpg)",
    "url(https://s4.ax1x.com/2021/12/26/T0pX7T.jpg)",
    "url(https://s4.ax1x.com/2021/12/26/T0p5tg.jpg)"
];
//获取背景图片总数，生成随机数
var bgindex =Math.floor(Math.random() * backimg.length);
//重设背景图片
document.getElementById("web_bg").style.backgroundImage = backimg[bgindex];
//随机banner数组,图片可以换成图床链接，注意最后一条后面不要有逗号
var bannerimg =[
    "url(https://s4.ax1x.com/2021/12/26/T0pOBV.jpg)",
    "url(https://s4.ax1x.com/2021/12/26/T0pxNF.jpg)",
    "url(https://s4.ax1x.com/2021/12/26/T0pX7T.jpg)",
    "url(https://s4.ax1x.com/2021/12/26/T0p5tg.jpg)"
];
//获取banner图片总数，生成随机数
var bannerindex =Math.floor(Math.random() * bannerimg.length);
//重设banner图片
document.getElementById("page-header").style.backgroundImage = bannerimg[bannerindex];