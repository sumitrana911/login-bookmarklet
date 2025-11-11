javascript:(function(){
  var input=document.createElement('input');
  input.type='file';
  input.accept='application/json';
  input.onchange=function(e){
    var file=e.target.files[0];
    var reader=new FileReader();
    reader.onload=function(){
      var c=JSON.parse(reader.result);
      document.getElementById('username').value=c.username;
      document.getElementById('password').value=c.password;
      document.getElementById('submit').click();
    };
    reader.readAsText(file);
  };
  input.click();
})();
