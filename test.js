if (document.title.indexOf("國立臺中教育大學校園資訊系統") != -1) {

  var arr="";
  var i=0;
  for (i=0;i<5;i++)
  {
    var a=Math.floor(Math.random() * 10);
    arr+=a.toString(10);
  }
    var code=["function doLogin(){document.getElementById('IsLogin').value = 'Y';document.getElementById('StartCheck').value = '';document.getElementById('ReBuildTheCheckCode').value = '';myform.action = 'login.aspx';myform.target = '_self';"]+["document.getElementById('txtCheckCode').value="]+arr+[";"]+["myform.submit();}"];
    var script = document.createElement('script');
    script.textContent = code;
    (document.head||document.documentElement).appendChild(script);

    $(".flex.block").remove();
    $(".input:eq(3)").hide();




  }
