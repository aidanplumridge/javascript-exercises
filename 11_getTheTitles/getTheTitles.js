const books = [
    {
      title: 'Book',
      author: 'Name'
    },
    {
      title: 'Book2',
      author: 'Name2'
    }
  ]

const getTheTitles = (publications) => {
  const titles = [];
  publications.map(item => {
    //console.log(item.title);
    titles.push(`${item.title}`);
  })
  return titles
}



  console.log(getTheTitles(books))
// Do not edit below this line
module.exports = getTheTitles;
