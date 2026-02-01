const delayedColorChange = (newColor, delay, doNext) => {
  setTimeout(() => {
    document.body.style.backgroundColor = newColor;
    doNext();
  }, delay);
};
delayedColorChange('olive', 1000, () => {
  delayedColorChange('teal', 1000, () => {
    delayedColorChange('red', 1000, () => {
      delayedColorChange('orange', 1000, () => {
        delayedColorChange('yellow', 1000, () => {
          delayedColorChange('green', 1000, () => {
            delayedColorChange('blue', 1000);
          });
        });
      });
    });
  });
});
