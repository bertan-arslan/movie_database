# 🎬 Movie Database v3

This project is a movie database application that supports full CRUD operations. Users can view, add, edit, and delete movies, mark them as favorites, and toggle a dark mode theme.

## 🚀 Technologies Used

- React (v17+)
- React Router DOM (v5)
- Axios
- Tailwind CSS
- Custom Hook: `useLocalStorage`
- Vite (or CRA)
- RESTful API

## 🛠 Features

### 📝 CRUD Operations
- List all movies
- View movie details
- Add a new movie
- Edit an existing movie
- Delete a movie

### ⭐ Favorites
- Add movies to favorites
- Prevent adding duplicates to favorites
- Automatically remove deleted movies from favorites

### 🌙 Dark Mode
- Toggleable dark mode UI
- Preference stored in localStorage

## 🔗 API Information

All requests are made to `https://nextgen-project.onrender.com/api/s11d3/movies`  
Sample movie object:

```json
{
  "id": 5,
  "title": "Tombstone",
  "director": "George P. Cosmatos",
  "metascore": 89,
  "genre": "Drama",
  "description": "..."
}
```

## 🧩 Project Structure

```
src/
│
├── components/
│   ├── AddMovieForm.jsx
│   ├── EditMovieForm.jsx
│   ├── FavoriteMovieList.jsx
│   ├── Movie.jsx
│   ├── MovieList.jsx
│   └── MovieHeader.jsx
│
├── hooks/
│   └── useLocalStorage.js
│
├── App.jsx
└── index.css
```

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/your-username/movie-database-v3.git
cd movie-database-v3

# Install dependencies
npm install

# Start the development server
npm run dev
```

## 🧪 Developer Notes

- API endpoints are fixed.
- Dark mode preference is persisted with `useLocalStorage`.
- Routing is implemented using React Router v5.
- The UI is responsive and styled with Tailwind CSS.
