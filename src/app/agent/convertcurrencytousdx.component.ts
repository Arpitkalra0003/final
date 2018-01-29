import { Component } from '@angular/core';
declare var INCTokenC:any;
declare var $:any;
import * as wallet from 'wallet.js';
declare var ss:any;
@Component({
  templateUrl: 'convertcurrencytousdx.component.html'
})
export class ConvertcurrencytousdxComponent {

  constructor() {

    ss();//wallet.setSeed();
   }
  toCurrencyX(){

    console.log($("#convertcurrencytousdxaddress").val());
    console.log($("#convertcurrencytousdxamount").val());

    var args = $("#convertcurrencytousdxaddress").val()+","+$("#convertcurrencytousdxamount").val();
    wallet.addToCurrencyX("addToCurrencyX",args);


//   $("#convertcurrencytousdxbtn").click(function() {
//          console.log($("#convertcurrencytousdxaddress").val());
//          console.log($("#convertcurrencytousdxamount").val());
//          INCTokenC.toCurrencyX($("#convertcurrencytousdxaddress").val(),$("#convertcurrencytousdxamount").val(),function(error, result){
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
