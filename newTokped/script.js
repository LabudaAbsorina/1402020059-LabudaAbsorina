
$(document).ready(function() {
    $('#notlp').change(function() {
        if ($('#notlp').val() > 0) {
            $('#nominal').prop('disabled', false);
            
        }else{
          $('#nominal').prop('disabled', true);
            alert("Nomor telpon " + $('#notlp').val() + (" salah dari kriteria"))

        }
        console.log($('#notlp').val())
    });

    $('#nominal').change(function() {
        $('#buttonGrey').hide();
        $('#buttonGreen').show();
    });

    $('#buttonGreen').click(function() {
    var price = parseInt($('#nominal').val());
    var data1 = 0;
    var numb1 = $('#notlp').val();
    
    if (price >= 10000) {
      data1 = price + 2000;
    } else {
      data1 = price + 3000;
    }
    var cfm = confirm("Pembelian pulsa sebesar " + price + " Ke nomor " + $('#notlp').val());

    if(cfm){
      alert("total harga pulsa rp. " + data1 + " ke nomor " + $('#notlp').val() + " sedang diproses, thank you")
    } else{
      close();
    }
  });

    $('#notlp2').change(function() {
            if ($('#notlp2').val() > 0) {
                $('#nominal2').prop('disabled', false);
                
            }else{
              $('#nominal2').prop('disabled', true);
                alert("Nomor telpon " + $('#notlp2').val() + (" salah dari kriteria"))
  
            }
            console.log($('#notlp2').val())
        });

        $('#nominal2').change(function() {
            $('#buttonGrey').hide();
            $('#buttonGreen2').show();
        });

        $('#buttonGreen2').click(function() {
        var money = parseInt($('#nominal2').val());
        var data2 = 0;
        var numb2 = $('#notlp2').val();
        
        var fungsi2 = confirm("Pembelian paket data sebesar " + money + " Ke nomor " + $('#notlp2').val());
        if(fungsi2){
          alert("total harga paket data rp. " + money + " ke nomor " + $('#notlp2').val() + " sedang diproses, thank you")
        } else{
          close();
        }
     });
      $('#nominal2').hide();
      $('#notlp2').hide();
});
function funct1(){
confirm("Pembelian pulsa sebesar " + tampung + "ke nomor " + nomor);
}

function functPaketan() {
  $('#buttonGreen').hide();
  $('#notlp').hide();
  $('#nominal').hide();
  $('#nominal2').show();
  $('#notlp2').show();
  $('#buttonGrey').show();
}

function funct2(){
confirm("Pembelian paket data sebesar " + uang2 + "ke nomor " + nomor2);
}