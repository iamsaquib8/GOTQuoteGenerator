$(document).ready(function(){
    let quote,author;

    function getnewQuote(){
        $.ajax({
            url : 'https://got-quotes.herokuapp.com/quotes',
            jsonp : 'jsonp',

            success : function(response){
                quote = response.quote;
                author = response.character;
                $('#quote').text('"'+quote+'"');    
                if(author){
                    $('#author').text('By '+ author);
                }else{
                    $('#author').text('Anonymous');
                }    

            }
        });
    }
    $('.get-quote').on('click', (event)=>{
        event.preventDefault();
        getnewQuote();
    })

    $('.share-quotet').on('click',(event)=>{
        event.preventDefault();
        window.open('https://twitter.com/intent/tweet?text='+encodeURIComponent('"'+quote+'"'+" --By "+author),"tweet", "height=300,width=550,resizable=1");
    })
    $('.share-quotef').on('click',(event)=>{
        event.preventDefault();
        let winHeight = 350;
        let winWidth = 520;
        let winTop = (screen.height / 2) - (winHeight / 2);
        let winLeft = (screen.width / 2) - (winWidth / 2);
        let url = 'https://beingsaquib.github.io/100-days-of-code/GotQuoteGenerator/';
        let title = 'Game of Thrones Quotes!';
        let descr = "Get GOT Quotations.";
        let image = 'https://goo.gl/dS52U';
        window.open('https://www.facebook.com/sharer.php?s=100&p[title]=' + title + '&p[summary]=' + descr + '&p[url]=' + url + '&p[images][0]=' + image, 'sharer', 'top=' + winTop + ',left=' + winLeft + ',toolbar=0,status=0,width=' + winWidth + ',height=' + winHeight);
    })
})