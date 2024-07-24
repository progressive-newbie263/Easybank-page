document.addEventListener('DOMContentLoaded', () => {
  //event listener for clicking the triple dashes icon (phone screen):
  const navbarNav = document.querySelector('.navbar-nav');
  const openNavbar = document.querySelector('.js-open-button');
  const closeNavbar = document.querySelector('.js-close-button');

  openNavbar.addEventListener('click', () => {
    //turn on X icon, remove triple dash icon
    openNavbar.style.display = 'none';
    closeNavbar.style.display = 'block';
    navbarNav.classList.toggle('active');//toggle the menu icon (triple dash into X)
  });

  //turn on triple dash icon, remove X icon
  closeNavbar.addEventListener('click', () => {
    openNavbar.style.display = 'block';
    closeNavbar.style.display = 'none';
    navbarNav.classList.toggle('active');//toggle the menu icon (triple dash into X)
  });

  // Hover effect on blog posts
  document.querySelectorAll('.js-article-card').forEach(article => {
    article.addEventListener('mouseenter', () => {
      document.querySelectorAll('.js-article-card').forEach(otherArticle => {
        if (otherArticle !== article) {
          otherArticle.classList.add('blurred');
        }
      });
    });

    article.addEventListener('mouseleave', () => {
      document.querySelectorAll('.js-article-card').forEach(otherArticle => {
        otherArticle.classList.remove('blurred');
      });
    });
  });
});
