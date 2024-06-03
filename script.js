document.querySelectorAll('.faqbox').forEach((faqbox) => {
    faqbox.addEventListener('click', () => {
        const answer = faqbox.nextElementSibling;
        const isVisible = answer.style.display === 'block';
        
        // Hide all answers
        document.querySelectorAll('.faq-answer').forEach((faqAnswer) => {
            faqAnswer.style.display = 'none';
        });

        // Toggle the visibility of the clicked answer
        answer.style.display = isVisible ? 'none' : 'block';
    });
});
