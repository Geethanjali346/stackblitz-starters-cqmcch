function compareStudents(a, b) {
  if (
    a['chemist marks'] + a['biology marks'] >
    b['chemist marks'] + b['biology marks']
  ) {
    return -1;
  }
  if (
    a['chemist marks'] + a['biology marks'] <
    b['chemist marks'] + b['biology marks']
  ) {
    return 1;
  }
  if (a['biology marks'] > b['biology marks']) {
    return -1;
  }
  if (a['biology marks'] < b['biology marks']) {
    return 1;
  }
  return 0;
}

function sortStudents(student) {
  const sortedStudents = [students];

  sortedStudents.sort(compareStudents);
  return sortedStudents;
}
//Test case  1
const students1 = [
  {
    name: 'sarah',
    'chemistry marks': 75,
    'biology marks': 80,
    'D.O.B': '01-01-2000',
  },
  {
    name: 'Micheal',
    'chemistry marks': 80,
    'biology marks': 85,
    'D.O.B': '02-02-2000',
  },
  {
    name: 'Emilly',
    'chemistry marks': 75,
    'biology marks': 80,
    'D.O.B': '03-03-2000',
  },
];

const sortedStudents1 = sortStudents(students1);
console.log(sortedStudents1);

//Test case 2
const students2 = [
  {
    name: 'john',
    'chemistry marks': 80,
    'biology marks': 90,
    'D.O.B': '01-01-2000',
  },
  {
    name: 'Jane',
    'chemistry marks': 85,
    'biology marks': 80,
    'D.O.B': '02-02-2000',
  },
  {
    name: 'Adam',
    'chemistry marks': 80,
    'biology marks': 90,
    'D.O.B': '03-03-2000',
  },
];

const sortedStudents2 = sortStudents(students2);
console.log(sortedStudents2);
