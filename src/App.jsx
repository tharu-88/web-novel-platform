

import { useState } from "react";
import { BrowserRouter, Routes, Route, Link, useLocation } from "react-router-dom";
import "./App.css";
import BookCover from "./bookcover";

const novels = [
  { id: 1, title: "The Silent Kingdom", author: "Moonlight Writer", genre: "Fantasy", description: "A mysterious kingdom hides a forgotten secret." },
  { id: 2, title: "Beyond the Stars", author: "Nova Dreams", genre: "Sci-Fi", description: "An unexpected journey across the universe." },
  { id: 3, title: "Letters in the Rain", author: "Daisy Lane", genre: "Romance", description: "Two strangers connect through forgotten letters." },
];

function Navbar() {
  const location = useLocation();

  return (
    <nav className="navbar">
      <Link to="/" className="logo">NovelNest<span>.</span></Link>

      <div className="nav-links">
        <Link className={location.pathname === "/" ? "active" : ""} to="/">
          Home
        </Link>
        <Link className={location.pathname === "/explore" ? "active" : ""} to="/explore">
          Explore
        </Link>
        <Link className={location.pathname === "/publish" ? "active" : ""} to="/publish">
          Publish
        </Link>
        
<button
  className="profile-button"
  onClick={() => alert("Profile page coming soon!")}
>
  <span className="profile-avatar">👤</span>
  <span>Profile</span>
</button>

      </div>
    </nav>
  );
}

function Home() {
  return (
    <main>
      <section className="hero" id="home">
        <div>
          <p className="eyebrow">YOUR NEXT ADVENTURE STARTS HERE</p>
          <h1>Every story deserves <span>a reader.</span></h1>
          <p>Discover new worlds, explore unforgettable stories, and share your imagination.</p>
          <Link to="/explore" className="btn-primary">Explore Stories</Link>
        </div>
      </section>

      <section className="library-section">
        <h2>Featured Stories</h2>
        <p>Discover stories selected for curious minds.</p>
        <div className="novel-grid">
          {novels.slice(0, 3).map((novel) => (
            <article className="novel-card" key={novel.id}>
              <span className="genre">{novel.genre}</span>
              <h3>{novel.title}</h3>
              <p>By {novel.author}</p>
              <p>{novel.description}</p>
              <Link to="/explore" className="text-link">Discover more →</Link>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

function Explore() {
  const [search, setSearch] = useState("");

  const filteredNovels = novels.filter((novel) =>
    `${novel.title} ${novel.author} ${novel.genre}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <main className="library-section page-section">
      <p className="eyebrow">FIND YOUR NEXT FAVOURITE</p>
      <h1>Explore Stories</h1>
      <p>Search novels by title, author, or genre.</p>

      <input
        className="search-input"
        type="search"
        placeholder="Search stories..."
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />

      <div className="novel-grid">
        {filteredNovels.map((novel) => (
          
<article className="novel-card" key={novel.id}>
  <BookCover
    title={novel.title}
    author={novel.author}
    genre={
      novel.genre === "Sci-Fi"
        ? "scifi"
        : novel.genre.toLowerCase()
    }
  />

  <h3>{novel.title}</h3>
  <p>By {novel.author}</p>
  <p>{novel.description}</p>

  <button
    className="btn-primary"
    onClick={() => alert("The reading page will be added next!")}
  >
    Start Reading
  </button>
</article>

        ))}
      </div>

      {filteredNovels.length === 0 && <p>No stories found. Try another search.</p>}
    </main>
  );
}


function Publish() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [genre, setGenre] = useState("Fantasy");
  const [description, setDescription] = useState("");
  const [coverPhoto, setCoverPhoto] = useState(null);

  function handleSubmit(event) {
    event.preventDefault();

    alert(
      "Your story details are ready! Permanent publishing will be added when the backend is connected."
    );
  }

  return (
    <main className="page-section publish-page">
      <p className="eyebrow">SHARE YOUR IMAGINATION</p>
      <h1>Publish Your Story</h1>
      <p>Introduce your story to the NovelNest community.</p>

      <form className="publish-form" onSubmit={handleSubmit}>
        <label>
          Novel Title
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter your novel title"
            required
          />
        </label>

        <label>
          Author Name
          <input
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            placeholder="Enter author name"
            required
          />
        </label>

        <label>
          Genre
          <select
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
          >
            <option>Fantasy</option>
            <option>Romance</option>
            <option>Sci-Fi</option>
            <option>Mystery</option>
            <option>Adventure</option>
            <option>Horror</option>
            <option>Other</option>
          </select>
        </label>

        <label>
          Cover Photo
          <input
            type="file"
            accept="image/*"
            onChange={(e) =>
              setCoverPhoto(e.target.files?.[0] || null)
            }
          />
        </label>

        {coverPhoto && (
          <div className="cover-preview">
            <p>Cover Preview</p>
            <img
              src={URL.createObjectURL(coverPhoto)}
              alt="Selected novel cover"
            />
            <button
              type="button"
              className="remove-cover"
              onClick={() => setCoverPhoto(null)}
            >
              Remove Cover
            </button>
          </div>
        )}

        <label>
          Story Description
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows="5"
            placeholder="Write a short description of your story..."
            required
          />
        </label>

        <button type="submit" className="btn-primary">
          Publish Story
        </button>
      </form>
    </main>
  );
}


function AppLayout() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/publish" element={<Publish />} />
      </Routes>
      <footer className="footer">© 2026 NovelNest. Every story matters.</footer>
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppLayout />
    </BrowserRouter>
  );
}
