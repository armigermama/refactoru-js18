$(function(){

	var source = $("#product-template").html();
	var template = Handlebars.compile(source);

	$("#product-template").append($(template(productsData)));



});