# Training and Placement Cell Management System

A comprehensive web application for managing Training and Placement activities in educational institutions. This system provides separate dashboards for administrators, TPOs (Training and Placement Officers), and students to manage job drives, exams, student records, and placement activities.

## 🌟 Features

### 👨‍💼 Admin Dashboard
- **Student Management**: Add, view, update, and manage student records
- **Exam Management**: Create and conduct online exams with multiple question types
- **Job Drive Management**: Post job opportunities and manage applications
- **TPO Management**: Manage Training and Placement Officers
- **Analytics**: View comprehensive reports and statistics
- **Announcements**: Create and manage system-wide announcements

### 👨‍🏫 TPO Dashboard
- **Job Posting**: Create and manage job drive listings
- **Student Oversight**: Monitor student progress and applications
- **Exam Coordination**: Assist in exam creation and monitoring
- **Report Generation**: Generate placement reports and statistics

### 👨‍🎓 Student Dashboard
- **Profile Management**: Update personal and academic information
- **Job Applications**: Browse and apply for available job opportunities
- **Mock Exams**: Practice with mock tests and view results
- **Resume Management**: Upload and manage resume files
- **Application Tracking**: Track job application status

### 🔧 System Features
- **Secure Authentication**: JWT-based authentication for all user types
- **File Management**: Resume upload and management system
- **Email Integration**: Automated email notifications
- **Responsive Design**: Mobile-friendly interface
- **Data Analytics**: Comprehensive reporting and analytics
- **Activity Logging**: Track all system activities for audit trails

## 🛠️ Technology Stack

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM for MongoDB
- **JWT** - Authentication
- **Bcryptjs** - Password hashing
- **Nodemailer** - Email service
- **Multer** - File upload handling
- **CORS** - Cross-origin resource sharing

### Frontend
- **React.js** - User interface library
- **React Router** - Navigation
- **Axios** - API communication
- **Bootstrap** - CSS framework
- **React Icons** - Icon library
- **Chart.js** - Data visualization

## 📋 Prerequisites

Before running this project, ensure you have the following installed:

