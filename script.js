// Array of questions
const questions = [
    "1. How have you been feeling lately?",
    "2. Have you noticed any changes in your sleep patterns?",
    "3. Do you find it difficult to concentrate on tasks?",
    "4. Are you experiencing any changes in your appetite or weight?",
    "5. How would you describe your energy levels throughout the day?",
    "6. Do you often feel overwhelmed or stressed?",
    "7. Have you been feeling anxious or worried about things?",
    "8. How do you cope with challenges or difficult emotions?",
    "9. Are you able to enjoy activities that you used to find pleasurable?",
    "10. Have you noticed any changes in your social interactions or relationships?"
  ];
  
  let currentQuestionIndex = 0;
  const questionElement = document.getElementById('question');
  const ratingForm = document.getElementById('ratingForm');
  const submitButton = document.querySelector('button');
  const totalScoreElement = document.getElementById('totalScore');
  const ratingsArray = [];
  
  function submitRating() {
    // Check if the survey is completed
    if (currentQuestionIndex >= questions.length) {
      alert("You have already submitted your responses. Thank you!");
      return;
    }
  
    // Check if a rating is selected
    const selectedRating = document.querySelector('input[name="rating"]:checked');
  
    if (selectedRating) {
      const ratingValue = parseInt(selectedRating.value);
      console.log(`Question: ${questions[currentQuestionIndex]}, Rating: ${ratingValue}`);
  
      // Store the rating value in the array
      ratingsArray.push({ question: questions[currentQuestionIndex], rating: ratingValue });
  
      // Check if there are more questions
      if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        questionElement.textContent = questions[currentQuestionIndex];
        // Reset radio buttons to default (none selected)
        ratingForm.reset();
        
        // If it's the last question, change the button to "Submit"
        if (currentQuestionIndex === questions.length - 1) {
          submitButton.textContent = 'Submit';
        }
      } else {
        // Disable the button after submitting the last question
        submitButton.disabled = true;
  
        // You can also add additional logic here for handling the submission
        // For now, let's just show an alert with the collected ratings
        const totalRating = ratingsArray.reduce((total, item) => total + item.rating, 0);
        console.log("Total Rating:", totalRating);
  
        // Display the total score and mental health category in the div
        totalScoreElement.textContent = `Total Score: ${totalRating},\n Mental Health: ${getMentalHealthCategory(totalRating)}`;          
      }
    } else {
      alert("Please select a rating before moving to the next question.");
    }
  }
  
  // Function to determine mental health category based on the total score
  function getMentalHealthCategory(totalScore) {
    if (totalScore > 25 && totalScore <= 30) {
      return "Good job";
    } else if (totalScore >= 17 && totalScore <= 25) {
      return "Normal Health";
    } else if (totalScore >= 10 && totalScore < 17) {
      return "Seek Help!! Contact Us";
    } else {
      return "Unknown";
    }
  }
  