var myNodeList = document.getElementsByTagName('li');

var i;

for (i=0;i<myNodeList.length;i++){
    var span=document.createElement("span");
    var text=document.createTextNode('\u00D7');
    span.className='close';
    span.appendChild(text);
    myNodeList[i].appendChild(span);
}

var close=document.getElementsByClassName('close');
var i;

for(i=0; i<close.length; i++){ 
    close[i].onclick = funtion() 
    {
        var div=this.parentElement;
        div.style.display='none';
    }
}
/*
var list=document.querySelector('ul');
list.addEventListener('click',funtion(ev) {
        if (ev.target.tagName === 'li') {
            ev.target.classList.toggle('checked')
        }
    }, false);
*/

var list=document.querySelector('ul');
list.addEventListener('click',(ev)=> {
        if (ev.target.tagName === 'li') {
            ev.target.classList.toggle('checked')
        }
    }, false);

function newElement(){
    var li=document.createElement('li');
    var inputValue=document.getElementById('item').value;
    var t=document.createTextNode(inputValue);
    li.appendChild(t);
    if(inputValue===''){
        alert("This field can not be empty");
    }
    else{
        document.getElementById('list').appendChild(li);
    }
    document.getElementById("item").value='';
    var span=document.createElement("span");
    var text=document.createTextNode('/u00D7');
    span.appendChild(text);
    li.appendChild(span);
    for (i=0;i<close.length;i++){
        close[i].onclick=function(){
            var div=this.parentElement;
            div.style.display='none';
        }
    }
}

