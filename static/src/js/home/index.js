const collect = document.getElementsByClassName('dept')
const urlParams = new URLSearchParams(location.search)
const querySyear = urlParams.get('syear')
const querySem = urlParams.get('sem')
const button = document.getElementById('button')
const year = document.getElementById('year')
const sem = document.getElementById('sem')

Array.from( document.getElementsByClassName('dept') )
.forEach( item => {
  const a = item.getElementsByTagName('a')
  a[0].href += `&syear=${querySyear}&sem=${querySem}`
} )

year.value = querySyear
sem.value = querySem

button.addEventListener( 'click', () => {
  Swal({
    title: '正在切換畫面',
    timer: 300,
    onOpen: () => {
      Swal.showLoading()
    }
  }).then(() => {
    location.href = `${location.protocol}//${location.host}?syear=${year.value}&sem=${sem.value}`
  })
} )