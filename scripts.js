const convertButton = document.querySelector(".convert-Button")
const moedaconverter = document.querySelector(".moedaconverter")
const moedaconvertida = document.querySelector(".moedaconvertida")

convertButton.addEventListener("click", convertervalor)
moedaconverter.addEventListener("change", alteracaomoedaconverter)
moedaconvertida.addEventListener("change", alteracaomoedaconvertida)

function convertervalor() {
    const valormoedaconverter = document.querySelector(".valormoedaconverter")
    const valormoedaconvertida = document.querySelector(".valormoedaconvertida")
    const valormoedadigitada = document.querySelector(".valormoedadigitada").value
    
    // console.log(valormoedaconvertida.value)
    // console.log(valormoedadigitada.value)

    const realdolar = 4.96
    const realeuro = 5.44
    const reallibra = 6.29
    const realbitcoin = 256.453

    const dolareuro = 1.0808
    const dolarlibra = 1.262
    const dolarbitcoin = 51.493
    const dolarreal = 0.20

    const euroreal = 0.19
    const eurodolar = 0.92
    const eurolibra = 1.17
    const eurobitcoin = 47.398

    const librareal = 0.16
    const libraeuro = 0.85
    const libradolar = 0.79
    const librabitcoin = 40.469

    const bitcoinreal = 0.000003923670121969625
    const bitcoineuro = 0.000021
    const bitcoindolar = 0.000019
    const bitcoinlibra = 0.000025

        //CONVERSÃO BITCOIN PARA OUTRAS MOEDAS
        if (moedaconverter.value == "bitcoin" & moedaconvertida.value == "bitcoin") {
            valormoedaconvertida.innerHTML = new Intl.NumberFormat("de-DE", {
                style: "currency",
                currency: "BTC"
            }).format(valormoedadigitada)
            valormoedaconverter.innerHTML = new Intl.NumberFormat("de-DE", {
                style: "currency",
                currency: "BTC"
            }).format(valormoedadigitada)
        }
        if (moedaconverter.value == "bitcoin" & moedaconvertida.value == "dolar") {
            valormoedaconvertida.innerHTML = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD"
            }).format(valormoedadigitada / bitcoindolar)
            valormoedaconverter.innerHTML = new Intl.NumberFormat("de-DE", {
                style: "currency",
                currency: "BTC"
            }).format(valormoedadigitada)
        }
        if (moedaconverter.value == "bitcoin" & moedaconvertida.value == "euro") {
            valormoedaconvertida.innerHTML = new Intl.NumberFormat("de-DE", {
                style: "currency",
                currency: "EUR"
            }).format(valormoedadigitada / bitcoineuro)
            valormoedaconverter.innerHTML = new Intl.NumberFormat("de-DE", {
                style: "currency",
                currency: "BTC"
            }).format(valormoedadigitada)
        }
        if (moedaconverter.value == "bitcoin" & moedaconvertida.value == "libra") {
            valormoedaconvertida.innerHTML = new Intl.NumberFormat("en-BR", {
                style: "currency",
                currency: "GBP"
            }).format(valormoedadigitada / bitcoinlibra)
            valormoedaconverter.innerHTML = new Intl.NumberFormat("de-DE", {
                style: "currency",
                currency: "BTC"
            }).format(valormoedadigitada)
        }
        if (moedaconverter.value == "bitcoin" & moedaconvertida.value == "real") {
            valormoedaconvertida.innerHTML = new Intl.NumberFormat("pr-BR", {
                style: "currency",
                currency: "BRL"
            }).format(valormoedadigitada / bitcoinreal)
            valormoedaconverter.innerHTML = new Intl.NumberFormat("de-DE", {
                style: "currency",
                currency: "BTC"
            }).format(valormoedadigitada)
        }
            // CONVERSAO LIBRA PARA OUTRAS MOEDAS
        if (moedaconverter.value == "libra" & moedaconvertida.value == "libra") {
            valormoedaconvertida.innerHTML = new Intl.NumberFormat("en-BR", {
                style: "currency",
                currency: "GBP"
            }).format(valormoedadigitada)
            valormoedaconverter.innerHTML = new Intl.NumberFormat("en-BR", {
                style: "currency",
                currency: "GBP"
            }).format(valormoedadigitada)
        }
        if (moedaconverter.value == "libra" & moedaconvertida.value == "real") {
            valormoedaconvertida.innerHTML = new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL"
            }).format(valormoedadigitada / librareal)
            valormoedaconverter.innerHTML = new Intl.NumberFormat("en-BR", {
                style: "currency",
                currency: "GBP"
            }).format(valormoedadigitada)
        }
        if (moedaconverter.value == "libra" & moedaconvertida.value == "dolar") {
            valormoedaconvertida.innerHTML = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD"
            }).format(valormoedadigitada / libradolar)
            valormoedaconverter.innerHTML = new Intl.NumberFormat("en-BR", {
                style: "currency",
                currency: "GBP"
            }).format(valormoedadigitada)
        }
        if (moedaconverter.value == "libra" & moedaconvertida.value == "euro") {
            valormoedaconvertida.innerHTML = new Intl.NumberFormat("de-DE", {
                style: "currency",
                currency: "EUR"
            }).format(valormoedadigitada / libraeuro)
            valormoedaconverter.innerHTML = new Intl.NumberFormat("en-BR", {
                style: "currency",
                currency: "GBP"
            }).format(valormoedadigitada)
        }
        if (moedaconverter.value == "libra" & moedaconvertida.value == "bitcoin") {
            valormoedaconvertida.innerHTML = new Intl.NumberFormat("de-DE", {
                style: "currency",
                currency: "BTC"
            }).format(valormoedadigitada / librabitcoin)
            valormoedaconverter.innerHTML = new Intl.NumberFormat("en-BR", {
                style: "currency",
                currency: "GBP"
            }).format(valormoedadigitada)
        }

        // CONVERSÃO EURO PARA OUTRAS MOEDAS
    if (moedaconverter.value == "euro" & moedaconvertida.value == "euro") {
            valormoedaconvertida.innerHTML = new Intl.NumberFormat("de-DE", {
                style: "currency",
                currency: "EUR"
            }).format(valormoedadigitada)
            valormoedaconverter.innerHTML = new Intl.NumberFormat("de-DE", {
                style: "currency",
                currency: "EUR"
            }).format(valormoedadigitada)
        }
        if (moedaconverter.value == "euro" & moedaconvertida.value == "real") {
            valormoedaconvertida.innerHTML = new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL"
            }).format(valormoedadigitada / euroreal)
            valormoedaconverter.innerHTML = new Intl.NumberFormat("de-DE", {
                style: "currency",
                currency: "EUR"
            }).format(valormoedadigitada)
        }
        if (moedaconverter.value == "euro" & moedaconvertida.value == "dolar") {
            valormoedaconvertida.innerHTML = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD"
            }).format(valormoedadigitada / eurodolar)
            valormoedaconverter.innerHTML = new Intl.NumberFormat("de-DE", {
                style: "currency",
                currency: "EUR"
            }).format(valormoedadigitada)
        }
        if (moedaconverter.value == "euro" & moedaconvertida.value == "libra") {
            valormoedaconvertida.innerHTML = new Intl.NumberFormat("en-BR", {
                style: "currency",
                currency: "GBP"
            }).format(valormoedadigitada / eurolibra)
            valormoedaconverter.innerHTML = new Intl.NumberFormat("de-DE", {
                style: "currency",
                currency: "EUR"
            }).format(valormoedadigitada)
        }
        if (moedaconverter.value == "euro" & moedaconvertida.value == "bitcoin") {
            valormoedaconvertida.innerHTML = new Intl.NumberFormat("de-DE", {
                style: "currency",
                currency: "BTC"
            }).format(valormoedadigitada / eurobitcoin)
            valormoedaconverter.innerHTML = new Intl.NumberFormat("de-DE", {
                style: "currency",
                currency: "EUR"
            }).format(valormoedadigitada)
        }
    // CONVERSÃO REAL PARA OUTRAS MOEDAS
    if (moedaconverter.value == "real" & moedaconvertida.value == "real") {
        valormoedaconvertida.innerHTML = new Intl.NumberFormat("pt-br", {
            style: "currency",
            currency: "BRL"
        }).format(valormoedadigitada)
        valormoedaconverter.innerHTML = new Intl.NumberFormat("pt-br", {
            style: "currency",
            currency: "BRL"
       }).format(valormoedadigitada)
    } 
    if (moedaconverter.value == "real" & moedaconvertida.value == "dolar") {
        valormoedaconvertida.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(valormoedadigitada / realdolar)
    valormoedaconverter.innerHTML = new Intl.NumberFormat("pt-br", {
            style: "currency",
            currency: "BRL"
       }).format(valormoedadigitada)
    }
    if (moedaconverter.value == "real" & moedaconvertida.value == "euro") {
        valormoedaconvertida.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(valormoedadigitada / realeuro)
        valormoedaconverter.innerHTML = new Intl.NumberFormat("pt-br", {
            style: "currency",
            currency: "BRL"
       }).format(valormoedadigitada)
    } 
    if (moedaconverter.value == "real" & moedaconvertida.value == "libra") {
        valormoedaconvertida.innerHTML = new Intl.NumberFormat("en-BR", {
            style: "currency",
            currency: "GBP"
        }).format(valormoedadigitada / reallibra)
        valormoedaconverter.innerHTML = new Intl.NumberFormat("pt-br", {
            style: "currency",
            currency: "BRL"
       }).format(valormoedadigitada)
    }       
    if (moedaconverter.value == "real" & moedaconvertida.value == "bitcoin") {
    valormoedaconvertida.innerHTML = new Intl.NumberFormat("de-DE", {
        style: "currency",
        currency: "BTC"
    }).format(valormoedadigitada / realbitcoin)
    valormoedaconverter.innerHTML = new Intl.NumberFormat("pt-br", {
        style: "currency",
        currency: "BRL"
   }).format(valormoedadigitada)    
   } 

