import './globals.css';

export default function Home() {
  return <VideoStudio />;
}

function VideoStudio() {
  return (
    <main className="page-shell">
      <div className="orb orb-one" />
      <div className="orb orb-two" />

      <header className="topbar">
        <div className="brand-wrap">
          <div className="brand-mark">V</div>
          <div>
            <p className="eyebrow">AI creative suite</p>
            <h1>Video AI Studio</h1>
          </div>
        </div>
        <button className="primary-button">Create project</button>
      </header>

      <section className="hero">
        <div className="hero-copy">
          <span className="badge">Reference-to-video generation</span>
          <h2>Turn any reference video into a new AI-edited story using your images.</h2>
          <p>
            Upload a reference video, add your own visuals, and generate a similar edit. Then enhance low-resolution footage into sharper, cleaner output.
          </p>
          <div className="hero-actions">
            <button className="primary-button">Generate edit</button>
            <button className="secondary-button">Enhance video</button>
          </div>
        </div>

        <div className="hero-card">
          <div className="mini-video">
            <div className="mini-video-header">
              <span className="dot red" />
              <span className="dot yellow" />
              <span className="dot green" />
            </div>
            <div className="frame-grid">
              <div className="frame tall" />
              <div className="frame" />
              <div className="frame" />
              <div className="frame wide" />
            </div>
          </div>
          <div className="stats-row">
            <div>
              <strong>24 fps</strong>
              <span>Frame motion</span>
            </div>
            <div>
              <strong>4K</strong>
              <span>Output target</span>
            </div>
            <div>
              <strong>HD → 4K</strong>
              <span>Upscale mode</span>
            </div>
          </div>
        </div>
      </section>

      <section className="workspace-grid">
        <div className="panel input-panel">
          <div className="panel-header">
            <h3>Project inputs</h3>
            <span className="tag">Ready</span>
          </div>

          <div className="field-group">
            <label htmlFor="reference-video">Reference video</label>
            <input id="reference-video" type="file" accept="video/*" />
          </div>

          <div className="field-group">
            <label htmlFor="input-images">Input images</label>
            <input id="input-images" type="file" accept="image/*" multiple />
          </div>

          <div className="two-col">
            <div className="field-group">
              <label htmlFor="duration">Clip duration</label>
              <input id="duration" type="number" defaultValue={18} min={5} max={90} />
            </div>
            <div className="field-group">
              <label htmlFor="aspect">Aspect ratio</label>
              <select id="aspect" defaultValue="16:9">
                <option>16:9</option>
                <option>9:16</option>
                <option>1:1</option>
                <option>4:5</option>
              </select>
            </div>
          </div>

          <div className="field-group">
            <label htmlFor="style">Visual style</label>
            <select id="style" defaultValue="Cinematic">
              <option>Cinematic</option>
              <option>Documentary</option>
              <option>Social Reel</option>
              <option>Product Promo</option>
            </select>
          </div>

          <div className="field-group">
            <label htmlFor="prompt">Prompt</label>
            <textarea id="prompt" rows={4} defaultValue="Create a cinematic highlight reel using these uploaded images, matching the pacing and energy of the reference video." />
          </div>
        </div>

        <div className="panel process-panel">
          <div className="panel-header">
            <h3>Processing</h3>
            <span className="tag success">AI-enabled</span>
          </div>

          <div className="pipeline">
            <div className="pipeline-step current">
              <span className="step-index">1</span>
              <div>
                <strong>Reference analysis</strong>
                <p>Scene timing, beat detection, motion, and color grading analyzed.</p>
              </div>
            </div>
            <div className="pipeline-step">
              <span className="step-index">2</span>
              <div>
                <strong>Frame composition</strong>
                <p>Images are sequenced and aligned to the motion patterns detected.</p>
              </div>
            </div>
            <div className="pipeline-step">
              <span className="step-index">3</span>
              <div>
                <strong>Upscale & restore</strong>
                <p>Low-quality source is enhanced with denoising, sharpening, and interpolation.</p>
              </div>
            </div>
          </div>

          <div className="progress-box">
            <div className="progress-row">
              <span>Generation progress</span>
              <strong>72%</strong>
            </div>
            <div className="progress-bar">
              <span style={{ width: '72%' }} />
            </div>
          </div>

          <div className="action-row">
            <button className="primary-button wide">Generate video</button>
            <button className="secondary-button wide">Upscale</button>
          </div>
        </div>
      </section>

      <section className="feature-grid">
        <article className="feature-card">
          <h4>Reference-based editing</h4>
          <p>Match pacing, transitions, visual energy, and scene rhythm from the uploaded reference sample.</p>
        </article>
        <article className="feature-card">
          <h4>Image-to-video generation</h4>
          <p>Blend your uploaded stills into a dynamic motion sequence with cinematic transitions.</p>
        </article>
        <article className="feature-card">
          <h4>Enhance poor quality</h4>
          <p>Improve blurry, noisy, or low-resolution footage using restoration and upscaling tooling.</p>
        </article>
      </section>
    </main>
  );
}
