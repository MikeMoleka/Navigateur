var chemin = '/'
var cheminAfficher = chemin;

//Fonction permettant d'éffacer le / au debut d'une chaine des caractères

function majChemin(){
    var idx = cheminAfficher.lastIndexOf('/'); //retourne l'indice de la dernière occurence trouvé dans cheminAfficher
    cheminAfficher = cheminAfficher.substring(0, idx); // extrait la sous chaine de la chaine cheminAfficher en partant de l'indice zero 
                                                      // à l'indice de /
}

function monAjax(action, lien){
    $.ajax({ 
        url: 'html/check.php',
        data: {action: action, chemin: lien},
        type: 'post',
        success: function(output) {
            $('ul').html(output);
        }
    });
}

//Evenement au click sur le dossier ou fichier

function goBack(id){

    // Mise à jour du chemin dans le span chemin
    
    cheminAfficher = cheminAfficher + "/" + id; //On modifie le chemin 
    chemin = chemin + "/" + id;

    $('#chemin').html(chemin); //affiche chemin dans le span d'id chemin
    if(id == '..' ){
        majChemin(); // Efface la première occurence / 
        majChemin(); // Procède comme précédant
        $('#chemin').html(cheminAfficher);
        new Audio('sound/no.mp3').play();
    }
    else {
        $('#chemin').html(cheminAfficher); //affiche chemin dans span d'id chemin
        new Audio('sound/yes.mp3').play();
    }

    // Navigation dans le dossier

    monAjax('folder', chemin);
}

function go(id){
    if (id) {}
}


//Fonction sur le bouton search au clic

function clickFolder(inputPath){
    var chemin1 = inputPath;

    $('#chemin').html(chemin1); //affiche chemin le span d'id chemin

    if(chemin1 != '' ){
        $('#chemin').html(chemin1);
        new Audio('sound/no.mp3').play();
    }
    else {
        $('#chemin').html(chemin1); //affiche chemin dans span d'id chemin
        new Audio('sound/yes.mp3').play();
    }

    //Navigation dans le dossier

    monAjax('folder', inputPath);
}

function inputPath(inputPath){
   
    monAjax('search', chemin);

    if( $("#ul0").children().length > 0) {
        clickFolder(inputPath);
    }
    else{
        alert("Boulet!!!");
        inputPath(chemin);
        goBack(id);
    }
}


$(document).ready(function(){
    new Audio('sound/chant.mp3').play();
    $('#chemin').html(chemin);
    $.ajax({ 
        url: 'html/check.php',
        data: {action: 'folder', chemin: chemin},
        type: 'post',
        success: function(output) {
            $('ul').html(output);
            setInterval(function(){ //permet de recliquer

                $("li[id]").on('click',(function(){
                    var id = $(this).attr('id');
                    goBack(id);
                    BindEventHandlers(); //provoque une erreur qui stope la boucle
                }));

                $("#search").on('click', (function(){
                    var pathInput = $('#urlLink').val();
                        if(pathInput != '')
                            inputPath(pathInput);
                    BindEventHandlers();
                }))
            }, 1000);
        }
    });
});

