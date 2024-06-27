document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    document.querySelectorAll('nav ul li a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    
    // Spark effect on button hover
    document.querySelectorAll('.btn').forEach(button => {
        button.addEventListener('mouseover', function() {
            createSparks(this);
        });
        button.addEventListener('mouseout', function() {
            removeSparks(this);
        });
    });

    function createSparks(button) {
        let sparkContainer = document.createElement('div');
        sparkContainer.classList.add('spark-container');
        button.appendChild(sparkContainer);

        for (let i = 0; i < 20; i++) {
            let spark = document.createElement('div');
            spark.classList.add('spark');
            sparkContainer.appendChild(spark);

            let delay = Math.random() * 0.5;
            let duration = 0.5 + Math.random() * 1;
            let translateX = Math.random() * 30 - 15;
            let translateY = Math.random() * 30 - 15;

            spark.style.animationDelay = `${delay}s`;
            spark.style.animationDuration = `${duration}s`;
            spark.style.transform = `translate(${translateX}px, ${translateY}px)`;
        }
    }

    function removeSparks(button) {
        let sparkContainer = button.querySelector('.spark-container');
        if (sparkContainer) {
            sparkContainer.remove();
        }
    }
});
