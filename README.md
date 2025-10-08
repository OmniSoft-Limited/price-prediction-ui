
# 🖥️ Price Prediction ML Frontend

A sleek, interactive, and AI-powered UI for predicting software prices. Built for speed, style, and accuracy — powered by ML, modern web tech, and a pinch of developer magic.

---

## 🚀 Features

* **Real-time price predictions** using ONNX ML models.
* **Interactive UI** built with **TypeScript** and **Ripple framework**.
* **Beautiful styling** with **Tailwind CSS** and **DaisyUI** components.
* **Content safety**: automatically crawls and filters bad words in user input.
* **Backend integration** via **Pocketbase** for secure and lightweight database management.
* **Testing** with **Jest** for robust functionality.
* **CI/CD Ready**: fully compatible with **Jenkins pipelines**.

---

## 🛠️ Tech Stack

| Layer          | Technology                  |
| -------------- | --------------------------- |
| Frontend       | TypeScript, Ripple          |
| Styling        | Tailwind CSS, DaisyUI       |
| Backend        | Pocketbase (lightweight DB) |
| ML Integration | ONNX runtime                |
| Testing        | Jest                        |
| CI/CD          | Jenkins                     |
| Transpiling    | Babel                       |

---

## 🎨 UI Overview

* **Form Input**: Enter software details for instant price prediction.
* **Prediction Output**: Shows recommended price along with model confidence.
* **Data Validation**: Prevents bad word inputs using a simple web crawling filter.
* **Responsive Design**: Works perfectly on desktop and mobile devices.

---

## ⚡ Installation

```bash
# Clone the repository
git clone https://github.com/OmniSoft-Limited/price-prediction-ui.git
cd price-ml-frontend

# Install dependencies
npm install

# Start the development server
npm run dev
```

---

## 🧪 Testing

Run tests with Jest:

```bash
npm run test
```

---

## 🔧 CI/CD

Fully compatible with Jenkins pipelines. Example Jenkinsfile snippet:

```groovy
pipeline {
    agent any
    stages {
        stage('Install') { steps { sh 'npm install' } }
        stage('Build') { steps { sh 'npm run build' } }
        stage('Test') { steps { sh 'npm run test' } }
        stage('Deploy') { steps { echo 'Deploy to server...' } }
    }
}
```


## 💡 Notes

* Make sure **ONNX model** is placed in the `/models` folder.
* Pocketbase should be running locally or remotely for full functionality.
* Fully responsive and optimized for performance with modern browsers.

---

## ⚖️ License

MIT License. Use, modify, and deploy freely.
