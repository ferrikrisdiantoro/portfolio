const fs = require('fs');
const path = require('path');

const projectsJsonPath = path.join(__dirname, 'src', 'data', 'projects.json');
const publicProjectsPath = path.join(__dirname, 'public', 'projects');

const projects = JSON.parse(fs.readFileSync(projectsJsonPath, 'utf8'));
let updatedCount = 0;

projects.forEach(project => {
    let folderName = '';

    // Determine folder name similar to previous script
    if (project.link && project.link.startsWith('/projects/')) {
        folderName = project.link.replace('/projects/', '');
    } else if (project.thumbnail && project.thumbnail.startsWith('/projects/')) {
        const parts = project.thumbnail.split('/');
        if (parts.length >= 3) {
            folderName = parts[2];
        }
    }

    if (!folderName) return;

    const projectDir = path.join(publicProjectsPath, folderName);

    // Check if current thumbnail actually exists
    let thumbnailExists = false;
    if (project.thumbnail && project.thumbnail.startsWith('/')) {
        const thumbPath = path.join(__dirname, 'public', project.thumbnail);
        if (fs.existsSync(thumbPath)) {
            thumbnailExists = true;
        }
    }

    // If thumbnail doesn't exist, try to find a replacement
    if (!thumbnailExists && fs.existsSync(projectDir)) {
        const files = fs.readdirSync(projectDir);
        const imageFiles = files.filter(file => {
            const ext = path.extname(file).toLowerCase();
            return ['.png', '.jpg', '.jpeg', '.webp', '.gif'].includes(ext);
        });

        if (imageFiles.length > 0) {
            // Sort to pick '1.png' preferably or just alphabetical
            imageFiles.sort();
            const newThumbnail = `/projects/${folderName}/${imageFiles[0]}`;

            console.log(`Fixing thumbnail for ${project.title}: ${project.thumbnail} -> ${newThumbnail}`);
            project.thumbnail = newThumbnail;
            updatedCount++;
        }
    }
});

if (updatedCount > 0) {
    fs.writeFileSync(projectsJsonPath, JSON.stringify(projects, null, 2), 'utf8');
    console.log(`Updated ${updatedCount} thumbnails.`);
} else {
    console.log("No thumbnails required updates.");
}
