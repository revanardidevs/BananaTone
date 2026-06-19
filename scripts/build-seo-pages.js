#!/usr/bin/env node
/**
 * BananaTone SEO Page Generator
 * Generates 20 long-tail keyword pages from a data array.
 * Each page follows the existing pattern (site.css, topbar, cards, footer).
 *
 * Usage:  node scripts/build-seo-pages.js
 */

const fs = require("fs");
const path = require("path");

const ROOT = path.resolve(__dirname, "..");
const YEAR = new Date().getFullYear();

// ─── Page definitions ────────────────────────────────────────────────
const PAGES = [
  // ── Intervals ──────────────────────────────────────────────────────
  {
    slug: "perfect-fifth-ear-training",
    title: "Perfect Fifth Ear Training | BananaTone",
    description: "Train your ear to recognize the perfect fifth interval instantly. Free interactive exercises with piano sounds.",
    canonical: "https://bananatone.com/perfect-fifth-ear-training",
    h1: "Perfect Fifth Ear Training",
    intro: "The perfect fifth is the most stable and fundamental interval in music after the octave. It forms the backbone of power chords and is crucial for developing strong relative pitch.",
    cards: [
      {
        h2: "What is a perfect fifth?",
        body: `<p>A perfect fifth (P5) spans seven half-steps (semitones) on the keyboard or fretboard. For example, if you start on C and move up seven half-steps, you land on G. The distance between C and G is a perfect fifth.</p>
<p>In music theory shorthand it is written as <strong>P5</strong>. The frequency ratio is 3:2, which makes it one of the simplest and most consonant intervals.</p>`
      },
      {
        h2: "What does a perfect fifth sound like?",
        body: `<p>The perfect fifth sounds incredibly stable, open, and consonant. Because the sound waves align very neatly, the two notes blend together almost seamlessly.</p>
<p>A common trick to remember the perfect fifth is to associate it with famous songs. The first two notes of the <strong>"Star Wars"</strong> main theme or <strong>"Twinkle Twinkle Little Star"</strong> form an ascending perfect fifth.</p>`
      },
      {
        h2: "How to practice perfect fifth recognition",
        body: `<p>To truly master this interval, you should practice it in isolation and compare it against other intervals:</p>
<ul>
  <li>Listen to it played melodically (one note after another).</li>
  <li>Listen to it played harmonically (both notes at the same time).</li>
  <li>Compare it against the perfect fourth and octave to hear the subtle differences.</li>
  <li>Try to sing the interval from any random starting note.</li>
</ul>`
      }
    ],
    ctaLabel: "Practice perfect fifths on BananaTone",
    ctaLink: "/"
  },

  {
    slug: "major-third-vs-minor-third-ear-training",
    title: "Major 3rd vs Minor 3rd Ear Training — Hear The Difference | BananaTone",
    description: "Learn to distinguish major third from minor third intervals with free interactive ear training exercises.",
    canonical: "https://bananatone.com/major-third-vs-minor-third-ear-training",
    h1: "Major 3rd vs Minor 3rd Ear Training",
    intro: "The major third and minor third are the two intervals that define whether a chord sounds happy or sad. Learning to hear the difference is one of the most important skills for any musician.",
    cards: [
      {
        h2: "What is the difference between a major 3rd and minor 3rd?",
        body: `<p>A <strong>major third</strong> (M3) spans four half-steps — for example, C to E. It sounds bright, happy, and open. A <strong>minor third</strong> (m3) spans three half-steps — for example, C to E♭. It sounds darker, sadder, and more melancholic.</p>
<p>This single half-step difference completely changes the emotional character of a chord or melody.</p>`
      },
      {
        h2: "How do they sound?",
        body: `<p>The <strong>major third</strong> is often described as "happy" or "bright." Think of the first two notes of <strong>"Kumbaya"</strong> or <strong>"When the Saints Go Marching In."</strong></p>
<p>The <strong>minor third</strong> sounds "sad" or "dark." The opening of <strong>"Greensleeves"</strong> or <strong>"Hey Jude"</strong> (the "Jude" leap) are classic minor third examples.</p>`
      },
      {
        h2: "Practice tips for hearing major vs minor thirds",
        body: `<ul>
  <li>Start by listening to them side-by-side repeatedly. Your ear will start to notice the "brightness" difference.</li>
  <li>Use BananaTone's interval trainer with only Major 3rd and Minor 3rd selected in the answer pool.</li>
  <li>After you're confident, add more intervals like Perfect 4th and Perfect 5th to increase difficulty.</li>
  <li>Practice in both ascending and harmonic modes.</li>
</ul>`
      }
    ],
    ctaLabel: "Practice Major 3rd vs Minor 3rd",
    ctaLink: "/"
  },

  {
    slug: "perfect-fourth-ear-training",
    title: "Perfect Fourth Interval Ear Training — Practice Online | BananaTone",
    description: "Master the perfect fourth interval with free online ear training. Learn what a P4 sounds like and practice identifying it.",
    canonical: "https://bananatone.com/perfect-fourth-ear-training",
    h1: "Perfect Fourth Ear Training",
    intro: "The perfect fourth is one of the most recognizable intervals in music. It appears in countless melodies and is essential for building strong relative pitch skills.",
    cards: [
      {
        h2: "What is a perfect fourth?",
        body: `<p>A perfect fourth (P4) spans five half-steps. For example, from C up to F is a perfect fourth. It is the inversion of the perfect fifth — if you flip a P5 upside down, you get a P4.</p>
<p>The perfect fourth has a frequency ratio of 4:3, making it very consonant and pleasing to the ear.</p>`
      },
      {
        h2: "What does a perfect fourth sound like?",
        body: `<p>The perfect fourth has a somewhat "floating" or "suspended" quality. It feels like it wants to resolve somewhere. The most famous song reference is <strong>"Here Comes the Bride"</strong> (Wagner's Bridal Chorus) — the first leap is an ascending perfect fourth.</p>
<p>Another example: <strong>"Amazing Grace"</strong> begins with a perfect fourth jump on the word "A-mazing."</p>`
      },
      {
        h2: "Perfect fourth vs perfect fifth",
        body: `<p>These two intervals are easily confused because they are inversions of each other. Here's how to tell them apart:</p>
<ul>
  <li><strong>Perfect Fourth:</strong> Sounds more "hollow" and slightly unresolved. It creates tension that wants to move.</li>
  <li><strong>Perfect Fifth:</strong> Sounds more "open" and stable. It feels grounded and complete.</li>
  <li>Practice both together to train your ear to notice the subtle difference in character.</li>
</ul>`
      }
    ],
    ctaLabel: "Practice perfect fourths on BananaTone",
    ctaLink: "/"
  },

  {
    slug: "tritone-ear-training",
    title: "Tritone Ear Training — Recognize The Devil's Interval | BananaTone",
    description: "Learn to identify the tritone (augmented 4th / diminished 5th), the most dissonant interval in Western music.",
    canonical: "https://bananatone.com/tritone-ear-training",
    h1: "Tritone Ear Training",
    intro: "The tritone — also called the \"Devil's Interval\" — is the most dissonant interval in Western music. At exactly six half-steps, it sits right in the middle of the octave and creates maximum tension.",
    cards: [
      {
        h2: "What is a tritone?",
        body: `<p>A tritone (TT) is an interval spanning six half-steps (three whole tones — hence "tri-tone"). From C to F# is a tritone. It can also be called an <strong>augmented fourth</strong> or <strong>diminished fifth</strong>, depending on context.</p>
<p>It divides the octave exactly in half, which gives it a uniquely unstable, ambiguous quality.</p>`
      },
      {
        h2: "Why is it called the Devil's Interval?",
        body: `<p>In the Middle Ages, the tritone was considered so dissonant that it was nicknamed <em>diabolus in musica</em> (the Devil in music). Singers were supposedly forbidden from using it in sacred music.</p>
<p>Today the tritone is used extensively in jazz, blues, and rock. The opening of <strong>"The Simpsons"</strong> theme and <strong>"Purple Haze"</strong> by Jimi Hendrix feature prominent tritones.</p>`
      },
      {
        h2: "How to recognize a tritone",
        body: `<ul>
  <li>It sounds tense, eerie, and "wrong" — like two notes fighting each other.</li>
  <li>It doesn't sound "bright" like a major interval or "dark" like a minor interval — it sounds <em>unsettled</em>.</li>
  <li>Compare it against the perfect fourth (5 half-steps) and perfect fifth (7 half-steps) to hear how the tritone is uniquely unstable.</li>
  <li>Once you learn to hear the tension, the tritone becomes one of the easiest intervals to identify.</li>
</ul>`
      }
    ],
    ctaLabel: "Practice tritone recognition on BananaTone",
    ctaLink: "/"
  },

  {
    slug: "major-7th-vs-minor-7th-interval-ear-training",
    title: "Major 7th vs Minor 7th Ear Training Exercises | BananaTone",
    description: "Practice distinguishing the major seventh from the minor seventh interval with free interactive exercises.",
    canonical: "https://bananatone.com/major-7th-vs-minor-7th-interval-ear-training",
    h1: "Major 7th vs Minor 7th Ear Training",
    intro: "The seventh intervals are critical for understanding jazz harmony, chord extensions, and voice leading. Learning to hear the difference between a major 7th and minor 7th unlocks a deeper understanding of music.",
    cards: [
      {
        h2: "What is the difference?",
        body: `<p>A <strong>major seventh</strong> (M7) spans 11 half-steps — just one semitone short of an octave. It has a dreamy, almost "shimmering" quality. Think of the first two notes of <strong>"Take On Me"</strong> by a-ha.</p>
<p>A <strong>minor seventh</strong> (m7) spans 10 half-steps. It sounds more grounded and bluesy. The first two notes of the original <strong>"Star Trek"</strong> theme form a minor seventh.</p>`
      },
      {
        h2: "Why do sevenths matter?",
        body: `<p>Seventh intervals are the building blocks of extended chords (Maj7, min7, dom7). Nearly all jazz, R&B, and neo-soul harmony relies on seventh chords. Being able to <em>hear</em> the seventh type instantly makes you a much more effective musician.</p>
<p>The major 7th creates tension that wants to resolve upward to the octave, while the minor 7th creates a bluesy pull that wants to resolve downward.</p>`
      },
      {
        h2: "Practice strategy",
        body: `<ul>
  <li>Start by drilling only M7 vs m7 in isolation until you can reliably tell them apart.</li>
  <li>Then add the octave (P8) to the mix — this helps you hear how close the M7 is to an octave.</li>
  <li>Finally, add the major 6th (M6) and minor 6th (m6) to build a complete upper-interval vocabulary.</li>
  <li>Practice in harmonic mode too — hearing both notes at once builds a different kind of recognition.</li>
</ul>`
      }
    ],
    ctaLabel: "Practice 7th intervals on BananaTone",
    ctaLink: "/"
  },

  {
    slug: "octave-interval-ear-training",
    title: "Octave Interval Ear Training & Recognition | BananaTone",
    description: "Train your ear to recognize the octave interval with free online exercises. Practice octave identification.",
    canonical: "https://bananatone.com/octave-interval-ear-training",
    h1: "Octave Interval Ear Training",
    intro: "The octave is the most fundamental interval in music — the same note at a higher or lower pitch. While it seems simple, consistently recognizing octaves in context is an important ear training skill.",
    cards: [
      {
        h2: "What is an octave?",
        body: `<p>An octave (P8) spans 12 half-steps — the distance from one note to the same note name one register higher or lower. For example, from middle C to the next C above is one octave.</p>
<p>The frequency ratio is 2:1, which is why the two notes sound so similar that many people perceive them as "the same note."</p>`
      },
      {
        h2: "Why practice octave recognition?",
        body: `<p>Octaves sound deceptively simple in isolation, but in a real musical context they can be confused with perfect fifths or even unison. Practicing octave recognition helps you:</p>
<ul>
  <li>Anchor your sense of pitch distance — the octave is your "measuring stick."</li>
  <li>Recognize when a melody leaps across registers.</li>
  <li>Build a reference point for all other intervals.</li>
</ul>`
      },
      {
        h2: "Song references for octaves",
        body: `<p><strong>"Somewhere Over the Rainbow"</strong> opens with one of the most famous ascending octave leaps in music. The word "Some-WHERE" jumps exactly one octave.</p>
<p>Another classic example is the opening of <strong>"Singin' in the Rain."</strong></p>`
      }
    ],
    ctaLabel: "Practice octave recognition on BananaTone",
    ctaLink: "/"
  },

  // ── Chords ─────────────────────────────────────────────────────────
  {
    slug: "major-vs-minor-chord-ear-training",
    title: "Major vs Minor Chord Ear Training — Free Practice Tool | BananaTone",
    description: "The most fundamental chord ear training: learn to tell major and minor chords apart by ear with free interactive practice.",
    canonical: "https://bananatone.com/major-vs-minor-chord-ear-training",
    h1: "Major vs Minor Chord Ear Training",
    intro: "Distinguishing major from minor chords is the single most important chord recognition skill. If you can hear this difference, you can understand the emotional foundation of virtually any song.",
    cards: [
      {
        h2: "Major chords vs minor chords",
        body: `<p>A <strong>major chord</strong> contains a root, major third, and perfect fifth (e.g., C-E-G). It sounds bright, happy, and resolved.</p>
<p>A <strong>minor chord</strong> contains a root, minor third, and perfect fifth (e.g., C-E♭-G). It sounds darker, sadder, and more introspective.</p>
<p>The only difference is the third — major chords have a major third (4 semitones), minor chords have a minor third (3 semitones). This single half-step changes everything.</p>`
      },
      {
        h2: "How to hear the difference",
        body: `<p>When you first start, focus on the <em>emotional color</em> rather than the technical details:</p>
<ul>
  <li><strong>Major = Sunshine.</strong> It feels open, bright, uplifting.</li>
  <li><strong>Minor = Shadow.</strong> It feels closed, dark, melancholic.</li>
</ul>
<p>With practice, this distinction becomes instant and automatic — like recognizing colors.</p>`
      },
      {
        h2: "Practice method",
        body: `<p>BananaTone's Chord mode lets you drill just Major vs Minor with randomized root notes so you can't rely on pitch memory. Here's the recommended approach:</p>
<ul>
  <li>Start with just Major and Minor in your answer pool.</li>
  <li>Do 20-question sessions until you consistently score above 90%.</li>
  <li>Then add Diminished and Augmented to expand your vocabulary.</li>
</ul>`
      }
    ],
    ctaLabel: "Practice Major vs Minor chords",
    ctaLink: "/"
  },

  {
    slug: "diminished-chord-ear-training",
    title: "Diminished Chord Ear Training — Hear The Tension | BananaTone",
    description: "Learn to recognize diminished chords by ear. Practice identifying the tense, unstable quality of diminished triads.",
    canonical: "https://bananatone.com/diminished-chord-ear-training",
    h1: "Diminished Chord Ear Training",
    intro: "The diminished chord is one of the most distinctive sounds in music — tense, unstable, and mysterious. It appears constantly in classical, jazz, and film music as a tool for creating suspense.",
    cards: [
      {
        h2: "What is a diminished chord?",
        body: `<p>A diminished triad consists of a root, minor third, and diminished fifth (tritone). For example, B-D-F is a B diminished chord. Every interval within the chord is a minor third (3 semitones).</p>
<p>This symmetrical structure gives the diminished chord its characteristically unstable, "searching" quality — it desperately wants to resolve to a more stable chord.</p>`
      },
      {
        h2: "How does it compare to major and minor?",
        body: `<ul>
  <li><strong>Major:</strong> Bright and stable (root + M3 + P5).</li>
  <li><strong>Minor:</strong> Dark but stable (root + m3 + P5).</li>
  <li><strong>Diminished:</strong> Dark AND unstable (root + m3 + dim5). The tritone creates intense tension.</li>
</ul>
<p>The diminished chord sounds "smaller" than a minor chord — like it has been compressed. This is why it is called "diminished."</p>`
      },
      {
        h2: "Where you'll hear diminished chords",
        body: `<p>Diminished chords are everywhere in music that creates suspense, drama, or humor:</p>
<ul>
  <li>Horror movie soundtracks (the "something bad is about to happen" chord).</li>
  <li>Classical music transitions (Bach, Beethoven used them extensively).</li>
  <li>Jazz passing chords (a dim chord between two diatonic chords).</li>
  <li>Barbershop quartet harmony.</li>
</ul>`
      }
    ],
    ctaLabel: "Practice diminished chords on BananaTone",
    ctaLink: "/"
  },

  {
    slug: "augmented-chord-ear-training",
    title: "Augmented Chord Ear Training Practice | BananaTone",
    description: "Train your ear to identify augmented chords. Learn the dreamy, unresolved sound of augmented triads.",
    canonical: "https://bananatone.com/augmented-chord-ear-training",
    h1: "Augmented Chord Ear Training",
    intro: "The augmented chord has a dreamy, ethereal, and slightly unsettling quality. It appears in Beatles songs, film scores, and jazz — and learning to recognize it makes you a much better listener.",
    cards: [
      {
        h2: "What is an augmented chord?",
        body: `<p>An augmented triad consists of a root, major third, and augmented fifth (raised fifth). For example, C-E-G# is a C augmented chord. Every interval within the chord is a major third (4 semitones).</p>
<p>Like the diminished chord, its symmetrical structure gives it an ambiguous, "floating" quality — but where diminished sounds tense and dark, augmented sounds expansive and dreamlike.</p>`
      },
      {
        h2: "How to recognize augmented chords",
        body: `<ul>
  <li><strong>Major chord:</strong> Sounds bright and complete — like arriving at home.</li>
  <li><strong>Augmented chord:</strong> Sounds bright but <em>unsettled</em> — like floating upward with no destination.</li>
  <li>The raised fifth creates a slight "stretching" sensation compared to the stable perfect fifth in a major chord.</li>
</ul>
<p>Famous example: The intro chord of <strong>"Oh! Darling"</strong> by The Beatles uses an augmented chord for dramatic effect.</p>`
      },
      {
        h2: "Practice approach",
        body: `<p>Because augmented chords are relatively rare, they can be hard to practice in isolation. Here's the best approach:</p>
<ul>
  <li>Start with Major vs Minor to establish a baseline.</li>
  <li>Add Augmented to the pool and notice how it differs from Major (brighter but unstable).</li>
  <li>Then add Diminished. Now you have four distinct chord "colors" to identify.</li>
</ul>`
      }
    ],
    ctaLabel: "Practice augmented chords on BananaTone",
    ctaLink: "/"
  },

  {
    slug: "sus2-vs-sus4-chord-ear-training",
    title: "Sus2 vs Sus4 Chord Ear Training Online | BananaTone",
    description: "Learn to distinguish suspended chords (Sus2 and Sus4) from major and minor chords with free interactive practice.",
    canonical: "https://bananatone.com/sus2-vs-sus4-chord-ear-training",
    h1: "Sus2 vs Sus4 Chord Ear Training",
    intro: "Suspended chords remove the third and replace it with either a second (sus2) or fourth (sus4), creating an ambiguous sound that is neither major nor minor. They are everywhere in pop, rock, and ambient music.",
    cards: [
      {
        h2: "What are suspended chords?",
        body: `<p>A <strong>sus2 chord</strong> replaces the third with a major second: C-D-G. A <strong>sus4 chord</strong> replaces the third with a perfect fourth: C-F-G.</p>
<p>Because the third is missing, suspended chords sound <em>ambiguous</em> — neither happy nor sad. They create a sense of anticipation, like a question waiting for an answer.</p>`
      },
      {
        h2: "Sus2 vs Sus4: how they differ",
        body: `<ul>
  <li><strong>Sus2:</strong> Sounds open, airy, and modern. Think of the shimmery chords in <strong>The Police</strong> or <strong>Mumford & Sons</strong> songs.</li>
  <li><strong>Sus4:</strong> Sounds more tense and "pulling." It feels like it wants to fall back to the major chord. The classic "resolved sus4" is the backbone of rock guitar.</li>
</ul>
<p>Both sound distinctly different from major and minor — they lack the emotional certainty that the third provides.</p>`
      },
      {
        h2: "Practice strategy",
        body: `<p>Suspended chords are best practiced by comparison:</p>
<ul>
  <li>Start with Major, Sus2, and Sus4 in your answer pool.</li>
  <li>Focus on identifying which chords feel "certain" (major) vs "open" (sus2/sus4).</li>
  <li>Then distinguish sus2 (brighter, wider) from sus4 (more tense, narrower).</li>
</ul>`
      }
    ],
    ctaLabel: "Practice suspended chords on BananaTone",
    ctaLink: "/"
  },

  {
    slug: "seventh-chord-ear-training",
    title: "Major 7th vs Minor 7th vs Dominant 7th Chord Ear Training | BananaTone",
    description: "Practice identifying seventh chord types: Major 7, Minor 7, and Dominant 7. Essential for jazz and pop musicians.",
    canonical: "https://bananatone.com/seventh-chord-ear-training",
    h1: "7th Chord Ear Training",
    intro: "Seventh chords add a fourth note to basic triads, creating richer, more complex sounds. They are the foundation of jazz, R&B, neo-soul, and modern pop harmony. Learning to hear the difference is essential.",
    cards: [
      {
        h2: "The three main seventh chord types",
        body: `<ul>
  <li><strong>Major 7 (Maj7):</strong> Root + M3 + P5 + M7. Sounds dreamy, lush, and sophisticated. Think smooth jazz or bossa nova.</li>
  <li><strong>Minor 7 (min7):</strong> Root + m3 + P5 + m7. Sounds warm, mellow, and slightly melancholic. Common in neo-soul and R&B.</li>
  <li><strong>Dominant 7 (dom7):</strong> Root + M3 + P5 + m7. Sounds bluesy, funky, and creates tension that wants to resolve. The backbone of blues and funk.</li>
</ul>`
      },
      {
        h2: "How to tell them apart",
        body: `<p>Focus on two dimensions: the <em>triad quality</em> (major vs minor) and the <em>seventh type</em> (major vs minor):</p>
<ul>
  <li><strong>Maj7:</strong> Happy triad + sweet top note = dreamy.</li>
  <li><strong>Dom7:</strong> Happy triad + bluesy top note = funky tension.</li>
  <li><strong>Min7:</strong> Sad triad + warm top note = smooth melancholy.</li>
</ul>
<p>The dominant 7th is the trickiest because it has a major triad but a minor seventh — this "mismatch" gives it its characteristic bluesy tension.</p>`
      },
      {
        h2: "Practice tips",
        body: `<ul>
  <li>Start with just Maj7 vs min7 — these are the most common in modern music.</li>
  <li>Add Dom7 once you're comfortable with the first two.</li>
  <li>Use piano sound for clearest results — seventh chords are easier to hear on piano than synth.</li>
  <li>Practice in both ascending (arpeggiated) and harmonic (all at once) modes.</li>
</ul>`
      }
    ],
    ctaLabel: "Practice 7th chords on BananaTone",
    ctaLink: "/"
  },

  // ── Scales ─────────────────────────────────────────────────────────
  {
    slug: "major-scale-ear-training",
    title: "Major Scale Ear Training — Ionian Mode Practice | BananaTone",
    description: "Train your ear to recognize the major scale (Ionian mode). Free interactive scale identification exercises.",
    canonical: "https://bananatone.com/major-scale-ear-training",
    h1: "Major Scale Ear Training",
    intro: "The major scale is the most important scale in Western music — the foundation upon which nearly all harmony and melody is built. Learning to recognize it by ear is a fundamental skill.",
    cards: [
      {
        h2: "What makes the major scale sound \"major\"?",
        body: `<p>The major scale follows the interval pattern: W-W-H-W-W-W-H (whole, whole, half, whole, whole, whole, half). This creates a bright, happy, resolved sound.</p>
<p>In solfège terms: Do-Re-Mi-Fa-Sol-La-Ti-Do. If you can sing "Do-Re-Mi" from The Sound of Music, you already know the major scale!</p>`
      },
      {
        h2: "Major scale vs natural minor scale",
        body: `<p>The major scale and natural minor scale are the two most important scales to distinguish. The key differences:</p>
<ul>
  <li><strong>Major:</strong> Bright, happy, uplifting. The 3rd, 6th, and 7th degrees are raised compared to minor.</li>
  <li><strong>Natural Minor:</strong> Dark, sad, introspective. The 3rd, 6th, and 7th degrees are lowered.</li>
</ul>
<p>Focus on the <em>overall mood</em> first, then listen for the specific degrees that differ.</p>`
      },
      {
        h2: "Practice approach",
        body: `<ul>
  <li>Start with just Major vs Natural Minor in BananaTone's Scale mode.</li>
  <li>Listen to the entire scale — don't try to analyze individual notes at first.</li>
  <li>Use slow speed to hear each note clearly.</li>
  <li>Once you're confident, add Harmonic Minor and Dorian to expand your vocabulary.</li>
</ul>`
      }
    ],
    ctaLabel: "Practice major scale recognition",
    ctaLink: "/"
  },

  {
    slug: "natural-minor-scale-ear-training",
    title: "Natural Minor Scale Ear Training — Aeolian Mode | BananaTone",
    description: "Learn to identify the natural minor scale (Aeolian mode) by ear with free interactive training exercises.",
    canonical: "https://bananatone.com/natural-minor-scale-ear-training",
    h1: "Natural Minor Scale Ear Training",
    intro: "The natural minor scale (Aeolian mode) is the most common minor scale. Its dark, melancholic character forms the basis of countless songs across all genres, from classical to rock to pop.",
    cards: [
      {
        h2: "What is the natural minor scale?",
        body: `<p>The natural minor scale follows the interval pattern: W-H-W-W-H-W-W. Starting from A, this gives you A-B-C-D-E-F-G-A — all white keys on the piano.</p>
<p>It is also called the <strong>Aeolian mode</strong> and is the 6th mode of the major scale. The relative minor of C major is A minor.</p>`
      },
      {
        h2: "How does it compare to other minor scales?",
        body: `<ul>
  <li><strong>Natural Minor:</strong> Purely dark and smooth. No surprises — every note flows naturally.</li>
  <li><strong>Harmonic Minor:</strong> Same but with a raised 7th — creates an exotic, almost Middle Eastern sound at the top.</li>
  <li><strong>Melodic Minor:</strong> Raises both 6th and 7th when ascending, creating a brighter climb.</li>
</ul>
<p>The natural minor is the "default" minor sound — the most vanilla and commonly used.</p>`
      },
      {
        h2: "Listening tips",
        body: `<ul>
  <li>The natural minor sounds consistently dark from bottom to top — no unexpected bright notes.</li>
  <li>Compare it to the major scale: if a scale sounds sad and descends naturally without any "exotic" intervals, it's likely natural minor.</li>
  <li>Practice at slow speed first to hear each degree clearly.</li>
</ul>`
      }
    ],
    ctaLabel: "Practice natural minor scale",
    ctaLink: "/"
  },

  {
    slug: "harmonic-minor-scale-ear-training",
    title: "Harmonic Minor Scale Ear Training Exercises | BananaTone",
    description: "Recognize the harmonic minor scale with its characteristic raised 7th degree. Free online practice exercises.",
    canonical: "https://bananatone.com/harmonic-minor-scale-ear-training",
    h1: "Harmonic Minor Scale Ear Training",
    intro: "The harmonic minor scale has one of the most distinctive sounds in all of music — an exotic, dramatic quality created by the raised seventh degree. It is heard in classical, metal, Middle Eastern, and flamenco music.",
    cards: [
      {
        h2: "What makes harmonic minor unique?",
        body: `<p>The harmonic minor scale is identical to the natural minor except the 7th degree is raised by one half-step. This creates a wide gap (an augmented second — 3 half-steps) between the 6th and 7th degrees.</p>
<p>This augmented second is what gives the harmonic minor its distinctive "exotic" or "classical" flavor.</p>`
      },
      {
        h2: "How to recognize it",
        body: `<p>Listen for a scale that sounds mostly like natural minor but has a dramatic, unexpected "lift" near the top. The raised 7th jumps out — it sounds almost like a wrong note in the context of minor, but in a beautiful way.</p>
<p>Think of classical violin pieces, flamenco guitar, or the <strong>Phantom of the Opera</strong> — these often use harmonic minor extensively.</p>`
      },
      {
        h2: "Practice method",
        body: `<ul>
  <li>Compare harmonic minor directly against natural minor — they are identical except for that one raised note.</li>
  <li>Listen specifically for the "exotic" interval between the 6th and 7th degrees.</li>
  <li>Use BananaTone's Scale mode with Natural Minor, Harmonic Minor, and Melodic Minor selected.</li>
</ul>`
      }
    ],
    ctaLabel: "Practice harmonic minor recognition",
    ctaLink: "/"
  },

  {
    slug: "dorian-mode-ear-training",
    title: "Dorian Mode Ear Training & Recognition | BananaTone",
    description: "Learn to recognize the Dorian mode — the jazz musician's favorite minor scale. Free interactive ear training.",
    canonical: "https://bananatone.com/dorian-mode-ear-training",
    h1: "Dorian Mode Ear Training",
    intro: "The Dorian mode is a minor scale with a brighter twist — a raised 6th degree that gives it a jazzy, sophisticated character. It is one of the most commonly used modes in jazz, funk, and rock.",
    cards: [
      {
        h2: "What is the Dorian mode?",
        body: `<p>Dorian is the 2nd mode of the major scale. Starting from D using only white keys gives you D-E-F-G-A-B-C-D — the D Dorian scale.</p>
<p>Compared to natural minor, the only difference is the raised 6th degree. This single note change transforms the scale's character from purely "sad" to a more nuanced, almost "cool" sadness.</p>`
      },
      {
        h2: "Where you'll hear Dorian",
        body: `<p>Dorian is everywhere in popular music:</p>
<ul>
  <li><strong>"So What"</strong> by Miles Davis — the quintessential Dorian jazz tune.</li>
  <li><strong>"Billie Jean"</strong> by Michael Jackson — the bass line is Dorian.</li>
  <li><strong>"Scarborough Fair"</strong> — a classic Dorian melody.</li>
  <li>Most funk, fusion, and smooth jazz improvisation uses Dorian over minor chords.</li>
</ul>`
      },
      {
        h2: "How to distinguish Dorian from natural minor",
        body: `<ul>
  <li>Dorian sounds "minor but not depressing" — it has a cool, sophisticated quality.</li>
  <li>The raised 6th gives it a slight brightness that natural minor lacks.</li>
  <li>If a minor-sounding scale makes you want to nod your head rather than cry, it might be Dorian.</li>
  <li>Practice by comparing Dorian, Natural Minor, and Phrygian — three minor modes with different characters.</li>
</ul>`
      }
    ],
    ctaLabel: "Practice Dorian mode on BananaTone",
    ctaLink: "/"
  },

  {
    slug: "mixolydian-mode-ear-training",
    title: "Mixolydian Mode Ear Training — Free Tool | BananaTone",
    description: "Train your ear to recognize the Mixolydian mode, essential for blues, rock, and folk music.",
    canonical: "https://bananatone.com/mixolydian-mode-ear-training",
    h1: "Mixolydian Mode Ear Training",
    intro: "The Mixolydian mode sounds like a major scale with a bluesy edge — bright and happy, but with a flatted 7th that adds a funky, rock-and-roll character. It is essential for blues, rock, and folk music.",
    cards: [
      {
        h2: "What is the Mixolydian mode?",
        body: `<p>Mixolydian is the 5th mode of the major scale. Starting from G using only white keys gives you G-A-B-C-D-E-F-G — the G Mixolydian scale.</p>
<p>Compared to the regular major scale, the only difference is the flatted 7th degree. This creates a scale that is "almost major" but with a slight earthiness.</p>`
      },
      {
        h2: "Where you'll hear Mixolydian",
        body: `<ul>
  <li><strong>"Sweet Home Alabama"</strong> by Lynyrd Skynyrd — classic Mixolydian rock.</li>
  <li><strong>"Norwegian Wood"</strong> by The Beatles — Mixolydian melody.</li>
  <li>Blues guitar solos frequently use Mixolydian over dominant 7th chords.</li>
  <li>Celtic and Irish folk music is heavily Mixolydian.</li>
</ul>`
      },
      {
        h2: "How to recognize Mixolydian",
        body: `<ul>
  <li>It sounds "major but earthy" — happy, but not as bright as a pure major scale.</li>
  <li>The flatted 7th creates a subtle "pulling down" sensation near the top of the scale.</li>
  <li>Compare it to the major scale: if it sounds major but "doesn't quite resolve" at the top, it's likely Mixolydian.</li>
  <li>Practice alongside Major and Lydian in BananaTone to hear the differences.</li>
</ul>`
      }
    ],
    ctaLabel: "Practice Mixolydian mode on BananaTone",
    ctaLink: "/"
  },

  {
    slug: "minor-pentatonic-scale-ear-training",
    title: "Minor Pentatonic Scale Ear Training | BananaTone",
    description: "Learn to recognize the minor pentatonic scale by ear — the most important scale for guitar solos and blues.",
    canonical: "https://bananatone.com/minor-pentatonic-scale-ear-training",
    h1: "Minor Pentatonic Scale Ear Training",
    intro: "The minor pentatonic is arguably the most widely used scale in popular music. It is the foundation of blues, rock, funk, and pop guitar solos. If you play guitar, this is THE scale to master by ear.",
    cards: [
      {
        h2: "What is the minor pentatonic?",
        body: `<p>The minor pentatonic is a five-note scale derived from the natural minor by removing the 2nd and 6th degrees. In A minor pentatonic: A-C-D-E-G. No half-step intervals means every note sounds good over a minor chord.</p>
<p>This is why the minor pentatonic is so popular for improvisation — it's nearly impossible to play a "wrong" note.</p>`
      },
      {
        h2: "Minor pentatonic vs blues scale",
        body: `<p>The blues scale is just the minor pentatonic with one extra note — the "blue note" (♭5 / ♯4). In A: A-C-D-D♯-E-G.</p>
<ul>
  <li><strong>Minor pentatonic:</strong> Clean, smooth, versatile. Works over rock, pop, funk.</li>
  <li><strong>Blues scale:</strong> Adds a gritty, bluesy tension with the extra chromatic note.</li>
</ul>
<p>Practice both together to hear how that single blue note transforms the scale's character.</p>`
      },
      {
        h2: "Famous minor pentatonic licks",
        body: `<p>Nearly every iconic guitar solo uses the minor pentatonic:</p>
<ul>
  <li><strong>"Stairway to Heaven"</strong> solo — Led Zeppelin.</li>
  <li><strong>"Comfortably Numb"</strong> solo — Pink Floyd.</li>
  <li><strong>"Back in Black"</strong> riff — AC/DC.</li>
  <li><strong>"Smells Like Teen Spirit"</strong> solo — Nirvana.</li>
</ul>`
      }
    ],
    ctaLabel: "Practice minor pentatonic scale",
    ctaLink: "/"
  },

  {
    slug: "blues-scale-ear-training",
    title: "Blues Scale Ear Training & Practice | BananaTone",
    description: "Recognize the blues scale by ear. Learn to identify the characteristic blue note that gives blues its soul.",
    canonical: "https://bananatone.com/blues-scale-ear-training",
    h1: "Blues Scale Ear Training",
    intro: "The blues scale adds one magic ingredient to the minor pentatonic — the \"blue note.\" This single chromatic passing tone transforms the scale from clean minor pentatonic into the gritty, soulful sound of the blues.",
    cards: [
      {
        h2: "What is the blues scale?",
        body: `<p>The blues scale is the minor pentatonic plus a flatted 5th (the "blue note"). In A: A-C-D-D♯-E-G.</p>
<p>That D♯ (or E♭) between D and E creates a chromatic passing tone that gives the blues its characteristic "bending" quality — even when played on a keyboard where you can't physically bend strings.</p>`
      },
      {
        h2: "How to recognize the blues scale",
        body: `<ul>
  <li>It sounds like a minor pentatonic but with an extra "crunchy" note in the middle.</li>
  <li>If you hear a scale that sounds minor and has a moment of <em>chromatic tension</em> that immediately resolves, it's likely the blues scale.</li>
  <li>The blues scale has 6 notes vs 5 in the minor pentatonic — listen for that extra step.</li>
</ul>
<p>The blue note is usually played quickly as a passing tone, not dwelt upon. It creates flavor, not dissonance.</p>`
      },
      {
        h2: "The blues scale in music",
        body: `<p>The blues scale is foundational to American music:</p>
<ul>
  <li><strong>Blues:</strong> B.B. King, Muddy Waters, Stevie Ray Vaughan.</li>
  <li><strong>Rock:</strong> Led Zeppelin, The Rolling Stones, Jimi Hendrix.</li>
  <li><strong>Jazz:</strong> Charlie Parker, Miles Davis used blues scales over chord changes.</li>
  <li><strong>Pop/R&B:</strong> Ariana Grande, The Weeknd use blues inflections in vocal runs.</li>
</ul>`
      }
    ],
    ctaLabel: "Practice blues scale on BananaTone",
    ctaLink: "/"
  },

  // ── Notes / Perfect Pitch ─────────────────────────────────────────
  {
    slug: "perfect-pitch-training-online",
    title: "Perfect Pitch Training Online — Note Recognition Practice | BananaTone",
    description: "Practice identifying individual notes by ear. Free online perfect pitch (absolute pitch) training exercises.",
    canonical: "https://bananatone.com/perfect-pitch-training-online",
    h1: "Perfect Pitch Training Online",
    intro: "Perfect (absolute) pitch is the ability to identify a note without any reference. While some people are born with it, research shows that with consistent practice, most musicians can develop strong note recognition skills.",
    cards: [
      {
        h2: "Perfect pitch vs relative pitch",
        body: `<p><strong>Perfect pitch (absolute pitch)</strong> means you can identify a note — say, F# — just by hearing it, without any reference. Only about 1 in 10,000 people have true innate perfect pitch.</p>
<p><strong>Relative pitch</strong> means you can identify intervals and notes relative to a reference point. This is the more practical and trainable skill, and it's what most professional musicians rely on.</p>
<p>BananaTone's Note mode helps you develop both: by repeatedly associating each note name with its sound, you build stronger pitch memory over time.</p>`
      },
      {
        h2: "How to practice note recognition",
        body: `<ul>
  <li>Start with a small pool of notes (C, D, E, G, A) — the BananaTone Beginner preset.</li>
  <li>Do short sessions (10 questions) daily. Consistency matters more than length.</li>
  <li>Don't worry about the octave — focus on recognizing the pitch <em>class</em> (e.g., "that's a D").</li>
  <li>Use piano sound for the clearest pitch reference.</li>
</ul>`
      },
      {
        h2: "Can you learn perfect pitch as an adult?",
        body: `<p>True absolute pitch (identifying any note instantly with 100% accuracy) is extremely difficult to develop after childhood. However, you can develop <strong>strong pitch memory</strong> — the ability to reliably recognize several notes — through consistent training.</p>
<p>Many professional musicians have excellent pitch memory without having "perfect pitch" in the clinical sense. The key is daily practice with immediate feedback, which is exactly what BananaTone provides.</p>`
      }
    ],
    ctaLabel: "Start note recognition practice",
    ctaLink: "/"
  },

  {
    slug: "c-major-notes-ear-training",
    title: "C Major Notes Ear Training Practice | BananaTone",
    description: "Practice identifying the natural notes (C major scale) by ear. Build pitch recognition with the white keys.",
    canonical: "https://bananatone.com/c-major-notes-ear-training",
    h1: "C Major Notes Ear Training",
    intro: "Starting your note recognition journey with the C major scale (all white keys: C, D, E, F, G, A, B) is the smartest approach. These seven natural notes form the foundation of Western music theory.",
    cards: [
      {
        h2: "Why start with C major?",
        body: `<p>C major is the simplest key — no sharps, no flats. By focusing on just these seven notes, you can:</p>
<ul>
  <li>Build a strong mental "map" of the most common pitches.</li>
  <li>Learn the character of each natural note without the confusion of accidentals.</li>
  <li>Develop patterns that transfer to other keys later.</li>
</ul>`
      },
      {
        h2: "Character of each note",
        body: `<p>Each note in C major has a subtle personality:</p>
<ul>
  <li><strong>C:</strong> Home base. Stable, neutral, resolved.</li>
  <li><strong>D:</strong> Slightly bright, forward-moving.</li>
  <li><strong>E:</strong> Sweet, warm, the "happy" note (major third of C).</li>
  <li><strong>F:</strong> Gentle tension, wants to resolve down to E.</li>
  <li><strong>G:</strong> Strong, dominant, powerful.</li>
  <li><strong>A:</strong> Warm, mellow (relative minor root).</li>
  <li><strong>B:</strong> Tense, leading tone — desperately wants to resolve up to C.</li>
</ul>`
      },
      {
        h2: "Practice progression",
        body: `<ul>
  <li><strong>Week 1-2:</strong> Start with just C, E, G (the major triad). Get these three rock solid.</li>
  <li><strong>Week 3-4:</strong> Add D and A. Now you have five notes (the Beginner preset).</li>
  <li><strong>Week 5+:</strong> Add F and B for the complete C major scale.</li>
  <li><strong>Later:</strong> Add sharps and flats when you're ready for the Challenge preset.</li>
</ul>`
      }
    ],
    ctaLabel: "Practice C major notes on BananaTone",
    ctaLink: "/"
  }
];

