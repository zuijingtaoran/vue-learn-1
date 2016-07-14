



/*******************************/
// jiangong yu
//2015-4-23 13:59
//
//
//



/*******************************/
function ma() {
    var tsfh = "\!\@\#\$\%\^\&\*\(\)\-\_\+\=\{\}\[\]\'\<\>\?\:\;\"\~\,\.\/";
    var tsfh=""
   var qianzhui = ".";
   var houzhui = "90cba";


 //  this.bm = function (str) {
 //      var ass = str; var bb = "";
 //    try {

 //      for (i = 0; i < tsfh.length; i++) {

 //          //    str = str.replace(/sz3[i]/g, sz4[i]);

 //          // ass=ass.split(sz3[i]).join(sz4[i]);
 //          var th = qianzhui + i + houzhui; //alert(th);
 //          var thq = tsfh.substring(i, i + 1);// alert(thq);
 //          bb = ass.replace(new RegExp(thq, 'g'), th);
 //      }


 //             } catch (e) {
 //                 // alert(e);
 //             }

 //      return bb;
 //  }
 //this.jm = function (str) {
 //    var ass = str;
 //    try {
 //        ass = ass.replace(/_b001b_/g, '&');
 //         ass = ass.replace(/_b002b_/g, "\\");
 //    for (i = 0; i < sz3.length; i++) {

 //         // str = str.replace(/sz4[i]/g, sz3[i]);
 //     // str= str.split(sz4[i]).join(sz3[i]);
 //        ass = ass.replace(new RegExp(sz4[i], 'g'), sz3[i]);
 //    }
   
 //} catch (e) { }
 //       return ass;
 //   }

   this.bm = function (str) {
    //   return str;
       //   var ss = "";
       //  33-47 58-64 91-96 123-126
       try {
           var fh = ""; var dg = ""; var asc = 0;
           for (i = 0; i < str.length; i++) {
               dg = str.substring(i, i + 1);
               try {
                   asc = parseInt(str.charCodeAt(i));
                   if ((asc < 48) || (asc > 90 && asc < 97) || (asc > 122 && asc < 127) || (asc > 57 && asc < 65)) {
                       var s000 = asc.toString();
                       if (asc < 100) { s000 = "0" + s000; }
                       fh += qianzhui + s000;
                   }
                   else {
                       fh += dg;
                   }
               } catch (e) {
                   fh += dg;
               }

           }
           return encodeURI(encodeURI(fh));
       } catch (e) { return str; }

       //var ascii = str.charCodeAt();
       //return ascii;

   }

    this.jm = function (str) {
    
        var fh = ""; var youb = "";
        str = decodeURI(decodeURI(str));
        var array = str.split(qianzhui);
        for (i = 0; i < array.length; i++) {
            if (i > 0) {
                try {
                    youb = array[i].substring(0, 3);
                    array[i] = array[i].replace(youb, String.fromCharCode(youb));
                } catch (e) { }
            }
            fh += array[i];
        }
        //for (i = 0; i < str.length; i++) {
        //    yb=fh.indexOf(qianzhui);
        //    if (yb > -1) {
        //        try {
        //            fh = fh.replace(fh.substring(yb, qianzhui.length + 3), String.fromCharCode(fh.substring(yb + qianzhui.length, qianzhui.length + 3)));

        //        } catch (e) { }
        //    }     

        //}
        return fh;

    }

}


