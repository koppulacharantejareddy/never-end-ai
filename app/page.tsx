export default function Home() {
  return (
    <main className="ne-page">
      <div className="ne-container">
        <header className="ne-header">
          <div className="ne-brand">
            ∞ NEVER END <span>AI</span>
          </div>
        </header>

        <section className="ne-hero">
          <div className="ne-badge">
            AI for learning, creating & research
          </div>

          <h1 className="ne-title">
            Your AI.
            <br />
            Your Ideas.
            <br />
            Never End.
          </h1>

          <p className="ne-subtitle">
            Never End AI is a general-purpose artificial intelligence
            platform designed to help you learn, create, research,
            solve problems, and turn ideas into action.
          </p>

          <p className="ne-founder">
            Founded by <strong>Koppula Charan Teja Reddy</strong>
          </p>

          <div className="ne-card">
            <textarea
              className="ne-textarea"
              placeholder="Ask Never End AI anything..."
            />

            <button className="ne-button">
              Ask Never End AI
            </button>
          </div>
        </section>

        <footer className="ne-footer">
          <p>© {new Date().getFullYear()} Never End AI.</p>
          <p>
            Founded by Koppula Charan Teja Reddy.
          </p>
          <p>Your AI. Your Ideas. Never End.</p>
        </footer>
      </div>
    </main>
  );
}
