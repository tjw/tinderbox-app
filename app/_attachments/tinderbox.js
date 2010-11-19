tinderbox = {
	load: function(doc) {
		$.getJSON("/api/servers", function(data, status, xhr) {
			$.each(data, function(i,item) {
				// TODO: Refresh this on a timer
				// TODO: Ignore servers that we already had
				// TODO: Remove servers that are no longer returned
				server_div = $("<div/>").attr("id", item).attr("class", "server");
				server_title = $("<p/>").text(item).appendTo(server_div)
				product_div = $("<div/>").attr("id", item + ".products").attr("class", "products").appendTo(server_div);
				server_div.appendTo("#servers");
			});
		})
	}
}
