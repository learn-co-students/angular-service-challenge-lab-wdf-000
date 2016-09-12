(function() {
 angular
  .module('app')
  .service('DomainService', DomainService)

  DomainService.$inject = ['$http']
  function DomainService(http) {
    var vm = this; 
     
    vm.getData = function(endpoint) {
      return http.get('/rest/domain/' + endpoint) } 
   }
}());
