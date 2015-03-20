function submit(){
  var input1=document.getElementById('Content_name');
  var input2=document.getElementById('Content_Grade');
  var input3=document.getElementById('Content_StuNo');
  var input4=document.getElementById('Content_CellPhone');
  if(!input4.value){
    input4.focus();
  }
  if(!input3.value){
    input3.focus();
  }
  if(!input2.value){
    input2.focus();
  }
  if(!input1.value){
    input1.focus();
  }
  if(input1.value&&input2.value&&input3.value&&input4.value)
  {
    var url = "http://stu.fudan.edu.cn/joinus/";//ajax

    var body = "Name=" + input1.value + "&Grade=" + input2.value + "&StuNo=" + input3.value + "&CellPhone=" + input4.value;
    var XHR=new XMLHttpRequest();
    XHR.open("POST",url,true);
    XHR.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    XHR.send(body);
    XHR.onreadystatechange=function(){
      if (XHR.readyState == 4){
        if (XHR.status==201){
          alert(XHR.responseText);
          window.location = "http://stu.fudan.edu.cn/";
        }
        else {
          console.log("enter");
          alert(XHR.responseText);
        }
      }
    }
  }
}