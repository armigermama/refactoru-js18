$(function(){

	var source = $("#product-template").html();
	var template = Handlebars.compile(source);

	var productCompile = function(aryProducts){
		for (i=0; i<aryProducts.length; i++){
			// var produdctTemplate = template(aryProducts[i]);
			console.log(template(aryProducts[i]));
		}
	};

	productCompile(productsData.productsList);

});