const projects = [
  { title: 'IPHONE16', imageUrl: 'images/projects/iphone/iphone16_pink.webp', link: 'projects/project1.html', type: 'phone2' },
  { title: 'ProjectTwo', imageUrl: 'images/projects/iphone/iphone.jpg', link: 'projects/project2.html', type: 'Installation' },
  { title: 'ProjectThree', imageUrl: 'images/projects/dummy.png', link: 'projects/project3.html', type: 'Interactive Art' },
  { title: 'ProjectFour', imageUrl: 'images/projects/dummy.png', link: 'projects/project4.html', type: 'Media Facade' },
  { title: 'ProjectFive', imageUrl: 'images/projects/dummy.png', link: 'projects/project5.html', type: 'Installation' },
  { title: 'ProjectSix', imageUrl: 'images/projects/dummy.png', link: 'projects/project6.html', type: 'Interactive Art' },
  { title: 'ProjectSeven', imageUrl: 'images/projects/iphone/iphone16_blue.webp', link: 'projects/project7.html', type: 'iphone' },
];

function loadProjects() {
  const projectsGrid = document.getElementById('projects-grid');
  
  // 프로젝트 동적 추가
  projects.forEach(project => {
    const projectCard = document.createElement('div');
    projectCard.classList.add('project-card');
    projectCard.innerHTML = `
      <a href="${project.link}" class="project-link">
        <div class="project-image">
          <img src="${project.imageUrl}" alt="${project.title}" loading="lazy">
        </div>
      </a>
      <div class="project-title">
        <h3>${project.title}</h3>
        <p>${project.type}</p>
      </div>
    `;
    projectsGrid.appendChild(projectCard);
  });

  // Masonry 적용
  imagesLoaded('#projects-grid', function () {
    const masonryInstance = new Masonry('#projects-grid', {
      itemSelector: '.project-card',
      columnWidth: '.project-card',
      percentPosition: true,
      gutter: 6
    });

    window.addEventListener('resize', () => {
      masonryInstance.reloadItems();
      masonryInstance.layout();
    });
  });
}

document.addEventListener('DOMContentLoaded', function () {
  loadProjects();
});