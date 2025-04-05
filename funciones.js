// version que se esta trabajando actualmente: https://github.com/emancilla01/inovatec/tree/shared? 

  const buildingNames = {
  'building-9': 'Edificio K',
  'building-10': 'Laboratorio de electrónica',
  'building-11': 'Sistemas y Computación',
  'building-12': 'Laboratorio Cómputo Industrial'
  };
  const classroomData = {
  'building-9': ['K1', 'K2', 'K3', 'K4', 'K5'],
  'building-10': ['E1', 'E2', 'E3'],
  'building-11': ['S1', 'S2', 'S3', 'S4'],
  'building-12': ['CI1', 'CI2']
  };
  const legendItems = document.querySelectorAll('.legend li');
  const mapGroup = document.getElementById('mapContent');

  legendItems.forEach(item => {
    const targetId = item.getAttribute('data-target');
    const building = document.getElementById(targetId);

    item.addEventListener('mouseover', () => {
      if (building) building.classList.add('highlight');
    });
    item.addEventListener('mouseout', () => {
      if (building) building.classList.remove('highlight');
    });
    item.addEventListener('click', () => {
      if (building) {
        showClassrooms(building);
      }
    });
    // Make each building rectangle clickable
    const buildings = document.querySelectorAll('.edificio-container');

    buildings.forEach(building => {
      building.addEventListener('click', () => {
      showClassrooms(building);
      });
    });
  });

  function showClassrooms(buildingElement) {
    const panel = document.getElementById('classroomPanel');
    const mapa = document.getElementById('mapa');
    const roomsContainer = panel.querySelector('.rooms');

    // Get classroom list based on clicked building
    const rooms = classroomData[buildingElement.id] || [];

    // Clear previous rooms
    roomsContainer.innerHTML = '';

    // Add new room divs
    rooms.forEach(room => {
    const roomDiv = document.createElement('div');
    roomDiv.className = 'room';
    roomDiv.textContent = room;
    roomsContainer.appendChild(roomDiv);
    });

    // Show panel
    mapa.style.transform = 'translateX(-200px)';
    panel.classList.add('visible');
    mapa.style.transform = 'translateX(-200px)';

    //panel.style.display = 'block'; // Show the panel when a building is clicked
    const panelTitle = document.getElementById('panelTitle');
    panelTitle.textContent = 'Salones – ' + (buildingNames[buildingElement.id] || 'Edificio');

    panel.classList.add('visible'); // test Add the visible class to show the panel 

  }

  document.getElementById('closePanelBtn').addEventListener('click', () => {
  const panel = document.getElementById('classroomPanel');
  const mapa = document.getElementById('mapa');

  //panel.style.display = 'none';
  panel.classList.remove('visible'); // test Remove the visible class to hide the panel
  mapa.style.transform = 'translateX(0)';
  });

  
