/************************************************
 * Includes
 */
const locale = require('locale');
const ts = 200;

/************************************************
 * Assets
 */
 Graphics.prototype.setFontUbuntuMono = function(scale) {
  // Actual height 24 (27 - 4)
  this.setFontCustom(
    atob('AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD+A4AP/ngA/+eAAAAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPAAAA/gAAD+AAAAAAAAAAAAD+AAAP4AAA8AAAAAAAAAAAAAAAAAAAAAAAMGAAAwfgAD/+AB//gAP/YAA/BgAAMH4AA3/gAP/8AD/+AAPwYAADBgAAAAAAAAAAAAAEAAfA4AD+DgAf4GABxwYA+HB8D4OHwBg4YAGDzgAcH8AAgPwAAAcAAAAAAA8AAAH8BgA9wOADBjwAOccAA/3gAA94AAAPeAAD3+AAcc4AHhhgA4H+ADAfwAAAeAAAAAAAAPgADx/AAf/eAD/wYAMHBgAw+GADneYAP4/AAfB8AAA/4AADzgAAAGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/gAAD+AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/AAB//AAP//AD4A+AeAA8DwAB4OAADwQAAGAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAYOAABw8AAeB4ADwD4A+AD//wAH/8AAD/AAAAAAAAAAAAAAAAAAAAAAAAAA4AAABiAAAHcAAAPwAAP8AAA/wAAAPwAAB3AAAGIAAAYAAAAAAAAAAAAAAAAAABgAAAGAAAAYAAABgAAAGAAAP/wAA//AAAGAAAAYAAABgAAAGAAAAYAAAAAAAAAAAAAAAAAAAAAAAAAAAABgAABOAAAewAAB/AAAH4AAAPAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGAAAAYAAABgAAAGAAAAYAAABgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAeAAAB4AAAHgAAAeAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAAAB8AAA/wAAf4AAP8AAH+AAD/AAB/gAAPwAAA4AAAAAAAAAAAAAAAAAAB/AAA//gAH//AA8AeADhg4AMPBgAw8GADhg4APAHgAf/8AA//gAAfwAAAAAAAAAAAAAAAAGAAAAYAYADgBgAcAGAB//4AP//gA//+AAAAYAAABgAAAGAAAAIAAAAAAAAAAAAAAAGADgA4A+ADgH4AMA9gAwHGADA4YAOHBgA/4GAB/AYAD4BgAAAGAAAAAAAAAAAAAAABgA4AOADgA4AGADBgYAMGBgAw4GADjw4AP/ngAfv8AA8fgAAAYAAAAAAAAAAAAA4AAAPgAAD+AAAeYAADhgAA8GAAHgYAA8BgAD//4AP//gAABgAAAGAAAAAAAAAAAAAAAAAADgA/4OAD/gYAP+BgAw4GADDgYAMGDgAweeADA/wAMB+AAABgAAAAAAAAAAAAPAAAH/gAB//AAP4eABzA4AGMBgA4wGADjgYAMOHgAwf8ADA/gAAB4AAAAAAAAAAAAAAAAwAAADAAAAMADgAwB+ADA/4AMP8AAz8AADfAAAPwAAA8AAADgAAAAAAAAAAAAAAHAAD5/AAf38AD344AMHBgAwYGADBwYAOHBgA9+OAB/fwAD5/AAABwAAAAAAAAAAAHgAAA/gYAH+BgA4cGADAw4AMDDgAwMcADgzwAPD+AAf/wAA/+AAAfAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADweAAPB4AA8HgADweAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAADgA8HMADwfwAPB+AA8HwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGAAAA8AAADwAAAPgAAB+AAAGYAAA5wAADDAAAcOAABw4AAGBgAAYGAAAAAAAAAAAAMYAAAxgAADGAAAMYAAAxgAADGAAAMYAAAxgAADGAAAMYAAAxgAADGAAAAAAAAAAAAGBgAAYHAABwYAAHDgAAMMAAA5wAABmAAAH4AAAfgAAA8AAADwAAAGAAAAAAAAAAAAAAAAAAAAAOAAAAwAMADAZ4AMHngAw8eADngAAP8AAAfgAAAYAAAAAAAAAAAAAAAAAAP+AAH/+AA//+AHgB8A4PhwDD/jgMP/GAxwcYDmAxgPYDGAf/8YA//wAAAAAAAAGAAAD4AAD/gAB/wAA/+AAP4YAA8BgADwGAAP8YAAP/gAAH/gAAD/gAAA+AAAAYAAAAAA//+AD//4AP//gAwYGADBgYAMGBgAwYGADjw4AP/DgAfv8AA8fgAAA8AAAAAAAAAAAAfwAAH/wAA//gAHgPAA8AOADgA4AMABgAwAGADAAYAOABgA4AOABAAwAAAAAAAAAAD//4AP//gA//+ADAAYAMABgAwAGADgA4AOADgAcAcAA//gAB/8AAB/AAAAAAAAAAAAAAAAD//4AP//gA//+ADBgYAMGBgAwYGADBgYAMGBgAwYGADBgYAIABgAAAAAAAAAAAAAAA//+AD//4AP//gAwYAADBgAAMGAAAwYAADBgAAMGAAAwYAADAAAAAAAAAAAAAAH8AAB/8AAP/4AB4DwAPADgA4AOADAAYAMABgAwAGADgf4AOD/gAQP+AAAAAAAAAAA//+AD//4AP//gAAYAAABgAAAGAAAAYAAABgAAAGAAA//+AD//4AP//gAAAAAAAAAAAAAAAwAGADAAYAMABgAwAGAD//4AP//gAwAGADAAYAMABgAwAGAAAAAAAAAAAAAAAAAAQAAADAAwAOADAAYAMABgAwAGADAAYAMADgA//8AD//wAP/8AAAAAAAAAAAAAAAAAAAAD//4AP//gAAcAAADwAAAfgAAHvAAA8eAAHg+AA8A8ADgB4AIADgAAACAAAAAAAAAAA//+AD//4AP//gAAAGAAAAYAAABgAAAGAAAAYAAABgAAAGAAAAYAAAAAAAAAAAP/4AP//gA/+AAD+AAAB/AAAA+AAAD4AAB/AAA/gAAD/4AAP//gAH/+AAAAAAAAAAA//+AD//4AP//gAfAAAA+AAAA+AAAA/AAAA/AAAA/AA//+AD//4AP//gAAAAAAAAAAB/8AAP/4AB+PwAOADgA4AOADAAYAMABgA4AOADgA4AH4/AAP/4AAf/AAAAAAAAAAAAAAAAP//gA//+AD//4AMBgAAwGAADAYAAODgAA4OAAB/wAAD+AAAHwAAAAAAAAAAAAD/wAA//wAH4fgA4APADgAcAMAA8AwAD4DgAfgPAD3Afh+MA//wwA/8CAAAAAAAAAAP//gA//+AD//4AMDAAAwMAADAwAAMDgAA4fgAD/vgAH+PgAPwOAAAAYAAAAAAAAAAAAAQAD4DAAfwOAD/AYAOOBgAwYGADBwYAMDDgA4OOADgfwAEB/AAABwAAAAAAAAAAAwAAADAAAAMAAAAwAAADAAAAP//gA//+ADAAAAMAAAAwAAADAAAAMAAAAAAAAAAAAAP/8AA//4AD//wAAADgAAAGAAAAYAAABgAAAGAAAA4AP//AA//4AD//AAAAAAAwAAAD4AAAP8AAAP/AAAD/gAAB/gAAAeAAAB4AAA/gAA/4AA/8AAP+AAA+AAADAAAAAAAAA//wAD//4AAf/gAAD+AAB/AAAPgAAA+AAAB/AAAA/gAB/+AD//4AP/4AAAAAAAAAAAIABgA4AeAD4H4AH5+AAH/gAAH4AAAfgAAH/gAB+fgAPgfgA4AeACAAYAAAAAAgAAADgAAAPgAAAfgAAAfgAAAfgAAAf+AAB/4AAfgAAH4AAB+AAAPgAAA4AAACAAAAAAAAAAAGADAB4AMAfgAwD+ADA+YAMHhgAx8GADPAYAP4BgA+AGADwAYAMABgAAAAAAAAAAAAAAAAAAAAAAAA////D///8MAAAwwAADDAAAMMAAAwwAADAAAAAAAAAAAAAAAAAAAAAAAA4AAAD8AAAH+AAAH/AAAD/gAAB/wAAAf4AAAP8AAAHwAAADAAAAAAAAAAAAAAAAAAAAAAAAwAADDAAAMMAAAwwAADDAAAMP///w////AAAAAAAAAAAAAAAAAAAAAAAAAGAAAA4AAAPgAAD4AAA+AAADwAAAPAAAA+AAAA+AAAA+AAAA4AAABgAAAAAAAAAAMAAAAwAAADAAAAMAAAAwAAADAAAAMAAAAwAAADAAAAMAAAAwAAADAAAAMAAAAwAAAAAAAAAAAAAAAAAAAAAAAOAAAA8AAAB4AAABgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMAAAD8AAMPwAAxzgADGGAAMYYAAxhgADmGAAPYYAAf/gAA/+AAAAAAAAAAAAAAAAAAAA///gD//+AP//4AA4BgADAGAAMAYAA4DgADgeAAH/wAAP+AAAfwAAAAAAAAAAAAPgAAD/gAAf/AABwcAAOA4AA4DgADAGAAMAYAAwBgADAGAAOA4AAABgAAAAAAAAAAAH8AAA/4AAH/wAA4HgADgOAAMAYAAwBgADgGAH//4A///gD//+AAAAAAAAAAAAAAAAA/AAAP+AAB/8AAOZ4AA5jgADGGAAMYYAAxhgADmGAAH44AAfjgAAeAAAAAAAAAAAAAAAAAMAAAAwAAAf/+AH//4A///gDjAAAMMAAAwwAADDAAAMMAAA4AAABAAAAAAAAAAH8AAA/4cAH/xwA8DjADgOMAMAYwAwBjADAOcAP//wA//+AD//wAAAAAAAAAAAAAAAAAAA///gD//+AP//4AAwAAADAAAAMAAAA4AAAD4AAAH/4AAP/gAAAAAAAAAAAAAAADAAAAMAAAAwAADjAAAPP/gA8//ABj/+AAAA4AAABgAAAGAAAA4AAABAAAAAAAAAAAAAAAAAAAcAMABwAwADADAAMAMAAw8wAHDz//8PP//gY//8AAAAAAAAAAAAAAAAAAAAAAAA///gD//+AP//4AADwAAAfgAADvAAAeeAADw8AAOB4AAwDgACAGAAAAAAAAAADAAAAMAAAAwAAADAAAAP//gA///AD//+AAAA4AAABgAAAGAAAA4AAABAAAAAAAAAAAA//gAD/+AAOAAAAwAAADgAAAP8AAA/wAADAAAAMAAAA4AAAD/+AAH/4AAAAAAAAAAAAAAAA//gAD/+AAP/4AAwAAADAAAAMAAAA4AAAD4AAAH/4AAP/gAAAAAAAAAAAAAAAAfwAAD/gAAf/AADweAAOA4AAwBgADAGAAOA4AA8HgAB/8AAD/gAAH8AAAAAAAAAAAAAAAAD//8AP//wA///ADAOAAMAYAAwBgADgOAAPB4AAf/AAA/4AAB/AAAAAAAAAAAAB/AAAP+AAB/8AAPB4AA4DgADAGAAMAYAAwDgAD//8AP//wA///AAAAAAAAAAAAAAAAAAAAAAAAAf/gAD/+AAP/4AAwAAADAAAAMAAAAwAAADAAAAMAAAAAAAAAAAAAAAAAAAAAAA4OAAHw4AA/hgADOGAAMcYAAxxgADDGAAMO4AA4fAABB8AAAAAAAAAAAAAAAAAAAAAwAAADAAAD//AAP//AA//+AAMA4AAwBgADAGAAMAYAAwDgADAEAAAAAAAAAAAAAAAAP/gAA//AAAA+AAAA4AAABgAAAGAAAAYAA//gAD/+AAP/4AAAAAAAAAAAAAAAA4AAAD8AAAP8AAAH+AAAD+AAAB4AAAHgAAD8AAB/AAA/wAAD8AAAOAAAAAAAADAAAAP+AAA//gAAH+AAAD4AAB+AAAfAAAB8AAAD+AAAB+AAAP4AA//gAD/AAAMAAAAAAAACAGAAMA4AA8HgAB54AAD/AAAH4AAAPgAAD/AAAeeAADw+AAMA4AAgBgAAAAAAAAAAAgADAD4AMAP4AwAf8DAAH8cAAD/gAAD8AAB/AAB/wAA/4AAD8AAAMAAAAAAAAAAAAAAAAAAwDgADAeAAMH4AAw9gADPmAAN4YAA/BgAD4GAAPAYAAwBgAAAAAAAAAAAAAAAAAAAAAYAAABgAAAPAAD///Af/f+D/wf8MAAAwwAADDAAAMMAAAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP///w////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwAADDAAAMMAAAwwAADD/w/8H/3/gP//8AAPAAAAYAAABgAAAAAAAAAAAAAAAAADAAAA8AAADgAAAMAAAA4AAADgAAAHAAAAcAAAAwAAAHAAAA8AAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=='),
    32,
    atob("Dg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4c"),
    28+(scale<<8)+(1<<16)
  );
  return this;
}



