import { Component } from '@angular/core';
declare var INRX:any;
declare var $:any;
declare var $:any;
import * as wallet from 'wallet.js';
declare var ss:any;

@Component({
  templateUrl: 'lockescrowinrx.component.html'
})
export class LockescrowinrxComponent {

  constructor() {
    ss();//wallet.setSeed();

   }
   lockEscrow(){

    console.log($("#lockescrowinrxaddresssender").val());
     console.log($("#lockescrowinrxaddressreceiveragent").val());
     console.log($("#lockescrowinrxaddressreceiver").val());
     console.log($("#lockescrowinrxaddressreceiveragent").val());
     
     var args = $("#lockescrowinrxaddresssender").val()+","+$("#lockescrowinrxaddressreceiveragent").val()+","+$("#lockescrowinrxaddressreceiver").val()+","+$("#lockescrowinrxaddressreceiveragent").val();
    wallet.INRX("lockEscrow",args);


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
