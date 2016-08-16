function DomainService($http) {
	this.getData = function (domain) {
		var url = '/rest/domain/' + domain;
		return $http.get(url);
	};
}

angular
	.module('app')
	.service('DomainService', DomainService)