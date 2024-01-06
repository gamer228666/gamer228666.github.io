var script = document.createElement('script'); script.src = '//cdn.jsdelivr.net/npm/eruda'; document.body.appendChild(script); script.onload = function() { eruda.init() }

var clickAmount = 0
var clickPower = 1
var passivePerSecond = 0

var preenakaAmount = 0
var preenakaPower = 1
var preenakaCost = 10
var preenakaUpgradeCost = 100

function updateVariables() {
  document.getElementById('clickAmount').innerHTML = 'rozsas: ' + clickAmount
  document.getElementById('passivePerSecondAmount').innerHTML = 'rozsas per second: ' + passivePerSecond
  document.getElementById('preeAmount').innerHTML = 'preenakas: ' + preenakaAmount + ", power: " + preenakaPower
  document.getElementById('buyPreenakas').innerHTML = 'preenaka - ' + preenakaCost + ' rozsas'
  document.getElementById('upgradePreenakas').innerHTML = 'upgrade preenaka - ' + preenakaUpgradeCost + ' rozsas'
}

function onAlexClicked() {
  clickAmount += clickPower
  updateVariables()
}

var passiveLoop = window.setInterval(givePassive, 1000);
function givePassive() {
  passivePerSecond = preenakaAmount * preenakaPower
  clickAmount += passivePerSecond
  updateVariables()
}

function buyPreenaka() {
  if (clickAmount >= preenakaCost) {
    clickAmount -= preenakaCost
    preenakaCost = Math.round(preenakaCost * 1.15)
    preenakaAmount += 1
    updateVariables()
  }
}

function upgradePreenaka() {
  if (clickAmount >= preenakaUpgradeCost) {
    clickAmount -= preenakaUpgradeCost
    preenakaUpgradeCost *= 5
    preenakaPower += 1
    passivePerSecond = preenakaAmount * preenakaPower
    updateVariables()
  }
}
