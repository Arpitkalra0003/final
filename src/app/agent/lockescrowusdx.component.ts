import { Component } from '@angular/core';
declare var INRX:any;
declare var $:any;
declare var $:any;
import * as wallet from 'wallet.js';
declare var ss:any;

@Component({
  templateUrl: 'lockescrowusdx.component.html'
})
export class LockescrowusdxComponent {

  constructor() {
    ss();//wallet.setSeed();

   }
   lockEscrow(){

    console.log($("#lockescrowusdxaddresssender").val());
     console.log($("#lockescrowusdxaddressreceiveragent").val());
     console.log($("#lockescrowusdxaddressreceiver").val());
     console.log($("#lockescrowusdxaddressreceiveragent").val());
     
     var args = $("#lockescrowusdxaddresssender").val()+","+$("#lockescrowusdxaddressreceiveragent").val()+","+$("#lockescrowusdxaddressreceiver").val()+","+$("#lockescrowusdxaddressreceiveragent").val();
    wallet.USDX("lockEscrow",args);


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
