# Car Rental Full-Stack Project Documentation

## Project Overview

**Car Rental Full-Stack Application** is a comprehensive web application that allows users to rent cars and owners to manage their vehicle fleet. The application features a modern, animated frontend built with React and a robust backend API built with Node.js and Express.

---

## 🚀 Key Features

### For Users:
- **Browse Cars**: View available cars with detailed information
- **Search & Filter**: Find cars by location, date, and availability
- **Book Cars**: Reserve cars for specific dates
- **Manage Bookings**: View booking history and status
- **User Authentication**: Secure login and registration

### For Owners:
- **Add Cars**: List new vehicles for rental
- **Manage Fleet**: Update car details and availability
- **Booking Management**: View and manage customer bookings
- **Dashboard**: Track revenue and booking statistics
- **Profile Management**: Update profile information

---

## 🛠️ Technology Stack

### Frontend:
- **React 19.1.0** - UI Library
- **Vite 6.3.5** - Build Tool
- **TailwindCSS 4.1.10** - Styling Framework
- **Framer Motion 12.19.1** - Animation Library
- **React Router DOM 7.6.2** - Navigation
- **Axios 1.10.0** - HTTP Client
- **React Hot Toast 2.5.2** - Notifications

### Backend:
- **Node.js** - Runtime Environment
- **Express 5.1.0** - Web Framework
- **MongoDB** - Database
- **Mongoose 8.16.0** - ODM
- **JWT** - Authentication
- **bcrypt 6.0.0** - Password Hashing
- **ImageKit** - Image Storage
- **Multer** - File Upload

---

## 📁 Project Structure

```
CarRental-fullstack/
├── client/                  # Frontend React Application
│   ├── src/
│   │   ├── components/      # Reusable UI Components
│   │   ├── pages/          # Page Components
│   │   ├── context/        # Global State Management
│   │   ├── assets/         # Images, Icons, Assets
│   │   └── App.jsx         # Main App Component
│   ├── package.json
│   ├── vite.config.js
│   └── .env
│
└── server/                  # Backend API
    ├── controllers/         # Business Logic
    ├── models/             # Database Models
    ├── routes/             # API Routes
    ├── middleware/         # Custom Middleware
    ├── configs/            # Configuration Files
    ├── server.js           # Main Server File
    ├── package.json
    └── .env
```

---

## 🗄️ Database Schema

### User Model
```javascript
{
  name: String (required),
  email: String (required, unique),
  password: String (required),
  role: String (enum: ["owner", "user"], default: "user"),
  image: String (default: "")
}
```

### Car Model
```javascript
{
  owner: ObjectId (ref: User),
  brand: String (required),
  model: String (required),
  image: String (required),
  year: Number (required),
  category: String (required),
  seating_capacity: Number (required),
  fuel_type: String (required),
  transmission: String (required),
  pricePerDay: Number (required),
  location: String (required),
  description: String (required),
  isAvailable: Boolean (default: true)
}
```

### Booking Model
```javascript
{
  car: ObjectId (ref: Car),
  user: ObjectId (ref: User),
  owner: ObjectId (ref: User),
  pickupDate: Date (required),
  returnDate: Date (required),
  status: String (enum: ["pending", "confirmed", "cancelled"]),
  price: Number (required)
}
```

---

## 🔧 API Endpoints

### User Routes (`/api/user`)
- `POST /register` - User registration
- `POST /login` - User login
- `GET /data` - Get user data (protected)
- `GET /cars` - Get all cars

### Owner Routes (`/api/owner`)
- `POST /change-role` - Change user role to owner
- `POST /add-car` - Add new car (protected)
- `GET /cars` - Get owner's cars (protected)
- `POST /toggle-car` - Toggle car availability (protected)
- `POST /delete-car` - Delete car (protected)
- `GET /dashboard` - Get dashboard data (protected)
- `POST /update-image` - Update profile image (protected)

### Booking Routes (`/api/bookings`)
- `POST /check-availability` - Check car availability
- `POST /create` - Create booking (protected)
- `GET /user` - Get user bookings (protected)
- `GET /owner` - Get owner bookings (protected)
- `POST /change-status` - Change booking status (protected)

---

## 🎨 UI Components

### Core Components:
- **Hero** - Animated homepage with search functionality
- **Navbar** - Navigation with user authentication
- **CarCard** - Individual car display component
- **Login** - Authentication modal
- **Footer** - Site footer with links
- **Title** - Reusable title component

### Owner Components:
- **Sidebar** - Owner dashboard navigation
- **Dashboard** - Overview statistics
- **AddCar** - Car creation form
- **ManageCars** - Car management interface
- **ManageBookings** - Booking management

---

## 🌟 Enhanced Features (Recent Updates)

### 1. Currency Localization
- Changed from USD ($) to Indian Rupees (₹)
- Environment variable configuration: `VITE_CURRENCY=₹`

### 2. Location Updates
- Updated cities to Indian locations:
  - Jalandhar
  - Chandigarh
  - Delhi
  - Gurugram

### 3. Animated Hero Section
- **Live Background**: Moving gradient elements and floating particles
- **Car Animation**: Slow-motion horizontal movement (25s cycle)
- **Advanced Animations**: Multiple layered animations using Framer Motion

### 4. Animation Details
```javascript
// Car Animation Configuration
initial: { y: 100, opacity: 0, x: -200 }
animate: { 
  y: [0, -20, 0],        // Vertical floating (6s)
  x: [0, 300, 0],        // Horizontal movement (25s)
  opacity: 1,            // Fade in
  rotate: [0, 1, -1, 0]  // Subtle rotation (8s)
}
```

---

## 🔐 Security Features

### Authentication:
- JWT token-based authentication
- Password hashing with bcrypt
- Protected routes with middleware
- Token expiration handling

