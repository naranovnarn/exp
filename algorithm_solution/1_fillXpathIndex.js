function fillXpathIndex(xpath, index) {
  
  if ((typeof index) === 'number'){
    
    return xpath.replace(/i/, index);
    
  } 
  
  index.forEach( index => xpath = xpath.replace('i', index));
  
  return xpath.replace(null, 'i');
  
}



fillXpathIndex('/Развлечения/Книги/Фантастка[i]/@Название', 42);
// -> '/Развлечения/Книги/Фантастка[42]/@Название'