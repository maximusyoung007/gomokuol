export function judge(x,y,put) {
  //竖着
  let count1 = 0;
  for (let i = x; i >= 22; i -= 44) {
    if (i !== x) {
      let t = i + "," + y;
      if (put.indexOf(t) !== -1) {
        count1++;
      } else {
        break;
      }
    }
  }
  let count2 = 0;
  for (let i = x; i <= 652; i += 44) {
    if (i !== x) {
      let t = i + "," + y;
      if (put.indexOf(t) !== -1) {
        count2++;
      } else {
        break;
      }
    }
  }
  if (count1 + count2 + 1 >= 5) {
    return true;
  } else {
    count1 = 0;
    count2 = 0;
  }

  //竖着
  for(let j = y; j >= 22; j -= 44) {
    if(j !== y) {
      let t = x + "," + j;
      if(put.indexOf(t) !== -1) {
        count1++;
      } else {
        break;
      }
    }
  }
  for(let j = y;j <= 652;j += 44) {
    if(j !== y) {
      let t = x + "," + j;
      if(put.indexOf(t) !== -1) {
        count2++;
      } else {
        break;
      }
    }
  }
  if(count1 + count2 + 1 >= 5) {
    return true;
  } else {
    count1 = 0;
    count2 = 0;
  }

  //左上斜,右下斜
  for(let i = x, j = y; i >= 22 && j >= 22; i -= 44, j -= 44) {
    if(i !== x && j !== y) {
      let t = i + "," + j;
      if(put.indexOf(t) !== -1) {
        count1++;
      } else {
        break;
      }
    }
  }
  for(let i = x, j = y; i <= 652 && j <= 652; i += 44, j += 44) {
    if(i !== x && j !== y) {
      let t = i + "," + j;
      if(put.indexOf(t) !== -1) {
        count2++;
      } else {
        break;
      }
    }
  }
  if(count1 + count2 + 1 >= 5) {
    return true;
  } else {
    count1 = 0;
    count2 = 0;
  }

  //右上斜，左下斜
  for(let i = x, j = y; i <= 652 && j >= 22; i += 44, j -= 44) {
    if(i !== x && j !== y) {
      let t = i + "," + j;
      if(put.indexOf(t) !== -1) {
        count1++;
      } else {
        break;
      }
    }
  }
  for(let i = x, j = y;i >= 22 && j <= 652; i -= 44, j+= 44) {
    if(i !== x && j !== y) {
      let t = i + "," + j;
      if(put.indexOf(t) !== -1) {
        count2++;
      } else {
        break;
      }
    }
  }
  if(count1 + count2 + 1 >= 5) {
    return true;
  } else {
    return false;
  }
}
