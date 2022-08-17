document.getElementById("wBtn").addEventListener("click", function () {
    let withDraw = parseFloat(document.getElementById("withDraw").innerText);
    let baLance = parseFloat(document.getElementById("baLance").innerText);
    // let dePosite = parseFloat(document.getElementById("dePosit").innerText);
    if(document.getElementById("wAmount").value==""){
        alert("Please enter amount");
    }
    else if(parseFloat(document.getElementById("wAmount").value) > baLance){
        alert("You don't have enough money");
        document.getElementById("wAmount").value = "";
    }else{
    baLance = baLance - parseFloat(document.getElementById("wAmount").value);
    document.getElementById("baLance").innerText = baLance;
    withDraw = withDraw + parseFloat(document.getElementById("wAmount").value);
    document.getElementById("withDraw").innerText = withDraw;
    document.getElementById("wAmount").value = "";
    }
});
document.getElementById("dBtn").addEventListener("click", function () {
    // let withDraw = parseFloat(document.getElementById("withDraw").innerText);
    let baLance = parseFloat(document.getElementById("baLance").innerText);
    let dePosite = parseFloat(document.getElementById("dePosite").innerText);
    if(document.getElementById("dAmount").value==""){
        alert("Please enter amount");
    }
    else
    {baLance = baLance + parseFloat(document.getElementById("dAmount").value);
    document.getElementById("baLance").innerText = baLance;
    dePosite = dePosite + parseFloat(document.getElementById("dAmount").value);
    document.getElementById("dePosite").innerText = dePosite;
    document.getElementById("dAmount").value = "";}
});
