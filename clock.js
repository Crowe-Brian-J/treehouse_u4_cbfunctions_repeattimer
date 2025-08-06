const clockSection = document.getElementById('clock')

function getTime() {
  function pad(number) {
    if (number < 10) {
      return '0' + number
    } else {
      return number
    }
  }

  const now = new Date()

  const hh = pad(now.getHours())
  const mm = pad(now.getMinutes())
  const ss = pad(now.getSeconds())

  return `${hh}:${mm}:${ss}`
}

function tickClock() {
  clockSection.textContent = getTime()
}

//call tickClock as page loads, let setInterval do it every second after
tickClock()

//use setInterval function to execute clock every second
//setInterval(callback, delay in milliseconds)
//setInterval(tickClock, 1000)

//test if you can use an anonymous arrow function in place of tickClock in setInterval
setInterval(() => (clockSection.textContent = getTime()), 1000)
