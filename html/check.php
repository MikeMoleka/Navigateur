<?php

if(isset($_POST['action']) && !empty($_POST['action'])) {
    $action = $_POST['action'];
    if ($action == 'folder') {
        folder();
    }else {
        search();
    }
}


function folder(){

    if(isset($_POST['chemin']) && !empty($_POST['chemin'])) {
        $chemin = $_POST['chemin'];
    }

    $list = scandir($chemin); // On liste les dossiers et fichiers dans un tableau list 
    $max = sizeof($list); // cette fonctionermet de recuperer la taille du tableau list
    $li = "<li class=\"list-group-item d-flex align-items-center animated fadeIn" ;
    $iconFile = "<i class=\"fas fa-file col-2\"></i>";
    $iconFolder = "<i class=\"far fa-folder col-2\"></i>";
    $id = "id=\"";



    for ($i=0; $i < $max; $i++) {

        $cheminTeste = $chemin . "/" . $list[$i]; 
        $dotPos = strpos($list[$i],"."); // On cherche la position de la première occurence "." pour savoir s'il s'agit d'un dossier ou fichier

        if($dotPos != 0 && is_file($cheminTeste)){
            print $li . " file" .  "\">". $iconFile . $list[$i] . "</li>";
        }
        if($list[$i] == ".."){
            print $li . " folder\"". $id . $list[$i]. "\">"."<button class=\"btn btn-warning btn-lg btn-block\">Go back</button>" ."</li>";
        }
        if($dotPos === 0 && $list[$i] != ".."){
            print "<li class=\"" . "d-none" .   "\">". $list[$i] . "</li>";
        }
        elseif($dotPos == false && $list[$i] != ".." && is_dir($cheminTeste) == true){
            print $li . " folder\"". $id . $list[$i]. "\">". $iconFolder  .$list[$i] . "</li>";
        }
    }

  }

?>
