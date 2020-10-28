const update_time = () =>
{
    let now = new Date();
    let time = now.getHours() +":" + now.getMinutes() + ":" + now.getSeconds();
    document.getElementById("text").innerHTML = time;
    //setTimeout("update_time()", 1000);
    let name_of_class = document.getElementById("text").className;
    if (name_of_class === "first") 
        name_of_class= "second";
    else  
        name_of_class = "first";
    document.getElementById("text").className = name_of_class;
    let t = typeof name_of_class;
    document.getElementById("text").innerHTML = name_of_class;
}

update_time();