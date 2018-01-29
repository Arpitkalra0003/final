import { Component } from '@angular/core';
import * as wallet from 'wallet.js';
declare var INCTokenC:any;
declare var $:any;
declare var ss:any;
@Component({
  templateUrl: 'allowance.component.html'
})
export class AllowanceComponent {

  constructor() {    ss();//wallet.setSeed();

   }
 
 allowance(){

  console.log("allowanceowner");

  // $("#allowancebtn").click(function() {
         console.log($("#allowanceowner").val());
         console.log($("#allowancespender").val());
          var args = $("#allowanceowner").val() +","+$("#allowanceowner").val();
         wallet.incToken("allowance",args);
        //  INCTokenC.allowance($("#allowanceowner").val(),$("#allowancespender").val(),function(error, result){
        //      if(!error)
        //          {
        //              $("#instructor").html(result+' id');
        //              console.log(result);
        //          }
        //      else
        //          console.error(error);
        //  });
    //  });
     }
}
