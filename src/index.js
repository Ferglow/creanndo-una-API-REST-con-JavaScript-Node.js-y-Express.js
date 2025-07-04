const express = require('express'); 

const bodyParser = require('body-parser');

const v1WorkoutRoute = require('./v1/routes/workoutRoutes');

const app = express();

const PORT = process.env.PORT || 3000;
app.use(bodyParser.json());
app.use("/api/v1/workouts", v1WorkoutRoute);

app.use("/api/v1/workouts", v1WorkoutRoute);
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

