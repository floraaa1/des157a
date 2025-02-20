(function(){
    'use strict';
    console.log('readingjs');
    
    const startBtn = document.querySelector('#start');
    const notReady = document.querySelector('#notReady');
    const introHeading = document.querySelector('header h1');
    const intro = document.querySelector('#intro');
    const form1 = document.querySelector('#form1');
    const form2 = document.querySelector('#form2');
    const form3 = document.querySelector('#form3');

    const next1 = document.querySelector('#next1');
    const next2 = document.querySelector('#next2');
    const submit = document.querySelector('#submit');
    const overlay = document.querySelector('#overlay');

    const back1 = document.querySelector('#back1');
    const back2 = document.querySelector('#back2');
    const back3 = document.querySelector('#back3');
    const back4 = document.querySelector('#back4');

    form1.style.display = 'none';
    form2.style.display = 'none';
    form3.style.display = 'none';
    overlay.style.display = 'none';

    let myText;

    startBtn.addEventListener('click', function(event) {
        event.preventDefault();
        // background image setting
        document.body.style.background = 'url(images/b1-1.gif)';
        document.body.style.backgroundSize = 'cover';
        document.body.style.backgroundRepeat = 'no-repeat';
        document.body.style.backgroundPosition = 'center';
        document.body.style.width = '100%';
        document.body.style.maxWidth = '1200px';
        document.body.style.display = 'flex';
        document.body.style.flexDirection = 'column';
        document.body.style.justifyContent = 'center';
        document.body.style.alignItems = 'center';
        document.documentElement.style.height = '100%';

        //hidden the button and show the form
        intro.style.display = 'none';
        introHeading.style.display = 'none';
        form1.style.display = 'block';
    });

    notReady.addEventListener('click', function(event) {
        event.preventDefault();
        alert('You Honor, I respectfully request additional time as I am not fully prepared to proceed at this moment.');
    });

    back1.addEventListener('click', function(event) 
    {
        event.preventDefault();
        intro.style.display = 'block';
        document.body.style.background = 'url(images/b1.gif)';
        document.body.style.backgroundSize = 'cover';
        document.body.style.backgroundRepeat = 'no-repeat';
        document.body.style.backgroundPosition = 'center';
        document.body.style.width = '100%';
        document.body.style.maxWidth = '1200px';
        document.body.style.display = 'flex';
        document.body.style.flexDirection = 'column';
        document.body.style.justifyContent = 'center';
        document.body.style.alignItems = 'center';
        document.documentElement.style.height = '100%';
        form1.style.display = 'none';
        
    });

    next1.addEventListener('click', function () {
        let name = document.querySelector('#fname').value;
        let age = document.querySelector('#age').value;
        let date = document.querySelector('#date').value;
        let errorMessage = document.querySelector('#errorMessage');

        errorMessage.style.display = 'block';
        errorMessage.style.color = 'red';
        errorMessage.style.fontSize = '1.3rem';
        errorMessage.style.textAlign = 'center';
        errorMessage.style.paddingBottom = '15px';

        if(!errorMessage){
            console.log('error message not found');
            return;
        }

        if(name == ''){
            myText = 'Please provide a name';
            document.querySelector('#fname').focus();
            errorMessage.innerHTML = myText;
            
        }
        else if(age == ''){
            myText = 'Please provide an age';
            document.querySelector('#age').focus();
            errorMessage.innerHTML = myText;
        }
        else if(date == ''){
            myText = 'Please provide a date';
            document.querySelector('#date').focus();
            errorMessage.innerHTML = myText;
        }
        else{
            errorMessage.textContent = '';
            form1.style.display = 'none';
            form2.style.display = 'block';
        }
    });

    back2.addEventListener('click', function() 
    {
        form1.style.display = 'block';
        form2.style.display = 'none';
        
    });

    next2.addEventListener('click', function () {
        let adjective = document.querySelector('#adjective').value;
        let noun = document.querySelector('#noun').value;
        let verb = document.querySelector('#verb').value;
        let errorMessage2 = document.querySelector('#errorMessage2');

        errorMessage2.style.display = 'block';
        errorMessage2.style.color = 'red';
        errorMessage2.style.fontSize = '1.3rem';
        errorMessage2.style.textAlign = 'center';
        errorMessage2.style.paddingBottom = '15px';

        if(!errorMessage2){
            console.log('error message not found');
            return;
        }

        if(adjective == ''){
            myText = 'Please provide an adjective';
            document.querySelector('#adjective').focus();
            errorMessage2.innerHTML = myText;
            
        }
        else if(noun == ''){
            myText = 'Please provide a noun';
            document.querySelector('#noun').focus();
            errorMessage2.innerHTML = myText;
        }
        else if(verb == ''){
            myText = 'Please provide a verb';
            document.querySelector('#verb').focus();
            errorMessage2.innerHTML = myText;
        }
        else{
            errorMessage2.textContent = '';
            form2.style.display = 'none';
            form3.style.display = 'block';
        }
        
    });

    back3.addEventListener('click', function() 
    {
        form2.style.display = 'block';
        form3.style.display = 'none'; 
    });

    submit.addEventListener('click', function() {
        let place = document.querySelector('#place').value;
        let time = document.querySelector('#time').value;
        let errorMessage3 = document.querySelector('#errorMessage3');

        errorMessage3.style.display = 'block';
        errorMessage3.style.color = 'red';
        errorMessage3.style.fontSize = '1.3rem';
        errorMessage3.style.textAlign = 'center';
        errorMessage3.style.paddingBottom = '15px';

        if(!errorMessage3){
            console.log('error message not found');
            return;
        }

        if(place == ''){
            myText = 'Please provide a place';
            document.querySelector('#place').focus();
            errorMessage3.innerHTML = myText;
            errorMessage3.style.display = 'block';
        }
        else if(time == ''){
            myText = 'Please provide a time';
            document.querySelector('#time').focus();
            errorMessage3.innerHTML = myText;
        }
        else{
            //change background
            document.body.style.background = 'url(images/b2-1.jpg)';
            document.body.style.backgroundSize = 'cover';
            document.body.style.backgroundRepeat = 'no-repeat';
            document.body.style.backgroundPosition = 'center';
            document.body.style.width = '100%';
            document.body.style.maxWidth = '1200px';
            document.body.style.display = 'flex';
            document.body.style.flexDirection = 'column';
            document.body.style.justifyContent = 'center';
            document.body.style.alignItems = 'center';
            document.documentElement.style.height = '100%';

            errorMessage3.textContent = '';
            form3.style.display = 'none';
            overlay.style.display = 'block';

            let name = document.querySelector('#fname').value;
            let age = document.querySelector('#age').value;
            let date = document.querySelector('#date').value;
            let place = document.querySelector('#place').value;
            let time = document.querySelector('#time').value;
            let adjective = document.querySelector('#adjective').value;
            let verb = document.querySelector('#verb').value;
            let noun = document.querySelector('#noun').value;

            document.querySelector('#suspectName').innerHTML = `Suspect Name: <span class="red-text">${name}</span>`;
            document.querySelector('#suspectAge').innerHTML = `Age: <span class="red-text">${age}</span>`;
            document.querySelector('#incidentDate').innerHTML = `Date of incident: <span class="red-text">${date}</span>`;
            document.querySelector('#arrestLocation').innerHTML = `Location of Arrest: <span class="red-text">${place}</span>`;


            document.querySelector("#overlay").style.alignItems = "center"; 

            document.querySelector('#summary p'). innerHTML = `Full Case Summary: On <span class="red-text">${time}</span>, at <span class="red-text">${place}</span>, an individual identified as <span class="red-text">${name}</span>, aged <span class="red-text">${age}</span>, was arrested on allegations of <span class="red-text">${verb}</span> a <span class="red-text">${noun}</span>. Witnesses reported that the suspect exhibited a/an <span class="red-text">${adjective}</span> demeanor and was actively <span class="red-text">${verb}</span> when approached by law enforcement. The suspect claimed during interrogation, " It was not what it looked like; I was simply <span class="red-text">${verb}</span> because of <span class="red-text">${noun}.</span>"`;
        }
    });

        back4.addEventListener('click', function(event) 
        {
            event.preventDefault();
            overlay.style.display = 'none';
            intro.style.display = 'block';   
            form1.style.display = 'none';
            form2.style.display = 'none';
            form3.style.display = 'none';

            document.querySelector('#fname').value = '';
            document.querySelector('#age').value = '';
            document.querySelector('#date').value = '';
            document.querySelector('#place').value = '';
            document.querySelector('#time').value = '';
            document.querySelector('#adjective').value = '';
            document.querySelector('#verb').value = '';
            document.querySelector('#noun').value = '';

            intro.style.display = 'block';
            document.body.style.background = 'url(images/b1.gif)';
            
            // const img = document.querySelector('img');
            // img.src = 'images/b2-2.jpg';
            // img.alt = 'character image';
            // img.style.width= 'auto';
            // img.style.height = 'auto';
            // img.style.maxWidth = '50px';
            // img.style.maxHeight = '50px';
            // img.style.objectFit = 'cover';


            document.body.style.backgroundSize = 'cover';
            document.body.style.backgroundRepeat = 'no-repeat';
            document.body.style.backgroundPosition = 'center';
            document.body.style.width = '100%';
            document.body.style.maxWidth = '1200px';
            // document.body.style.display = 'flex';
            // document.body.style.flexDirection = 'column';
            // document.body.style.justifyContent = 'center';
            // document.body.style.alignItems = 'center';
            document.documentElement.style.height = '100%';
            form1.style.display = 'none';
        });


        document.addEventListener('keydown', function(event) {
            if (event.key === 'Enter') {
                event.preventDefault();
        
                let focusedElement = document.querySelector(':focus');
                if (!focusedElement) return;
        
                if (form1.querySelector('#' + focusedElement.getAttribute('id'))) {
                    next1.click();
                } 
                else if (form2.querySelector('#' + focusedElement.getAttribute('id'))) {
                    next2.click();
                } 
                else if (form3.querySelector('#' + focusedElement.getAttribute('id'))) {
                    submit.click();
                }
            }
        });

    }());