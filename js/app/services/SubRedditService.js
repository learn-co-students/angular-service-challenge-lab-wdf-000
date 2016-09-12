(function() {
 angular
  .module('app')
  .service('SubRedditService', SubRedditService)

  SubRedditService.$inject = ['$http', 'DomainService']

  function SubRedditService(http, DomainService) {
    var vm = this;

   vm.getData = function(domain) {
    return http.get('/rest/subreddit/' + domain)
   
   } 

  }
}());
