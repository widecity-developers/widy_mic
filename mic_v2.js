 if ("webkitSpeechRecognition" in window) {
            speechRecognition = new webkitSpeechRecognition();  
            let mic_status = false

            let widy_mic = document.querySelectorAll('.widy_mic')
            widy_mic.forEach(function(element){ 
            element.addEventListener('mouseup', function() {
                var activeElement = document.activeElement;
                // adding mic icon
                console.log('Adding widy_icon')
                icon = document.createElement('img')
                icon.src = "https://cdn-icons-png.flaticon.com/128/7175/7175253.png"
                icon.style.width = '20px'
                icon.style.position = 'fixed'
                icon.style.cursor = 'pointer'
                icon.className = 'widy_mic_icon'
                activeElement.insertAdjacentHTML("afterend", icon.outerHTML);

                // getting the mic from dom
                widy_mic_icon = document.querySelector('.widy_mic_icon')
                // listing the mic click event
                widy_mic_icon.addEventListener('mouseup',()=>{  
                    console.log('mic sensed a click') 
                    if (mic_status == false){
                            mic_status = true;         
                            let final_transcript = activeElement.value+' ';
                            speechRecognition.continuous = true;
                            speechRecognition.interimResults = true;
                            speechRecognition.onresult = (event) => {
                            let interim_transcript = '';
                            for (let i = event.resultIndex; i < event.results.length; ++i) {
                            if (event.results[i].isFinal) {
                            final_transcript += event.results[i][0].transcript;
                            } else {
                            interim_transcript += event.results[i][0].transcript;
                            }
                            activeElement.value = final_transcript; }          
                            }
                            speechRecognition.start();
                            console.log('listening...')
                            widy_mic_icon.src = "https://th.bing.com/th/id/R.e7f1336bc8acb0994878e811aad6cf91?rik=yp1ewg64euvIaA&riu=http%3a%2f%2fclipart-library.com%2fimg1%2f1036648.png&ehk=FBwKLIiOscPaQsiNDjAfqBQ7c1IPxDkoE6KflJiPu%2bg%3d&risl=&pid=ImgRaw&r=0"
                            widy_mic_icon.style.width = '10px'
                            widy_mic_icon.style.margin = '5px'
                            }
                    else {
                            mic_status= false;
                            speechRecognition.stop();
                            icons = document.querySelectorAll('.widy_mic_icon').forEach((element)=>{element.remove();})
                            console.log('Removing widy_icon');
                    }})
                    })
                })}
         else {
        console.log("Speech Recognition Not Available");
        }
