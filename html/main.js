$(function() {
    window.addEventListener("message", function (event) {
        var _ = event.data


        audioPlayer = new Howl({src: ["assets/demo.ogg"]})
            audioPlayer.volume(1)
            audioPlayer.play()
        if (_.NotifyType == "sucesso") {
            $("<div class='notify'><div class='notify-titulo'><img class='icon' src='assets/sucesso.png'><div class='notify-bsucesso'></div></div><div class='notify-type'>Sucesso</div><div class='notify-text'>"+_.NotifyString+"</div></div></div></div>").appendTo("#container").hide().fadeIn(750).delay(5000).fadeOut(750);
        }else if (_.NotifyType == "negado") {
            $("<div class='notify'><div class='notify-titulo'><img class='icon' src='assets/negado.png'><div class='notify-bnegado'></div><div class='notify-type'>Negado</div><div class='notify-text'>"+_.NotifyString+"</div></div></div>").appendTo("#container").hide().fadeIn(750).delay(5000).fadeOut(750);
        }else if (_.NotifyType == "rr") {
            $("<div class='notifyy'><div class='notify-titulo'><div class='notify-typee'>Restart Servidor</div><div class='notify-rr'></div><div class='notify-textt'>"+_.NotifyString+"</div></div></div>").appendTo("#container").hide().fadeIn(750).delay(600000).fadeOut(750);
        }else if (_.NotifyType == "anuncio") {
            $("<div class='notifyyy' style='padding 10px;'><div class='notify-titulo'><div class='notify-typee'>Aviso Administrator</div><div class='notify-rr'></div><div class='notify-textt'>"+_.NotifyString+"</div></div></div>").appendTo("#container").hide().fadeIn(750).delay(15000).fadeOut(750);
        }else if (_.NotifyType == "aviso") {
            $("<div class='notify'><div class='notify-titulo'><img class='icon' src='assets/aviso.png'><div class='notify-baviso'></div><div class='notify-type'>Aviso</div><div class='notify-text'>"+_.NotifyString+"</div></div></div>").appendTo("#container").hide().fadeIn(750).delay(5000).fadeOut(750);
        }else if (_.NotifyType == "importante") {
            $("<div class='notify'><div class='notify-titulo'><img class='icon' src='assets/importante.png'><div class='notify-bimp'></div><div class='notify-type'>Importante</div><div class='notify-text'>"+_.NotifyString+"</div></div></div>").appendTo("#container").hide().fadeIn(750).delay(5000).fadeOut(750);
        }
    })
})