// ─── HTML template ───────────────────────────────────────────────────
function buildPage(page) {
  const cardsHtml = page.cards
    .map(
      (c) => `
    <div class="card">
      <h2>${c.h2}</h2>
      ${c.body}
    </div>`
    )
    .join("\n");

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <!-- Google tag (gtag.js) -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-3DX9NB3JME"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-3DX9NB3JME');
  </script>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>${page.title}</title>
  <meta name="description" content="${page.description}" />
  <link rel="canonical" href="${page.canonical}" />

  <meta property="og:title" content="${page.title}" />
  <meta property="og:description" content="${page.description}" />
  <meta property="og:url" content="${page.canonical}" />
  <meta property="og:type" content="article" />
  <meta property="og:image" content="https://bananatone.com/assets/og-image.png" />
  <meta property="og:site_name" content="BananaTone" />

  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="${page.title}" />
  <meta name="twitter:description" content="${page.description}" />
  <meta name="twitter:image" content="https://bananatone.com/assets/og-image.png" />

  <link rel="icon" href="/assets/favicon-32.png" sizes="32x32" type="image/png" />
  <link rel="apple-touch-icon" href="/assets/apple-touch-icon.png" />
  <link rel="stylesheet" href="/assets/site.css" />

  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "${page.h1}",
    "description": "${page.description}",
    "url": "${page.canonical}",
    "publisher": {
      "@type": "Organization",
      "name": "BananaTone",
      "url": "https://bananatone.com/"
    },
    "mainEntityOfPage": "${page.canonical}"
  }
  </script>
