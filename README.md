# 🚗 Car Rental Full-Stack Application

A modern, full-stack car rental platform built with the MERN stack, featuring animated UI components and comprehensive booking management.

![Car Rental Banner](client/src/assets/banner_car_image.png)

## 🌟 Features

### For Customers
- **Browse Cars**: View available vehicles with detailed specifications
- **Advanced Search**: Filter by location, dates, and availability
- **Secure Booking**: Reserve cars with date conflict prevention
- **Booking Management**: Track booking history and status
- **User Authentication**: Secure login and registration system

### For Car Owners
- **Fleet Management**: Add and manage vehicle listings
- **Booking Control**: Accept, reject, and manage customer bookings
- **Dashboard Analytics**: Track revenue and booking statistics
- **Profile Management**: Update profile and vehicle information

## 🛠️ Technology Stack

### Frontend
- **React 19.1.0** - Modern UI library with hooks
- **Vite 6.3.5** - Fast build tool and development server
- **TailwindCSS 4.1.10** - Utility-first CSS framework
- **Framer Motion 12.19.1** - Advanced animation library
- **React Router DOM 7.6.2** - Client-side routing
- **Axios 1.10.0** - HTTP client for API calls

### Backend
- **Node.js** - JavaScript runtime environment
- **Express 5.1.0** - Web application framework
- **MongoDB** - NoSQL database
- **Mongoose 8.16.0** - MongoDB object modeling
- **JWT** - JSON Web Token authentication
- **bcrypt 6.0.0** - Password hashing
- **ImageKit** - Cloud image storage and optimization

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ installed
- MongoDB account (Atlas recommended)
- ImageKit account for image storage

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/YOUR-USERNAME/car-rental-fullstack.git
   cd car-rental-fullstack
   ```

2. **Install Backend Dependencies**
   ```bash
   cd server
   npm install
   ```

3. **Install Frontend Dependencies**
   ```bash
   cd ../client
   npm install
   ```

4. **Environment Setup**

   **Server `.env` file:**
   ```env
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret_key
   IMAGEKIT_PUBLIC_KEY=your_imagekit_public_key
   IMAGEKIT_PRIVATE_KEY=your_imagekit_private_key
   IMAGEKIT_URL_ENDPOINT=your_imagekit_url_endpoint
   ```

   **Client `.env` file:**
   ```env
   VITE_CURRENCY=₹
   VITE_BASE_URL=http://localhost:3000
   ```

5. **Start Development Servers**

   **Backend (Terminal 1):**
   ```bash
   cd server
   npm run server
   ```

   **Frontend (Terminal 2):**
   ```bash
   cd client
   npm run dev
   ```

6. **Access the Application**
   - Frontend: http://localhost:5173
   - Backend API: http://localhost:3000

## 📁 Project Structure

```
car-rental-fullstack/
├── client/                  # React Frontend
│   ├── src/
│   │   ├── components/      # Reusable UI components
│   │   ├── pages/          # Page-level components
│   │   ├── context/        # Global state management
│   │   ├── assets/         # Images and icons
│   │   └── App.jsx         # Main application component
│   └── package.json
│
├── server/                  # Node.js Backend
│   ├── controllers/        # Business logic
│   ├── models/             # Database schemas
│   ├── routes/             # API endpoints
│   ├── middleware/         # Custom middleware
│   ├── configs/            # Configuration files
│   └── server.js           # Express server
│
└── README.md
```

## 🔗 API Endpoints

### User Routes
- `POST /api/user/register` - User registration
- `POST /api/user/login` - User authentication
- `GET /api/user/data` - Get user profile (protected)
- `GET /api/user/cars` - Get all available cars

### Owner Routes
- `POST /api/owner/change-role` - Switch to owner role
- `POST /api/owner/add-car` - Add new vehicle (protected)
- `GET /api/owner/cars` - Get owner's vehicles (protected)
- `POST /api/owner/toggle-car` - Toggle car availability (protected)
- `GET /api/owner/dashboard` - Get dashboard statistics (protected)

### Booking Routes
- `POST /api/bookings/check-availability` - Check car availability
- `POST /api/bookings/create` - Create new booking (protected)
- `GET /api/bookings/user` - Get user bookings (protected)
- `GET /api/bookings/owner` - Get owner bookings (protected)
- `POST /api/bookings/change-status` - Update booking status (protected)

## 🎨 Key Features

### Advanced Animations
- **Animated Hero Section**: Moving gradients and floating particles
- **Car Animations**: Smooth horizontal movement and floating effects
- **Page Transitions**: Seamless navigation with Framer Motion
- **Interactive Elements**: Hover effects and micro-interactions

### Security Features
- **JWT Authentication**: Secure token-based authentication
- **Password Hashing**: bcrypt encryption for user passwords
- **Protected Routes**: Middleware-based route protection
- **Input Validation**: Comprehensive data validation

### Responsive Design
- **Mobile-First**: Optimized for all device sizes
- **TailwindCSS**: Utility-first responsive design
- **Modern UI**: Clean and intuitive interface

## 🌍 Localization

- **Currency**: Indian Rupees (₹)
- **Locations**: Indian cities (Jalandhar, Chandigarh, Delhi, Gurugram)
- **Date Format**: Local date formatting

## 🚀 Deployment

### Frontend (Vercel)
```bash
cd client
npm run build
# Deploy to Vercel
```

### Backend (Vercel/Heroku)
```bash
cd server
# Deploy to your preferred platform
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

- **Developer**: Ayush Rajput
- **Email**: ayushrajput0974@gmail.com
- **GitHub**: [@YOUR-USERNAME](https://github.com/YOUR-USERNAME)

## 🙏 Acknowledgments

- React team for the amazing framework
- MongoDB for the flexible database
- ImageKit for image optimization
- TailwindCSS for the utility-first CSS framework
- Framer Motion for smooth animations

---
Link:- https://car-rental-fullstack-3k8k-4hy532568.vercel.app/

⭐ Star this repository if you found it helpful!
