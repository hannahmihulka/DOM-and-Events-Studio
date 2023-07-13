window.addEventListener('load', function() {
    alert('Page is fully loaded');
    const takeoffButton = document.getElementById('takeoff');
    const landButton = document.getElementById('landing');
    const abortButton = document.getElementById('missionAbort');

    takeoffButton.addEventListener('click', function() {
        const takeOffConfirmation = confirm('Confirm that the shuttle is ready for takeoff');
        if (takeOffConfirmation) {
            document.getElementById("flightStatus").innerHTML = "Shuttle in flight";
            document.getElementById("shuttleBackground").style.backgroundColor = "blue";

            landButton.addEventListener('click', function() {
                alert('The shuttle is landing. Landing gear engaged.');
                document.getElementById("flightStatus").innerHTML = "The shuttle has landed.";
                document.getElementById("shuttleBackground").style.backgroundColor = "green";
                document.getElementById("shuttleHeight").innerHTML = "0 miles";

                abortButton.addEventListener('click', function (){
                    abortMissionConfirmation = confirm('Confirm that you want to abort the mission.');
                    if (abortMissionConfirmation) {
                        document.getElementById("flightStatus").innerHTML = "Mission aborted.";
                        document.getElementById("shuttleBackground").style.innerHTML = "green";
                        document.getElementById("shuttleHeight").innerHTML = "0 miles";
                    }
                })

            });
        }
    });
});