/************************************************
 * Draw
 */
function draw() {
  queueDraw();

  g.clear();
  Bangle.drawWidgets();

  g.setFontUbuntuMono();
  drawMainScreen();
}


function drawText(str, line, timeout){
  timeout = timeout ? timeout : 0;

  setTimeout(()=>{
    g.setFontUbuntuMono();
    var x = 10;
    var y = line * 27 + 28;
    g.setColor(g.theme.fg);
    g.drawString(str, x, y);
  }, timeout);
}


function drawLetters(str, line, offset){
  offset= offset ? offset : 0;
  var x = 10 + offset;
  var y = line * 27 + 28;

  var pos = 0;
  for(var i=0; i < str.length; i++){
    var c = str.charAt(i);
    pos += g.stringWidth(c);
    setTimeout((c, pos)=>{
      g.setFontUbuntuMono();
      g.setColor(g.theme.fg);
      g.drawString(c, x+pos, y);
    }, ts*(1+i), c, pos);
  }

}


function drawCmd(){
  var c = 0;
  var x = 10;
  var y = 28;

  g.setColor("#0f0");
  g.drawString("bjs", x+c, y);
  c += g.stringWidth("bjs");

  g.setColor(g.theme.fg);
  g.drawString(":", x+c, y);
  c += g.stringWidth(":");

  g.setColor("#0ff");
  g.drawString("~", x+c, y);
  c += g.stringWidth("~");

  g.setColor(g.theme.fg);
  g.drawString("$", x+c, y);
  c += g.stringWidth("$~");
}



