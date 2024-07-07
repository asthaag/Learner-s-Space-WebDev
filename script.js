document.addEventListener('DOMContentLoaded', () => {
    const quizContainer = document.getElementById('quiz');
    const resultContainer = document.getElementById('result');
    const navLinks = document.querySelectorAll('nav ul li a');

    document.getElementById('submit').addEventListener('click', () => {
        const q1 = document.querySelector('input[name="q1"]:checked');
        const q2 = document.querySelector('input[name="q2"]:checked');
        const q3 = document.querySelector('input[name="q3"]:checked');

        let score = 0;
        if (q1 && q1.value === 'Knight') score++;
        if (q2 && q2.value === 'Wilhelm Steinitz') score++;
        if (q3 && q3.value === 'Gukesh D') score++;

        resultContainer.textContent = `Your score is ${score}/3.`;
    });
});
