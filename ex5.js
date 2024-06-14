$(document).ready(function(){
    $("#ajouter").click(function(){
        var valeur = $("#nouvelElement").val();
        $("#maListe").append("<li>" + valeur + "</li>");
        $("#nouvelElement").val("");
    })
})
$(document).ready(function(){
    $("#supprimer").click(function(){
        var valeur = $("#nouvelElement").val();
        if($("li:contains(" + valeur +")")){
            $("li:contains(" + valeur +")").remove();
        }
        $("#nouvelElement").val("");
    })
})