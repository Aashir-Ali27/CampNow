# YelpCamp – Campground Booking Platform

YelpCamp is a full-stack web application where users can explore campgrounds, create campground listings, upload images, and share reviews.

## Features

- User registration and login using Passport.js
- Create, edit, and delete campground listings
- Upload multiple campground images using Cloudinary
- Add and delete reviews
- Interactive maps using MapTiler
- Server-side validation using Joi
- Session management using MongoDB
- Responsive user interface

## Tech Stack

**Frontend:** HTML, CSS, Bootstrap, JavaScript, EJS

**Backend:** Node.js, Express.js

**Database:** MongoDB, Mongoose

**Authentication:** Passport.js

**Other Services:** Cloudinary, MapTiler, MongoDB Atlas

**Deployment:** Vercel

## Installation and Setup

1. Clone the repository:

```bash
git clone https://github.com/YOUR_USERNAME/CampNow.git
cd CampNOw
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file in the root directory and configure the following variables:

```env
DB_URL=your_mongodb_connection_string
SESSION_SECRET=your_session_secret
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_KEY=your_cloudinary_api_key
CLOUDINARY_SECRET=your_cloudinary_api_secret
MAPTILER_API_KEY=your_maptiler_api_key
```

4. Start the application:

```bash
node app.js
```

5. Open your browser:

```text
http://localhost:3000
```

## Database Seeding

To populate the database with sample campground data:

```bash
node seeds/index.js
```

Make sure your MongoDB connection is configured before running the seed script.

## Live Demo

https://campground-plum.vercel.app

## Author

Aashir Ali Shaikh

## License

This project is available for educational and personal use.