- **Node.js** (v14 or higher) - [Download here](https://nodejs.org/)
- **MongoDB** (v4.4 or higher) - [Download here](https://www.mongodb.com/try/download/community)
- **Git** - [Download here](https://git-scm.com/downloads)

## 🚀 Installation and Setup

### 1. Clone the Repository

```bash
git clone https://github.com/rohithambar/Training-And-Placement-Cell.git
cd Training-And-Placement-Cell
```

### 2. Backend Setup

```bash
# Navigate to backend directory
cd backend

# Install dependencies
npm install
```

**Configure Environment Variables** in `backend/.env`:
```env
PORT=5001
MONGODB_URI=mongodb://localhost:27017/TrainingAndPlacement
JWT_SECRET=your-super-secret-jwt-key-here
JWT_EXPIRE=30d
FRONTEND_URL=http://localhost:3001
NODE_ENV=development

# Email configuration (Optional - for email features)
EMAIL_SERVICE=gmail
EMAIL_USERNAME=your-email@gmail.com
EMAIL_PASSWORD=your-app-password
FROM_NAME=Training and Placement Cell
FROM_EMAIL=your-email@gmail.com
```

### 3. Frontend Setup

```bash
# Navigate to frontend directory
cd ../frontend

# Install dependencies
npm install
```

**Configure Environment Variables** in `frontend/.env`:
```env
REACT_APP_API_URL=http://localhost:5001/api
```

### 4. Database Setup

Ensure MongoDB is running on your system:

**Windows:**
```bash
# Start MongoDB service
net start MongoDB
```

**macOS/Linux:**
```bash
# Start MongoDB
sudo systemctl start mongod
```

### 5. Create Admin Account

```bash
# In the backend directory
cd backend
node scripts/createAdmin.js
```

This will create an admin account with these default credentials:
- **Email**: `rohit@gmail.com`
- **Password**: `admin@123`

## 🏃‍♂️ Running the Application

### Start Backend Server
```bash
cd backend
npm start
```
Backend will run on: http://localhost:5001

### Start Frontend Server
```bash
cd frontend
npm run build
npx serve -s build -p 3001
```
Frontend will run on: http://localhost:3001

### Alternative Frontend Development Server
If you prefer the development server (hot reload):
```bash
cd frontend
npm start
```
*(Note: May have compatibility issues with React 19)*

## 🎯 Usage

### 1. Admin Login
- Navigate to http://localhost:3001
- Go to Admin Login
- Use credentials: `rohit@gmail.com` / `admin@123`

### 2. Student Registration
- Students can register through the student registration page
- Fill in academic and personal details
- Upload resume (optional)

### 3. TPO Access
- TPOs need to be created by administrators
- Contact admin for TPO account creation

## 📁 Project Structure

```
Training-And-Placement-Cell/
├── backend/                  # Backend server
│   ├── config/              # Configuration files
│   ├── controllers/         # Route controllers
│   ├── middleware/          # Custom middleware
│   ├── models/              # Database models
│   ├── routes/              # API routes
│   ├── scripts/             # Utility scripts
│   ├── uploads/             # File uploads
│   └── utils/               # Utility functions
├── frontend/                 # Frontend React app
│   ├── public/              # Static files
│   ├── src/
│   │   ├── components/      # React components
│   │   ├── services/        # API services
│   │   ├── styles/          # CSS files
│   │   └── utils/           # Utility functions
│   └── build/               # Production build
└── README.md
```

## 🔧 API Endpoints

### Authentication
- `POST /api/admin/login` - Admin login
- `POST /api/tpo/login` - TPO login
- `POST /api/students/login` - Student login
- `POST /api/students/register` - Student registration

### Student Management
- `GET /api/admin/students` - Get all students
- `POST /api/admin/students` - Add student
- `PUT /api/admin/students/:id` - Update student
- `DELETE /api/admin/students/:id` - Delete student

### Job Management
- `GET /api/jobs` - Get all jobs
- `POST /api/jobs` - Create job
- `PUT /api/jobs/:id` - Update job
- `DELETE /api/jobs/:id` - Delete job

### Exam Management
- `GET /api/exams` - Get all exams
- `POST /api/exams` - Create exam
- `GET /api/exams/:id/attempt` - Attempt exam
- `POST /api/exams/:id/submit` - Submit exam

## 🛡️ Security Features

- **JWT Authentication**: Secure token-based authentication
- **Password Hashing**: Bcrypt for secure password storage
- **Input Validation**: Comprehensive input validation
- **CORS Protection**: Configured CORS policies
- **Rate Limiting**: API rate limiting to prevent abuse
- **XSS Protection**: Cross-site scripting prevention
- **Helmet Security**: Security headers with Helmet.js

## 📊 Database Schema

### Collections
- **admins** - Administrator accounts
- **students** - Student records and profiles
- **tpos** - Training and Placement Officer accounts
- **jobs** - Job listings and opportunities
- **exams** - Examination details and questions
- **examresults** - Exam results and scores
- **announcements** - System announcements
- **loginlogs** - Login activity tracking
- **activitylogs** - System activity logs

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Authors

- **Rohit Kumar** - *Initial work* - [rohithambar](https://github.com/rohithambar)

## 🙏 Acknowledgments

- Thanks to all contributors who have helped make this project better
- Inspired by the need for efficient placement management in educational institutions
- Built with modern web technologies for scalability and maintainability

## 📞 Support

For support, email rohit@example.com or create an issue in the GitHub repository.

## 🔄 Version History

- **v1.0.0** - Initial release with core features
  - Admin, TPO, and Student dashboards
  - Exam management system
  - Job posting and application system
  - File upload capabilities
  - Authentication and authorization

---

**Made with ❤️ for educational institutions**

### 9. **Troubleshooting**

- Make sure MongoDB is running.
- If you get CORS errors, check your backend CORS configuration.
- For email features, ensure you use a Gmail App Password (not your regular Gmail password).

---

### 10. **Build for Production**

To create a production build of the frontend:
```bash
cd frontend
npm run build
```

---

**Enjoy using the Training and Placement Cell Web App!**