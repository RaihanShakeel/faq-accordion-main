let toggleIcons = document.getElementsByClassName('toggle-icon');
let questions = document.getElementsByClassName('question');
let lastOpened = null; // Keep track of the last opened answer

function toggleFAQ(icon, answer, question) {
  if (lastOpened && lastOpened !== answer) {
    let lastIcon = lastOpened.closest('.FAQ').querySelector('.toggle-icon');
    lastIcon.src = 'assets/images/icon-plus.svg';
    lastIcon.alt = 'Plus Icon';
    lastOpened.style.display = 'none';
    
  }

  if (icon.src.includes('icon-plus.svg')) {
    icon.src = 'assets/images/icon-minus.svg';
    icon.alt = 'Minus Icon';
    answer.style.display = 'block';
    lastOpened = answer; // Update lastOpened to the current answer
    
  } else {
    icon.src = 'assets/images/icon-plus.svg';
    icon.alt = 'Plus Icon';
    answer.style.display = 'none';
    lastOpened = null; // Reset lastOpened as no answer is open now
    
  }
}

Array.from(toggleIcons).forEach(toggleIcon => {
  toggleIcon.addEventListener('click', (event) => {
    let icon = event.target;
    let parent = icon.closest('.FAQ');
    let answer = parent.querySelector('.answer');
    toggleFAQ(icon, answer);
  });
});

Array.from(questions).forEach(question => {
  question.addEventListener('click', (event) => {
    let parent = event.target.closest('.FAQ');
    let icon = parent.querySelector('.toggle-icon');
    let answer = parent.querySelector('.answer');
    toggleFAQ(icon, answer, question);
  });
});
