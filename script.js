<script>
for (var line=1; line<60; line++) {
  for(var i=1;i<29;i++) {
    var s = (Math.floor((Math.random()*2)%2)) ? "X" : "Y";
    document.write(s);
  }
  document.writeln("<br>");
}
</script>