</head>
<body>
  <nav class="topbar">
    <a href="/" class="brand">
      <img src="/assets/logo-icon-512.png" alt="BananaTone logo" class="brand-logo-img">
      BananaTone
    </a>
    <div class="nav-links">
      <a href="/learn/">Learn</a>
      <a href="/about">About</a>
    </div>
  </nav>

  <main class="container">
    <h1>${page.h1}</h1>
    <div class="intro">${page.intro}</div>
${cardsHtml}

    <div class="card" style="text-align: center;">
      <h2>Ready to practice?</h2>
      <p>BananaTone is a free, fast ear training app. No sign-up required — just open and start practicing.</p>
      <div style="margin-top: 24px; display: flex; gap: 12px; justify-content: center; flex-wrap: wrap;">
        <a href="${page.ctaLink}" class="btn primary">${page.ctaLabel}</a>
        <a href="/learn/" class="btn">Learn more about ear training</a>
      </div>
    </div>
  </main>

  <footer class="footer">
    <div>
      <a href="/">App</a>
      <a href="/learn/">Learn</a>
      <a href="/about">About</a>
      <a href="/privacy">Privacy</a>
      <a href="/terms">Terms</a>
    </div>
    <div style="margin-top: 15px; font-size: 0.9em; opacity: 0.7;">
      &copy; ${YEAR} BananaTone. All rights reserved.
    </div>
  </footer>
