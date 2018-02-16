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
		    	if (!json.cumulativeplayerstats.hasOwnProperty("playerstatsentry")) {
		    		results = "<p>That player did not play in the 2016-17 season.</p>";
		    		$("#results").html(results);
		    		return;
		    	}
				var results = "";
				console.log(json);
				console.log(json.cumulativeplayerstats.playerstatsentry.length);
				for (var i = 0; i < json.cumulativeplayerstats.playerstatsentry.length; i++) {

					results += "<h2 style=\"font-family: 'Russo One', sans-serif;\">Stats for " + json.cumulativeplayerstats.playerstatsentry[i].player.FirstName + " " 
						+ json.cumulativeplayerstats.playerstatsentry[i].player.LastName + "</h2>";

					if (json.cumulativeplayerstats.playerstatsentry[i].player.Position === "C") {
						results += "<b><p>Center for the " +
						json.cumulativeplayerstats.playerstatsentry[i].team.City + " " + json.cumulativeplayerstats.playerstatsentry[i].team.Name + "</p></b>";
					}
					else if (json.cumulativeplayerstats.playerstatsentry[i].player.Position === "SF") {
						results += "<b><p>Small Forward for the " +
						json.cumulativeplayerstats.playerstatsentry[i].team.City + " " + json.cumulativeplayerstats.playerstatsentry[i].team.Name + "</p></b>";
					}
					else if (json.cumulativeplayerstats.playerstatsentry[i].player.Position === "PF") {
						results += "<b><p>Power Forward for the " +
						json.cumulativeplayerstats.playerstatsentry[i].team.City + " " + json.cumulativeplayerstats.playerstatsentry[i].team.Name + "</p></b>";
					}
					else if (json.cumulativeplayerstats.playerstatsentry[i].player.Position === "SG") {
						results += "<b><p>Shooting Guard for the " +
						json.cumulativeplayerstats.playerstatsentry[i].team.City + " " + json.cumulativeplayerstats.playerstatsentry[i].team.Name + "</p></b>";
					}
					else if (json.cumulativeplayerstats.playerstatsentry[i].player.Position === "PG") {
						results += "<b><p>Point Guard for the " +
						json.cumulativeplayerstats.playerstatsentry[i].team.City + " " + json.cumulativeplayerstats.playerstatsentry[i].team.Name + "</p></b>";
					}

					
					if (results.length == 0) {
						results = "Cannot find player";
					}

				    results += "<div id=\"stats-wrapper\">"

				    results += "<div id=\"stat-titles\">";
				    results += "<p>Assists per Game:</p>";
				    results += "<p>Blocks per Game:</p>";
				    results += "<p>Free Throw Percentage:</p>";
				    results += "<p>Minutes per Game:</p>";
				    results += "<p>Points per Game:</p>";
				    results += "<p>Rebounds per Game:</p>";
				    results += "<p>Steals per Game:</p>";
				    results += "</div>";

				    results += "<div style=\"width: 30px;\"></div>"

				    results += "<div id=\"stats\">";
				    results += "<p>" + json.cumulativeplayerstats.playerstatsentry[i].stats.AstPerGame["#text"] + "</p>";
				    results += "<p>" + json.cumulativeplayerstats.playerstatsentry[i].stats.BlkPerGame["#text"] + "</p>";
				    results += "<p>" + json.cumulativeplayerstats.playerstatsentry[i].stats.FtPct["#text"] + "</p>";
				    results += "<p>" + Math.round(json.cumulativeplayerstats.playerstatsentry[i].stats.MinSecondsPerGame["#text"]/60).toFixed(1) + "</p>";
				    results += "<p>" + json.cumulativeplayerstats.playerstatsentry[i].stats.PtsPerGame["#text"] + "</p>";
				    results += "<p>" + json.cumulativeplayerstats.playerstatsentry[i].stats.RebPerGame["#text"] + "</p>";
				    results += "<p>" + json.cumulativeplayerstats.playerstatsentry[i].stats.StlPerGame["#text"] + "</p>";
				    results += "</div>";

				    results += "</div>";

				}
				results += "<div style=\"height: 80px;\"></div>";

				$("#results").html(results);
				//$("table").append(tb1);
	    	}
		});
		
	});

		
});


