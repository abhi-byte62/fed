document.addEventListener('DOMContentLoaded', () => {
    const roleBtns = document.querySelectorAll('.role-btn');
    const heroTitle = document.querySelector('.hero-title');
    const heroSubtitle = document.querySelector('.hero-subtitle');
    const badge = document.querySelector('.badge');
    const facultyTag = document.querySelector('.faculty-tag');
    const orderTitle = document.querySelector('.order-title');
    const etaText = document.querySelector('.eta');
    
    // Dynamic Role Switching between Lecturer and Student
    roleBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all
            roleBtns.forEach(b => b.classList.remove('active'));
            // Add to clicked
            btn.classList.add('active');
            
            const role = btn.dataset.role;
            
            // Animate out existing content
            animateChange(() => {
                if(role === 'lecturer') {
                    // Update to Lecturer Mode
                    badge.innerHTML = '🚀 Introducing Faculty Fast-Track';
                    badge.style.color = '#c4b5fd';
                    badge.style.background = 'rgba(139, 92, 246, 0.1)';
                    badge.style.borderColor = 'rgba(139, 92, 246, 0.3)';
                    
                    heroTitle.innerHTML = 'Your Next Lecture Started.<br>Your Lunch is <span class="gradient-text">Already Here.</span>';
                    heroSubtitle.innerHTML = 'The first campus food delivery platform designed around the schedules of university lecturers. Skip the line, because your time is for teaching.';
                    
                    facultyTag.style.display = 'inline-block';
                    facultyTag.innerHTML = 'Faculty Priority Active';
                    facultyTag.style.color = '#d8b4fe';
                    facultyTag.style.background = 'rgba(139, 92, 246, 0.2)';
                    facultyTag.style.borderColor = 'rgba(139, 92, 246, 0.3)';
                    
                    orderTitle.innerHTML = 'Grilled Salmon Bowl 🥗';
                    etaText.innerHTML = 'Est. Delivery to Block B: <strong>4 mins</strong>';
                    
                    document.documentElement.style.setProperty('--secondary', '#8b5cf6');
                } else {
                    // Update to Student Mode
                    badge.innerHTML = '🎓 CampusEats for Students';
                    badge.style.color = '#60a5fa';
                    badge.style.background = 'rgba(59, 130, 246, 0.1)';
                    badge.style.borderColor = 'rgba(59, 130, 246, 0.3)';
                    
                    heroTitle.innerHTML = 'Study Hard.<br>Eat <span class="gradient-text">Well.</span>';
                    heroSubtitle.innerHTML = 'Get hot meals delivered straight to your dorm or library desk. Affordable pricing tailored for the student budget.';
                    
                    facultyTag.style.display = 'inline-block';
                    facultyTag.innerHTML = 'Standard Delivery';
                    facultyTag.style.color = '#93c5fd';
                    facultyTag.style.background = 'rgba(59, 130, 246, 0.2)';
                    facultyTag.style.borderColor = 'rgba(59, 130, 246, 0.3)';
                    
                    orderTitle.innerHTML = 'Double Cheeseburger 🍔';
                    etaText.innerHTML = 'Est. Delivery to Dorm 4: <strong>25 mins</strong>';
                    
                    document.documentElement.style.setProperty('--secondary', '#3b82f6');
                }
            });
        });
    });

    function animateChange(callback) {
        const elements = [heroTitle, heroSubtitle, badge, orderTitle, facultyTag, etaText];
        
        elements.forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(10px)';
            el.style.transition = 'opacity 0.3s, transform 0.3s';
        });
        
        setTimeout(() => {
            callback();
            
            elements.forEach(el => {
                el.style.opacity = '1';
                el.style.transform = 'translateY(0)';
            });
        }, 300);
    }
});
