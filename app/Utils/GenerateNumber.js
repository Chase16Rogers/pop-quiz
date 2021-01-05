

export const randomInt = function () {
  let int = Math.floor(Math.random() * 10)
  switch (int) {
    case 1:
    case 2:
    case 3:
      return 0
      break;
    case 4:
    case 5:
    case 6:
      return 1
      break;
    case 0:
    case 7:
      return 2
      break;
    case 8:
    case 9:
      return 3
      break;
    default:
      return 0
  }
}
