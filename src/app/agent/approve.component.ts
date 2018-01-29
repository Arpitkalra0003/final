import { Component } from '@angular/core';
import * as wallet from 'wallet.js';
declare var ss:any;
declare var INCTokenC:any;
declare var $:any;

@Component({
  templateUrl: 'approve.component.html'
})
export class ApproveComponent {

  constructor() {  ss();//wallet.setSeed();
  }

 approve(){
  console.log($("#approveaddress").val());
  console.log($("#approveamount").val());
  var args = $("#approveaddress").val() +","+$("#approveamount").val();
  wallet.incToken("approve",args);
//   $("#approvebtn").click(function() {

//          INCTokenC.approve($("#approveaddress").val(),$("#approveamount").val(),function(error, result){
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
