// 引入
import '../css/iconfont.css'
import '../css/index.less'

function add(x, y) {
  return x + y
}

console.log(add(1, 2))

// fn(0) = 0;
// fn(1) = 1;
// fn(2) = fn(0)+fn(1);
// fn(n) = fn(n-2)+fn(n-1);

const feina = (n) => {
  if (n < 0) console.error('输入数字不能小于0')
  if (n < 2) {
    return n
  }
  let list = []
  list[0] = 0
  list[1] = 1
  for (let i = 1; i < n; i++) {
    list[i + 1] = list[i - 1] + list[i]
  }
  return list
}

console.log(feina(5))
