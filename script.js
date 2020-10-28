const greeting = () =>
{
    let name = document.getElementById("user_name").value;
    let greeting = "Hello " + name + "!";
    document.getElementById("greeting").innerHTML = greeting;
}