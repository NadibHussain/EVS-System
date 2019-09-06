export default array => {
    array.sort(function(a, b) {
      return  b.count -a.count;
    });
    console.log(array)
    return array;
  };
  