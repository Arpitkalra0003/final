import { Component } from '@angular/core';
declare var INRX:any;
declare var $:any;
declare var ss:any;
declare var INCTokenC:any;
import * as wallet from 'wallet.js';
@Component({
  templateUrl: 'rateset.component.html'
})
export class RatesetComponent {

  constructor() { ss();//wallet.setSeed();
}
 rateSet(){
    console.log($("#ratesetamount").val());
    var args = $("#ratesetamount").val();
    wallet.INRX("rateSet",args);

//   $("#ratesetbtn").click(function() {
        
//          console.log($("#ratesetamount").val());
//          INRX.rateSet($("#ratesetamount").val(),function(error, result){
//              if(!error)
//                  {
//                      $("#instructor").html(result+' id');
//                      console.log(result);
//                  }
//              else
//                  console.error(error);
//          });
//      });
    }
}
