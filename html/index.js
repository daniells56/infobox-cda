$(document).ready(function () {
    window.addEventListener("message", function (event) {
        let point = event.data;
        if (point.procurado) {
            $("#procurado-barra").show().addClass('bounceInLeft');
            var timer = point.procurado, minutes, seconds;
            minutes = parseInt(timer / 60, 10);
            seconds = parseInt(timer % 60, 10);

            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;

            document.getElementById('timer').innerHTML = minutes + ":" + seconds;
            
            if (--timer < 0) {
                timer = duration;
            }
        }else if (point.procurado == 0) {
            $("#procurado-barra").fadeOut(200);
        }
    });
    window.addEventListener("message", function (event) {
        let data = event.data;

        if (data.mtype) {
            if (data.mtype == "aviso") {
                var html = "<div class='barra-container'><div class='container-icon aviso'></div><div class='container-text'><div class='titulo alerta'>Alerta</div><div class='description'>" + data.mtext + "</div></div></div>"
                $(html).appendTo("#container").hide().show().addClass('bounceInRight').delay(8000).queue(function(next) {
                    $( this ).removeClass('bounceInRight').addClass('bounceOutRight').delay(1000);
                    next();
                }).delay(500).queue(function( next ) {
                    $( this ).fadeOut(3000).hide().empty();
                })
            } else if (data.mtype == "importante") {
                var html = "<div class='barra-container'><div class='container-icon importante'></div><div class='container-text'><div class='titulo importante'>Importante</div><div class='description'>" + data.mtext + "</div></div></div>"
                $(html).appendTo("#container").hide().show().addClass('bounceInRight').delay(8000).queue(function(next) {
                    $( this ).removeClass('bounceInRight').addClass('bounceOutRight').delay(1000);
                    next();
                }).delay(500).queue(function( next ) {
                    $( this ).fadeOut(3000).hide().empty();
                })
            } else if (data.mtype == "policia") {
                var html = "<div class='barra-container'><div class='container-icon policia'></div><div class='container-text'><div class='titulo policia'>Unk Policia</div><div class='description'>" + data.mtext + "</div></div></div>"
                $(html).appendTo("#container").hide().show().addClass('bounceInRight').delay(8000).queue(function(next) {
                    $( this ).removeClass('bounceInRight').addClass('bounceOutRight').delay(1000);
                    next();
                }).delay(500).queue(function( next ) {
                    $( this ).fadeOut(3000).hide().empty();
                })
            } else if (data.mtype == "negado") {
                var html = "<div class='barra-container'><div class='container-icon negado'></div><div class='container-text'><div class='titulo negado'>Negado</div><div class='description'>" + data.mtext + "</div></div></div>"
                $(html).appendTo("#container").hide().show().addClass('bounceInRight').delay(8000).queue(function(next) {
                    $( this ).removeClass('bounceInRight').addClass('bounceOutRight').delay(1000);
                    next();
                }).delay(500).queue(function( next ) {
                    $( this ).fadeOut(3000).hide().empty();
                })
            } else if (data.mtype == "rr") {
                var html = "<div class='barra-container'><div class='container-icon negado'></div><div class='container-text'><div class='titulo negado'>Negado</div><div class='description'>" + data.mtext + "</div></div></div>"
                $(html).appendTo("#container").hide().show().addClass('bounceInRight').delay(8000).queue(function(next) {
                    $( this ).removeClass('bounceInRight').addClass('bounceOutRight').delay(1000);
                    next();
                }).delay(500).queue(function( next ) {
                    $( this ).fadeOut(3000).hide().empty();
                })
            } else if (data.mtype == "anuncio") {
                var html = "<div class='barra-container'><div class='container-icon negado'></div><div class='container-text'><div class='titulo negado'>Negado</div><div class='description'>" + data.mtext + "</div></div></div>"
                $(html).appendTo("#container").hide().show().addClass('bounceInRight').delay(8000).queue(function(next) {
                    $( this ).removeClass('bounceInRight').addClass('bounceOutRight').delay(1000);
                    next();
                }).delay(500).queue(function( next ) {
                    $( this ).fadeOut(3000).hide().empty();
                })
            } else if (data.mtype == "sucesso") {
                var html = "<div class='barra-container'><div class='container-icon sucesso'></div><div class='container-text'><div class='titulo sucesso'>Sucesso</div><div class='description'>" + data.mtext + "</div></div></div>"
                $(html).appendTo("#container").hide().show().addClass('bounceInRight').delay(8000).queue(function(next) {
                    $( this ).removeClass('bounceInRight').addClass('bounceOutRight').delay(1000);
                    next();
                }).delay(500).queue(function( next ) {
                    $( this ).fadeOut(3000).hide().empty();
                })
            }
        }
        
    });
});