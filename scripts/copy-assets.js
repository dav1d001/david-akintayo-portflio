const fs = require('fs');
const path = require('path');

function copyIfExists(srcRelative, destRelative) {
  const src = path.join(__dirname, '..', srcRelative);
  const dest = path.join(__dirname, '..', destRelative);

  if (fs.existsSync(src)) {
    try {
      fs.mkdirSync(path.dirname(dest), { recursive: true });
      fs.copyFileSync(src, dest);
      console.log(`Copied ${srcRelative} -> ${destRelative}`);
    } catch (err) {
      console.error(`Failed to copy ${srcRelative} -> ${destRelative}:`, err.message);
      process.exitCode = 1;
    }
  } else {
    console.log(`Source not found, skipping: ${srcRelative}`);
  }
}

// Copy preview image into public so OG/twitter tags work on deployments
copyIfExists('src/assets/portfolio.jpg', 'public/portfolio.jpg');

// If a resume exists in the repo root (user might add it locally), copy it into public as well
copyIfExists('David-Oluwadamipe-Akintayo_Resume.pdf', 'public/David-Oluwadamipe-Akintayo_Resume.pdf');

console.log('copy-assets script finished.');
