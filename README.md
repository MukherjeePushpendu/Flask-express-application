
# Flask + Express Application

This project demonstrates deploying a **Flask backend** and an **Express frontend** on a single EC2 instance using Amazon Linux or Ubuntu. The frontend communicates with the backend using REST API.

---

## 📁 Project Structure

```

flask-express-application/
├── backend/
│   ├── app.py
│   └── requirements.txt
└── frontend/
├── server.js
└── package.json

````

---

## 🚀 Technologies Used

- **Backend:** Python + Flask
- **Frontend:** Node.js + Express
- **Cloud:** Amazon EC2

---

## ⚙️ How to Run Locally

### 1. Clone the Repository
```bash
git clone https://github.com/yourusername/flask-express-application.git
cd flask-express-application
````

### 2. Setup Flask Backend

```bash
cd backend
pip install -r requirements.txt
python app.py  # or flask run --host=0.0.0.0 --port=5000
```

### 3. Setup Express Frontend

```bash
cd ../frontend
npm install
node server.js
```

---

## 🌐 Access URLs

* **Backend (Flask):** [http://localhost:5000](http://localhost:5000)
* **Frontend (Express):** [http://localhost:3000](http://localhost:3000)

---

## ☁️ How to Deploy on a Single EC2 Instance

### 1. Launch EC2 Instance

* Use **Amazon Linux 2023** or **Ubuntu 24.04**
* Open ports: `22`, `80`, `3000`, `5000`

### 2. Connect and Install Dependencies

```bash
sudo yum update -y    # or sudo apt update -y
sudo yum install git python3 pip nodejs npm -y
```

### 3. Upload Project

Use `scp` or clone from GitHub:

```bash
git clone https://github.com/yourusername/flask-express-application.git
```

### 4. Run Apps

```bash
# Flask
cd backend
pip install -r requirements.txt
python3 app.py

# Express
cd ../frontend
npm install
node server.js
```

---

## 💡 Optional Enhancements

* Use **PM2** to keep both apps running in the background
* Setup **Nginx** as a reverse proxy
* Configure **Route 53** and SSL

---

## 📜 License

This project is open-source and free to use for educational purposes.

```

---

Would you like me to:
- Save this as a downloadable `README.md` file?
- Customize it with your name or GitHub repo link?
- Add Docker or Nginx setup to it?
```
# Flask-express-application
