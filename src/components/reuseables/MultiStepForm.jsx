import React, { useState } from "react";
import "../../assets/styles/multiStepForm.css";
import bowlIcon from "../../assets/images/bowlIcon.png"; // Example bowl icon

function MultiStepForm() {
  // ====== STEP STATE ======
  const [step, setStep] = useState(1);

  // ====== TRACK FORM COMPLETION & SHOW STATES ======
  const [isSubmitted, setIsSubmitted] = useState(false);  // true after final submit
  const [showCalculator, setShowCalculator] = useState(false); // true after link click

  // ====== FORM FIELDS (all steps) ======
  const [basicInfo, setBasicInfo] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [personalDetails, setPersonalDetails] = useState({
    gender: "",
    age: "",
    weight: "",
    height: "",
    activity: "",
  });
  const [dietaryPrefs, setDietaryPrefs] = useState({
    dietPref: "",
    healthGoal: "",
    weightGoal: "",
    conditions: "",
    allergies: "",
  });
  const [location, setLocation] = useState({
    country: "",
    state: "",
    city: "",
  });

  // ====== VALIDATION LOGIC ======
  const isStepValid = () => {
    switch (step) {
      case 1:
        return (
          basicInfo.name.trim() !== "" &&
          basicInfo.email.trim() !== "" &&
          basicInfo.phone.trim() !== ""
        );
      case 2:
        return (
          personalDetails.gender.trim() !== "" &&
          personalDetails.age.trim() !== "" &&
          personalDetails.weight.trim() !== "" &&
          personalDetails.height.trim() !== "" &&
          personalDetails.activity.trim() !== ""
        );
      case 3:
        return (
          dietaryPrefs.dietPref.trim() !== "" &&
          dietaryPrefs.healthGoal.trim() !== "" &&
          dietaryPrefs.weightGoal.trim() !== "" &&
          dietaryPrefs.conditions.trim() !== "" &&
          dietaryPrefs.allergies.trim() !== ""
        );
      case 4:
        return (
          location.country.trim() !== "" &&
          location.state.trim() !== "" &&
          location.city.trim() !== ""
        );
      default:
        return false;
    }
  };

  // ====== HANDLERS ======
  const handleNext = () => {
    // Check if current step is valid
    if (!isStepValid()) return; // do nothing if fields are empty
    setStep(step + 1);
  };

  const handlePrev = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = () => {
    // Last step validation
    if (!isStepValid()) return;
    // Instead of alert, we show the red box
    setIsSubmitted(true);
  };

  // When the user clicks "Is Your Diet on Track? Let's Check"
  const handleShowCalculator = () => {
    setShowCalculator(true);
  };

  // ====== RENDER STEPS ======
  const renderStepContent = () => {
    switch (step) {
      case 1:
        return (
          <div className="form-fields">
            <div className="form-group">
              <label>Name</label>
              <input
                type="text"
                placeholder="Name"
                value={basicInfo.name}
                onChange={(e) =>
                  setBasicInfo({ ...basicInfo, name: e.target.value })
                }
              />
            </div>
            <div className="form-group">
              <label>Email Address</label>
              <input
                type="email"
                placeholder="Email Address"
                value={basicInfo.email}
                onChange={(e) =>
                  setBasicInfo({ ...basicInfo, email: e.target.value })
                }
              />
            </div>
            <div className="form-group">
              <label>Phone Number</label>
              <input
                type="text"
                placeholder="Phone Number"
                value={basicInfo.phone}
                onChange={(e) =>
                  setBasicInfo({ ...basicInfo, phone: e.target.value })
                }
              />
            </div>
          </div>
        );
      case 2:
        return (
          <div className="form-fields">
            <div className="row-group">
              <div className="form-group">
                <label>Gender</label>
                <select
                  value={personalDetails.gender}
                  onChange={(e) =>
                    setPersonalDetails({
                      ...personalDetails,
                      gender: e.target.value,
                    })
                  }
                >
                  <option value="">Select</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="others">Others</option>
                </select>
              </div>
              <div className="form-group">
                <label>Age(Yrs)</label>
                <input
                  type="text"
                  placeholder="Age"
                  value={personalDetails.age}
                  onChange={(e) =>
                    setPersonalDetails({
                      ...personalDetails,
                      age: e.target.value,
                    })
                  }
                />
              </div>
            </div>

            <div className="row-group">
              <div className="form-group">
                <label>Weight(Kg)</label>
                <input
                  type="text"
                  placeholder="Weight"
                  value={personalDetails.weight}
                  onChange={(e) =>
                    setPersonalDetails({
                      ...personalDetails,
                      weight: e.target.value,
                    })
                  }
                />
              </div>
              <div className="form-group">
                <label>Height(Cm)</label>
                <input
                  type="number"
                  placeholder="Height"
                  value={personalDetails.height}
                  onChange={(e) =>
                    setPersonalDetails({
                      ...personalDetails,
                      height: e.target.value,
                    })
                  }
                />
              </div>
            </div>

            <div className="form-group">
              <label>Activity level</label>
              <select
                value={personalDetails.activity}
                onChange={(e) =>
                  setPersonalDetails({
                    ...personalDetails,
                    activity: e.target.value,
                  })
                }
              >
                <option value="">Select</option>
                <option value="sedentary">Sedentary</option>
                <option value="moderate">Moderate</option>
                <option value="active">Active</option>
              </select>
            </div>
          </div>
        );
      case 3:
        return (
          <div className="form-fields">
            <div className="form-group">
              <label>Dietary preferences</label>
              <select
                value={dietaryPrefs.dietPref}
                onChange={(e) =>
                  setDietaryPrefs({ ...dietaryPrefs, dietPref: e.target.value })
                }
              >
                <option value="">Select</option>
                <option value="vegetarian">Vegetarian</option>
                <option value="vegan">Vegan</option>
                <option value="keto">Keto</option>
                <option value="omnivore">Omnivore</option>
              </select>
            </div>
            <div className="form-group">
              <label>Health Goal</label>
              <select
                value={dietaryPrefs.healthGoal}
                onChange={(e) =>
                  setDietaryPrefs({
                    ...dietaryPrefs,
                    healthGoal: e.target.value,
                  })
                }
              >
                <option value="">Select</option>
                <option value="weightLoss">Weight Loss</option>
                <option value="muscleGain">Muscle Gain</option>
                <option value="maintenance">Maintenance</option>
              </select>
            </div>
            <div className="form-group">
              <label>Weight Goal</label>
              <input
                type="number"
                placeholder="Desired Weight"
                value={dietaryPrefs.weightGoal}
                onChange={(e) =>
                  setDietaryPrefs({
                    ...dietaryPrefs,
                    weightGoal: e.target.value,
                  })
                }
              />
            </div>
            <div className="form-group">
              <label>Existing Conditions</label>
              <input
                type="text"
                placeholder="Existing Conditions"
                value={dietaryPrefs.conditions}
                onChange={(e) =>
                  setDietaryPrefs({
                    ...dietaryPrefs,
                    conditions: e.target.value,
                  })
                }
              />
            </div>
            <div className="form-group">
              <label>Allergies</label>
              <input
                type="text"
                placeholder="Allergies"
                value={dietaryPrefs.allergies}
                onChange={(e) =>
                  setDietaryPrefs({
                    ...dietaryPrefs,
                    allergies: e.target.value,
                  })
                }
              />
            </div>
          </div>
        );
      case 4:
        return (
          <div className="form-fields">
            <div className="form-group">
              <label>Country</label>
              <input
                type="text"
                placeholder="Country"
                value={location.country}
                onChange={(e) =>
                  setLocation({ ...location, country: e.target.value })
                }
              />
            </div>
            <div className="form-group">
              <label>State</label>
              <input
                type="text"
                placeholder="State"
                value={location.state}
                onChange={(e) =>
                  setLocation({ ...location, state: e.target.value })
                }
              />
            </div>
            <div className="form-group">
              <label>City</label>
              <input
                type="text"
                placeholder="City"
                value={location.city}
                onChange={(e) =>
                  setLocation({ ...location, city: e.target.value })
                }
              />
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  // ====== PROGRESS BAR ======
  const stepsArr = [1, 2, 3, 4];

  // ====== HEALTH CALCULATOR (from your screenshot) ======
  const [calcAge, setCalcAge] = useState("");
  const [calcWeight, setCalcWeight] = useState("");
  const [calcHeight, setCalcHeight] = useState("");
  const [calcActivity, setCalcActivity] = useState("");
  const [calcTotal, setCalcTotal] = useState("");

  const handleGenerate = () => {
    // Example calculation logic:
    // Very rough formula: 10 * weight + 6.25 * height - 5 * age + 5, then multiply by activity
    let base =
      10 * (parseFloat(calcWeight) || 0) +
      6.25 * (parseFloat(calcHeight) || 0) -
      5 * (parseFloat(calcAge) || 0) +
      5;

    let multiplier = 1;
    if (calcActivity === "sedentary") multiplier = 1.2;
    if (calcActivity === "moderate") multiplier = 1.4;
    if (calcActivity === "active") multiplier = 1.6;

    const total = Math.round(base * multiplier);
    setCalcTotal(total.toString());
  };

  // RENDER: If user hasn't submitted & isn't viewing the calculator, show multi-step form
  if (!isSubmitted && !showCalculator) {
    return (
      <div className="multistep-container">
        {/* Heading */}
        <h2 className="multistep-title">
          The First Step To A Healthier You
          <img src={bowlIcon} alt="bowl" className="multistep-icon" />
        </h2>
        <p className="multistep-subtitle">
          Join Over 100+ Hunchies to an amazing healthy journey
        </p>

        {/* Steps Indicator */}
        <div className="steps-indicator">
          {stepsArr.map((s) => (
            <div className="step-item" key={s}>
              <div className={`step-number ${step >= s ? "active" : ""}`}>
                {s}
              </div>
              <p className="step-label">
                {s === 1
                  ? "Basic Information"
                  : s === 2
                  ? "Personal details"
                  : s === 3
                  ? "Dietary Preferences"
                  : "Location"}
              </p>
            </div>
          ))}

          {/* Red progress line */}
          <div className="progress-line">
            <div
              className="progress-fill"
              style={{ width: `${((step - 1) / 3) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* Form Box */}
        <div className="form-card">
          {renderStepContent()}

          {/* Buttons */}
          <div className="form-navigation">
            {step > 1 && (
              <button className="prev-btn" onClick={handlePrev}>
                &larr; Previous
              </button>
            )}

            {step < 4 && (
              <button className="continue-btn" onClick={handleNext}>
                Continue
              </button>
            )}

            {step === 4 && (
              <button className="continue-btn" onClick={handleSubmit}>
                Submit
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }

  // If user has submitted but hasn't clicked the link => show the "waitlist" red box
  if (isSubmitted && !showCalculator) {
    return (
      <div className="waitlist-container">
        <div className="waitlist-box">
          <h3>You’re on the waitlist 🎉</h3>
          <p>Now, let’s check your eating lifestyle.</p>
          <a href="#checkdiet" onClick={handleShowCalculator}>
            Is Your Diet on Track? Let’s Check
          </a>
        </div>
      </div>
    );
  }

  // If user clicks "Is Your Diet on Track?", show the Health Calculator
  if (showCalculator) {
    return (
      <div className="calculator-container">
        <div className="calculator-card">
          <h3>Health Calculator</h3>

          <div className="calc-row">
            <div>
              <label>Age(Yrs)</label>
              <input
                type="text"
                value={calcAge}
                onChange={(e) => setCalcAge(e.target.value)}
                placeholder="Age"
              />
            </div>
            <div>
              <label>Weight(Kg)</label>
              <input
                type="text"
                value={calcWeight}
                onChange={(e) => setCalcWeight(e.target.value)}
                placeholder="Weight"
              />
            </div>
            <div>
              <label>Height(Cm)</label>
              <input
                type="text"
                value={calcHeight}
                onChange={(e) => setCalcHeight(e.target.value)}
                placeholder="Height"
              />
            </div>
          </div>

          <div className="calc-row">
            <div>
              <label>Activity level</label>
              <select
                value={calcActivity}
                onChange={(e) => setCalcActivity(e.target.value)}
              >
                <option value="">Select</option>
                <option value="sedentary">Sedentary</option>
                <option value="moderate">Moderate</option>
                <option value="active">Active</option>
              </select>
            </div>
            <div>
              <label>Total</label>
              <input
                type="text"
                value={calcTotal}
                readOnly
                placeholder="0"
              />
            </div>
          </div>

          <button className="generate-btn" onClick={handleGenerate}>
            Generate
          </button>
        </div>
      </div>
    );
  }

  return null;
}

export default MultiStepForm;
