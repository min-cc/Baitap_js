//random diem thi
function getRandomMark(min = 6, max = 10, step = 0.5) {
  return Math.floor((Math.random() * ((max - min) / step + 1) + min / step)) * step
}

var diemthi = [
  {
    name: "A",
    maths: getRandomMark(),
    literature: getRandomMark(),
    physics: getRandomMark(),
    chemistry: getRandomMark(),
    biology: getRandomMark()
  },
  {
    name: "B",
    maths: getRandomMark(),
    literature: getRandomMark(),
    physics: getRandomMark(),
    chemistry: getRandomMark(),
    biology: getRandomMark()
  },
  {
    name: "C",
    maths: getRandomMark(),
    literature: getRandomMark(),
    physics: getRandomMark(),
    chemistry: getRandomMark(),
    biology: getRandomMark()
  },
  {
    name: "D",
    maths: getRandomMark(),
    literature: getRandomMark(),
    physics: getRandomMark(),
    chemistry: getRandomMark(),
    biology: getRandomMark()
  },
  {
    name: "E",
    maths: getRandomMark(),
    literature: getRandomMark(),
    physics: getRandomMark(),
    chemistry: getRandomMark(),
    biology: getRandomMark()
  },
]

//Tinh diem TB
function diemtrungbinh(arr = diemthi) {
  let diemTb = []
  for (let hocsinh of arr) {
    count = 0
    for (let x in hocsinh) {
      if (x !== 'name') {
        if (x === 'maths' || x === "literature") {
          count += hocsinh[x] * 2
        } else {
          count += hocsinh[x]
        }
      }
    }
    diemtb = Math.round((count / (Object.keys(hocsinh).length + 1)) * 4) / 4
    diemTb.push(
      {
        name: hocsinh.name,
        diemTb: diemtb
      }
    )
  }
  return diemTb
}

function diemtbtren8() {
  return diemtrungbinh().filter(x => x.diemTb >= 8)
}

//tim diem TB cao nhat
function diemtbcaonhat() {
  return diemtrungbinh().reduce((x, y) => {
    if (x.diemTb > y.diemTb) {
      return x
    }
    return y
  })
}

//Tim diem van thap nhat
function diemvanthapnhat() {
  return diemthi.reduce((x, y) => {
    if (x.literature < y.literature) {
      return x
    }
    return y
  })
}

//Clone diem thi
function clone() {
  return JSON.parse(JSON.stringify(diemthi))
}

//Tinh tien thuong
function tinhtienthuong() {
  let danhsachthuong = []
  for (let hocsinh of diemthi) {
    let tienthuong = 0;
    for (let x in hocsinh) {
      if (x != 'name') {
        if (hocsinh[x] >= 8 && hocsinh[x] < 9) {
          tienthuong += 1
        } else if (hocsinh[x] >= 9 && hocsinh[x] < 10) {
          tienthuong += 2
        } else if (hocsinh[x] === 10) {
          tienthuong += 5
        }
      }
    }
    danhsachthuong.push(
      {
        name: hocsinh.name,
        tienthuong: tienthuong
      }
    )
  }
  return danhsachthuong
}

//Random ngay thang
function randomDate(start = new Date(2020, 0, 1), end = new Date()) {
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

//Tinh diem TB ngau nhien 
function diemTBrandom() {
  let randomdiemthi = []
  for (let i = 1; i <= 10; i++) {
    randomdiemthi.push({
      times: i,
      date: randomDate(),
      diemthi: diemthi
    })
  }
  let a = randomdiemthi[getRandomMark(0, 10, 1)]
  return list = {
    times: a.times,
    date: a.date,
    diemtb: diemtrungbinh(a.diemthi)
  }
}




