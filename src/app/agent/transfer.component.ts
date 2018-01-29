import { Component } from '@angular/core';
declare var INCTokenC:any;
declare var $:any;
declare var $:any;
import * as wallet from 'wallet.js';
declare var ss:any;

@Component({
  templateUrl: 'transfer.component.html'
})
export class TransferComponent {

  constructor() { 
    ss();//wallet.setSeed();
  }
 transfer(){
    console.log($("#transferto").val());
    console.log($("#transferamount").val());
    var args = $("#transferto").val()+","+$("#transferamount").val();
    wallet.transfer("transfer",args);

//   $("#transferbtn").click(function() {
//          console.log($("#transferto").val());
//          console.log($("#transferamount").val());
//          INCTokenC.transfer($("#transferto").val(),$("#transferamount").val(),function(error, result){
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
