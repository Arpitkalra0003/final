import { Component } from '@angular/core';
declare var INCTokenC:any;
declare var $:any;
declare var ss:any;
declare var INCTokenC:any;
import * as wallet from 'wallet.js';
@Component({
  templateUrl: 'ratesetusdx.component.html'
})
export class RatesetusdxComponent {

  constructor() { ss();//wallet.setSeed();
}
 ratesetusdx(){

    console.log($("#ratesetusdxamount").val());
    var args = $("#ratesetusdxamount").val();
    wallet.INRX("rateSetusdx",args);


//   $("#ratesetusdxbtn").click(function() {
//           console.log($("#ratesetamount").val());
//          INCTokenC.ratesetusdx($("#ratesetamount").val(),function(error, result){
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
