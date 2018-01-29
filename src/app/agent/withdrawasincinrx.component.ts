import { Component } from '@angular/core';
declare var INRX:any;
declare var $:any;
declare var $:any;
import * as wallet from 'wallet.js';
declare var ss:any;

@Component({
  templateUrl: 'withdrawasincinrx.component.html'
})
export class WithdrawasincinrxComponent {

  constructor() { 
      ss();//wallet.setSeed();
  }
  withdrawAsINC(){

    console.log($("#withdrawasincamount").val());
     console.log($("#withdrawasincyorn").val());
     var args = $("#withdrawasincamount").val()+","+$("#withdrawasincyorn").val();
    wallet.INRX("withdrawAsINC",args);


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
