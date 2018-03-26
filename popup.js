function start(){
  $('#start').css('display','none');
        $('#stop').css('display','block');
        $("#wpm").text(0);
        var t1=Date.now();
        var coco=0;
        var rio=0;
        var prev;
        var t2=0.000000000000000001;
        document.addEventListener('keydown',function (e){
            var code = e.keyCode ? e.keyCode : e.which;
            
            if(code===32 && prev!==code){
              
              rio=rio+1;
              $("#word").text(rio);
            }else {
             coco=coco+1;
             $("#keyc").text(coco);
             t2=Date.now();
             t2=t2-t1;
             t2=t2/60000;
            }
           prev=code;
        });
        $("#stop").click(function(){
          
          $("#word").text(0);
          $("#keyc").text(0);
          $("#wpm").text(Math.floor(rio/t2));
          $('#start').css('display','block');
          $('#stop').css('display','none');
          rio=0;
          coco=0;
        });
}
$('#start').click(function(){

start();

});
        
      