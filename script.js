let twitterLink = 'https://twitter.com/intent/tweet?text=';
let tweetToShare;
// quotes object at end of JS code section.

function newQ(){
  var newRandom = Math.floor(Math.random() * quotes.length); 
  tweetToShare = '';
  $(".quote").html(quotes[newRandom].quote);
  $(".sayer").html(quotes[newRandom].from); 
  tweetToShare = twitterLink + quotes[newRandom].quote + ' -' +  quotes[newRandom].from;
}

$(document).ready(() => {  
 /*$.getJSON("https://talaikis.com/api/quotes/random/", function(a) {
    let newQuote = {};
    newQuote.from = a.author;
    newQuote.quote = a.quote;
    tmp = tmp.replace(/([<p>]+)([A-Z]+.+[.]+)([</p>]+.+)/, '$2');
     = tmp; .substring(0,tmp.length-1);
    
    $("body").append("<!-— " + JSON.stringify(newQuote) + "-->");
    console.log(JSON.stringify(newQuote));
    
    $(".quote").html(a.quote);
    $(".sayer").html(a.author); 
});*/
  newQ();
  $("#tbutton").html('<a href="' + tweetToShare + '" target="_blank">tweet this.</a>');
  
  
  $("#qbutton").on("click",() => {  
       newQ();
    $("#tbutton").html('<a href="' + tweetToShare + '" target="_blank">tweet this.</a>');
  });
});

  var quotes = [{from:"Leonard Bernstein", quote: "To achieve great things, two things are needed: a plan, and not quite enough time."},{from:"Ryan Singer", quote:"Good ideas turn into good designs fairly quickly. If you catch yourself fiddling too much with colors, borders and treatments to bring a design together, chances are the problem lies somewhere deeper."},{from:"Larry Marine", quote: "It is far better to adapt the technology to the user than to force the user to adapt to the technology."},{from:"Don Draper", quote: "You came here because we do this better than you, and part of that is letting our creatives be unproductive until they are."},{from:"Bill Bernbach", quote: "We are so busy measuring public opinion that we forget we can mold it. We are so busy listening to statistics we forget we can create them."},{from:"Jared M. Spool", quote: "Once you eliminate quality as a requirement, the entire design process becomes a whole lot easier."},{from:"Mike Tyson", quote: "Everybody's got a plan 'til they get hit in the mouth."},{from:"Steve Krug", quote: "Experts are rarely insulted by something that is clear enough for beginners. Everybody appreciates clarity."},{from:"Steven Heller", quote: "As a profession, graphic designers have been shamefully remiss or ineffective about plying their craft for social or political betterment."},{from:"Steve Jobs", quote: "We make the whole widget."},{from:"Pablo Picasso", quote: "Every child is an artist. The challenge is to remain an artist after you grow up."},{from:"Jeff Bezos", quote: "If you never want to be criticized, for goodness&#8217; sake don&#8217;t do anything new."},{from:"Osho", quote: "Creativity is the greatest rebellion in existence."},{from:"Linda Naiman", quote: "When we engage in what we are naturally suited to do, our work takes on the quality of play and it is play that stimulates creativity."},{from:"George Dyson", quote: "Information is cheap, meaning is expensive."},{from:"Frank Chimero", quote: "There&#8217;s a point when you\u2019re done simplifying. Otherwise, things get really complicated."},{from:"Alex Zevallos", quote: "Babe Ruth was a home run king but he was also a strike out king. Always go for the fences, even if it means sometimes striking out. That’s the only way to hit a home run."},{from:"George Carlin", quote: "The secret of success is doing something you love, doing it well and being recognized for it."},{from:"James Hetfield", quote: "I mean there&#8217;s a fun in being hated, it puts a fire in your ass and it gets fucking boring to be loved by everyone."},{from:"Alexander Isley", quote: "Get in over your head as often and as joyfully as possible."},{from:"Confucius", quote: "I hear and I forget. I see and I remember. I do and I understand."},{from: "Dave Winer", quote: "The easier you make it for people to go, the more likely they are to stay."},{from:"J. C. Watts", quote: "I never got into politics for it to be a career. It doesn't take a lot of strength to hang on. It takes a lot of strength to let go."},{from:"Johnny Cash", quote: "The things that have always been important: to be a good man, to try to live my life the way God would have me, to turn it over to Him that His will might be worked in my life, to do my work without looking back, to give it all I've got, and to take pride in my work as an honest performer."},{"from":"Jon Stewart","quote":"Our culture is just a series of checks and balances. The whole idea that we're in a battle between tyranny and freedom - it's a series of pendulum swings."},{"from":"Edward Gibbon","quote":"History is little more than the register of the crimes, follies, and misfortunes of mankind."},{"from":"Lope de Vega","quote":"There is no greater glory than love, nor any great punishment than jealously."}];

