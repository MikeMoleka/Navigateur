<!DOCTYPE html>
    <html>
        <head>
            <?php include 'includes/header.html' ?>
            <title>Navigateur</title>
            <script src="js/javascript.js"></script>
        </head>
        <body>
            <h1 class="container text-center animated bounceInRight">NAVIGAJAXATOR</h1>

            <div class="container jumbotron">
                        <div id="url" class="input-group mb-3">
                        <input id="urlLink" type="text" class="form-control" placeholder="Saisir le chemin" name="search">
                        <div class="input-group-append">
                            <button id="search" type="button" class="btn btn-dark">Valider</button>
                        </div>
                    </div>
                <div id="chemin" class='col-12'></div>
                    <ul id="ul0" class="list-group text-center">
                </ul>
            </div>

            <div id="popup" class="popup panel panel-primary">
                <span class="close"></span>
                <img class="modal-content" id="forbidden">
                <div id="caption"></div>
            </div>

            <?php include 'includes/base_js.html' ?>
        </body>
    </html>
