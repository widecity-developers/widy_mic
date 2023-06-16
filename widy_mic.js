
        if ("webkitSpeechRecognition" in window) {
            // let widy_area = document.querySelectorAll(`.widy_area`)
            // element.innerHTML = `<div class="widy_text_area"  style="border: 1px solid black;padding: 10px;" contenteditable><img src="https://cdn-icons-png.flaticon.com/128/7175/7175253.png" style="position: absolute;width: 20px;cursor:pointer;" class="widy_mic"></div>`
            let widy_mic = document.querySelectorAll('.widy_mic')
            widy_mic.forEach(function(element){ 
            // let widy_text_area = element.querySelector('.widy_text_area')
            element.addEventListener('mouseup', function() {
            var activeElement = document.activeElement;
            // var inputId = activeElement.className;
            console.log(activeElement.className);
            // activeElement.value = 'hello from widy_city'
            
            let speechRecognition = null
            if(!speechRecognition){
                speechRecognition = new webkitSpeechRecognition();  
            }
            let final_transcript = "";
            speechRecognition.continuous = true;
            speechRecognition.interimResults = true;
            speechRecognition.onresult = (event) => {
                let interim_transcript = "";
                document.addEventListener('mouseup',()=>{speechRecognition.stop();})
                for (let i = event.resultIndex; i < event.results.length; ++i) {
                if (event.results[i].isFinal) {
                    final_transcript += event.results[i][0].transcript;
                } else {
                    interim_transcript += event.results[i][0].transcript;
                }
                }
                // document.querySelector("#final").innerHTML = final_transcript;
                activeElement.value = final_transcript;
            }
            console.log('activating mic')
            speechRecognition.start();
            })
        })}
         else {
        console.log("Speech Recognition Not Available");
        }
