
function ajax(){

var xhttp = new XMLHttpRequest();

xhttp.onreadystatechange = function(){
    if(this.readyState==4&&this.status==200){
        var response =JSON.parse(this.responseText);
        var grsdata = '';
    for(var i = 0; i < response.length; i++) {
      grsdata += '<tr>';
      grsdata += '<td class="column1">' + response[i].serialnum + '</td>';
      grsdata += '<td class="column2">' + response[i].name + '</td>';
      grsdata += '<td class="column3">' + response[i].quantity + '</td>';
      grsdata += '<td class="column4">' + response[i].unit + '</td>';
      grsdata += '<td class="column5">' + response[i].department+ '</td>';
      grsdata += '<td class="column6">' + response[i].notes+ '</td>';
      grsdata += '</tr>';
    }
    document.querySelector('.grocerylist tbody').innerHTML = grsdata;      
    }
}

xhttp.open("GET","grocery.json",true);
xhttp.send();

}