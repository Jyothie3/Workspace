function setup() {
  var state = prompt("Please enter state name or state abbrevation", "");
	if (state != null) {
	     var url = "http://services.groupkt.com/state/get/USA/" + state; 
		xmlhttp = new XMLHttpRequest();
	    xmlhttp.open('GET', url,true);
	    xmlhttp.send(null);
	    xmlhttp.onreadystatechange = function() {
	        
	        if (xmlhttp.readyState == 4) {
	            
	            if (xmlhttp.status == 200) {
	                var json = JSON.parse(xmlhttp.responseText);
	                 var results = json.results;
                for (var x in results) {
                    var largest_city = results[x].largest_city;
                    var capital = results[x].capital;
	            }
							}
	            else{
	                alert("Error ->" + xmlhttp.responseText);
	                	        }
	    };
	}
}
}