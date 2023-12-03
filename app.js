document.addEventListener('DOMContentLoaded', function () {
    const appElement = document.getElementById('app');
    const courses = [
      { id: 1, name: 'Curso de JavaScript' },
      { id: 2, name: 'Curso de Java' },
      {id: 3, name: 'Curso de Hardware'}
    ];
  
    renderCourses();
  
    function renderCourses() {
      appElement.innerHTML = `
        <div class="container">
          <h2>Lista de Cursos</h2>
          <ul class="course-list">
            ${courses.map(course => `
              <li class="course-item">
                <span>${course.name}</span>
                <button class="btn" onclick="editCourse(${course.id})">Editar</button>
                <button class="btn" onclick="deleteCourse(${course.id})">Excluir</button>
              </li>
            `).join('')}
          </ul>
          <button class="btn" onclick="addCourse()">Adicionar Curso</button>
        </div>
      `;
    }
  
    function addCourse() {
      const courseName = prompt('Digite o nome do curso:');
      if (courseName) {
        const newCourse = { id: courses.length + 1, name: courseName };
        courses.push(newCourse);
        renderCourses();
      }
    }
  
    function editCourse(courseId) {
      const course = courses.find(course => course.id === courseId);
      const newName = prompt(`Editar curso: ${course.name}`, course.name);
      if (newName !== null) {
        course.name = newName;
        renderCourses();
      }
    }
  
    function deleteCourse(courseId) {
      const confirmDelete = confirm('Tem certeza que deseja excluir este curso?');
      if (confirmDelete) {
        const index = courses.findIndex(course => course.id === courseId);
        courses.splice(index, 1);
        renderCourses();
      }
    }
  });
  