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
				results += "<h2 style=\"font-family: 'Russo One', sans-serif;\">Stats for " + json.cumulativeplayerstats.playerstatsentry[0].player.FirstName + " " 
					+ json.cumulativeplayerstats.playerstatsentry[0].player.LastName + "</h2>";

				if (json.cumulativeplayerstats.playerstatsentry[0].player.Position === "C") {
					results += "<b><p>Center for the " +
					json.cumulativeplayerstats.playerstatsentry[0].team.City + " " + json.cumulativeplayerstats.playerstatsentry[0].team.Name + "</p></b>";
				}
				else if (json.cumulativeplayerstats.playerstatsentry[0].player.Position === "SF") {
					results += "<b><p>Small Forward for the " +
					json.cumulativeplayerstats.playerstatsentry[0].team.City + " " + json.cumulativeplayerstats.playerstatsentry[0].team.Name + "</p></b>";
				}
				else if (json.cumulativeplayerstats.playerstatsentry[0].player.Position === "PF") {
					results += "<b><p>Power Forward for the " +
					json.cumulativeplayerstats.playerstatsentry[0].team.City + " " + json.cumulativeplayerstats.playerstatsentry[0].team.Name + "</p></b>";
				}
				else if (json.cumulativeplayerstats.playerstatsentry[0].player.Position === "SG") {
					results += "<b><p>Shooting Guard for the " +
					json.cumulativeplayerstats.playerstatsentry[0].team.City + " " + json.cumulativeplayerstats.playerstatsentry[0].team.Name + "</p></b>";
				}
				else if (json.cumulativeplayerstats.playerstatsentry[0].player.Position === "PG") {
					results += "<b><p>Point Guard for the " +
					json.cumulativeplayerstats.playerstatsentry[0].team.City + " " + json.cumulativeplayerstats.playerstatsentry[0].team.Name + "</p></b>";
				}

				
				if (results.length == 0) {
					results = "Cannot find player";
				}



			    // var body = document.getElementsByTagName('body')[0];
			    // var tbl = document.createElement('table');
			    // tbl.style.width = '70%';
			    // tbl.setAttribute('border', '1');
			    // var tbdy = document.createElement('tbody');
			    // for (var i = 0; i < 3; i++) {
			    //     var tr = document.createElement('tr');
			    //     for (var j = 0; j < 2; j++) {
			    //         if (i == 2 && j == 1) {
			    //             break
			    //         } else {
			    //             var td = document.createElement('td');
			    //             td.appendChild(document.createTextNode('\u0020'))
			    //             i == 1 && j == 1 ? td.setAttribute('rowSpan', '2') : null;
			    //             tr.appendChild(td)
			    //         }
			    //     }
			    //     tbdy.appendChild(tr);
			    // }

			    // var tr = document.createElement('tr');
			    // var td = document.createElement('td');
			    // td.appendChild(document.createTextNode("Stats"));
			    //td.
			    results += "<div id=\"stats-wrapper\">" // style=\"display: flex; flex-direction: row;\"

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
			    results += "<p>" + json.cumulativeplayerstats.playerstatsentry[0].stats.AstPerGame["#text"] + "</p>";
			    results += "<p>" + json.cumulativeplayerstats.playerstatsentry[0].stats.BlkPerGame["#text"] + "</p>";
			    results += "<p>" + json.cumulativeplayerstats.playerstatsentry[0].stats.FtPct["#text"] + "</p>";
			    results += "<p>" + Math.round(json.cumulativeplayerstats.playerstatsentry[0].stats.MinSecondsPerGame["#text"]/60).toFixed(1) + "</p>";
			    results += "<p>" + json.cumulativeplayerstats.playerstatsentry[0].stats.PtsPerGame["#text"] + "</p>";
			    results += "<p>" + json.cumulativeplayerstats.playerstatsentry[0].stats.RebPerGame["#text"] + "</p>";
			    results += "<p>" + json.cumulativeplayerstats.playerstatsentry[0].stats.StlPerGame["#text"] + "</p>";
			    results += "</div>";

			    results += "</div>";

			    /*
				AstPerGame.#text
				@abbreviation
				BlkPerGame
				RebPerGame
				StlPerGame
				PtsPerGame
				MinSecondsPerGame
				FtPct

			    */
			    // tbl.appendChild(tbdy);
			    // body.appendChild(tbl)
			
				$("#results").html(results);
				//$("table").append(tb1);
	    	}
		});
		
	});

		
});


