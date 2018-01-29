import { Component } from '@angular/core';
declare var INCTokenC:any;
declare var $:any;
declare var ss:any;
declare var INCTokenC:any;
import * as wallet from 'wallet.js';
@Component({
  templateUrl: 'releaseescrowusdxtoinrx.component.html'
})
export class ReleaseescrowusdxtoinrxComponent {

  constructor() { 
    ss();//wallet.setSeed();
  }
  releaseescrowusdxtoinrx(){

    console.log($("#releaseescrowusdxtoinrxid1").val());
    console.log($("#releaseescrowusdxtoinrxid2").val());
    console.log($("#releaseescrowusdxtoinrxsender").val());
    console.log($("#releaseescrowusdxtoinrxreceiver").val());
    var args = $("#releaseescrowusdxtoinrxid1").val()+","+$("#releaseescrowusdxtoinrxid2").val()+","+$("#releaseescrowusdxtoinrxsender").val()+","+$("#releaseescrowusdxtoinrxreceiver").val();
    wallet.incToken("releaseescrowusdxtoinrx",args);



//   $("#releaseescrowusdxtoinrxbtn").click(function() {
//          console.log($("#releaseescrowusdxtoinrxid1").val());
//          console.log($("#releaseescrowusdxtoinrxid2").val());
//          console.log($("#releaseescrowusdxtoinrxsender").val());
//          console.log($("#releaseescrowusdxtoinrxreceiver").val());

//          INCTokenC.releaseEscrowUSDXtoINRX($("#releaseescrowusdxtoinrxid1").val(),$("#releaseescrowusdxtoinrxid2").val(),$("#releaseescrowusdxtoinrxsender").val(),$("#releaseescrowusdxtoinrxreceiver").val(),function(error, result){
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
