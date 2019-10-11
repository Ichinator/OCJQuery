$(document).ready(function(){

	// Tableau composé des trois éléments à masquer 

	var tab = [$("#buttonOkButton"), $("#labelOkButton"), $("#idOkButton")];


	// Compte le nombre de label
	var labelAlreadySet = 0;

	// Compte le nombre d'input
	var idAlreadySet = 0;
	
	hideParentElement(tab);

	// Clic pour afficher le formulaire de création des label
	$("#labelButton").click(function(){

		// Si il y a autant de label que d'input ou bien si il y a un input de plus que de label, on autorise la création d'un label
		if(Math.abs(labelAlreadySet - idAlreadySet) == 0 || (labelAlreadySet - idAlreadySet) < 0){
			hideParentElement(tab);

		$("#labelDiv").show();
			
		}else{
			alert("Vous devez créé un id");
		}
		

		
	})

	// Clic pour afficher le formulaire de création des input

	$("#idButton").click(function(){

		// Si il y a autant de label que d'input ou bien si il y a un label de plus que d'input, on autorise la création d'un input
		if(Math.abs(labelAlreadySet - idAlreadySet) == 0 || (idAlreadySet - labelAlreadySet) < 0){
			hideParentElement(tab);
			$("#idDiv").show();

			
		}else{
			alert("Vous devez créé un label");
		}
		
	})


	// Clic pour afficher le formulaire de création du bouton
	$("#buttonButton").click(function(){
		
		// On vérifie que le nombre de label et d'input soit le même et qu'il y en ai avant de créer le bouton
		if(labelAlreadySet != idAlreadySet){
			alert("Pas le même nombre de label et d'id");
		}else if (labelAlreadySet == 0) {
			alert("Vous devez créé au moins un label et un id ");
		}else{
			hideParentElement(tab);
			$("#buttonDiv").show();
		}
	})


	// Clic pour confirmer la création d'un label
	$("#labelOkButton").click(function(){
		var label = $("input[name='label']").val();

		label = "<span>"+label+" : </span>";
		
		$("#gauche").append(label);

		

		hideParentElement(tab);


			// Cette condition vérifie qu'un label précède un input, si ce n'est pas le cas on inverse les éléments
			if(labelAlreadySet < idAlreadySet){
				var labelElement = $("#gauche span:last-child");

				

				var idElement = $(labelElement).prev();

				idElement.before(labelElement);
			}

		// Un label est créé donc on incrémente

		labelAlreadySet++;

	})


	// Clic pour confirmer la création du bouton
	$("#buttonOkButton").click(function(){
			var button = $("input[name='button']").val();

			button = "<button>"+button+" </button>";
			
			$("#gauche").append(button);

			hideParentElement(tab);
	})


	// Clic pour confirmer la création d'un input

	$("#idOkButton").click(function(){
		var id = $("input[name='id']").val();

		id = "<input type = \"text\" id=\""+id+"\"/>";
		
		$("#gauche").append(id);


		// Un input est créé donc on incrémente
		idAlreadySet++;

		hideParentElement(tab);
	})


	// Permet de masquer les parents des éléments composant le tableau passé en paramètre


	function hideParentElement (elementChilds){

		for( var indexElementChild in elementChilds ){
			
		    $(elementChilds[indexElementChild]).parent().hide();
		}
	}
})

