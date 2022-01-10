document.oncopy = event => {
  event.preventDefault();
  event.clipboardData.setData('text/plain',
  'Text Here \n');
}
