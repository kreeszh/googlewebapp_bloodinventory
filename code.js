var ssID = '1KbYi7M05u3W3Lap6kb1pM-SZaKKHWb5X9u7Ss3OAyig'

function doGet(){

return HtmlService.createTemplateFromFile("page").evaluate();

}

function include(filename) {

  return HtmlService.createHtmlOutputFromFile(filename).getContent();

}

function userClick(bloodProducts) {

  var ss = SpreadsheetApp.openById(ssID);
  var ws = ss.getSheetByName("data");

  ws.appendRow([new Date(),bloodProducts.oneg, bloodProducts.bneg, bloodProducts.aneg, bloodProducts.abneg, bloodProducts.opos, bloodProducts.apos, bloodProducts.bpos, bloodProducts.abpos, bloodProducts.oplasma, bloodProducts.aplasma, bloodProducts.bplasma, bloodProducts.abplasma, bloodProducts.cryo, bloodProducts.poolcryo, bloodProducts.sdp]);

}