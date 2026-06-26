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
  },
  {
    "slug": "ear-training-for-beginners",
    "title": "Ear Training for Beginners - Free Step-by-Step Practice | BananaTone",
    "description": "The perfect starting point for your ear training journey. Free, interactive step-by-step exercises for absolute beginners.",
    "canonical": "https://bananatone.com/ear-training-for-beginners",
    "h1": "Ear Training for Beginners",
    "intro": "Starting ear training can feel overwhelming, but it doesn't have to be. By breaking down sounds into small, recognizable pieces, anyone can learn to play by ear.",
    "cards": [
      {
        "h2": "Why start ear training?",
        "body": "<p>Ear training is the bridge between hearing a song in your head and playing it on your instrument. It allows you to:</p>\n<ul>\n  <li>Learn songs by ear without needing sheet music or tabs.</li>\n  <li>Improvise freely by translating the melodies in your mind to your fingers.</li>\n  <li>Understand the emotional structure of the music you love.</li>\n</ul>"
      },
      {
        "h2": "The beginner's approach",
        "body": "<p>The biggest mistake beginners make is trying to learn everything at once. The secret is to start small:</p>\n<ul>\n  <li><strong>Limit the options:</strong> Practice with just two or three intervals or chords at a time.</li>\n  <li><strong>Use a reference:</strong> Always relate sounds to songs you already know.</li>\n  <li><strong>Be consistent:</strong> 5 minutes a day is much better than an hour once a week.</li>\n</ul>"
      },
      {
        "h2": "Where to begin right now",
        "body": "<p>Start with our <strong>Beginner Intervals</strong> preset. This limits the options to the most distinct and fundamental sounds: the Minor 3rd, Major 3rd, Perfect 5th, and Octave.</p>\n<p>Once you can reliably score 90% or higher, gradually add one new interval at a time.</p>"
      }
    ],
    "ctaLabel": "Start Beginner Ear Training",
    "ctaLink": "/"
  },
  {
    "slug": "relative-pitch-ear-training",
    "title": "Relative Pitch Ear Training - Free Online Practice Tool | BananaTone",
    "description": "Develop your relative pitch with free online ear training exercises. Learn to identify intervals, chords, and melodies by ear.",
    "canonical": "https://bananatone.com/relative-pitch-ear-training",
    "h1": "Relative Pitch Ear Training",
    "intro": "Relative pitch is the ability to identify a note or chord by comparing it to a reference pitch. It is the most practical, learnable, and essential skill for any musician.",
    "cards": [
      {
        "h2": "Relative Pitch vs Perfect Pitch",
        "body": "<p>While <strong>perfect pitch</strong> (identifying a note in isolation) is rare and hard to learn as an adult, <strong>relative pitch</strong> can be mastered by anyone.</p>\n<p>With relative pitch, you use a reference note (like a key center or a root note) to measure the distance to the next note. It's like using a map instead of a compass — once you know where \"home\" is, you can find anything.</p>"
      },
      {
        "h2": "How to develop relative pitch",
        "body": "<ul>\n  <li><strong>Master Intervals:</strong> Intervals are the measuring sticks of relative pitch. Learn the sound of every distance, from a minor 2nd to an octave.</li>\n  <li><strong>Sing Everything:</strong> Your voice connects your brain to your ears. If you can sing an interval, you have internalized it.</li>\n  <li><strong>Transcribe:</strong> Figure out simple melodies from the radio using your instrument.</li>\n</ul>"
      },
      {
        "h2": "Why it makes you a better musician",
        "body": "<p>Musicians with strong relative pitch don't just \"guess\" when they improvise or learn songs. They can predict exactly how a note will sound before they even touch their instrument. It turns playing music from a mechanical exercise into a fluent language.</p>"
      }
    ],
    "ctaLabel": "Practice Relative Pitch",
    "ctaLink": "/"
  },
  {
    "slug": "perfect-pitch-test",
    "title": "Perfect Pitch Test - Find Out If You Have Absolute Pitch | BananaTone",
    "description": "Take the free perfect pitch test online. Find out if you have absolute pitch by identifying notes without a reference.",
    "canonical": "https://bananatone.com/perfect-pitch-test",
    "h1": "Perfect Pitch Test",
    "intro": "Do you have absolute pitch? Only 1 in 10,000 people are born with the ability to instantly recognize a musical note without any reference point. Take this test to find out.",
    "cards": [
      {
        "h2": "How the test works",
        "body": "<p>This test will play random notes across the 12-tone chromatic scale (C, C#, D, etc.). Your goal is to identify the note name.</p>\n<p>Because true perfect pitch does not rely on reference notes, you should try to answer instantly based on the \"color\" or character of the pitch itself, rather than trying to calculate it from the previous note.</p>"
      },
      {
        "h2": "What is Perfect Pitch?",
        "body": "<p>Perfect pitch (or absolute pitch) is a cognitive trait that allows a person to identify or re-create a given musical note without the benefit of a reference tone. It is similar to recognizing colors — just as you can instantly see that an apple is red without comparing it to blue, someone with perfect pitch hears a note and instantly knows it is an F#.</p>"
      },
      {
        "h2": "Can I improve my score?",
        "body": "<p>Even if you don't have innate absolute pitch, you can develop <strong>strong pitch memory</strong>. By taking this test daily, your brain will begin to internalize the specific frequencies of the notes, allowing you to recognize them more accurately over time.</p>"
      }
    ],
    "ctaLabel": "Take the Perfect Pitch Test",
    "ctaLink": "/"
  },
  {
    "slug": "ear-training-for-singers",
    "title": "Ear Training for Singers & Vocalists - Pitch Matching Practice | BananaTone",
    "description": "Improve your vocal intonation and pitch matching with free ear training exercises designed specifically for singers.",
    "canonical": "https://bananatone.com/ear-training-for-singers",
    "h1": "Ear Training for Singers",
    "intro": "For vocalists, your ear is your instrument's steering wheel. If you can't hear a pitch accurately, you can't sing it accurately. Ear training is the fastest way to stop singing flat or sharp.",
    "cards": [
      {
        "h2": "Why singers need ear training",
        "body": "<p>Unlike a piano or guitar where the frets and keys decide the pitch, a singer must create the pitch entirely from their mind and body. Ear training sharpens your internal pitch map, allowing you to:</p>\n<ul>\n  <li>Match pitches instantly and accurately.</li>\n  <li>Sing complex harmonies without getting distracted by the melody.</li>\n  <li>Hear when you are drifting off-key and correct it in real-time.</li>\n</ul>"
      },
      {
        "h2": "The Pitch Matching method",
        "body": "<p>The best practice for singers is active pitch matching. When using our trainer:</p>\n<ol>\n  <li>Listen to the note played.</li>\n  <li><strong>Sing it back out loud</strong> before you click an answer.</li>\n  <li>Internalize how the note feels in your voice.</li>\n</ol>"
      },
      {
        "h2": "Beyond single notes",
        "body": "<p>Once your pitch matching is perfect, move on to Interval training. Being able to confidently sing a perfect fourth or major sixth jump is what separates amateur singers from professionals.</p>"
      }
    ],
    "ctaLabel": "Start Vocal Ear Training",
    "ctaLink": "/"
  },
  {
    "slug": "jazz-ear-training",
    "title": "Jazz Ear Training - Practice 7th Chords & Extensions | BananaTone",
    "description": "Advanced ear training for jazz musicians. Practice identifying complex 7th chords, extensions, and jazz harmony.",
    "canonical": "https://bananatone.com/jazz-ear-training",
    "h1": "Jazz Ear Training Practice",
    "intro": "Jazz harmony is built on complex chords, extensions, and rapid modulations. To improvise over a standard, you must be able to instantly recognize 7th chords and their alterations by ear.",
    "cards": [
      {
        "h2": "The Foundation of Jazz",
        "body": "<p>Before you worry about 9ths, 11ths, and 13ths, you must have absolute mastery over the core seventh chords:</p>\n<ul>\n  <li>Major 7 (Maj7)</li>\n  <li>Minor 7 (min7)</li>\n  <li>Dominant 7 (dom7)</li>\n  <li>Half-Diminished (m7b5)</li>\n  <li>Fully Diminished (dim7)</li>\n</ul>"
      },
      {
        "h2": "Listening for the 3rd and 7th",
        "body": "<p>In jazz, the root and the fifth are often omitted by the piano player. The defining character of the chord comes from the \"guide tones\" — the 3rd and the 7th.</p>\n<p>When practicing chord recognition, focus on the top of the chord. Is the seventh major (dreamy) or minor (bluesy/funky)? Is the third major (bright) or minor (dark)?</p>"
      },
      {
        "h2": "How to practice",
        "body": "<p>Start by configuring the chord trainer to only include Maj7, min7, and dom7. These three chords make up the II-V-I progression, which is 80% of the jazz repertoire. Once you can identify them flawlessly in random inversions, add diminished and augmented sounds.</p>"
      }
    ],
    "ctaLabel": "Practice Jazz Chords",
    "ctaLink": "/"
  },
  {
    "slug": "triad-ear-training",
    "title": "Triad Ear Training - Major, Minor, Diminished, Augmented | BananaTone",
    "description": "Master the four basic triads: Major, Minor, Diminished, and Augmented with our free interactive ear training tool.",
    "canonical": "https://bananatone.com/triad-ear-training",
    "h1": "Triad Ear Training",
    "intro": "Triads are the fundamental building blocks of all Western harmony. There are only four types of triads, and mastering their distinct emotional colors is essential for any musician.",
    "cards": [
      {
        "h2": "The Four Triads",
        "body": "<ul>\n  <li><strong>Major:</strong> Bright, happy, resolved (Root, M3, P5).</li>\n  <li><strong>Minor:</strong> Dark, sad, resolved (Root, m3, P5).</li>\n  <li><strong>Diminished:</strong> Tense, scary, unstable (Root, m3, dim5).</li>\n  <li><strong>Augmented:</strong> Dreamy, floating, unresolved (Root, M3, aug5).</li>\n</ul>"
      },
      {
        "h2": "How to tell them apart",
        "body": "<p>The easiest method is to divide them into categories of stability:</p>\n<p>First, ask yourself: does it sound stable and complete? If yes, it's either Major or Minor. Then decide if it's happy (Major) or sad (Minor).</p>\n<p>If it sounds unstable, tense, or unresolved, it's Diminished or Augmented. If it feels \"squished\" and dark, it's Diminished. If it feels \"stretched\" and bright, it's Augmented.</p>"
      },
      {
        "h2": "Why triads matter",
        "body": "<p>Even the most complex 13th chords in jazz are just triads stacked on top of each other. If you can't instantly recognize a basic triad, you will struggle with advanced harmony. Get your foundation solid first.</p>"
      }
    ],
    "ctaLabel": "Practice Triads on BananaTone",
    "ctaLink": "/"
  },
  {
    "slug": "advanced-ear-training",
    "title": "Advanced Ear Training Exercises for Musicians | BananaTone",
    "description": "Push your musical ear to the limit with advanced ear training exercises. Practice complex intervals, extended chords, and fast tempos.",
    "canonical": "https://bananatone.com/advanced-ear-training",
    "h1": "Advanced Ear Training",
    "intro": "Have you mastered the basics? Once Major vs Minor is too easy, it's time to step out of your comfort zone and tackle the most challenging aspects of aural skills.",
    "cards": [
      {
        "h2": "What makes ear training advanced?",
        "body": "<p>Difficulty in ear training doesn't just come from adding more complex chords. It comes from:</p>\n<ul>\n  <li><strong>Speed:</strong> Reducing the time you have to process the sound.</li>\n  <li><strong>Context:</strong> Hearing harmonic intervals (notes played simultaneously) rather than melodic ones.</li>\n  <li><strong>Pool Size:</strong> Having to choose from 12 intervals instead of just 4.</li>\n</ul>"
      },
      {
        "h2": "The ultimate interval challenge",
        "body": "<p>The true test of interval recognition is the <strong>Harmonic Challenge</strong>. Set your trainer to include all 12 intervals, and set the direction to \"Harmonic\" (both notes played at exactly the same time). This forces you to recognize the overall texture and dissonance of the interval, rather than calculating the distance between two distinct notes.</p>"
      },
      {
        "h2": "Breaking through plateaus",
        "body": "<p>If you get stuck on advanced exercises (like constantly confusing the Minor 6th and Major 6th), isolate the problem. Create a custom session with ONLY those two confusing intervals and drill them until the difference becomes obvious.</p>"
      }
    ],
    "ctaLabel": "Start Advanced Practice",
    "ctaLink": "/"
  },
  {
    "slug": "guess-the-note-game",
    "title": "Guess The Note Game - Fun Ear Training Practice | BananaTone",
    "description": "Play the Guess The Note game! A fun, interactive way to practice note recognition and develop your pitch memory.",
    "canonical": "https://bananatone.com/guess-the-note-game",
    "h1": "Guess The Note Game",
    "intro": "Who says ear training has to feel like homework? Guess The Note is a fast, fun way to build your pitch memory through interactive, game-like repetition.",
    "cards": [
      {
        "h2": "How to play",
        "body": "<p>The rules are simple: the app plays a piano note, and you have to click the correct note name (C, D, E, etc.).</p>\n<p>Every time you guess correctly, your streak increases. If you miss, your streak resets. Try to build the highest streak possible while training your ear in the background!</p>"
      },
      {
        "h2": "Why gamification works",
        "body": "<p>Ear training requires hundreds of repetitions to build permanent neural pathways. When practice feels like a chore, you won't do it enough. By turning it into a fast-paced game with immediate feedback and streaks, you can effortlessly put in the repetitions needed to achieve real results.</p>"
      },
      {
        "h2": "Tips for high scores",
        "body": "<ul>\n  <li>Don't overthink it. Go with your first instinct.</li>\n  <li>Sing the note out loud before clicking — this engages a different part of your brain and improves accuracy.</li>\n  <li>Start with the \"Beginner\" preset (only 5 notes) before moving up to the full chromatic scale.</li>\n</ul>"
      }
    ],
    "ctaLabel": "Play Guess The Note",
    "ctaLink": "/"
  },
  {
    "slug": "guess-the-chord-game",
    "title": "Guess The Chord Game - Play Online for Free | BananaTone",
    "description": "Play the free Guess The Chord game. Test your ear and see how long a streak you can build identifying major, minor, and 7th chords.",
    "canonical": "https://bananatone.com/guess-the-chord-game",
    "h1": "Guess The Chord Game",
    "intro": "Test your harmonic hearing with the Guess The Chord game. Build your streak by instantly identifying major, minor, diminished, and seventh chords by ear.",
    "cards": [
      {
        "h2": "How it works",
        "body": "<p>BananaTone will play a chord using a high-quality piano sample. Your job is to listen to the emotional quality of the chord and identify its type (e.g., Major, Minor, Dominant 7).</p>\n<p>The root notes are randomized, so you can't rely on absolute pitch — you must listen to the internal structure and color of the chord itself.</p>"
      },
      {
        "h2": "The color of chords",
        "body": "<p>Every chord type has a unique personality:</p>\n<ul>\n  <li>Major is bright and happy.</li>\n  <li>Minor is dark and melancholic.</li>\n  <li>Diminished sounds tense, like a horror movie.</li>\n  <li>Augmented sounds dreamy and floating.</li>\n</ul>"
      },
      {
        "h2": "Challenge yourself",
        "body": "<p>Start with the classic Major vs Minor battle. Once you can easily build a streak of 20, open the settings and add Suspended chords (sus2, sus4) or Seventh chords to the mix to dramatically increase the difficulty.</p>"
      }
    ],
    "ctaLabel": "Play Guess The Chord",
    "ctaLink": "/"
  },
  {
    "slug": "minor-2nd-vs-major-2nd-ear-training",
    "title": "Minor 2nd vs Major 2nd Ear Training | BananaTone",
    "description": "Learn to distinguish between the minor 2nd (half step) and major 2nd (whole step) intervals with free online practice.",
    "canonical": "https://bananatone.com/minor-2nd-vs-major-2nd-ear-training",
    "h1": "Minor 2nd vs Major 2nd",
    "intro": "The minor second and major second are the smallest common intervals in Western music. Telling them apart is the first step to transcribing melodies by ear.",
    "cards": [
      {
        "h2": "The Half Step vs Whole Step",
        "body": "<p>A <strong>minor second (m2)</strong> is a distance of one half-step (e.g., C to C#). It is the smallest interval on a piano or guitar.</p>\n<p>A <strong>major second (M2)</strong> is a distance of two half-steps, or one whole step (e.g., C to D).</p>"
      },
      {
        "h2": "How do they sound?",
        "body": "<p>The <strong>minor second</strong> is incredibly dissonant and tense. Played harmonically, it sounds like the notes are clashing violently. Played melodically, it is the famous \"Jaws\" theme.</p>\n<p>The <strong>major second</strong> is also dissonant, but much softer. It sounds like the opening two notes of \"Happy Birthday\".</p>"
      },
      {
        "h2": "Practice tips",
        "body": "<p>Because these intervals are so close in size, beginners often confuse them. Set your trainer to ONLY these two intervals, and play them in Harmonic mode. The sheer crunch and extreme tension of the minor 2nd will quickly become obvious compared to the milder major 2nd.</p>"
      }
    ],
    "ctaLabel": "Practice 2nd Intervals",
    "ctaLink": "/"
  },
  {
    "slug": "minor-6th-vs-major-6th-ear-training",
    "title": "Minor 6th vs Major 6th Ear Training | BananaTone",
    "description": "Practice identifying minor 6th and major 6th intervals by ear. Use our free interactive tool to master these tricky leaps.",
    "canonical": "https://bananatone.com/minor-6th-vs-major-6th-ear-training",
    "h1": "Minor 6th vs Major 6th",
    "intro": "The sixth intervals are wide leaps that often trip up beginners. Because they are the inversions of the thirds, they carry similar emotional weight but span a much wider distance.",
    "cards": [
      {
        "h2": "What is the difference?",
        "body": "<p>A <strong>minor sixth (m6)</strong> spans 8 half-steps. It sounds tragic, romantic, and yearning. A classic example is the opening leap in the theme from \"Love Story\" or the song \"In My Life\" by The Beatles.</p>\n<p>A <strong>major sixth (M6)</strong> spans 9 half-steps. It sounds open, sweet, and comforting. The most famous example is the first two notes of the \"NBC Chimes\" or \"My Bonnie Lies Over the Ocean\".</p>"
      },
      {
        "h2": "The inversion trick",
        "body": "<p>If you struggle to hear sixths, remember that they are upside-down thirds!</p>\n<ul>\n  <li>If you flip a minor 6th upside down, it becomes a Major 3rd.</li>\n  <li>If you flip a major 6th upside down, it becomes a Minor 3rd.</li>\n</ul>\n<p>If you can hear that \"happy\" major third quality hidden inside the interval, you are listening to a minor 6th!</p>"
      },
      {
        "h2": "Practice strategy",
        "body": "<p>Drill these two side-by-side. The major 6th will always feel slightly wider, brighter, and more \"resolved\" than the yearning, tragic pull of the minor 6th.</p>"
      }
    ],
    "ctaLabel": "Practice 6th Intervals",
    "ctaLink": "/"
  },
  {
    "slug": "ascending-intervals-ear-training",
    "title": "Ascending Intervals Ear Training Practice | BananaTone",
    "description": "Focus purely on ascending intervals. Train your ear to recognize upward melodic leaps with our free tool.",
    "canonical": "https://bananatone.com/ascending-intervals-ear-training",
    "h1": "Ascending Intervals Ear Training",
    "intro": "Ascending intervals (where the second note is higher than the first) are the easiest way to begin ear training, because they naturally mimic how we sing and recall popular melodies.",
    "cards": [
      {
        "h2": "Why practice ascending first?",
        "body": "<p>When a singer jumps for a high note, they are singing an ascending interval. Most of the \"song association\" tricks taught in music school (like using \"Star Wars\" for a perfect fifth) rely on ascending melodies. It is the most natural way for the human brain to process pitch distance.</p>"
      },
      {
        "h2": "The song reference method",
        "body": "<p>To master ascending intervals, assign a famous song to each one:</p>\n<ul>\n  <li>Minor 2nd: Jaws theme</li>\n  <li>Major 2nd: Happy Birthday</li>\n  <li>Perfect 4th: Here Comes the Bride</li>\n  <li>Perfect 5th: Twinkle Twinkle Little Star</li>\n  <li>Octave: Somewhere Over the Rainbow</li>\n</ul>"
      },
      {
        "h2": "How to use BananaTone",
        "body": "<p>Open the settings drawer and ensure \"Direction\" is set specifically to \"Ascending\". Start with a small pool of intervals (like Beginner) before expanding to the full 12-interval challenge.</p>"
      }
    ],
    "ctaLabel": "Practice Ascending Intervals",
    "ctaLink": "/"
  },
  {
    "slug": "descending-intervals-ear-training",
    "title": "Descending Intervals Ear Training Practice | BananaTone",
    "description": "Challenge yourself with descending interval practice. Master the often-neglected skill of hearing downward melodic leaps.",
    "canonical": "https://bananatone.com/descending-intervals-ear-training",
    "h1": "Descending Intervals Ear Training",
    "intro": "Many students master ascending intervals but completely freeze when the notes go down. Descending intervals require a completely different set of neural pathways and song references.",
    "cards": [
      {
        "h2": "The descending blind spot",
        "body": "<p>Because most melodies build energy by moving upward, we spend less time analyzing downward leaps. A student might instantly recognize an upward Perfect 5th, but guess a Perfect 4th when that exact same distance is played downwards.</p>"
      },
      {
        "h2": "Descending song references",
        "body": "<p>You need a new set of reference songs for downward leaps:</p>\n<ul>\n  <li>Descending m3: \"Hey Jude\" (first two notes)</li>\n  <li>Descending M3: Beethoven's 5th Symphony (dun-dun-dun-dun)</li>\n  <li>Descending P4: \"O Come All Ye Faithful\"</li>\n  <li>Descending P5: The Flintstones theme</li>\n</ul>"
      },
      {
        "h2": "The inversion trap",
        "body": "<p>Be careful! A descending Perfect 4th lands on the same note as an ascending Perfect 5th (from the same root). Your brain might try to trick you into hearing the upward distance. Force yourself to hear the gravity pulling the note downwards.</p>"
      }
    ],
    "ctaLabel": "Practice Descending Intervals",
    "ctaLink": "/"
  },
  {
    "slug": "harmonic-intervals-ear-training",
    "title": "Harmonic Intervals Ear Training (Simultaneous Notes) | BananaTone",
    "description": "Practice identifying harmonic intervals where both notes are played at the same time. The ultimate test of interval recognition.",
    "canonical": "https://bananatone.com/harmonic-intervals-ear-training",
    "h1": "Harmonic Intervals Ear Training",
    "intro": "When two notes are played at exactly the same time, it creates a harmonic interval. This is much harder than melodic (sequential) intervals, as you must identify the interval by its texture and dissonance.",
    "cards": [
      {
        "h2": "Melodic vs Harmonic",
        "body": "<p>In a <strong>melodic</strong> interval, you can hear the starting note, hear the ending note, and measure the distance. In a <strong>harmonic</strong> interval, the sounds blend together into a single \"texture.\" You must learn to recognize the feeling of that texture.</p>"
      },
      {
        "h2": "Consonance and Dissonance",
        "body": "<p>Harmonic intervals are identified by how much they clash:</p>\n<ul>\n  <li><strong>Highly Dissonant:</strong> Minor 2nd, Major 7th, Tritone. They sound tense and uncomfortable.</li>\n  <li><strong>Imperfect Consonance:</strong> Major/Minor 3rds and 6ths. They sound sweet and pleasant.</li>\n  <li><strong>Perfect Consonance:</strong> Perfect 4th, Perfect 5th, Octave. They sound hollow, pure, and completely stable.</li>\n</ul>"
      },
      {
        "h2": "Practice tips",
        "body": "<p>Set BananaTone's direction to \"Harmonic\". If you get stuck, try to sing the bottom note, then sing the top note, effectively breaking the harmonic interval back into a melodic one in your head.</p>"
      }
    ],
    "ctaLabel": "Practice Harmonic Intervals",
    "ctaLink": "/"
  },
  {
    "slug": "diatonic-intervals-ear-training",
    "title": "Diatonic Intervals Ear Training | BananaTone",
    "description": "Focus purely on diatonic intervals from the major scale. Perfect for beginners transitioning into advanced ear training.",
    "canonical": "https://bananatone.com/diatonic-intervals-ear-training",
    "h1": "Diatonic Intervals Ear Training",
    "intro": "Diatonic intervals are the distances found naturally within a major scale, without any sharps or flats. Mastering these first makes navigating tonal music incredibly easy.",
    "cards": [
      {
        "h2": "What are diatonic intervals?",
        "body": "<p>If you start on the root note of a Major scale (Do) and jump to any other note in that scale, you are playing a diatonic interval. They are:</p>\n<ul>\n  <li>Major 2nd (Do-Re)</li>\n  <li>Major 3rd (Do-Mi)</li>\n  <li>Perfect 4th (Do-Fa)</li>\n  <li>Perfect 5th (Do-Sol)</li>\n  <li>Major 6th (Do-La)</li>\n  <li>Major 7th (Do-Ti)</li>\n  <li>Perfect 8ve (Do-Do)</li>\n</ul>"
      },
      {
        "h2": "The 'Major' shortcut",
        "body": "<p>Notice a pattern? Every interval built from the root of a major scale is either <strong>Major</strong> or <strong>Perfect</strong>. There are no minor or diminished intervals when you measure upward from the root of a major key.</p>"
      },
      {
        "h2": "How to practice",
        "body": "<p>In the BananaTone Interval settings, deselect all minor intervals and the tritone. Practice leaping from the root to these bright, stable diatonic intervals until they feel like second nature.</p>"
      }
    ],
    "ctaLabel": "Practice Diatonic Intervals",
    "ctaLink": "/"
  },
  {
    "slug": "dominant-7th-chord-ear-training",
    "title": "Dominant 7th Chord Ear Training | BananaTone",
    "description": "Learn to hear the dominant 7th chord. Master the bluesy, tense sound that drives rock, blues, and jazz.",
    "canonical": "https://bananatone.com/dominant-7th-chord-ear-training",
    "h1": "Dominant 7th Chord Ear Training",
    "intro": "The Dominant 7th chord is the engine of Western music. It creates a specific type of tension that aggressively pushes the music forward, demanding to be resolved to the root chord.",
    "cards": [
      {
        "h2": "The structure of a Dominant 7",
        "body": "<p>A dominant 7th chord (e.g., G7) consists of a major triad with a minor seventh added on top (Root - M3 - P5 - m7). </p>\n<p>The magic of this chord comes from the clash between the major 3rd and the minor 7th. These two notes form a <strong>tritone</strong>, which creates intense, bluesy tension.</p>"
      },
      {
        "h2": "Where you'll hear it",
        "body": "<p>It is the \"V\" chord in most chord progressions (like the G7 pulling to C major). However, in Blues music, almost <em>every</em> chord is a dominant 7th, giving the genre its characteristic gritty, unresolved sound.</p>"
      },
      {
        "h2": "How to identify it",
        "body": "<p>Listen for a chord that has a happy, major core, but a tense, slightly sour top note. If it sounds like it belongs in a 12-bar blues progression, or if it makes you desperately want to hear the next chord, it's a dominant 7th.</p>"
      }
    ],
    "ctaLabel": "Practice Dominant 7th Chords",
    "ctaLink": "/"
  },
  {
    "slug": "phrygian-mode-ear-training",
    "title": "Phrygian Mode Ear Training & Recognition | BananaTone",
    "description": "Train your ear to recognize the Phrygian mode. Learn the dark, Spanish-flavored scale used in metal and flamenco.",
    "canonical": "https://bananatone.com/phrygian-mode-ear-training",
    "h1": "Phrygian Mode Ear Training",
    "intro": "The Phrygian mode is the darkest of the common minor modes. With its characteristic flat 2nd degree, it immediately evokes images of Spanish flamenco, Middle Eastern music, or heavy metal.",
    "cards": [
      {
        "h2": "What is the Phrygian mode?",
        "body": "<p>Phrygian is the 3rd mode of the major scale. If you play only the white keys from E to E, you are playing E Phrygian.</p>\n<p>Compared to the natural minor scale, the only difference is the <strong>flatted 2nd degree</strong>. That half-step interval right at the beginning of the scale gives Phrygian its dark, exotic bite.</p>"
      },
      {
        "h2": "The sound of Phrygian",
        "body": "<p>Because the second note is only a half-step above the root, it creates immense tension that wants to pull back down. This sound is the backbone of heavy metal riffs (think Metallica or Megadeth) and Spanish acoustic guitar music.</p>"
      },
      {
        "h2": "Listening tips",
        "body": "<p>When practicing in BananaTone's Scale mode, listen to the very first step of the scale. If the scale immediately steps up by a tiny, tense half-step before continuing into a minor sound, you are hearing Phrygian.</p>"
      }
    ],
    "ctaLabel": "Practice Phrygian Mode",
    "ctaLink": "/"
  },
  {
    "slug": "lydian-mode-ear-training",
    "title": "Lydian Mode Ear Training - The Brightest Mode | BananaTone",
    "description": "Identify the Lydian mode by ear. Master the dreamy, cinematic scale favored by film composers like John Williams.",
    "canonical": "https://bananatone.com/lydian-mode-ear-training",
    "h1": "Lydian Mode Ear Training",
    "intro": "If the major scale is happy, the Lydian mode is magical. It is considered the brightest of all the modes, featuring a raised 4th degree that creates a sense of wonder, space, and floating.",
    "cards": [
      {
        "h2": "What is the Lydian mode?",
        "body": "<p>Lydian is the 4th mode of the major scale. Playing all white keys from F to F gives you F Lydian.</p>\n<p>It is identical to a standard major scale, but the 4th note is raised by a half-step (sharp 4 / augmented 4th). This removes the half-step clash that normally exists in the major scale, creating an incredibly open sound.</p>"
      },
      {
        "h2": "The cinematic sound",
        "body": "<p>Film composers love Lydian because it sounds heroic, futuristic, and full of wonder. The themes from <em>E.T.</em>, <em>The Simpsons</em>, and <em>Back to the Future</em> all feature prominent Lydian melodies.</p>"
      },
      {
        "h2": "How to distinguish it",
        "body": "<p>Listen for a scale that sounds like Major, but has an unexpected, slightly tense \"lift\" right in the middle (the sharp 4th). It often feels like the scale is floating upwards rather than resting solidly on the ground.</p>"
      }
    ],
    "ctaLabel": "Practice Lydian Mode",
    "ctaLink": "/"
  },
  {
    "slug": "melodic-minor-scale-ear-training",
    "title": "Melodic Minor Scale Ear Training | BananaTone",
    "description": "Learn to recognize the complex and beautiful melodic minor scale with free interactive ear training exercises.",
    "canonical": "https://bananatone.com/melodic-minor-scale-ear-training",
    "h1": "Melodic Minor Scale Ear Training",
    "intro": "The melodic minor scale is unique because it changes depending on whether you are going up or down. It bridges the gap between minor sadness and major brightness in a beautiful, classical way.",
    "cards": [
      {
        "h2": "The structure of Melodic Minor",
        "body": "<p>In classical theory, the melodic minor scale raises the 6th and 7th degrees when ascending (making the top half sound exactly like a major scale), but reverts to the natural minor when descending.</p>\n<p>In jazz theory, the \"jazz minor\" scale keeps the raised 6th and 7th degrees in both directions. BananaTone uses the jazz/ascending form: it's a minor scale with a major 6th and major 7th.</p>"
      },
      {
        "h2": "How it sounds",
        "body": "<p>It starts out dark and sad (because of the minor third), but then surprisingly finishes bright and heroic (because of the major 6th and 7th). It feels like a story that starts in tragedy but ends in triumph.</p>"
      },
      {
        "h2": "Comparing the Minor Scales",
        "body": "<ul>\n  <li><strong>Natural Minor:</strong> Completely dark.</li>\n  <li><strong>Harmonic Minor:</strong> Dark, but with a sudden, exotic Middle Eastern jump at the end (raised 7).</li>\n  <li><strong>Melodic Minor:</strong> Starts dark, smoothly transitions into bright/major at the end (raised 6 and 7).</li>\n</ul>"
      }
    ],
    "ctaLabel": "Practice Melodic Minor",
    "ctaLink": "/"
  },
  {
    "slug": "church-modes-ear-training",
    "title": "Church Modes Ear Training - Practice All 7 Modes | BananaTone",
    "description": "Master the 7 Greek church modes (Ionian, Dorian, Phrygian, Lydian, Mixolydian, Aeolian, Locrian) by ear.",
    "canonical": "https://bananatone.com/church-modes-ear-training",
    "h1": "Church Modes Ear Training",
    "intro": "The seven Church Modes (also known as Greek Modes) are variations of the major scale, each starting on a different degree. Recognizing them by ear unlocks a massive palette of musical colors.",
    "cards": [
      {
        "h2": "The 7 Modes",
        "body": "<p>In order from brightest to darkest:</p>\n<ol>\n  <li><strong>Lydian:</strong> Magical, floating (Major with #4)</li>\n  <li><strong>Ionian (Major):</strong> Happy, resolved</li>\n  <li><strong>Mixolydian:</strong> Bluesy, rocky (Major with b7)</li>\n  <li><strong>Dorian:</strong> Jazzy, sophisticated minor (Minor with natural 6)</li>\n  <li><strong>Aeolian (Natural Minor):</strong> Sad, pure minor</li>\n  <li><strong>Phrygian:</strong> Dark, Spanish, tense (Minor with b2)</li>\n  <li><strong>Locrian:</strong> Extremely unstable, terrifying (Minor with b2 and b5)</li>\n</ol>"
      },
      {
        "h2": "How to study them",
        "body": "<p>Never try to learn all seven at once! Divide them into families:</p>\n<p><strong>The Major Family:</strong> Ionian, Lydian, Mixolydian. Focus on distinguishing their subtle differences.</p>\n<p><strong>The Minor Family:</strong> Aeolian, Dorian, Phrygian. Practice hearing whether the minor scale sounds jazzy, plain, or dark/exotic.</p>"
      },
      {
        "h2": "Using BananaTone",
        "body": "<p>Configure the Scale trainer to include the modes you want to practice. Start with just Ionian and Aeolian (Major and Minor), then add Dorian and Mixolydian as your skills improve.</p>"
      }
    ],
    "ctaLabel": "Practice Church Modes",
    "ctaLink": "/"
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
