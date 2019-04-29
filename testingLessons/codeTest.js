// function showHelp(help) {
//     document.getElementById('help').innerHTML = help;
//   }
  
//   function makeHelpCallback(help) {
//     return function() {
//       showHelp(help);
//     };
//   }
  
//   function setupHelp() {
//     var helpText = [
//         {'id': 'email', 'help': 'Dirección de correo electrónico'},
//         {'id': 'name', 'help': 'Nombre completo'},
//         {'id': 'age', 'help': 'Edad (debes tener más de 16 años)'}
//       ];
  
//     for (var i = 0; i < helpText.length; i++) {
//       var item = helpText[i];
//       document.getElementById(item.id).onfocus = makeHelpCallback(item.help);
//     }
//   }
  
//   setupHelp();