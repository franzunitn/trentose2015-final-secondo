var FlirtrModel = {  
    score:0,
   /* It sets the phrase to analyse */
   analyse : function (phrase){
       
       
       
       for (var i=0;i<patterns.length;i++){
        var x = new RegExp(patterns[i].word);
        var y = new RegExp(patterns[i].neutraliser);
           if ((x.test(phrase))){
               if (!y.test(phrase)){
            FlirtrModel.score= FlirtrModel.score + patterns[i].score;
               }
           }
           console.log(FlirtrModel.score);
       }
       
   },
  
   /* Returns the flirting score (number) of the phrase.
    * It is computed by looking for flirting patterns, 
    * adding up the individual scores of the matching
    * patterns (unless the pattern neutraliser is found to 
    * the right of the matching word)
    */
   getScore : function () {
       return FlirtrModel.score;
   }
         
};

    $(document).ready(function(){
        
       
        
        $("#check").click(function(){
            
            var domanda = $("#domanda").val();
            console.log(domanda);
            FlirtrModel.analyse(domanda);
            $(".answer").empty();
            $(".answer").append(FlirtrModel.getScore());
            console.log(FlirtrModel.score);
            var status = "";
            
            if (FlirtrModel.getScore()>0){
                status="Filtry";
            } else if (FlirtrModel.getScore()===0){
                status ="Neutral";
            } else {
                status="Friendly";
            }
            $(".status").empty();
            $(".status").append(status);
        
        });
        


});