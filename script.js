// var subjectObject = {
//   "Vegan": {
//     "Soy": ["Beginner", "Intermediate", "Advanced"],
//     "Nut": ["Beginner", "Intermediate", "Advanced"],
//     "N/A": ["Beginner", "Intermediate", "Advanced"]
//   },
//   "Vegetarian": {
//     "Soy": ["Beginner", "Intermediate", "Advanced"],
//     "Nut": ["Beginner", "Intermediate", "Advanced"],
//     "N/A": ["Beginner", "Intermediate", "Advanced"]
//   },
//   "Non-Vegetarian": {
//     "Soy": ["Beginner", "Intermediate", "Advanced"],
//     "Nut": ["Beginner", "Intermediate", "Advanced"],
//     "N/A": ["Beginner", "Intermediate", "Advanced"]
//   }
// }

var subjectObject = {
  Vegan: {
    Soy: {
      Beginner: ["Breakfast", "Lunch & Dinner", "Desserts"],
      Intermediate: ["Breakfast", "Lunch & Dinner", "Desserts"],
      Advanced: ["Breakfast", "Lunch & Dinner", "Desserts"]
    },
    Nut: {
      Beginner: ["Breakfast", "Lunch & Dinner", "Desserts"],
      Intermediate: ["Breakfast", "Lunch & Dinner", "Desserts"],
      Advanced: ["Breakfast", "Lunch & Dinner", "Desserts"]
    },
    None: {
      Beginner: ["Breakfast", "Lunch & Dinner", "Desserts"],
      Intermediate: ["Breakfast", "Lunch & Dinner", "Desserts"],
      Advanced: ["Breakfast", "Lunch & Dinner", "Desserts"]
    }
  },
  Vegetarian: {
    Soy: {
      Beginner: ["Breakfast", "Lunch & Dinner", "Desserts"],
      Intermediate: ["Breakfast", "Lunch & Dinner", "Desserts"],
      Advanced: ["Breakfast", "Lunch & Dinner", "Desserts"]
    },
    Nut: {
      Beginner: ["Breakfast", "Lunch & Dinner", "Desserts"],
      Intermediate: ["Breakfast", "Lunch & Dinner", "Desserts"],
      Advanced: ["Breakfast", "Lunch & Dinner", "Desserts"]
    },
    None: {
      Beginner: ["Breakfast", "Lunch & Dinner", "Desserts"],
      Intermediate: ["Breakfast", "Lunch & Dinner", "Desserts"],
      Advanced: ["Breakfast", "Lunch & Dinner", "Desserts"]
    }
  },
  "Non-Vegetarian": {
    Soy: {
      Beginner: ["Breakfast", "Lunch & Dinner", "Desserts"],
      Intermediate: ["Breakfast", "Lunch & Dinner", "Desserts"],
      Advanced: ["Breakfast", "Lunch & Dinner", "Desserts"]
    },
    Nut: {
      Beginner: ["Breakfast", "Lunch & Dinner", "Desserts"],
      Intermediate: ["Breakfast", "Lunch & Dinner", "Desserts"],
      Advanced: ["Breakfast", "Lunch & Dinner", "Desserts"]
    },
    None: {
      Beginner: ["Breakfast", "Lunch & Dinner", "Desserts"],
      Intermediate: ["Breakfast", "Lunch & Dinner", "Desserts"],
      Advanced: ["Breakfast", "Lunch & Dinner", "Desserts"]
    }
  }
};

window.onload = function() {
  var subjectSel = document.getElementById("subject");
  var topicSel = document.getElementById("topic");
  var chapterSel = document.getElementById("chapter");
  var mealSel = document.getElementById("meal");
  var buttonClick = document.getElementById("submitButton");

  var selectedAllOption = 0;

  // diet
  for (var x in subjectObject) {
    subjectSel.options[subjectSel.options.length] = new Option(x, x);
  }

  // allergies
  subjectSel.onchange = function() {
    chapterSel.length = 1;
    topicSel.length = 1;
    mealSel.length = 1;
    for (var y in subjectObject[this.value]) {
      topicSel.options[topicSel.options.length] = new Option(y, y);
      // console.log(y)
    }
    selectedAllOption += 1;
  };

  // cooking skill
  topicSel.onchange = function() {
    chapterSel.length = 1;
    mealSel.length = 1;
    for (var y in subjectObject[subjectSel.value][this.value]) {
      chapterSel.options[chapterSel.options.length] = new Option(y, y);
      // console.log(y)
    }
    selectedAllOption += 1;
  };

  // meal
  chapterSel.onchange = function() {
    var z = subjectObject[subjectSel.value][topicSel.value][this.value];
    for (var i = 0; i < z.length; i++) {
      mealSel.options[mealSel.options.length] = new Option(z[i], z[i]);
    }
    selectedAllOption += 1;
  };

  // button
  buttonClick.onclick = function () {
    var notificationMessage = String("");
    if (selectedAllOption != 3) {
      alert("You haven't chosen all of your answers. Please revise them.");
    } else {
      if ((topicSel.options[subjectSel.selectedIndex].text == "Nut")) {
        var notificationMessage = String(
          `We suggest you to take a look at our ${subjectSel.options[subjectSel.selectedIndex].text} options, ${topicSel.options[topicSel.selectedIndex].text} Free options, and ${chapterSel.options[chapterSel.selectedIndex].text} options in our ${mealSel.options[mealSel.selectedIndex].text} page`
        );
      } else if ((topicSel.options[subjectSel.selectedIndex].text == "Soy")) {
        var notificationMessage = String(
          `We suggest you to take a look at our ${subjectSel.options[subjectSel.selectedIndex].text} options, ${topicSel.options[topicSel.selectedIndex].text} Free options, and ${chapterSel.options[chapterSel.selectedIndex].text} options in our ${mealSel.options[mealSel.selectedIndex].text} page`
        );
      } else if ((topicSel.options[subjectSel.selectedIndex].text == "None")) {
        var notificationMessage = String(
          `We suggest you to take a look at our ${subjectSel.options[subjectSel.selectedIndex].text} options, and ${chapterSel.options[chapterSel.selectedIndex].text} options in our ${mealSel.options[mealSel.selectedIndex].text} page`
        );
      }
    }
    if (window.confirm(notificationMessage + ". Redirect?")) {
      // alert("Bye bye!")
      if ((mealSel.options[mealSel.selectedIndex].text == "Breakfast")) {
        window.location.href = "https://breakfast-recipes.glitch.me";
        return false;
      }
      else if ((mealSel.options[mealSel.selectedIndex].text == "Lunch & Dinner")) {
        window.location.href = "https://lunch-dinner.glitch.me";
        return false;
      }
      else if ((mealSel.options[mealSel.selectedIndex].text == "Desserts")) {
        window.location.href = "https://dessert-recipes.glitch.me";
        return false;
      }
    }
    else {
      // alert("Thanks for sticking around!")
      return true;
    }
  };
};
