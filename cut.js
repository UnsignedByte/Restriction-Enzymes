var cut = document.getElementById('enzyme').value;
var gene = document.getElementById('gene').value;
update();

function update(){
  var cut = document.getElementById('enzyme').value;
  var gene = document.getElementById('gene').value;

  var genelist = gene.split(cut.replace(/\//g, ""));
  for (var i = 0; i < genelist.length; i++){
    if ( i < genelist.length - 1 ) {
      genelist[i]+=cut.split("/")[0];
    }
    if ( i > 0 ) {
      genelist[i]= cut.split("/")[1]+genelist[i];
    }
  }
  console.log(genelist);
}