### Data Validation:
- Input sanitization
- Email validation
- Password strength requirements
- Required field validation

---

## 📱 Responsive Design

### Mobile-First Approach:
- TailwindCSS responsive utilities
- Adaptive layouts for all screen sizes
- Touch-friendly interactions
- Optimized mobile navigation

### Breakpoints:
- `sm:` 640px and up
- `md:` 768px and up
- `lg:` 1024px and up
- `xl:` 1280px and up
- `2xl:` 1536px and up

---

## 🚀 Deployment Configuration

### Frontend (Vercel):
```json
{
  "version": 2,
  "builds": [{ "src": "package.json", "use": "@vercel/static-build" }],
  "routes": [{ "src": "/(.*)", "dest": "/" }]
}
```

### Backend (Vercel):
```json
{
  "version": 2,
  "builds": [{ "src": "server.js", "use": "@vercel/node" }],
  "routes": [{ "src": "/(.*)", "dest": "server.js" }]
}
```

---

## 🔧 Environment Variables

### Client (.env):
```env
VITE_CURRENCY=₹
VITE_BASE_URL=http://localhost:3000
```

### Server (.env):
```env
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net
JWT_SECRET=your_jwt_secret
IMAGEKIT_PUBLIC_KEY=your_imagekit_public_key
IMAGEKIT_PRIVATE_KEY=your_imagekit_private_key
IMAGEKIT_URL_ENDPOINT=your_imagekit_url_endpoint
```

---

## 📋 Installation & Setup

### 1. Clone Repository
```bash
git clone <repository-url>
cd CarRental-fullstack
```

### 2. Install Dependencies
```bash
# Frontend
cd client
npm install

# Backend
cd ../server
npm install
```

### 3. Environment Configuration
- Create `.env` files in both client and server directories
- Add required environment variables

### 4. Start Development Servers
```bash
# Backend (Port 3000)
cd server
npm run server

# Frontend (Port 5173)
cd client
npm run dev
```

---

## 📊 Key Functionalities

### 1. Car Availability System
- Real-time availability checking
- Date-based booking conflicts prevention
- Automatic availability updates

### 2. Booking Management
- Multi-status booking system (pending, confirmed, cancelled)
- Price calculation based on rental duration
- Booking history tracking

### 3. User Role Management
- Dynamic role switching (user to owner)
- Role-based access control
- Separate dashboards for different user types

### 4. File Upload System
- ImageKit integration for car images
- Secure file handling with Multer
- Automatic image optimization

---

## 🎯 Performance Optimizations

### Frontend:
- Lazy loading for components
- Optimized animations with Framer Motion
- Efficient state management with Context API
- Vite for fast build times

### Backend:
- Database query optimization
- JWT token caching
- Efficient middleware chain
- Error handling and logging

---

## 🔮 Future Enhancements

### Planned Features:
1. **Advanced Search**: Filter by price, brand, fuel type
2. **Rating System**: User reviews and ratings
3. **Payment Integration**: Online payment gateway
4. **Notifications**: Real-time booking updates
5. **Analytics Dashboard**: Detailed reporting for owners
6. **Mobile App**: React Native version

### Technical Improvements:
1. **TypeScript**: Type safety implementation
2. **Testing**: Unit and integration tests
3. **Performance**: Code splitting and optimization
4. **SEO**: Server-side rendering with Next.js
5. **PWA**: Progressive Web App features

---

## 🎨 Design System

### Color Palette:
- Primary: Blue gradient (#3B82F6 to #4F46E5)
- Secondary: Indigo/Purple gradients
- Accent: Green, Yellow, Orange particles
- Neutral: Gray scale for text

### Typography:
- Primary: System fonts optimized for readability
- Sizes: Responsive scaling (text-sm to text-5xl)
- Weights: Regular, medium, semibold

### Animations:
- Duration: 0.3s to 30s (based on element)
- Easing: Linear, easeInOut, custom curves
- Transforms: Translate, scale, rotate, opacity

---

## 🛡️ Error Handling

### Frontend:
- Global error boundaries
- Toast notifications for user feedback
- Graceful fallbacks for failed requests
- Loading states for better UX

### Backend:
- Comprehensive error middleware
- Database connection error handling
- Validation error responses
- Security error prevention

---

## 📚 Learning Outcomes

### Technical Skills:
1. **Full-Stack Development**: End-to-end application development
2. **Modern React**: Hooks, Context API, and latest patterns
3. **Node.js/Express**: RESTful API development
4. **MongoDB**: NoSQL database design and operations
5. **Authentication**: JWT implementation and security
6. **Animation**: Advanced animations with Framer Motion
7. **Responsive Design**: Mobile-first CSS with TailwindCSS

### Best Practices:
1. **Code Organization**: Modular and maintainable structure
2. **Security**: Authentication and data protection
3. **User Experience**: Intuitive interface design
4. **Performance**: Optimized loading and animations
5. **Scalability**: Extensible architecture

---

## 📞 Support & Maintenance

### Development Environment:
- Node.js 18+ required
- MongoDB 4.4+ recommended
- Modern browser support (Chrome, Firefox, Safari, Edge)

### Troubleshooting:
- Check environment variables
- Verify database connectivity
- Ensure proper CORS configuration
- Monitor console for errors

---

## 🎊 Conclusion

This Car Rental Full-Stack Project demonstrates modern web development practices with a focus on user experience, security, and scalability. The combination of React's component-based architecture, Node.js backend, and MongoDB database creates a robust foundation for a real-world application.

The enhanced animations and Indian localization make it particularly suitable for the Indian market, while the modular architecture allows for easy expansion and maintenance.

---

*Documentation Version: 1.0*  
*Last Updated: January 2025*  
*Project Status: Active Development*
