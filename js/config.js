app.config(["$locationProvider", "$routeProvider", ($locationProvider, $routeProvider)=>{
	$locationProvider.hashPrefix("!");
	$routeProvider.when("/", {
		template : "<home></home>"
	}).
	when('/tech', {
		template : "<tech></tech>"
	}).
	when("/project", {
		template : "<projects></projects>"
	}).
	when("/profile", {
		template : "<profile></profile>"
	}).
	otherwise("/");
}]);
