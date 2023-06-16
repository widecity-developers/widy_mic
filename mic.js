 if ("webkitSpeechRecognition" in window) {
            speechRecognition = new webkitSpeechRecognition();  

            // let widy_area = document.querySelectorAll(`.widy_area`)
            // element.innerHTML = `<div class="widy_text_area"  style="border: 1px solid black;padding: 10px;" contenteditable><img src="https://cdn-icons-png.flaticon.com/128/7175/7175253.png" style="position: absolute;width: 20px;cursor:pointer;" class="widy_mic"></div>`
            let widy_mic = document.querySelectorAll('.widy_mic')
            widy_mic.forEach(function(element){ 

            element.addEventListener('mouseup', function() {
            var activeElement = document.activeElement;
            console.log('creating mic icon')
            icon = document.createElement('img')
            icon.src = "https://cdn-icons-png.flaticon.com/128/7175/7175253.png"
            icon.style.width = '20px'
            icon.style.position = 'fixed'
            icon.style.cursor = 'pointer'
            icon.className = 'widy_mic_icon'
            activeElement.insertAdjacentHTML("afterend", icon.outerHTML);

            widy_mic_icon = document.querySelector('.widy_mic_icon')
            console.log(widy_mic_icon.className);
            // activeElement.value = 'hello from widy_city'
            widy_mic_icon.addEventListener('mouseup',()=>{            
            let final_transcript = "";
            speechRecognition.continuous = true;
            speechRecognition.interimResults = true;

            speechRecognition.onresult = (event) => {
                let interim_transcript = "";

                for (let i = event.resultIndex; i < event.results.length; ++i) {
                    if (event.results[i].isFinal) {
                        final_transcript += event.results[i][0].transcript;
                    } else {
                        interim_transcript += event.results[i][0].transcript;
                    }
                    activeElement.value = final_transcript; }          }
            console.log('activating mic')
            speechRecognition.start();})
        document.addEventListener('mouseup',(event)=>{
                        console.log(event.target.tagName)
                        if (event.target.tagName == 'BODY'){
                            speechRecognition.stop();
                            widy_mic_icon.remove();
                            console.log('removing mic icon');
                        }
                    })})})}
         else {
        console.log("Speech Recognition Not Available");
        }
