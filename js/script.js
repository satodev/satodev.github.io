let app = angular.module("satodev", ["ngRoute", "ngAnimate"]);
app.controller("smain", ($animate)=>{

});
app.controller("contHome", ($scope, $animate)=>{
	o.paintItBlack();
});
app.controller("contTech", ($scope)=>{
	o.paintItBlack();
});
app.controller("contProj", ($scope)=>{
	o.paintItBlack();

});
app.controller("contProfile", ($scope)=>{
	o.paintItBlack();


});
app.directive("mainNavbar", ()=>{
	return {
		templateUrl : "directives/mainNavbar.html"
	}
});
app.directive("mainFooter", ()=>{
	return{
		templateUrl : "directives/mainFooter.html"
	}
});

let o = {
	body: document.getElementsByTagName("body"),
	paintItBlack : ()=>{
		o.body[0].style = "background-color:#f5f5f5";
	},
	paintItWhite : ()=>{
		o.body[0].style = "background-color: #fff";
	}
}
