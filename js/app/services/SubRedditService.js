function SubRedditService($http) {

  this.getData = function(sub) {
    return $http.get('/rest/subreddit/' + sub);
  }

  this.subRedditPosts = this.getData("javascript");

}


angular
	.module('app')
	.service('SubRedditService', SubRedditService);
