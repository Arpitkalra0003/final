import { Component } from '@angular/core';
declare var INCTokenC:any;
declare var $:any;
declare var $:any;
import * as wallet from 'wallet.js';
declare var ss:any;

@Component({
  templateUrl: 'transferfrom.component.html'
})
export class TransferfromComponent {

  constructor() { 

    ss();//wallet.setSeed();
  }
 transferfrom(){
    console.log($("#transferfromfrom").val());
    console.log($("#transferfromto").val());
    console.log($("#transferfromamount").val());
    var args = $("#transferfromfrom").val()+","+$("#transferfromto").val()+","+$("#transferfromamount").val();
    wallet.transferfrom("transferfrom",args);

//   $("#transferfrombtn").click(function() {
//          console.log($("#transferfromfrom").val());
//          console.log($("#transferfromto").val());
//          console.log($("#transferfromamount").val());

//          INCTokenC.transferfrom($("#transferfromfrom").val(),$("#transferfromto").val(),$("#transferfromamount").val(),function(error, result){
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
