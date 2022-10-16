let progress = document.getElementById('progressbar');
        let totalheight = document.body.scrollHeight - window.innerHeight;
        window.onscroll = function() {
            let progresshieght = (window.pageYOffset / totalheight) * 100;
            progress.style.height = progresshieght + "%" ;
        }