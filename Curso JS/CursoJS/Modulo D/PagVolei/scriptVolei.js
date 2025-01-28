function verificar () {
    var data = new Date()
    var ano = data.getFullYear()
    var fAno = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    var fnome = document.getElementById('txtnome')   
    var fpos = document.getElementsByName('radpos')
    var nome = String(fnome.value)
    var posicao = ''
    if(fAno.value.  length == 0 || fAno.value > ano){
        window.alert(`[ERRO]Verifique os dados e tente novamente`)
    }else{
        if(fpos[0].checked){
            var posicao = 'Levantador'
        }else if(fpos[1].checked){
            var posicao = 'Ponteiro'
        }else{
            var posicao = 'Líbero'
        }
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fAno.value)
        var genero = ''
        if(fsex[0].checked){
            genero = 'Homem'
        }else if (fsex[1].checked){
            genero = 'Mulher'
        }
        res.innerHTML =`Detectamos: ${genero} com ${idade} anos <br> 
        <strong>${nome}</strong> você joga como <strong>${posicao}</strong>`
        
    }
}