</body>
</html>
`;
}

// ─── Sitemap generator ───────────────────────────────────────────────
function buildSitemap(pages) {
  const today = new Date().toISOString().slice(0, 10);

  // Existing static pages
  const staticUrls = [
    { loc: "https://bananatone.com/", priority: "1.0", changefreq: "weekly" },
    { loc: "https://bananatone.com/about", priority: "0.5", changefreq: "monthly" },
    { loc: "https://bananatone.com/privacy", priority: "0.3", changefreq: "yearly" },
    { loc: "https://bananatone.com/terms", priority: "0.3", changefreq: "yearly" },
    { loc: "https://bananatone.com/learn/", priority: "0.7", changefreq: "monthly" },
    { loc: "https://bananatone.com/free-interval-ear-training", priority: "0.7", changefreq: "monthly" },
    { loc: "https://bananatone.com/major-vs-minor-ear-training", priority: "0.7", changefreq: "monthly" },
    { loc: "https://bananatone.com/relative-pitch-training", priority: "0.7", changefreq: "monthly" },
    { loc: "https://bananatone.com/20-minute-ear-training-routine", priority: "0.7", changefreq: "monthly" },
  ];

  const allUrls = [
    ...staticUrls,
    ...pages.map((p) => ({
      loc: p.canonical,
      priority: "0.7",
      changefreq: "monthly",
    })),
  ];

  const entries = allUrls
    .map(
      (u) => `  <url>
    <loc>${u.loc}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`
    )
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries}
</urlset>
`;
}

// ─── Main ────────────────────────────────────────────────────────────
function main() {
  let created = 0;
  let skipped = 0;

  for (const page of PAGES) {
    const filePath = path.join(ROOT, `${page.slug}.html`);
    const html = buildPage(page);
    const existed = fs.existsSync(filePath);
    fs.writeFileSync(filePath, html, "utf-8");
    if (existed) {
      skipped++;
      console.log(`  ⟳  Overwrote: ${page.slug}.html`);
    } else {
      created++;
      console.log(`  ✓  Created:   ${page.slug}.html`);
    }
  }

  // Write sitemap
  const sitemapPath = path.join(ROOT, "sitemap.xml");
  fs.writeFileSync(sitemapPath, buildSitemap(PAGES), "utf-8");
  console.log(`\n  ✓  Updated: sitemap.xml`);

  console.log(`\nDone. ${created} created, ${skipped} overwritten, ${PAGES.length} total pages.`);
  console.log(`Sitemap includes ${PAGES.length} SEO pages + existing static pages.\n`);
}

main();
