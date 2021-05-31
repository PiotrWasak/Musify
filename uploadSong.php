<?php
if(isset($_POST['submit']))
{

    $path = "songs/"; //file to place within the server
    $valid_formats1 = array("mp3"); //list of file extention to be accepted
    if(isset($_POST) and $_SERVER['REQUEST_METHOD'] == "POST")
    {
        $file = $_FILES['songToUpload']['name']; //input file name in this code is file1
        $size = $_FILES['songToUpload']['size'];

        if(strlen($file))
        {
            list($txt, $ext) = explode(".", $file);
            if(in_array($ext,$valid_formats1))
            {
                $actual_image_name = $txt.".".$ext;
                $tmp = $_FILES['songToUpload']['tmp_name'];
                if(move_uploaded_file($tmp, $path.$actual_image_name))
                {
                    echo "success";
                }
                else
                    echo "failed";
            }
        }
    }
}
?>
