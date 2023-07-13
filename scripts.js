window.addEventListener('load', function (){
    const takeOffButton = document.getElementById('takeoff');
    const landButton = document.getElementById('land');
    const missionButton = document.getElementById('abort mission');
    const upButton = document.getElementById('up');
    const downButton = document.getElementById('down');
    const rightButton = document.getElementById('right');
    const flightStatusParagraph = document.getElementById('flightStatus');
    const fuelLevelsParagraph = document.querySelector('.center-block:nth-child(1) > p');
    const astronautChatParagraph = document.querySelector('.center-block:nth-child(2) > p');
    const spaceShuttleHeightParagraph = document.getElementById('spaceShuttleHeight'); 

    takeOffButton.addEventListener('click', function (){
        const readyForTakeoff = window.confirm("Confirm that the shuttle is ready for takeoff.");

        if (readyForTakeoff) {
            flightStatusParagraph.innerText = "Shuttle in flight";

            shuttleBackground.style.backgroundColor = "blue";

            const currentHeight = parseInt(spaceShuttleHeightParagraph.innerText);
            const newHeight = currentHeight + 10000;
            spaceShuttleHeightParagraph.innerText = newHeight;
        }
    });
    }); 