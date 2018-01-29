import { Component } from '@angular/core';
declare var INCTokenC:any;
declare var $:any;
import * as wallet from 'wallet.js';
declare var ss:any;
@Component({
  templateUrl: 'convertcurrencytoinrx.component.html'
})
export class ConvertcurrencytoinrxComponent {

  constructor() { 
    ss();//wallet.setSeed();


  }
  addToCurrencyX(){
    console.log($("#convertcurrencytoinrxaddress").val());
    console.log($("#convertcurrencytoinrxamount").val());

    var args = $("#convertcurrencytoinrxaddress").val()+","+$("#convertcurrencytoinrxamount").val();
    wallet.addToCurrencyX("addToCurrencyX",args);

//   $("#convertcurrencytoinrxbtn").click(function() {
//          console.log($("#convertcurrencytoinrxaddress").val());
//          console.log($("#convertcurrencytoinrxamount").val());
//          INCTokenC.addToCurrencyX($("#convertcurrencytoinrxaddress").val(),$("#convertcurrencytoinrxamount").val(),function(error, result){
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
