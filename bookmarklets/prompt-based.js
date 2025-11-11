javascript:(function(){
  var u=prompt('Username:'); if(u===null)return;
  var p=prompt('Password:'); if(p===null)return;
  var ue=document.getElementById('username');
  var pe=document.getElementById('password');
  var btn=document.getElementById('submit');
  if(!ue||!pe||!btn){alert('Element(s) not found');return;}
  ue.value=u; pe.value=p;
  var f=(btn.closest?btn.closest('form'):null);
  if(f)f.submit();else btn.click();
})();
