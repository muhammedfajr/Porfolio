// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Language toggle with animation
function toggleLanguage() {
    const enContent = document.querySelectorAll('.content-en');
    const ruContent = document.querySelectorAll('.content-ru');
    
    enContent.forEach(element => {
        element.style.opacity = '0';
        setTimeout(() => {
            element.style.display = element.style.display === 'none' ? 'block' : 'none';
            element.style.opacity = '1';
        }, 300);
    });
    
    ruContent.forEach(element => {
        element.style.opacity = '0';
        setTimeout(() => {
            element.style.display = element.style.display === 'none' ? 'block' : 'none';
            element.style.opacity = '1';
        }, 300);
    });
}

// Add scroll animation for skill levels
function animateSkillLevels() {
    const skillLevels = document.querySelectorAll('.skill-level');
    skillLevels.forEach(skill => {
        const level = skill.getAttribute('data-level');
        skill.style.setProperty('--level', level);
    });
}

// Initialize animations when page loads
document.addEventListener('DOMContentLoaded', () => {
    animateSkillLevels();
});

// Add navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
    } else {
        navbar.style.backgroundColor = 'var(--white)';
    }
});

document.addEventListener('DOMContentLoaded', function() {
    // Handle report download clicks
    const reportButtons = document.querySelectorAll('.project-btn[download]');
    
    reportButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            // You can add analytics or tracking here
            console.log('Report download initiated');
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    // Track GitHub link clicks
    const githubButtons = document.querySelectorAll('.github-btn');
    
    githubButtons.forEach(button => {
        button.addEventListener('click', function() {
            console.log('GitHub repository visited');
        });
    });
});

function toggleCode(element) {
    const codePreview = element.closest('.project-content').querySelector('.code-preview');
    codePreview.classList.toggle('expanded');
    
    const expandIcon = element.querySelector('i');
    if (expandIcon) {
        expandIcon.classList.toggle('fa-expand');
        expandIcon.classList.toggle('fa-compress');
    }
}

// Add syntax highlighting (optional)
document.addEventListener('DOMContentLoaded', function() {
    const codeBlocks = document.querySelectorAll('pre code');
    codeBlocks.forEach(block => {
        // Add your syntax highlighting logic here if needed
        highlightCode(block);
    });
});

function highlightCode(block) {
    // Simple syntax highlighting for Python
    const code = block.innerHTML;
    const highlighted = code
        .replace(/(import|class|def|return|pass|self)/g, '<span class="keyword">$1</span>')
        .replace(/(""".*?""")/g, '<span class="comment">$1</span>')
        .replace(/(#.*$)/gm, '<span class="comment">$1</span>')
        .replace(/('.*?'|".*?")/g, '<span class="string">$1</span>');
    block.innerHTML = highlighted;
} 