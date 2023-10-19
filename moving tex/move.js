function moving(event)
{
    document.getElementById('move').style.left=event.clientX+"px";
    document.getElementById('move').style.top=event.clientY+"px";
}
function txt()
{
    if(document.getElementById('box').value!="")
    {
        document.getElementById('move').innerHTML=document.getElementById('box').value;
    }
    else
    {
        document.getElementById('move').innerHTML="donny";
    }
}