# PlacePrep - Placement Preparation Platform

A comprehensive full-stack web application designed to help students prepare for placement interviews and assessments across various engineering departments.

## 🚀 Features

### Core Functionality
- **Multi-Department Support**: CSE, ECE, EEE, Civil, Mechanical, Chemical Engineering
- **Mock Tests**: Practice assessments with real-time scoring
- **Interview Preparation**: Comprehensive interview question bank and tips
- **Aptitude Tests**: Quantitative, logical, and verbal reasoning practice
- **Notes Management**: Personal note-taking and sharing system
- **Progress Tracking**: Monitor learning progress across different modules
- **User Authentication**: Secure login with Google OAuth integration

### Technical Features
- **Responsive Design**: Mobile-friendly interface
- **Dark/Light Theme**: Toggle between themes for better user experience
- **Real-time Updates**: Live progress tracking and score updates
- **Database Integration**: Persistent data storage with Firebase
- **Email Notifications**: Automated email service for important updates

## 🛠️ Tech Stack

### Frontend
- **HTML5**: Semantic markup and structure
- **CSS3**: Modern styling with animations and responsive design
- **JavaScript (ES6+)**: Interactive functionality and DOM manipulation
- **Bootstrap**: UI components and responsive grid system

### Backend
- **Node.js**: Server-side runtime environment
- **Express.js**: Web application framework
- **Firebase**: Database and authentication services
- **MongoDB**: NoSQL database for data persistence

### Development Tools
- **Git**: Version control
- **npm**: Package management
- **Firebase CLI**: Firebase project management

## 📁 Project Structure

```
Final_Project/
├── NEW_PROJECT/
│   ├── server.js                 # Main server file
│   ├── package.json              # Dependencies and scripts
│   ├── models/                   # Database models
│   │   ├── Question.js
│   │   ├── MockTestProgress.js
│   │   ├── InterviewFeedback.js
│   │   └── Note.js
│   ├── utils/
│   │   └── emailService.js       # Email functionality
│   ├── PART_2/
│   │   └── HTML/                 # Frontend files
│   │       ├── landingpage.html  # Homepage
│   │       ├── login.html        # Authentication
│   │       ├── placement_website.html # Main dashboard
│   │       ├── mocktest.html     # Mock test interface
│   │       ├── interview.html    # Interview preparation
│   │       ├── notes.html        # Notes management
│   │       ├── profile.html      # User profile
│   │       ├── cse_department.html
│   │       ├── ece_department.html
│   │       ├── eee_department.html
│   │       ├── civil_department.html
│   │       ├── mechanical_department.html
│   │       └── chemical_department.html
│   │       ├── css/              # Stylesheets
│   │       └── js/               # JavaScript modules
│   ├── checkDatabase.js          # Database verification
│   ├── importQuestions.js        # Data import utility
│   ├── resetDatabase.js          # Database reset utility
│   └── seedAssessments.js        # Assessment data seeding
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm (v6 or higher)
- Firebase account
- MongoDB (optional, Firebase is used as primary database)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd Final_Project/NEW_PROJECT
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Firebase Setup**
   - Create a new Firebase project
   - Enable Authentication (Google provider)
   - Set up Firestore Database
   - Download `serviceAccountKey.json` and place it in the project root

4. **Environment Configuration**
   - Update Firebase configuration in `server.js`
   - Set up email service credentials in `utils/emailService.js`

5. **Database Setup**
   ```bash
   # Import questions and seed data
   node importQuestions.js
   node seedAssessments.js
   ```

6. **Start the server**
   ```bash
   npm start
   # or
   node server.js
   ```

7. **Access the application**
   - Open `http://localhost:3000` in your browser
   - Navigate to `PART_2/HTML/landingpage.html`

## 📖 Usage Guide

### For Students
1. **Registration/Login**: Use Google OAuth for quick access
2. **Department Selection**: Choose your engineering department
3. **Mock Tests**: Practice with department-specific questions
4. **Interview Prep**: Access interview questions and tips
5. **Notes**: Create and manage study notes
6. **Progress Tracking**: Monitor your learning journey

### For Administrators
1. **Database Management**: Use utility scripts for data management
2. **Question Import**: Add new questions via `importQuestions.js`
3. **Assessment Seeding**: Create new assessments with `seedAssessments.js`

## 🔧 API Endpoints

### Authentication
- `POST /api/auth/firebase` - Google OAuth authentication
- `GET /api/user/:userId` - Get user profile
- `PUT /api/user/:userId` - Update user profile

### Mock Tests
- `GET /api/questions/:department` - Get department-specific questions
- `POST /api/mocktest/progress` - Save test progress
- `GET /api/mocktest/progress/:userId` - Get user progress

### Notes
- `POST /api/notes` - Create new note
- `GET /api/notes/:userId` - Get user notes
- `PUT /api/notes/:noteId` - Update note
- `DELETE /api/notes/:noteId` - Delete note

## 🎨 Customization

### Adding New Departments
1. Create department HTML file in `PART_2/HTML/`
2. Add corresponding JavaScript data file
3. Update navigation links
4. Add department-specific questions to database

### Styling
- Modify `css/` files for theme customization
- Update color schemes in CSS variables
- Add new animations and transitions

## 🐛 Troubleshooting

### Common Issues
1. **Firebase Connection Error**: Verify `serviceAccountKey.json` is present and valid
2. **Port Already in Use**: Change port in `server.js` or kill existing process
3. **Database Issues**: Run `checkDatabase.js` to verify connectivity
4. **Authentication Problems**: Ensure Google OAuth is properly configured

### Debug Mode
```bash
# Enable debug logging
DEBUG=* node server.js
```

## 📝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Team

- **Full Stack Development**: Mittapalli Santhosh Kumar
- **UI/UX Design**: Mittapalli Santhosh Kumar
- **Database Design**: Mittapalli Santhosh Kumar

## 🙏 Acknowledgments

- Firebase for backend services
- Bootstrap for UI components
- Google OAuth for authentication
- Amrita Vishwa Vidyapeetham for project support

## 📞 Support

For support and questions:
- Create an issue in the repository
- Contact: santhoshkumarmittapalli7@gmail.com
- Project documentation: [link-to-docs]

---

**Note**: This is a final year project for Amrita Vishwa Vidyapeetham. For academic use only. 
