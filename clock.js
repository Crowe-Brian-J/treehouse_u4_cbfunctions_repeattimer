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

//call tickClock as page loads, let setInterval do it every second after because setInterval does not start until after delay
tickClock()

//use setInterval function to execute clock every second
//setInterval(callback, delay in milliseconds)
//setInterval(tickClock, 1000)

//test if you can use an anonymous arrow function in place of tickClock in setInterval
//instructor did not say remove tickClock function in instructions
//argues that doing so stops initial call above, so page loads with "insert clock here" in place of time
//says can, but shouldn't
setInterval(() => (clockSection.textContent = getTime()), 1000)
//I agree, it seems stupid to write a clear function above then remove it to use an anonymous function.
//I would argue however, that the problem isn't removing the original function, it's attempting use an anonymous function to see if we can
