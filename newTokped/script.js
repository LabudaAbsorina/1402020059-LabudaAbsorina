
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
    var harga = parseInt($('#nominal').val());
    var tampung = 0;
    var nomor = $('#notlp').val();
    
    if (harga >= 10000) {
      tampung = harga + 2000;
    } else {
      tampung = harga + 3000;
    }
    var fungsi = confirm("Pembelian pulsa sebesar " + harga + " Ke nomor " + $('#notlp').val());

    if(fungsi){
      alert("total harga pulsa rp. " + tampung + " ke nomor " + $('#notlp').val() + " sedang diproses, thank you")
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
        var uang2 = parseInt($('#nominal2').val());
        var tampung2 = 0;
        var nomor2 = $('#notlp2').val();
        
        var fungsi2 = confirm("Pembelian paket data sebesar " + uang2 + " Ke nomor " + $('#notlp2').val());
        if(fungsi2){
          alert("total harga paket data rp. " + uang2 + " ke nomor " + $('#notlp2').val() + " sedang diproses, thank you")
        } else{
          close();
        }
     });
      $('#nominal2').hide();
      $('#notlp2').hide();
});
function fungsi(){
confirm("Pembelian pulsa sebesar " + tampung + "ke nomor " + nomor);
}

function functionPaket() {
  $('#buttonGreen').hide();
  $('#notlp').hide();
  $('#nominal').hide();
  $('#nominal2').show();
  $('#notlp2').show();
  $('#buttonGrey').show();
}

function fungsi2(){
confirm("Pembelian paket data sebesar " + uang2 + "ke nomor " + nomor2);
}