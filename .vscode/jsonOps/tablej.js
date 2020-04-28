function removeSpaces (strs) {
  return strs.replace(/\s+/g, ' ').replace(/^\s/g, '').replace(/\s+$/, '')
}

function tableToJSON (table) {
  var obj = {}
  var row, rows = table.rows
  for (var i = 0, iLen = rows.length; i < iLen; i++) {
    row = rows[i]
    const zaznam = {}
    console.log(removeSpaces(row.cells[0].textContent))
    console.log(removeSpaces(row.cells[1].textContent))
    console.log(removeSpaces(row.cells[2].textContent))
    console.log(removeSpaces(row.cells[3].textContent))
    console.log(row.cells[4].textContent.replace(/\s+/g, ' ').replace(/^\s/g, '').replace(/ Kč/, ''))
    console.log('------------')
    zaznam.kod = removeSpaces(row.cells[1].textContent)
    zaznam.desc = removeSpaces(row.cells[2].textContent)
    zaznam.pack_type = removeSpaces(row.cells[3].textContent)
    zaznam.price = removeSpaces(row.cells[4].textContent.replace(/\s+/g, ' ').replace(/^\s/g, '').replace(/ Kč/, ''))
    obj[i] = zaznam
  }
  return JSON.stringify(obj)
}
var fs = require('fs')
var tablejson = require('tabletojson').Tabletojson

var htmldata = fs.readFileSync('./data.html', 'utf-8')

var document = tablejson.convert(htmldata)

docstring = JSON.stringify(document)

document[0].forEach(element => {
  element['jmeno'] = element['0']
  delete element['0']
  element['desc'] = element['1']
  delete element['1']
  element['code'] = element['2']
  delete element['2']
  element['pack'] = element['3']
  delete element['3']
  element['price'] = element['4'].replace(/ Kč/, '')
  delete element['4']
  delete element['5']
});

// docstring.replace(/\"0\"/, '\"nahled\"')
// docstring.replace(/\"1\"/, '\"desc\"')
// docstring.replace(/\"2\"/, '\"code\"')
// docstring.replace(/\"3\"/, '\"pack\"')
// docstring.replace(/\"4\"/, '\"price\"')

// document = JSON.parse(docstring)
// document[0][0].forEach(element => {
//   console.log(element)
// });

console.log(document)

fs.writeFile('tiskopisy.json', JSON.stringify(document[0]), function (err) {
    if (err) {
      console.log(err)
    }
    console.log('success')
})
