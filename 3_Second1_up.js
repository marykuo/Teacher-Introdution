function musicv(){
    var musicc=document.getElementById('music');
    var musicbutton=document.getElementById('imgup');

    if(musicc.paused){
        musicc.play();
        musicbutton.src='picture/3_Second_up_muzic_play.jpeg';
    }
    else{
        if(musicc.play&&musicc.volume==1){
            musicc.volume=0;
            musicbutton.src='picture/3_Second_up_muzic_stop.jpg';
        }
        else{
            musicc.volume=1;
            musicbutton.src='picture/3_Second_up_muzic_play.jpeg';
        }
    }
}

var pic=["picture/3_Second_up_pic1.jpg","picture/3_Second_up_pic2.jpg","picture/3_Second_up_pic3.jpg","picture/3_Second_up_pic4.jpg","picture/3_Second_up_pic5.jpg"];
var piclen=pic.length;
var i=0;

var stopp=setInterval("switchpic()",5100/*ms*/);//每?秒執行一次函式
function switchpic(){
    document.getElementById("uppic").innerHTML="<img src="+pic[i]+" alt=picture width=800px height=300px/>";
    i++;
    if(i==piclen){
        i=0;
    }
}

function picleft(){
    clearInterval(stopp);
    i-=2;
    if(i<0){
        i=piclen-1;
    }
    document.getElementById("uppic").innerHTML="<img src="+pic[i]+" alt=picture width=800px height=400px/>";
}
function picright(){
    clearInterval(stopp);
    document.getElementById("uppic").innerHTML="<img src="+pic[i]+" alt=picture width=800px height=400px/>";
    i+=1;
    if(i==piclen){
        i=0;
    }
    stopp=setInterval("switchpic()",5100);
}
