const drawGrid = () => {
  let width =
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth;

  let height =
    window.innerHeight ||
    document.documentElement.clientHeight ||
    document.body.clientHeight;

  console.log(width, height);
};

drawGrid();

window.addEventListener('resize', drawGrid);
