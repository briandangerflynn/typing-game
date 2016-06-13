// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require_tree .

$(document).ready(function(){
console.log("jquery working")

var level;

if($("#level-header").text() === 'Level 1'){
  level = 0;
}else if($("#level-header").text() === 'Level 2'){
  level = 1;
}else if($("#level-header").text() === 'Level 3'){
  level = 2;
}else if($("#level-header").text() === 'Level 4'){
  level = 3;
}

if(level !== undefined){


  //  level lines in block strings

  var level_one_lines = "<!DOCTYPE html>|<html>|<head>|<title>Key Coder</title>|</head>|<body>"

  var level_two_lines = "<div class='container'>|<h2><%= @user.name %>'s Page</h2>|<a href='<%= @user.id %>/edit' id='edit-profile'>|<span>~Edit Profile~</span></a>|<img src='<%= @user.image %>' id='profile-pic'>|<p><%= @user.description %></p>|<hr></body></html>"

  var level_three_lines = "<h3>Course Progress:</h3>|<p><a href='/level_one'>Level One</a></p>|<ul><li>Speed: </li>|<li>Errors: </li>|<li><a href='#'>See Level One Code</a></li></ul>|<p><a href='/level_two'>Level Two</a></p>|<ul><li>Speed: </li>|<li>Errors: </li>|<li><a href='#'>See Level Two Code</a></li></ul>|<p><a href='/level_three'>Level three</a></p>|<ul><li>Speed: </li>|<li>Errors: </li>|<li><a href='#'>See Level three Code</a></li></ul>|</div></div>"

  var level_four_lines = ".container {|width: 80%;|margin: 0 auto;|position: relative;}|#profile-pic-div {|margin-top: 80px;|width: 50%;|float: left;|text-align: center;}|#profile-pic {|width: 400px;|margin: 0 auto;|border: 3px solid black;|border-radius: 50px;}"

  var level_five_lines = "#profile-personal {|margin-top: 80px;|width: 42%;|float: right;}|#profile-personal h2 {|margin-top: 0;|display: inline;|float: left;}|#profile-personal p {|clear: both;}|#edit-profile {|display: inline-block;|margin-top: 8px;|margin-left: 20px;|font-size: 12px;|text-decoration: none;}|.half-hr {|width: 50%;|margin-left: 0;}"

  // splits level lines into arrays
  var type_row_one = level_one_lines.split("|")
  var type_row_two = level_two_lines.split("|")
  var type_row_three = level_three_lines.split("|")
  var type_row_four = level_four_lines.split("|")
  var type_row_five = level_five_lines.split("|")

  var type_row_array = [type_row_one, type_row_two, type_row_three, type_row_four, type_row_five]

  var type_row = type_row_array[level]

  // level 1 line views
  var level_one_line_views ="&lt;!DOCTYPE html&gt;|&lt;html&gt;|&lt;head&gt;|&lt;title&gt;Key Coder&lt;/title&gt;|&lt;/head&gt;|&lt;body&gt;"

  var level_two_line_views = "&lt;div class='container'&gt;|&lt;h2&gt;&lt;&#37;&#61; &#64;user.name &#37;&gt;'s Page&lt;/h2&gt;|&lt;a href='&lt;&#37;&#61; &#64;user.id &#37;&gt;/edit' id='edit-profile'&gt;|&lt;span&gt;~Edit Profile~&lt;/span&gt;&lt;/a&gt;|&lt;img src='&lt;&#37;&#61; &#64;user.image &#37;&gt;' id&#61;'profile-pic'&gt;|&lt;p&gt;&lt;&#37;&#61; &#64;user.description &#37;&gt;&lt;/p&gt;|&lt;hr&gt;&lt;/body&gt;&lt;/html&gt;"

  var level_three_line_views = "&lt;h3&gt;Course Progress:&lt;/h3&gt;|&lt;p&gt;&lt;a href='/level_one'&gt;Level One&lt;/a&gt;&lt;/p&gt;|&lt;ul&gt;&lt;li&gt;Speed: &lt;/li&gt;|&lt;li&gt;Errors: &lt;/li&gt;|&lt;li&gt;&lt;a href='#'&gt;See Level One Code&lt;/a&gt;&lt;/li&gt;&lt;/ul&gt;"

  // splits level one line views into array
  var view_row_one = level_one_line_views.split("|")
  var view_row_two = level_two_line_views.split("|")
  var view_row_three = level_three_line_views.split("|")

  var view_row_array = [view_row_one, view_row_two, view_row_three, type_row_four, type_row_five]

  var view_row = view_row_array[level]

  // sets the first line as the default top row in the line viewer
  var viewRowNumber = 0

  // manages the three lines of the line viewer
  if (viewRowNumber>2) {
    $("#main-line").append(view_row[viewRowNumber]).css('font-size', '20px');
    $("#second-line").append(view_row[viewRowNumber + 1]).css('color', 'grey');
    $("#third-line").append(view_row[viewRowNumber + 2]).css('color', 'lightgrey')
  }

  // mini library of character key codes
  charCodes = {
    " ":32,"!":49,"@":50,"%":53,"#":51,"%":53,

    ";":186,"=":187,"<":188,"-":189,"_":189,">":190,
    ":":186,".":190,"/":191,"~":192,"'":222,"{":219,
    "}":221,

    "C":67,"D":68,"E":69,"O":79,"T":84,"Y":89,"P":80,
    "L":76,"S":83,"K":75,

    "0":48,"1":49,"2":50,"3":51,"4":52,"5":53,"6":54,
    "7":55,"8":56,"9":57,
    "a":65,"b":66,"c":67,"d":68,"e":69,"f":70,"g":71,
    "h":72,"i":73,"j":74,"k":75,"l":76,"m":77,"n":78,
    "o":79,"p":80,"q":81,"r":82,"s":83,"t":84,"u":85,
    "v":86,"w":87,"x":88,"y":89,"z":90}

  // establishes first line as default starting point
  var rowNumber = 0
  var word = type_row[rowNumber]

  // splits selected line into characters for checking
  var word = word.split("")

  // sets first character in first line as default first to be typed
  var counter = 0

  // empties typing box
  var current = $("#challenge-box").val()

  // counts incorrect key presses
  var mistakes = 0

  // prevents "enter" key from accidentally affecting typing box
  $("#challenge-box").on( "keydown", function( event ) {
    if(event.keyCode == 13) {
        event.preventDefault();
        return false;
    }
  })

var minutesLabel = document.getElementById("minutes");
var secondsLabel = document.getElementById("seconds");


    // starts challenge and starts timer
  $("#challenge-box").on('click', function(event) {
    // clears placeholder text
    $("#challenge-box").attr('placeholder', '');

    // adds first 3 lines of text into viewer
    $("#main-line").append(view_row[0]).css('font-size', '20px');
    $("#second-line").append(view_row[1]).css('color', 'grey');
    $("#third-line").append(view_row[2]).css('color', 'lightgrey')

    // code to create timer

    var totalSeconds = 0;
    setInterval(setTime, 1000);

    function setTime(){
      ++totalSeconds;
      secondsLabel.innerHTML = pad(totalSeconds%60);
      minutesLabel.innerHTML = pad(parseInt(totalSeconds/60));
    }

    function pad(val){
      var valString = val + "";
      if(valString.length < 2){
          return "0" + valString;
      }
      else{
          return valString;
      }
    }
  });
  // end timer code


  // function for checking whether key typed matches character needed
  $("#challenge-box").on( "keyup", function( event ) {

    var keycode = event.which; //this is a number
    var needToPress = word[counter]; //this is actual letter
    var needToPress = charCodes[needToPress] //changes to a number value

    if (needToPress == keycode){
      current = $("#challenge-box").val()
      counter++
      if (counter == word.length){
        rowNumber ++
        viewRowNumber ++
        word = type_row[rowNumber]
        counter = 0
        if (viewRowNumber == view_row.length) {
          $("#challenge-box").val("")
          $("#main-line").html("")
          $(".rendered-code").append(view_row[viewRowNumber - 1] + "<br>");
          $(".front").fadeOut('slow');

          $(".code-challenge-area .flipper").css({
            "transform": "rotateY(180deg)"
          });
          $(".final-errors").append(mistakes)
        }
        else{
        $(".rendered-code").append(view_row[viewRowNumber - 1] + "<br>");
        $("#main-line").html("").append(view_row[viewRowNumber]).css('font-size', '20px');
        $("#second-line").html("").html("").append(view_row[viewRowNumber + 1]).css('color', 'grey');
        $("#third-line").html("").append(view_row[viewRowNumber + 2]).css('color', 'lightgrey')
        $("#challenge-box").val("")
        }
      }
    }
    else{
      if (keycode == 8 || keycode == 13){
        $("#challenge-box").val(current)
      }
      else if(keycode !== 16) {
        console.log('fail')
        $("#challenge-box").val(current)
        mistakes ++
        $("#errors").text('')
        $("#errors").append(mistakes)
      }
    }
  })
}

$('.blink').css('text-shadow', '0 0 1px #FF0000');

var about_code_box_title = $(".about_code_box_title")
var about_code_box_paragraph = $(".about_code_box_paragraph")

$(".code").on('click', function(event) {
  $(".click-to-learn").css('color', 'black');
  $(".code").css('color', 'black');
  about_code_box_title.text("");
  about_code_box_paragraph.text("")
});

$(".doc-tag").on('click', function(event) {
  $(".doc-tag").css('color', 'red');
  about_code_box_title.append('&lt;!DOCTYPE html&gt;')
  about_code_box_paragraph.append("This funky line of code tells your web browser that the file it's about to process has been written in HTML.")
});

$(".html-tag").on('click', function(event) {
  $(".html-tag").css('color', 'red');
  about_code_box_title.append('&lt;html&gt; and &lt;/html&gt;')
  about_code_box_paragraph.append("The HTML tags tells the web browser where the HTML code begins (&lt;html&gt;) and where it ends (&lt;/html&gt;).<br><br>HTML stands for Hyper Text Markup Language and it's mostly used for adding content (text, images, links, etc.) to a website. You can add style and interactivity to that content later with CSS and Javascript.<br><br>Almost all pages on the web contain HTML.")
});

$(".head-tag").on('click', function(event) {
  $(".head-tag").css('color', 'red');
  about_code_box_title.append('&lt;head&gt; and &lt;/head&gt;')
  about_code_box_paragraph.append("The head tags contain a lot of behind the scenes information, like the title of your website (what people see in the tab), links to your CSS or JavaScript files, and stuff called 'meta-data.'")
});

$(".title-tag").on('click', function(event) {
  $(".title-tag").css('color', 'red');
  about_code_box_title.append('&lt;title&gt; and &lt;/title&gt;')
  about_code_box_paragraph.append("The title tags tells the browser the name of your website. You can see this name in the tab at the top of your browser.<br><br>The title does <b>not</b> have to be the same as your site's header or logo.")
});

$(".link-tag").on('click', function(event) {
  $(".link-tag").css('color', 'red');
  about_code_box_title.append('&lt;link&gt;')
  about_code_box_paragraph.append("The link tag is used to connect to other files that work in tandem with your HTML file, such as CSS or JavaScript files.<br><br>You may have noticed that, unlike most HTML elements, which have an opening (&lt; &gt;) and closing (&lt;/ &gt;) tag, the link tag is self-contained.<br><br>Why? NO ONE KNOWS.")
});

$(".body-tag").on('click', function(event) {
  $(".body-tag").css('color', 'red');
  about_code_box_title.append('&lt;body&gt; and &lt;/body&gt;')
  about_code_box_paragraph.append("The body tags wrap around the content on a web page. All text, images, links, etc. should be written within the body page.")
});

$(".content-tag").on('click', function(event) {
  $(".content-tag").css('color', 'red');
  about_code_box_title.append('Content')
  about_code_box_paragraph.append("All content on a website should be written between the body tags.")
});

$(".div-tag").on('click', function(event) {
  $(".div-tag").css('color', 'red');
  about_code_box_title.append("&lt;div&gt; elements and class attributes")
  about_code_box_paragraph.append("Divs are shorthand for 'dividers' and they do just that: they divide your code into sections. Divs make it easier to organize and style your code.<br><br>We often give divs names using classes to make them even more useful organizing tools. You can name a class whatever you want.<br><br>We gave this div the name 'container' because it 'contains' all of the code in the &lt;body&gt; section of our site. This is a commonly used convention; however, it's purely optional and doesn't have any inherent meaning.")
});

$(".h-tag").on('click', function(event) {
  $(".h-tag").css('color', 'red');
  about_code_box_title.append("Heading Tags")
  about_code_box_paragraph.append("Heading tags typically start from &lt;h1&gt; (the biggest) and go down to &lt;h6&gt; (the smallest).<br><br>The easiest way to think about heading tags is to think of a printed newspaper. The &lt;h1&gt; should only be written once&thinsp;&mdash;&thinsp;it's like the name of the newspaper. &lt;h2&gt; would be used for top level headlines, &lt;h3&gt; for smaller stories and sub-headers, and so on.")
});

$(".erb-tag").on('click', function(event) {
  $(".erb-tag").css('color', 'red');
  about_code_box_title.append("Ruby Variables")
  about_code_box_paragraph.append("This code isn't normal HTML, it's a special code called 'ERB' that taps into this website's database to input a variable.<br><br>In this case, the variable is the name of the user who is currently logged in&thinsp;&mdash;&thinsp;YOU!<br><br>When you finish this game and render your profile, this code will be replaced by the name you entered when you created your account.<br><br>Unless you're logged in as a guest, in which case your name will be 'Hotdog' (because I think that's funny).")
});

$(".a-tag").on('click', function(event) {
  $(".a-tag").css('color', 'red');
  about_code_box_title.append("Anchor Tag")
  about_code_box_paragraph.append("Anchor tags are links. You think they'd be called 'link' tags, but they're not, because the web is weird like that sometimes.<br><br>Anyway, this anchor tag has two key parts. The first part is the 'href' attribute. This tells the link where to find the page to which it's supposed to send the user.<br><br>The href can either be a relative path (linking to another HTML file in your website's files) or absolute (linking to another page on the web'.<br><br>The second key part is the 'id' attribute, which works essentially the same as a 'class' attribute. Ids give HTML elements names so that we can more easily refer to them in the future.")
});

$(".span-tag").on('click', function(event) {
  $(".span-tag").css('color', 'red');
  about_code_box_title.append("&lt;span&gt;")
  about_code_box_paragraph.append("Span tags are kind of like &lt;div&gt; tags. They don't have any inherent effect on the code; however, they make code easier to style and organize.<br><br>Spans are generally used for single lines of code or less, while divs are generally used on larger chunks of code.<br><br>The tildes (~) in this line don't do anything special. I just thought they looked cute. Sue me.")
});

$(".img-tag").on('click', function(event) {
  $(".img-tag").css('color', 'red');
  about_code_box_title.append("Image tags")
  about_code_box_paragraph.append("As you may have guessed, &lt;img&gt; tags add images. The 'src' attribute&thinsp;&mdash;&thinsp;or 'source' attribute&thinsp;&mdash;&thinsp;works just like the 'href' attribute in the &lt;a&gt; tag: it tells the browser where the image comes from.<br><br>Further, like the 'href' attribute, src attributes can either be relative (a filepath to an image stored in your program) or absolute (linking to an image online).<br><br>In this particular case, we used those fancy ERB tags again to tap into our database and use the image you provided at signup as your profile image.")
});

$(".p-tag").on('click', function(event) {
  $(".p-tag").css('color', 'red');
  about_code_box_title.append("&lt;p&gt; and &lt;/p&gt;")
  about_code_box_paragraph.append("One of the most commonly used tags in HTML is the 'p' tag or 'paragraph' tag. This tag merely implies that we're goint to write normal text.<br><br>Inside this particular set of 'p' tags, we inserted more of those special ERB tags to provide the custom description you gave yourself at signup.")
});

$(".hr-tag").on('click', function(event) {
  $(".hr-tag").css('color', 'red');
  about_code_box_title.append("&lt;hr&gt;")
  about_code_box_paragraph.append("The 'hr' or 'horizontal rule' tag adds a horizontal line to a web page, helping to visually divide text and make it more approachable for readers.")
});

$(".hr-tag").on('click', function(event) {
  $(".hr-tag").css('color', 'red');
  about_code_box_title.append("&lt;hr&gt;")
  about_code_box_paragraph.append("The 'hr' or 'horizontal rule' tag adds a horizontal line to a web page, helping to visually divide text and make it more approachable for readers.")
});


// h3 p2 a2 ul li a3
})


