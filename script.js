function showApp() {
    document.getElementById("frontPage").style.display = "none";
    document.getElementById("appPage").style.display = "block";
    window.scrollTo(0, 0);
}

function showFrontPage() {
    document.getElementById("appPage").style.display = "none";
    document.getElementById("frontPage").style.display = "flex";
    window.scrollTo(0, 0);
}

function loadWorkoutVideo(event) {
    const file = event.target.files[0];
    if (!file) return;

    const video = document.getElementById("workoutVideo");
    video.src = URL.createObjectURL(file);
    video.load();
}

function generatePlan() {
    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    let height = document.getElementById("height").value;
    let weight = document.getElementById("weight").value;
    let goal = document.getElementById("goal").value;

    if (!name || !age || !height || !weight || !goal) {
        alert("Please fill all details!");
        return;
    }

    let heightInMeters = height / 100;
    let bmi = (weight / (heightInMeters * heightInMeters)).toFixed(1);
    let bmiCategory = bmi < 18.5 ? "Underweight" :
                      bmi < 25 ? "Normal range" :
                      bmi < 30 ? "Overweight" : "Obesity";

    let workout = "";
    let weeklySchedule = "";
    let diet = "";
    let mealPlan = "";

    if (goal === "Weight Loss") {
        workout = `
            <h3>🔥 Weight Loss Workout</h3>
            <p>30–40 minutes of exercise, 5 days per week.</p>
            <p>• Walking / Jogging</p><p>• Squats</p><p>• Lunges</p><p>• Plank</p>`;
        weeklySchedule = `
            <h3>📅 Weekly Workout Schedule</h3>
            <p><b>Monday:</b> Walking / Jogging</p>
            <p><b>Tuesday:</b> Squats + Lunges</p>
            <p><b>Wednesday:</b> Light Cardio</p>
            <p><b>Thursday:</b> Walking + Plank</p>
            <p><b>Friday:</b> Full Body Workout</p>
            <p><b>Saturday:</b> Light Stretching</p>
            <p><b>Sunday:</b> Rest Day</p>`;
        diet = `
            <h3>🥗 Healthy Eating Tips</h3>
            <p>Choose balanced meals with vegetables, fruits and protein.</p>
            <p>Limit sugary drinks and highly processed foods.</p>`;
        mealPlan = `
            <h3>🍎 Daily Meal Plan</h3>
            <p><b>Breakfast:</b> Oats + Fruit</p>
            <p><b>Lunch:</b> Rice / Roti + Vegetables + Protein</p>
            <p><b>Snack:</b> Fruit or Nuts</p>
            <p><b>Dinner:</b> Vegetables + Protein + Whole Grains</p>`;
    } else if (goal === "Weight Gain") {
        workout = `
            <h3>💪 Strength Workout</h3>
            <p>30–45 minutes of strength-focused exercise, 3–4 days per week.</p>
            <p>• Squats</p><p>• Push-ups</p><p>• Lunges</p><p>• Plank</p>`;
        weeklySchedule = `
            <h3>📅 Weekly Workout Schedule</h3>
            <p><b>Monday:</b> Squats + Strength Training</p>
            <p><b>Tuesday:</b> Rest / Light Stretching</p>
            <p><b>Wednesday:</b> Push-ups + Lunges</p>
            <p><b>Thursday:</b> Rest Day</p>
            <p><b>Friday:</b> Full Body Strength Workout</p>
            <p><b>Saturday:</b> Light Cardio</p>
            <p><b>Sunday:</b> Rest Day</p>`;
        diet = `
            <h3>🥗 Healthy Eating Tips</h3>
            <p>Choose balanced meals with adequate protein and whole foods.</p>
            <p>Include fruits, vegetables, grains and healthy fats.</p>`;
        mealPlan = `
            <h3>🍎 Daily Meal Plan</h3>
            <p><b>Breakfast:</b> Eggs / Paneer + Whole Grains + Fruit</p>
            <p><b>Lunch:</b> Rice / Roti + Vegetables + Protein</p>
            <p><b>Snack:</b> Nuts + Fruit / Yogurt</p>
            <p><b>Dinner:</b> Rice / Roti + Vegetables + Protein</p>`;
    } else {
        workout = `
            <h3>🏋️ General Fitness Workout</h3>
            <p>About 30 minutes of activity, 4–5 days per week.</p>
            <p>• Walking</p><p>• Stretching</p><p>• Squats</p><p>• Light cardio</p>`;
        weeklySchedule = `
            <h3>📅 Weekly Workout Schedule</h3>
            <p><b>Monday:</b> Walking + Stretching</p>
            <p><b>Tuesday:</b> Squats + Light Cardio</p>
            <p><b>Wednesday:</b> Walking</p>
            <p><b>Thursday:</b> Stretching + Squats</p>
            <p><b>Friday:</b> Light Cardio</p>
            <p><b>Saturday:</b> Walking + Stretching</p>
            <p><b>Sunday:</b> Rest Day</p>`;
        diet = `
            <h3>🥗 Healthy Lifestyle</h3>
            <p>Eat a balanced variety of foods and stay hydrated.</p>`;
        mealPlan = `
            <h3>🍎 Daily Meal Plan</h3>
            <p><b>Breakfast:</b> Idli / Oats + Fruit</p>
            <p><b>Lunch:</b> Rice + Vegetables + Protein</p>
            <p><b>Snack:</b> Fruit / Nuts / Yogurt</p>
            <p><b>Dinner:</b> Roti / Rice + Vegetables + Protein</p>`;
    }

    document.getElementById("result").innerHTML = `
        <h2>Hello ${name}! 👋</h2>
        <h3>Your Fitness Plan</h3>
        <p><b>Age:</b> ${age}</p>
        <p><b>Height:</b> ${height} cm</p>
        <p><b>Weight:</b> ${weight} kg</p>
        <p><b>Goal:</b> ${goal}</p>
        <h3>🧮 BMI</h3>
        <p><b>Your BMI:</b> ${bmi}</p>
        <p><b>BMI Category:</b> ${bmiCategory}</p>
        ${workout}
        ${weeklySchedule}
        ${mealPlan}
        ${diet}
        <h3>💧 Hydration</h3>
        <p>Drink water regularly throughout the day.</p>
        <h3>😴 Sleep</h3>
        <p>Try to maintain a regular sleep schedule.</p>
    `;
}