// CONVERSÃO DOLAR PARA OUTRAS MOEDAS

if (moedaconverter.value == "dolar" & moedaconvertida.value == "dolar") {
    valormoedaconvertida.innerHTML = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD"
    }).format(valormoedadigitada)
    valormoedaconverter.innerHTML = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD"
   }).format(valormoedadigitada)
} 
if (moedaconverter.value == "dolar" & moedaconvertida.value == "euro") {
    valormoedaconvertida.innerHTML = new Intl.NumberFormat("de-DE", {
        style: "currency",
        currency: "EUR"
    }).format(valormoedadigitada / dolareuro)
    valormoedaconverter.innerHTML = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD"
   }).format(valormoedadigitada)
} 
if (moedaconverter.value == "dolar" & moedaconvertida.value == "libra") {
    valormoedaconvertida.innerHTML = new Intl.NumberFormat("en-BR", {
        style: "currency",
        currency: "GBP"
    }).format(valormoedadigitada / dolarlibra)
    valormoedaconverter.innerHTML = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD"
   }).format(valormoedadigitada)
} 
if (moedaconverter.value == "dolar" & moedaconvertida.value == "bitcoin") {
    valormoedaconvertida.innerHTML = new Intl.NumberFormat("de-DE", {
        style: "currency",
        currency: "BTC"
    }).format(valormoedadigitada / dolarbitcoin)
    valormoedaconverter.innerHTML = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD"
   }).format(valormoedadigitada)
} 
if (moedaconverter.value == "dolar" & moedaconvertida.value == "real") {
    valormoedaconvertida.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(valormoedadigitada / dolarreal)
    valormoedaconverter.innerHTML = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD"
   }).format(valormoedadigitada)
} 

}
function alteracaomoedaconverter() {
    const moedaImgConverter = document.querySelector(".moeda-img-converter")
    const moedaNomeConverter = document.querySelector(".moeda-nome-converter")

    if (moedaconverter.value == "real") {
        moedaNomeConverter.innerHTML = "Real Brasileiro"
        moedaImgConverter.src = "./assets/Real.png"
    }
    if (moedaconverter.value == "dolar") {
        moedaNomeConverter.innerHTML = "Dolar Americano"
        moedaImgConverter.src = "./assets/Dolar.png"
    }
    if (moedaconverter.value == "euro") {
        moedaNomeConverter.innerHTML = "Euro"
        moedaImgConverter.src = "./assets/Euro.png"
    }
    if (moedaconverter.value == "libra") {
        moedaNomeConverter.innerHTML = "Libra"
        moedaImgConverter.src = "./assets/Libra.png"
    }
    if (moedaconverter.value == "bitcoin") {
        moedaNomeConverter.innerHTML = "Bitcoin"
        moedaImgConverter.src = "./assets/bitcoin.png"
    }
    convertervalor()
}
function alteracaomoedaconvertida() {
    const moedaImgConvertida = document.querySelector(".moeda-img-convertida")
    const moedaNomeConvertida = document.querySelector(".moeda-nome-convertida")

    if (moedaconvertida.value == "real") {
        moedaNomeConvertida.innerHTML = "Real Brasileiro"
        moedaImgConvertida.src = "./assets/Real.png"
    }   

    if (moedaconvertida.value == "dolar") {
        moedaNomeConvertida.innerHTML = "Dolar Americano"
        moedaImgConvertida.src = "./assets/Dolar.png"
    }

    if (moedaconvertida.value == "euro") {
        moedaNomeConvertida.innerHTML = "Euro"
        moedaImgConvertida.src = "./assets/Euro.png"
    }

    if (moedaconvertida.value == "libra") {
        moedaNomeConvertida.innerHTML = "Libra"
        moedaImgConvertida.src = "./assets/Libra.png"
    }

    if (moedaconvertida.value == "bitcoin") {
        moedaNomeConvertida.innerHTML = "Bitcoin"
        moedaImgConvertida.src = "./assets/bitcoin.png"
    }
    convertervalor()
}



