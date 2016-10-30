(function ( $ ) {
 
    $.fn.hello = function() {
      	this.append('<input type="text" id="helloInp"><button type="submit" id="helloBtn">Hello</button>');
        
        this.each(function(){
          var $input = $(this);
          var helloButton = $input.find("#helloBtn");
          var helloInput  = $input.find("#helloInp");

          helloButton.on('click',function(e){
              alert(helloInput.val());
          });
        });
        
        return this;
    };

}( jQuery ));