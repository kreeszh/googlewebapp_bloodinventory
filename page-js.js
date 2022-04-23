<script>

document.addEventListener('DOMContentLoaded', function() {

  document.getElementById("submit").addEventListener("click",submitInventory);

});

function submitInventory(){

  var toValidate = {
    ON: "Record O Neg RBCs",
    BN: "Record B Neg RBCs",
    AN: "Record A Neg RBCs",
    ABN: "Record AB Neg RBCs",
    OP: "Record O Pos RBCs",
    AP: "Record A Pos RBCs",
    BP: "Record B Pos RBCs",
    ABP: "Record AB Pos RBCs"
  };
    
  var idKeys = Object.keys(toValidate);
  var allValid = true;

  idKeys.forEach(function (id){ 
    var isValid = checkIfValid(id,toValidate[id]);
      if(!isValid){
        allValid = false;
      }
  });

  if(allValid){
    addRecord();
  }

}

function checkIfValid(elementID,message){

  var isValid = document.getElementById(elementID).checkValidity();

  if(!isValid) {
    M.toast({html: message })
    return false
  }
  return true
}

    function addRecord(){

      var bloodProducts = {};

      bloodProducts.oneg = document.getElementById("ON").value;
      bloodProducts.bneg = document.getElementById("BN").value;
      bloodProducts.aneg = document.getElementById("AN").value;
      bloodProducts.abneg = document.getElementById("ABN").value;

      bloodProducts.opos = document.getElementById("OP").value;
      bloodProducts.apos = document.getElementById("AP").value;
      bloodProducts.bpos = document.getElementById("BP").value;
      bloodProducts.abpos = document.getElementById("ABP").value;

      bloodProducts.oplasma = document.getElementById("OPlasma").value;
      bloodProducts.aplasma = document.getElementById("APlasma").value;
      bloodProducts.bplasma = document.getElementById("BPlasma").value;
      bloodProducts.abplasma = document.getElementById("ABPlasma").value;

      bloodProducts.cryo = document.getElementById("Cryo").value;
      bloodProducts.poolcryo = document.getElementById("PoolCryo").value;
      bloodProducts.sdp = document.getElementById("SDP").value;      
      
      google.script.run.userClick(bloodProducts);

      document.getElementById("ON").value = "";
      document.getElementById("BN").value = "";
      document.getElementById("AN").value = "";
      document.getElementById("ABN").value = "";

      document.getElementById("OP").value = "";
      document.getElementById("AP").value = "";
      document.getElementById("BP").value = "";
      document.getElementById("ABP").value = "";

      document.getElementById("OPlasma").value = "";
      document.getElementById("APlasma").value = "";
      document.getElementById("BPlasma").value = "";
      document.getElementById("ABPlasma").value = "";      

      document.getElementById("Cryo").value = "";
      document.getElementById("PoolCryo").value = "";
      document.getElementById("SDP").value = "";

      M.updateTextFields();

    }

</script>