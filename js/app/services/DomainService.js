function DomainService($http) {

    this.getData = function(dom) {
      return $http.get('/rest/domain/' + dom);
    }

    this.domainPosts = this.getData('google.co.uk');

}


angular
	.module('app')
	.service('DomainService', DomainService);
