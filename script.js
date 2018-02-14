$(document).ready(function() {

	$("#submit").click(function(e) {
		e.preventDefault();
		var value = $("#input").val();
		var myurl= "https://api.mysportsfeeds.com/v1.2/pull/nba/2017-playoff/cumulative_player_stats.json?player=" + value;
		$.ajax({
			type: "GET",
		    url : myurl,
		    dataType : "json",
		    async: false,
		    headers: {
		    	 "Authorization": "Basic " + btoa("kalinj" + ":" + "EagleScout99")
		    },
		    success : function(json) {
				var results = "";
				console.log(json);
				results += "<h2>Stats for " + json.cumulativeplayerstats.playerstatsentry[0].player.FirstName + " " 
					+ json.cumulativeplayerstats.playerstatsentry[0].player.LastName + "</h2>";
				results += "<p>" + json.cumulativeplayerstats.playerstatsentry[0].player.Position + " for the " +
					json.cumulativeplayerstats.playerstatsentry[0].team.City + " " + json.cumulativeplayerstats.playerstatsentry[0].team.Name;
				if (results.length == 0) {
					results = "Cannot find player";
				}
				$("#results").html(results);
	    	}
		});
		
	});

		
});


