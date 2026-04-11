# ⚖️ BMI Calculator (React)

A modern and responsive **BMI (Body Mass Index) Calculator** built using React.
It allows users to input their height and weight to instantly calculate BMI and understand their health category.

Designed with a clean UI and smooth user experience, this app demonstrates practical use of **React state management and form handling**.

---

## 🚀 Live Demo

<p align="center">
  <a href="https://bmi-08.vercel.app/" target="_blank">
    <img src="https://img.shields.io/badge/💪%20Try%20Now-Live%20Demo-22c55e?style=for-the-badge&logo=vercel&logoColor=white" />
  </a>
</p>


---

## ✨ Features

* ⚡ Instant BMI calculation
* 📏 Input for height (cm) and weight (kg)
* 🧠 Health category detection
* 🔄 Reset functionality
* 📱 Fully responsive design
* 🎨 Clean and modern UI

---

## 🧠 BMI Formula

BMI is calculated using the formula:

[
BMI = \frac{Weight (kg)}{Height (m)^2}
]

---

## 🛠️ Tech Stack

| Layer      | Technology        |
| ---------- | ----------------- |
| Frontend   | React (Hooks)     |
| Language   | JavaScript (ES6+) |
| Styling    | CSS3              |
| Build Tool | Vite / CRA        |

---

## 📁 Project Structure

```bash id="k29d83"
src/
│
├── App.jsx        # Main logic and UI
├── App.css        # Styling
└── main.jsx       # Entry point
```

---

## ⚙️ Getting Started

### 1. Clone Repository

```bash id="h39d8s"
git clone https://github.com/your-username/bmi-calculator.git
```

### 2. Navigate to Project

```bash id="a92kd1"
cd bmi-calculator
```

### 3. Install Dependencies

```bash id="d82kd1"
npm install
```

### 4. Run the App

```bash id="d91kd2"
npm run dev
```

---

## 🔍 Functional Overview

* Uses **React useState** for managing inputs and results
* Converts height from cm → meters
* Calculates BMI using mathematical formula
* Displays:

  * BMI value
  * Health condition message

---

## 🎯 BMI Categories

| BMI Range   | Category    |
| ----------- | ----------- |
| < 18.5      | Underweight |
| 18.5 – 24.9 | Healthy     |
| 25 – 29.9   | Overweight  |
| 30+         | Obese       |

---

## 🎨 Design Highlights

* Minimal and clean layout
* Smooth input focus effects
* Clear result visualization
* Soft color palette for health-focused UI

---

## 📈 Future Improvements

* 🎨 Dynamic color changes based on BMI
* 📊 Visual BMI scale chart
* 📱 Better mobile animations
* 🌙 Dark mode toggle
* 💾 Save history feature

---

## ⚠️ Notes

* Ensure valid numeric input for accurate results
* This tool is for general informational purposes only

---

## 🤝 Contributing

Contributions are welcome.

1. Fork the repository
2. Create a new branch
3. Make changes
4. Submit a pull request

---

## 📄 License

This project is licensed under the **MIT License**

---

## 👨‍💻 Author

**Tanishk**

---

<p align="center">
  Built with ❤️ using React
</p>
