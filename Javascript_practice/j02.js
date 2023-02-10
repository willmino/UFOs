// In the below example, you will visit a website. On the website, the getElementById() function is chained to the object document.
// 'myImage' id is passed through the getElementById() function. Then, .src is chained to the getElementById function. The js code
// sets the whole code chained to the .src, which means we are accessing the src attribute of the img element, and it changes the src attrbiute
// to a picture of a lit up light bulb when we click the turn on the light button.

// The code that accomplishes this is the onclick attribute of each button. We can also click the other button to turn off the lightbulb.

<!DOCTYPE html>
<html>
<body>

<h2>What Can JavaScript Do?</h2>

<p>JavaScript can change HTML attribute values.</p>

<p>In this case JavaScript changes the value of the src (source) attribute of an image.</p>

<button onclick="document.getElementById('myImage').src='pic_bulbon.gif'">Turn on the light</button>

<img id="myImage" src="pic_bulboff.gif" style="width:100px">

<button onclick="document.getElementById('myImage').src='pic_bulboff.gif'">Turn off the light</button>

</body>
</html>
