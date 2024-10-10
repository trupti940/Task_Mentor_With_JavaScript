
document.getElementById("pause-button").addEventListener("click", pauseTimer);
document.getElementById("resume-button").addEventListener("click", resumeTimer);
document.getElementById("back-button").addEventListener("click", goBack);

      document
        .getElementById("start-button")
        .addEventListener("click", startFocusSession);
      document
        .getElementById("edit-goal")
        .addEventListener("click", openEditModal);
      document
        .getElementById("save-button")
        .addEventListener("click", saveGoalSettings);
      document
        .getElementById("cancel-button")
        .addEventListener("click", closeEditModal);
      document
        .getElementById("theme-toggle")
        .addEventListener("click", toggleTheme);

      let countdown;
      let streak = 0;
      let isLightTheme = false;
      let timeLeft;
      let isPaused = false;

      function startFocusSession() {

        timer.style.display = 'block';
        
       
        let time = parseInt(document.getElementById("time-input").value) * 60;
        let skipBreaks = document.getElementById("skip-breaks").checked;
        let breakTime = 5 * 60; // 5 minutes in seconds

      

        if (time > 25 * 60 && !skipBreaks) {
          time -= breakTime;
          setTimeout(() => alert("Time for a break!"), time * 1000);
        }
        timeLeft = time;
        startTimer(time);
      }

   
      function startTimer(seconds) {
        

        clearInterval(countdown);
        const now = Date.now();
        const then = now + seconds * 1000;

        displayTimeLeft(seconds);
        const circumference = 2 * Math.PI * 90; // Circumference of the circle
        document.querySelector(".timer-border-progress").style.strokeDasharray =
          circumference;
        document.querySelector(
          ".timer-border-progress"
        ).style.strokeDashoffset = circumference;

        countdown = setInterval(() => {
          if (isPaused) return;
          const secondsLeft = Math.round((then - Date.now()) / 1000);
          if (secondsLeft < 0) {
            clearInterval(countdown);
            updateProgress(seconds / 60);
            document.getElementById("timer-status").textContent =
              " Completed!";
            document.querySelector(
              ".timer-border-progress"
            ).style.strokeDashoffset = "0"; // Complete the border
            return;
          }
          displayTimeLeft(secondsLeft);

          // Calculate progress
          const progress = (seconds - secondsLeft) / seconds;
          const offset = circumference * (1 - progress);
          document.querySelector(
            ".timer-border-progress"
          ).style.strokeDashoffset = offset;
        }, 1000);
      }


  



      function displayTimeLeft(seconds) {
        const minutes = Math.floor(seconds / 60);
        const remainderSeconds = seconds % 60;
        document.getElementById("minutes").textContent = minutes
          .toString()
          .padStart(2, "0");
        document.getElementById("seconds").textContent = remainderSeconds
          .toString()
          .padStart(2, "0");
      }

      function updateProgress(focusMinutes) {
        let completedMinutes = parseInt(
          document.getElementById("completed-minutes").textContent
        );
        completedMinutes += focusMinutes;
        document.getElementById("completed-minutes").textContent =
          completedMinutes;
        document.getElementById("completed-time").textContent =
          completedMinutes + " minutes";

        let dailyGoal =
          parseInt(document.getElementById("daily-goal").textContent) || 60;
        let progress = (completedMinutes / dailyGoal) * 283;
        document.getElementById("progress-circle").style.strokeDashoffset =
          283 - progress;

        if (completedMinutes >= dailyGoal) {
          streak++;
          document.getElementById("streak-days").textContent = streak + " days";
        }
      }

      function openEditModal() {
        document.getElementById("edit-modal").style.display = "block";
      }

      function closeEditModal() {
        document.getElementById("edit-modal").style.display = "none";
      }

      function saveGoalSettings() {
        let newGoal = parseInt(document.getElementById("goal-input").value);
        document.getElementById("daily-goal").textContent =
          newGoal + " minutes";
        document.getElementById("edit-modal").style.display = "none";

        if (document.getElementById("clear-progress").checked) {
          document.getElementById("completed-minutes").textContent = "0";
          document.getElementById("completed-time").textContent = "0 minutes";
          document.getElementById(
            "progress-circle"
          ).style.strokeDashoffset = 283;
        }

        closeEditModal();
      }

      function toggleTheme() {
        const body = document.body;
       
       
        isLightTheme = !isLightTheme;
        if (isLightTheme) {
          document.body.classList.add("light-theme");
          document.body.style.backgroundImage = `url('${lightImage}')`;
          body.classList.add('blurred');

          document.getElementById("theme-toggle").textContent =
            "Switch to Dark Theme";
        } else {
          document.body.classList.remove("light-theme");
          document.body.style.backgroundImage = `url('${darkImage}')`;
          body.classList.add('blurred');

          document.getElementById("theme-toggle").textContent =
            "Switch to Light Theme";
        }
       

      
      }


      function pauseTimer() {
        isPaused = true;
        // document.getElementById("pause-button").style.display = "none";
        // document.getElementById("resume-button").style.display = "block";
      }

      function resumeTimer() {
        isPaused = false;
        const remainingTime = parseInt(document.getElementById("minutes").textContent) * 60 + parseInt(document.getElementById("seconds").textContent);
        timeLeft = remainingTime; // update timeLeft with the remaining time
        startTimer(remainingTime);
        
        // document.getElementById("pause-button").style.display = "block";
        // document.getElementById("resume-button").style.display = "none";
      }

      function goBack() {

        timer.style.display = '';
        
        
        // document.getElementById("pause-button").style.display = "block";
        // document.getElementById("resume-button").style.display = "none";
      }




      function changeValue(amount) {
        let input = document.getElementById("time-input");
        let newValue = parseInt(input.value) + amount;
        if (newValue < parseInt(input.min)) {
          newValue = parseInt(input.min);
        }
        input.value = newValue;
      }





