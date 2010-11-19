function(doc) {
	if (doc.server) {
		emit(doc.server, null);
	}
};
