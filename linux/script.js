function copyCommands(containerId) {
  const container = document.getElementById(containerId);
  const commandTexts = Array.from(container.querySelectorAll('.command-code'))
    .map(command => command.textContent)
    .join('\n');

  const hiddenTextarea = document.getElementById('hiddenCommands');
  hiddenTextarea.value = commandTexts;
  hiddenTextarea.select();
  document.execCommand('copy');
  alert('Commands copied to clipboard!');
}
