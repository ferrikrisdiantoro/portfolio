const fs = require('fs');
const path = require('path');

const projectsJsonPath = path.join(__dirname, 'src', 'data', 'projects.json');
const publicProjectsPath = path.join(__dirname, 'public', 'projects');

// Read existing projects data
const projects = JSON.parse(fs.readFileSync(projectsJsonPath, 'utf8'));

let updatedCount = 0;

projects.forEach(project => {
    // Extract folder name from link or thumbnail
    // Assuming link is like "/projects/folder-name" or thumbnail is "/projects/folder-name/image.png"
    let folderName = '';

    if (project.link && project.link.startsWith('/projects/')) {
        folderName = project.link.replace('/projects/', '');
    } else if (project.thumbnail && project.thumbnail.startsWith('/projects/')) {
        const parts = project.thumbnail.split('/');
        if (parts.length >= 3) {
            folderName = parts[2];
        }
    }

    if (!folderName) {
        console.warn(`Could not determine folder for project: ${project.title}`);
        return;
    }

    const projectDir = path.join(publicProjectsPath, folderName);

    if (fs.existsSync(projectDir)) {
        const files = fs.readdirSync(projectDir);

        // Filter for image files
        const imageFiles = files.filter(file => {
            const ext = path.extname(file).toLowerCase();
            return ['.png', '.jpg', '.jpeg', '.webp', '.gif'].includes(ext);
        });

        if (imageFiles.length > 0) {
            // Construct new gallery paths
            const newGallery = imageFiles.map(file => `/projects/${folderName}/${file}`);

            // Check if we need to update
            const currentGallery = project.gallery || [];

            // Simple check: if lengths differ or contents differ, update
            // Ideally we want to KEEP the thumbnail as the first item if possible, or just overwrite.
            // Requirement: "nampilin semua gambar yang ada ... kan isinya banyak tuh"
            // So we should probably just use ALL images found.

            // Let's sort them to be deterministic
            newGallery.sort();

            // We update the project gallery
            project.gallery = newGallery;
            updatedCount++;
            console.log(`Updated gallery for ${project.title}: found ${newGallery.length} images.`);
        } else {
            console.log(`No images found in ${folderName} for ${project.title}`);
        }
    } else {
        console.warn(`Directory not found: ${projectDir}`);
    }
});

if (updatedCount > 0) {
    fs.writeFileSync(projectsJsonPath, JSON.stringify(projects, null, 2), 'utf8');
    console.log(`Successfully updated ${updatedCount} projects.`);
} else {
    console.log("No updates were necessary.");
}
