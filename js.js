const relogio = document.getElementById('relogio')
    const div_data= document.getElementById('div_data')
    const tempo = document.getElementById('tempo')
    const botoes = document.getElementById('botoes')
    const tela = document.getElementById('tela')
    const tudo = document.getElementById('tudo')
    

    let alarme= false
    let tocando_alarme= false
    const audio = new Audio('alarm_clock_old.mp3')
    audio.loop= -1
    botoes.addEventListener('click' , (evt)=>{
        console.log(evt.target.value)
        if(evt.target.value == 'confimar'){
            if(tempo.value == ''){
                tela.innerHTML= 'coloque um numero'
            }else{
            let hehe = Date.now() 
            let hora1dps= hehe + (tempo.value * 1000)
            let horap= new Date(hora1dps)
            let alar_hora= horap.getHours()
            let alar_mim= horap.getMinutes()
            let alar_segundos= horap.getSeconds()
            alar_hora= alar_hora<10? '0'+alar_hora: alar_hora
            alar_mim=  alar_mim<10? '0'+ alar_mim:  alar_mim
            alar_segundos=  alar_segundos<10? '0'+ alar_segundos:  alar_segundos
            const hora_alarme =  `${alar_hora} : ${alar_mim} : ${alar_segundos} `
            tela.innerHTML= `${hora_alarme}`
            alarme= true
            }
        }
        if(evt.target.value=='parar'){
           tela.innerHTML= ''
           alarme= false
           tocando_alarme= false
           tempo.value = ''
           tudo.classList.add('padrao')
           audio.pause()
            }
        })
        
const funk= ()=>{
    tudo.classList.add('alarme')
}
const funk2= ()=>{
    tudo.classList.remove('alarme')
}

const relo =()=>{
let data = new Date()
let hora = data.getHours()
hora=hora<10?'0'+hora:hora
let minuto = data.getMinutes()
minuto=minuto<10?'0'+minuto:minuto
let segundos = data.getSeconds()
segundos=segundos<10?'0'+segundos:segundos
let horacompleta =hora + ' : ' + minuto + ' : ' + segundos
relogio.innerHTML=horacompleta
if(alarme && !tocando_alarme){
    if(horacompleta >= tela.innerHTML){
        // tudo.classList.add('alarme')
        setInterval(funk, 500)
        setInterval(funk2, 1000)
        audio.play()
        tocando_alarme= true
    }
    }
}

const v_data= ()=>{
    let data = new Date()
    let dia= data.getDate()
    dia=dia<10?'0'+dia:dia
    let mes= data.getMonth()+1
    mes=mes<10?'0'+mes:mes
    let ano= data.getFullYear()
    const fulldata= `${dia}/${mes}/${ano}`
    div_data.innerHTML= fulldata
    
}

const intervalo1= setInterval(v_data,43200000)
v_data()
const intervalo =setInterval(relo,1000)
relo()


