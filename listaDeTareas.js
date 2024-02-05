const readline = require('readline-sync');


const tareas = [];

function agregar() {
    const indicator = readline.question('Indicador: ');
    const description = readline.question('Descripción: ');
    tareas.push({ indicator, description, completed: false });
    console.log('Tarea añadida.');
  }

  function eliminar() {
    const index = readline.question('Índice de la tarea a eliminar: ');
    if (index >= 0 && index < tareas.length) {
      tareas.splice(index, 1);
      console.log('Tarea eliminada.');
    } else {
      console.log('Índice no válido.');
    }
  }

  function completar() {
    const index = readline.question('Índice de la tarea completada: ');
    if (index >= 0 && index < tareas.length) {
      tareas[index].completed = true;
      console.log('Tarea marcada como completada.');
    } else {
      console.log('Índice no válido.');
    }
  }

  function menu() {
    while (true) {
      console.log('\nOpciones:');
      console.log('1. Añadir tarea');
      console.log('2. Eliminar tarea');
      console.log('3. Completar tarea');
      console.log('5. Salir');
  
      const choice = readline.question('Elige una opción: ');
  
      switch (choice) {
        case '1':
          agregar();
          break;
        case '2':
          eliminar();
          break;
        case '3':
          completar();
          break;
        case '5':
          return;
        default:
          console.log('Opción no válida.');
      }
    }
  }
  
  menu();
  