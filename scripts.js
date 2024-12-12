function verificarCodigo() {
     const codigo = document.getElementById('codigo').value;
     if (codigo === 'Monzon1914') { // Puedes cambiar el código según tus necesidades
         window.location.href = 'principal.html';
     } else {
         alert('Código incorrecto');
     }
 }
 
 function agregarFila() {
     const table = document.getElementById('territorios').getElementsByTagName('tbody')[0];
     const newRow = table.insertRow();
 
     const cell1 = newRow.insertCell(0);
     const cell2 = newRow.insertCell(1);
     const cell3 = newRow.insertCell(2);
     const cell4 = newRow.insertCell(3);
     const cell5 = newRow.insertCell(4);
 
     cell1.contentEditable = true;
     cell2.contentEditable = true;
     cell3.innerHTML = '<input type="date">';
     cell4.innerHTML = '<input type="date">';
     cell5.innerHTML = '<button onclick="eliminarFila(this)">Eliminar</button>';
 }
 
 function eliminarFila(button) {
     const row = button.parentNode.parentNode;
     row.parentNode.removeChild(row);
 }