function drawMainScreen(){
  var date = new Date();
    // Draw time

    g.setFontAlign(-1, -1);
    var timeStr = ("0" + date.getHours()).slice(-2) + ":" + ("0" + date.getMinutes()).slice(-2);
    var dateStr = locale.month(date, 1) + ("0" + date.getDate()).slice(-2);
    drawCmd();

    var cmd = "time";
    var cmdT = ts * cmd.length + 50;
    drawLetters("time", 0, 80);
    drawText(" [t] " + timeStr, 1, cmdT);
    drawText(" [d] " + dateStr, 2, cmdT);
    drawText(" [" + (Bangle.isCharging() ? "c" : "b") + "] " + E.getBattery() + "%", 3, cmdT);
    drawText(" [s] " + Bangle.getHealthStatus("day").steps, 4, cmdT);
}


/************************************************
 * Listener
 */
// timeout used to update every minute
var drawTimeout;

// schedule a draw for the next minute
function queueDraw() {
  if (drawTimeout) clearTimeout(drawTimeout);
  drawTimeout = setTimeout(function() {
    drawTimeout = undefined;
    draw();
  }, 60000 - (Date.now() % 60000));
}


// Stop updates when LCD is off, restart when on
Bangle.on('lcdPower',on=>{
  if (on) {
    draw(); // draw immediately, queue redraw
  } else { // stop draw timer
    if (drawTimeout) clearTimeout(drawTimeout);
    drawTimeout = undefined;
  }
});


Bangle.on('lock', function(isLocked) {
  if (drawTimeout) clearTimeout(drawTimeout);
  drawTimeout = undefined;

  draw();
});


Bangle.on('charging',function(charging) {
  if (drawTimeout) clearTimeout(drawTimeout);
  drawTimeout = undefined;

  draw();
});


/************************************************
 * Startup Clock
 */

// Show launcher when middle button pressed
Bangle.setUI("clock");

// Load widgets and draw clock the first time
Bangle.loadWidgets();


// Draw first time
draw();
