import { Component } from '@angular/core';
declare var INRX:any;
declare var $:any;
declare var $:any;
import * as wallet from 'wallet.js';
declare var ss:any;

@Component({
  templateUrl: 'withdrawasincusdx.component.html'
})
export class WithdrawasincusdxComponent {

  constructor() {
    ss();//wallet.setSeed();

   }
  withdrawAsINC(){

    console.log($("#withdrawasusdxamount").val());
     console.log($("#withdrawasusdxyorn").val());
     var args = $("#withdrawasusdxamount").val()+","+$("#withdrawasusdxyorn").val();
    wallet.USDX("withdrawAsINC",args);


//   $("#withdrawasincbtn").click(function() {
//          console.log($("#withdrawasincamount").val());
//          console.log($("#withdrawasincyorn").val());
         

//          INRX.withdrawAsINC($("#withdrawasincamount").val(),$("#withdrawasincyorn").val(),function(error, result){
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
