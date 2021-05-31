<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Musify</title>
    <link href="style.css" rel="stylesheet">
    <script src="taffy.js"></script>

</head>
<body>



<h1>Admin Panel</h1>

<div class="form-container">
<form>
    <label for="author">Author</label>
    <input type="text" id="author" name="firstname" placeholder="Your name.." required>

    <label for="songName">Song name</label>
    <input type="text" id="songName" name="lastname" placeholder="Your last name.." required>

    <label for="songFile">Song file (mp3) </label>
    <input type="file" id="songFile" name="songToUpload" required>



    <input type="submit" value="Submit">
</form>
</div>

<script src="script.js"></script>
<script src="https://kit.fontawesome.com/35713f5d61.js" crossorigin="anonymous"></script>

</body>
</html>