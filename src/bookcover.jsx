
const coverStyles = {
  fantasy: {
    background: "radial-gradient(circle at 50% 35%, #806020, #17130d 65%)",
    symbol: "☾",
    accent: "#F4C430",
  },
  scifi: {
    background: "radial-gradient(circle at 50% 35%, #246078, #090d1c 70%)",
    symbol: "✦",
    accent: "#8BE9FD",
  },
  romance: {
    background: "radial-gradient(circle at 50% 35%, #9e485c, #29121f 75%)",
    symbol: "♡",
    accent: "#F7B7C9",
  },
};

export default function BookCover({ title, author, genre }) {
  const style = coverStyles[genre] || coverStyles.fantasy;

  return (
    <div
      className="book-cover"
      style={{ background: style.background, "--cover-accent": style.accent }}
    >
      <div className="cover-frame">
        <span className="cover-symbol">{style.symbol}</span>
        <span className="cover-label">{genre.toUpperCase()} NOVEL</span>

        <h3 className="cover-title">{title}</h3>

        <div className="cover-decoration">✦ ── ✦ ── ✦</div>

        <p className="cover-author">{author.toUpperCase()}</p>
      </div>
    </div>
  );
}
