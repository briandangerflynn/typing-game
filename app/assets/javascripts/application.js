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
//= require turbolinks
//= require_tree .

$(document).ready(function(){
console.log("jquery working")

//  level 1 lines in block string
var level_one_lines = "<!DOCTYPE html>|<html>|<head>|<title>|<%= @user.name %>|</title>|</head>|<body>|<div class='container'>|<h2><%= @user.name %>'s Page</h2>|<a href='<%= @user.id %>/edit' id='edit-profile'>|<span>~Edit Profile~</span></a>|<img src='<%= @user.image %>' id='profile-pic'>|<p><%= @user.description %></p>|<hr>"

// splits level one lines into array
var type_row = level_one_lines.split("|")

// level 1 line views
var level_one_line_views ="&lt;!DOCTYPE html&gt;|&lt;html&gt;|&lt;head&gt;|&lt;title&gt;|&lt;&#37;&#61; &#64;user.name &#37;&gt;|&lt;/title&gt;|&lt;/head&gt;|&lt;body&gt;|&lt;div class='container'&gt;|&lt;h2&gt;&lt;&#37;&#61; &#64;user.name &#37;&gt;'s Page&lt;/h2&gt;|&lt;a href='&lt;&#37;&#61; &#64;user.id &#37;&gt;/edit' id='edit-profile'&gt;|&lt;span&gt;~Edit Profile~&lt;/span&gt;&lt;/a&gt;|&lt;img src='&lt;&#37;&#61; &#64;user.image &#37;&gt;' id&#61;'profile-pic'&gt;|&lt;p&gt;&lt;&#37;&#61; &#64;user.description &#37;&gt;&lt/p&gt;|&lt;hr&gt;"

// splits level one line views into array
var view_row = level_one_line_views.split("|")

// sets the first line as the default top row in the line viewer
var viewRowNumber = 0

// manages the three lines of the line viewer
$("#main-line").append(view_row[viewRowNumber]).css('font-size', '20px');
$("#second-line").append(view_row[viewRowNumber + 1]).css('color', 'grey');
$("#third-line").append(view_row[viewRowNumber + 2]).css('color', 'lightgrey')

// mini library of character key codes
charCodes = {
  " ":32,"!":49,"@":50,"2":50,"%":53,

  ";":186,"=":187,"<":188,"-":189,">":190,
  ".":190,"/":191,"~":192,"'":222,

  "C":67,"D":68,"E":69,"O":79,"T":84,"Y":89,"P":80,

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
        if (mistakes == 0){
          $("#win-alert-text").append("Congrats! You made " + mistakes + " mistakes!")
          $("#win-alert").show()
        }
        else if(mistakes == 1){
          $("#win-alert-text").append("Congrats! You only made " + mistakes + " mistake!")
          $("#win-alert").show()
        }
        else{
          $("#win-alert-text").append("Congrats! You only made " + mistakes + " mistakes!")
          $("#win-alert").show()
        }
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
    }
  }
})


















})
