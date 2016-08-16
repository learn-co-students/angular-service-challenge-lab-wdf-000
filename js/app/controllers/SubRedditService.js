function SubRedditService($http) {
	this.getData = function(subReddit) {
		var url = '/rest/subreddit/' + subReddit;
		return $http.get(url);
	};
}

angular
	.module('app')
	.service('SubRedditService', SubRedditService);