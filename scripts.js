window.addEventListener("load", (event) => {
    console.log("page is fully loaded");
  });

takeoffButton.addEventListener('click', function() {
    if (window.confirm('Confirm that the shuttle is ready for takeoff.')) {
      flightStatus.innerHTML = 'Shuttle in flight';
      shuttleBackground.style.backgroundColor = 'blue';
      rocket.style.top = parseInt(rocket.style.top) - 10 + 'px';
    }
  });

  landButton.addEventListener('click', function() {
    window.alert('The shuttle is landing. Landing gear engaged.');
    flightStatus.innerHTML = 'The shuttle has landed.';
    shuttleBackground.style.backgroundColor = 'green';
    rocket.style.top = '200px';
  });

  abortButton.addEventListener('click', function() {
    if (window.confirm('Confirm that you want to abort the mission.')) {
      flightStatus.innerHTML = 'Mission aborted.';
      shuttleBackground.style.backgroundColor = 'green';
      rocket.style.top = '200px';
    }
  });

  upButton.addEventListener('click', function() {
    rocket.style.top = parseInt(rocket.style.top) - 10 + 'px';
    rocket.style.height = parseInt(rocket.style.height) + 10 + 'px';
    flightStatus.innerHTML = 'Shuttle in flight';
  });

  downButton.addEventListener('click', function() {
    rocket.style.top = parseInt(rocket.style.top) + 10 + 'px';
    rocket.style.height = parseInt(rocket.style.height) - 10 + 'px';
    flightStatus.innerHTML = 'Shuttle in flight';
  });

  rightButton.addEventListener('click', function() {
    rocket.style.left = parseInt(rocket.style.left) + 10 + 'px';
    flightStatus.innerHTML = 'Shuttle in flight';
  });

  leftButton.addEventListener('click', function() {
    rocket.style.left = parseInt(rocket.style.left) - 10 + 'px';
    flightStatus.innerHTML = 'Shuttle in flight';
  });






