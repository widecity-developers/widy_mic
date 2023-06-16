# webspeak
This repo is a cdn that will convert your voice into live text on input fields in a web page 
use the cdn link  before the body tag
```
<script src ="https://cdn.jsdelivr.net/gh/widecity-developers/widy_mic/mic_v2.js"></script>
```
Just add the class to use
```
class="widy_mic"
```
Add this class where ever you want the speak to text feature. p tag, div, etc... as given below.

example

```
<html>
<head>
   <title>widy_mic</title>
</head>
   <body>
    <div style="margin: 10px;">
    <label>input 1</label>
    <input class="widy_mic" style="border-radius: 10px;padding: 5px;">  
    </div>
    <div style="margin: 10px;">
    <label>input 2</label>
    <input class="widy_mic" style="border-radius: 10px;padding: 5px;">  
    </div>
    <div style="margin: 10px;">
    <label>input 3</label>
    <input class="widy_mic" style="border-radius: 10px;padding: 5px;">  
    </div>

        <script src ="https://cdn.jsdelivr.net/gh/widecity-developers/widy_mic/mic_v2.js"></script>
   </body>
</html>
```
