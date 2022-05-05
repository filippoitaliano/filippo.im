let workDuration=25,workTimes=3,breakDuration=5,currentTimerIntervalId=null,tomatoSessionTimes=null,analogTimerNeedle=null,analogTimerDegRotation=0,notificationSound=null,settingsDialogContent=null,settingsDialogClosedContent=null;async function startTomatoSession(){for(tomatoSessionTimes=workTimes;0!==tomatoSessionTimes;)--tomatoSessionTimes,await startTimer(workDuration),notificationSound.play(),0!==tomatoSessionTimes&&(await startTimer(breakDuration),notificationSound.play())}function abortTomatoSession(){clearInterval(currentTimerIntervalId),currentTimerIntervalId=null,resetAnalogTimerNeedle()}async function startTimer(n){return new Promise(e=>{let t=60*n;currentTimerIntervalId=setInterval(()=>{0===t?(clearInterval(currentTimerIntervalId),currentTimerIntervalId=null,resetAnalogTimerNeedle(),e()):(--t,rotateAnalogTimerNeedle())},1e3)})}function rotateAnalogTimerNeedle(e=null){analogTimerDegRotation=null!=e?0:(analogTimerDegRotation+6)%360,analogTimerNeedle.style.transform=`rotate(${analogTimerDegRotation}deg)`}function resetAnalogTimerNeedle(){rotateAnalogTimerNeedle(0)}function confirmSettingsForm(){settingsDialogContent.style.display="none",settingsDialogClosedContent.style.display="flex"}function showSettingsForm(){settingsDialogContent.style.display="block",settingsDialogClosedContent.style.display="none"}function bindSettingsToForm(){const e=document.getElementById("work-duration-input"),t=(e.value=workDuration,e.onchange=e=>{workDuration=e.target.value},document.getElementById("break-duration-input")),n=(t.value=breakDuration,t.onchange=e=>{breakDuration=e.target.value},document.getElementById("work-times-input"));n.value=workTimes,n.onchange=e=>{workTimes=e.target.value}}function getAnalogTimerNeedleRef(){analogTimerNeedle=document.getElementById("analog-timer-needle")}function getSettingsDialogSectionsRef(){settingsDialogContent=document.getElementById("settings-dialog-content"),settingsDialogClosedContent=document.getElementById("settings-dialog-closed-content")}function loadNotificationSound(){(notificationSound=new Audio("./ding.mp3")).volume=.5}function appInit(){bindSettingsToForm(),getAnalogTimerNeedleRef(),getSettingsDialogSectionsRef(),loadNotificationSound()}document.addEventListener("DOMContentLoaded",appInit,!1);