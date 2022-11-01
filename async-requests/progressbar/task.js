const progress = document.getElementById('progress');
const form = document.getElementById('form');
const file = document.getElementById('file');


form.addEventListener('submit', function (event) {
   event.preventDefault();
   const fileToUpload = file.files[0]
   const formData = new FormData();
   const xhr = new XMLHttpRequest()

   if (file.files.length > 0) {
      formData.append('upload_File', fileToUpload);

      xhr.upload.addEventListener('progress', progressHandler, false)
      xhr.addEventListener('load', loadHandler, false);
      xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/upload.php');
      xhr.send(formData)
   };
   return false
});

function progressHandler(event) {
   progress.value = event.loaded / event.total;
}

function loadHandler() {
   progress.value = 0;
}