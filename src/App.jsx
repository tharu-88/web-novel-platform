
import { useState } from 'react'
import './App.css'

function App() {
  const [search, setSearch] = useState('')

  const novels = [
    {
      id: 1,
      title: 'The Silent Kingdom',
      author: 'Moonlight Writer',
      genre: 'Fantasy',
      description: 'A young hero discovers a secret that could change the kingdom forever.',
      emoji: '🏰',
    },
    {
      id: 2,
      title: 'Beyond the Stars',
      author: 'Nova Dreams',
      genre: 'Sci-Fi',
      description: 'An unexpected journey through the mysteries of the universe.',
      emoji: '🚀',
    },
    {
      id: 3,
      title: 'Letters in the Rain',
      author: 'Daisy Lane',
      genre: 'Romance',
      description: 'Two strangers find a connection through forgotten letters.',
      emoji: '💌',
    },
  ]

  const filteredNovels = novels.filter((novel) =>
    `${novel.title} ${novel.author} ${novel.genre}`
      .toLowerCase()
      .includes(search.toLowerCase())
  )

  return (
    <div className="app">
      <header className="navbar">
        <a className="logo" href="#home">NovelNest<span>.</span></a>

        <nav>
          <a href="#home">Home</a>
          <a href="#library">Explore</a>
          <a href="#publish">Publish</a>
        </nav>

        <button className="login-button" onClick={() => alert('Login feature coming soon!')}>
          Sign In
        </button>
      </header>

      <main>
        <section className="hero" id="home">
          <p className="eyebrow">YOUR NEXT ADVENTURE STARTS HERE</p>
          <h1>Stories that take<br />you <span>somewhere new.</span></h1>
          <p className="hero-text">
            Discover amazing stories, meet new worlds, and share your
            imagination with readers everywhere.
          </p>

          <a className="explore-button" href="#library">Explore Stories ↓</a>
        </section>

        <section className="library" id="library">
          <div className="section-heading">
            <div>
              <p className="eyebrow">FIND YOUR NEXT READ</p>
              <h2>Explore the Library</h2>
            </div>
            <input
              type="search"
              placeholder="Search novels or genres..."
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              aria-label="Search novels"
            />
          </div>

          <div className="novel-grid">
            {filteredNovels.map((novel) => (
              <article className="novel-card" key={novel.id}>
                <div className={`novel-cover cover-${novel.id}`}>
                  <span>{novel.emoji}</span>
                  <small>{novel.genre.toUpperCase()}</small>
                </div>
                <div className="novel-info">
                  <p className="genre">{novel.genre}</p>
                  <h3>{novel.title}</h3>
                  <p className="author">by {novel.author}</p>
                  <p className="description">{novel.description}</p>
                  <button
                    className="read-button"
                    onClick={() => alert(`"${novel.title}" reading page coming soon!`)}
                  >
                    Start Reading →
                  </button>
                </div>
              </article>
            ))}
          </div>

          {filteredNovels.length === 0 && (
            <p className="empty-message">No novels found. Try another search.</p>
          )}
        </section>

        <section className="publish-banner" id="publish">
          <div>
            <p className="eyebrow">YOUR STORY MATTERS</p>
            <h2>Have a story to tell?</h2>
            <p>Share your imagination with a community of readers.</p>
          </div>
          <button onClick={() => alert('Publishing feature coming soon!')}>
            Become a Writer ↗
          </button>
        </section>
      </main>

      <footer>
        <a className="logo" href="#home">NovelNest<span>.</span></a>
        <p>Every great adventure begins with a page.</p>
        <small>© 2026 NovelNest. Built with React.</small>
      </footer>
    </div>
  )
}

export default App

