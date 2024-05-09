(function() {
    const downloadCVButton = document.getElementById('download-cv');
    const downloadLoader = document.getElementById('download-loader');

    downloadCVButton.addEventListener('click', async () => {
        // Show download loader
        downloadLoader.classList.remove('hidden');
    
        try {
            const response = await fetch('/download-cv');
            const blob = await response.blob();
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = 'cv.pdf';
            a.click();
            URL.revokeObjectURL(url);
        } finally {
            // Hide download loader
            downloadLoader.classList.add('hidden');
        }
    });

    // Toggle animation class for the name
    document.addEventListener('DOMContentLoaded', () => {
        const nameElement = document.querySelector('.animated-name');
        nameElement.classList.add('animate');
    });
})();