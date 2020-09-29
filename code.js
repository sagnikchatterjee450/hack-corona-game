var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["e0df1e25-488b-48d6-9b49-5661ca9e378e","7ae1a6c9-8f64-4d70-a881-697ece6eb88a","e5fd8197-6157-48bc-8bd5-9abd6d787ebe","2203eb6e-7462-4b2d-a083-a03c3ae285ce","de0fb234-c830-443a-a8c2-8bedfd542930","1f659e03-e996-446a-932d-fc7b53dfd3c4","478515ba-1e84-4c08-ade5-f865a1d99958","db16bd12-d780-46d4-947d-798727b976a4","a7d77386-e5f2-409f-a353-6ac12736ef29","2d37a240-1cfe-4b79-bda0-ce5f85d38303","ab04ccd6-bd81-4466-8166-2aed797dd06b","60ee0e7d-446c-4d77-8882-b0780b543003","ea818250-42da-4c75-89a6-48f000612d18","2b0a3291-4f61-4ec0-8b96-731dc5a32fc9","f2a2172f-c566-4ffd-9f78-8094a1ed8626","e44b8638-b847-407e-bf9e-76f32a5b8120","06d92a32-dbdd-4ab7-ba36-3693e0b367e6","b691f706-6141-4ee6-9943-f4ce01c930c8","9edd4014-12e9-4ad8-9f59-ed1eab615f1b","4b5f7429-f70a-4a0a-9835-c1b5a1529868","440a9277-6be5-44ac-9acb-b4edbfce0dc1","9c407323-ab55-4850-b7b8-dca923e387d5","d4960a97-5489-4f46-9eee-79effb748478","d636368e-5edb-43e5-b056-213c9f554dcb","a1789e50-d28a-4ecb-ba6f-32b04bc273ae","e5f9a52f-52ab-49df-a9d2-4fc90ff28626","9c615fc3-eb4d-4fd1-a2b0-812de82c4171"],"propsByKey":{"e0df1e25-488b-48d6-9b49-5661ca9e378e":{"name":"fw","sourceUrl":null,"frameSize":{"x":660,"y":450},"frameCount":2,"looping":true,"frameDelay":60,"version":"MDD23innkttTf13qV8a7Y52BEp6iaT6s","loadedFromSource":true,"saved":true,"sourceSize":{"x":660,"y":900},"rootRelativePath":"assets/e0df1e25-488b-48d6-9b49-5661ca9e378e.png"},"7ae1a6c9-8f64-4d70-a881-697ece6eb88a":{"name":"f","sourceUrl":null,"frameSize":{"x":570,"y":322},"frameCount":1,"looping":true,"frameDelay":12,"version":"bAuyHPntTB59KBb6TaxhTSjr.ihAVzeg","loadedFromSource":true,"saved":true,"sourceSize":{"x":570,"y":322},"rootRelativePath":"assets/7ae1a6c9-8f64-4d70-a881-697ece6eb88a.png"},"e5fd8197-6157-48bc-8bd5-9abd6d787ebe":{"name":"laptop_1","sourceUrl":null,"frameSize":{"x":143,"y":136},"frameCount":1,"looping":true,"frameDelay":12,"version":"3KebFWKTMZavLL1DjyqYGu_EjJBwrha6","loadedFromSource":true,"saved":true,"sourceSize":{"x":143,"y":136},"rootRelativePath":"assets/e5fd8197-6157-48bc-8bd5-9abd6d787ebe.png"},"2203eb6e-7462-4b2d-a083-a03c3ae285ce":{"name":"","sourceUrl":null,"frameSize":{"x":20,"y":16},"frameCount":1,"looping":true,"frameDelay":12,"version":"RWRT3N53OhWoemPcXhyXYiH14gg4D4BA","loadedFromSource":true,"saved":true,"sourceSize":{"x":20,"y":16},"rootRelativePath":"assets/2203eb6e-7462-4b2d-a083-a03c3ae285ce.png"},"de0fb234-c830-443a-a8c2-8bedfd542930":{"name":"_copy_1","sourceUrl":null,"frameSize":{"x":163,"y":131},"frameCount":1,"looping":true,"frameDelay":12,"version":"5yLo8_SPWvu3Oq9UECbGFepcPtnmqJnj","loadedFromSource":true,"saved":true,"sourceSize":{"x":163,"y":131},"rootRelativePath":"assets/de0fb234-c830-443a-a8c2-8bedfd542930.png"},"1f659e03-e996-446a-932d-fc7b53dfd3c4":{"name":"c","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":2,"looping":true,"frameDelay":12,"version":"KjI2dViJpSoAt1CTvG3xX3AinteZ2wpz","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":200},"rootRelativePath":"assets/1f659e03-e996-446a-932d-fc7b53dfd3c4.png"},"478515ba-1e84-4c08-ade5-f865a1d99958":{"name":"f1","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":2,"looping":true,"frameDelay":12,"version":"yutt1LEW970vfj_e8xpS2rAp5fatDSZU","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":200},"rootRelativePath":"assets/478515ba-1e84-4c08-ade5-f865a1d99958.png"},"db16bd12-d780-46d4-947d-798727b976a4":{"name":"f11","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":2,"looping":true,"frameDelay":12,"version":"sg6XDnXxAAL1OK8d_7pPcXpRfvm5gBHP","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":200},"rootRelativePath":"assets/db16bd12-d780-46d4-947d-798727b976a4.png"},"a7d77386-e5f2-409f-a353-6ac12736ef29":{"name":"r","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":2,"looping":true,"frameDelay":12,"version":"r.mrEqVEleGSv4Q1W9_H5qspnSeMMHM.","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":200},"rootRelativePath":"assets/a7d77386-e5f2-409f-a353-6ac12736ef29.png"},"2d37a240-1cfe-4b79-bda0-ce5f85d38303":{"name":"rr","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":2,"looping":true,"frameDelay":12,"version":"B0Vg30o5CSoNHoC_U.CAc_QYlPgm0dn6","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":200},"rootRelativePath":"assets/2d37a240-1cfe-4b79-bda0-ce5f85d38303.png"},"ab04ccd6-bd81-4466-8166-2aed797dd06b":{"name":"rl","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":2,"looping":true,"frameDelay":12,"version":"hvANCdC8KCBY7Aei9tZ3p1iEqPs1HkVg","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":200},"rootRelativePath":"assets/ab04ccd6-bd81-4466-8166-2aed797dd06b.png"},"60ee0e7d-446c-4d77-8882-b0780b543003":{"name":"ru","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":2,"looping":true,"frameDelay":12,"version":"l2ySo3cPXpACyH992CxDWcgQzrNfGj75","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":200},"rootRelativePath":"assets/60ee0e7d-446c-4d77-8882-b0780b543003.png"},"ea818250-42da-4c75-89a6-48f000612d18":{"name":"rd","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":2,"looping":true,"frameDelay":12,"version":"STb2r3aoYeMNXnrOyK5cCIFWOnKHxmI4","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":200},"rootRelativePath":"assets/ea818250-42da-4c75-89a6-48f000612d18.png"},"2b0a3291-4f61-4ec0-8b96-731dc5a32fc9":{"name":"h","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"O_U0aQHKDnqRn_NxNd5K5KF82AIRUALx","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/2b0a3291-4f61-4ec0-8b96-731dc5a32fc9.png"},"f2a2172f-c566-4ffd-9f78-8094a1ed8626":{"name":"portal_orange_1","sourceUrl":"assets/api/v1/animation-library/gamelab/4quFoxxDMymMfJ3TQkI24jb4.MO2lsPK/category_gameplay/portal_orange.png","frameSize":{"x":230,"y":82},"frameCount":1,"looping":true,"frameDelay":2,"version":"4quFoxxDMymMfJ3TQkI24jb4.MO2lsPK","loadedFromSource":true,"saved":true,"sourceSize":{"x":230,"y":82},"rootRelativePath":"assets/api/v1/animation-library/gamelab/4quFoxxDMymMfJ3TQkI24jb4.MO2lsPK/category_gameplay/portal_orange.png"},"e44b8638-b847-407e-bf9e-76f32a5b8120":{"name":"l","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"Jkgg_1sfgA0PXyWlUSZTDPkNxqWXdXu2","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/e44b8638-b847-407e-bf9e-76f32a5b8120.png"},"06d92a32-dbdd-4ab7-ba36-3693e0b367e6":{"name":"end","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":2,"looping":true,"frameDelay":12,"version":"b9si.ADNTFfnZLbDMSwHiQukWaBRMVdX","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":200},"rootRelativePath":"assets/06d92a32-dbdd-4ab7-ba36-3693e0b367e6.png"},"b691f706-6141-4ee6-9943-f4ce01c930c8":{"name":"bb","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":3,"looping":true,"frameDelay":20,"version":"iLlyhneelmUuJcXijPmvojLQD5TYtRyX","loadedFromSource":true,"saved":true,"sourceSize":{"x":200,"y":200},"rootRelativePath":"assets/b691f706-6141-4ee6-9943-f4ce01c930c8.png"},"9edd4014-12e9-4ad8-9f59-ed1eab615f1b":{"name":"k1","sourceUrl":null,"frameSize":{"x":63,"y":65},"frameCount":1,"looping":true,"frameDelay":12,"version":"vWsDoJodXboi4mEgJErc5VpRGdpetY9z","loadedFromSource":true,"saved":true,"sourceSize":{"x":63,"y":65},"rootRelativePath":"assets/9edd4014-12e9-4ad8-9f59-ed1eab615f1b.png"},"4b5f7429-f70a-4a0a-9835-c1b5a1529868":{"name":"k2","sourceUrl":null,"frameSize":{"x":63,"y":65},"frameCount":1,"looping":true,"frameDelay":12,"version":"gui62gPG78iwl6MlvWweanBECdhAiz8D","loadedFromSource":true,"saved":true,"sourceSize":{"x":63,"y":65},"rootRelativePath":"assets/4b5f7429-f70a-4a0a-9835-c1b5a1529868.png"},"440a9277-6be5-44ac-9acb-b4edbfce0dc1":{"name":"k3","sourceUrl":null,"frameSize":{"x":63,"y":65},"frameCount":1,"looping":true,"frameDelay":12,"version":"HxmYbwe6tOYRFvmUWc68EhFgJ0K60NPM","loadedFromSource":true,"saved":true,"sourceSize":{"x":63,"y":65},"rootRelativePath":"assets/440a9277-6be5-44ac-9acb-b4edbfce0dc1.png"},"9c407323-ab55-4850-b7b8-dca923e387d5":{"name":"k11","sourceUrl":"assets/api/v1/animation-library/gamelab/WlyghxjlZxlC05dWKDeVki5Vu3TENUrk/category_generic_items/key.png","frameSize":{"x":63,"y":65},"frameCount":1,"looping":true,"frameDelay":2,"version":"WlyghxjlZxlC05dWKDeVki5Vu3TENUrk","loadedFromSource":true,"saved":true,"sourceSize":{"x":63,"y":65},"rootRelativePath":"assets/api/v1/animation-library/gamelab/WlyghxjlZxlC05dWKDeVki5Vu3TENUrk/category_generic_items/key.png"},"d4960a97-5489-4f46-9eee-79effb748478":{"name":"k22","sourceUrl":"assets/api/v1/animation-library/gamelab/WlyghxjlZxlC05dWKDeVki5Vu3TENUrk/category_generic_items/key.png","frameSize":{"x":63,"y":65},"frameCount":1,"looping":true,"frameDelay":2,"version":"WlyghxjlZxlC05dWKDeVki5Vu3TENUrk","loadedFromSource":true,"saved":true,"sourceSize":{"x":63,"y":65},"rootRelativePath":"assets/api/v1/animation-library/gamelab/WlyghxjlZxlC05dWKDeVki5Vu3TENUrk/category_generic_items/key.png"},"d636368e-5edb-43e5-b056-213c9f554dcb":{"name":"k33","sourceUrl":"assets/api/v1/animation-library/gamelab/WlyghxjlZxlC05dWKDeVki5Vu3TENUrk/category_generic_items/key.png","frameSize":{"x":63,"y":65},"frameCount":1,"looping":true,"frameDelay":2,"version":"WlyghxjlZxlC05dWKDeVki5Vu3TENUrk","loadedFromSource":true,"saved":true,"sourceSize":{"x":63,"y":65},"rootRelativePath":"assets/api/v1/animation-library/gamelab/WlyghxjlZxlC05dWKDeVki5Vu3TENUrk/category_generic_items/key.png"},"a1789e50-d28a-4ecb-ba6f-32b04bc273ae":{"name":"corona","sourceUrl":"assets/v3/animations/y0nVwYM6fyOAv5dPZnNQRNsWguCLvON-3NAx7ShP15Q/a1789e50-d28a-4ecb-ba6f-32b04bc273ae.png","frameSize":{"x":272,"y":185},"frameCount":1,"looping":true,"frameDelay":4,"version":"gYEgJYUFSMtGsqgeSwP7yt1fh9fLvfsl","loadedFromSource":true,"saved":true,"sourceSize":{"x":272,"y":185},"rootRelativePath":"assets/v3/animations/y0nVwYM6fyOAv5dPZnNQRNsWguCLvON-3NAx7ShP15Q/a1789e50-d28a-4ecb-ba6f-32b04bc273ae.png"},"e5f9a52f-52ab-49df-a9d2-4fc90ff28626":{"name":"t","sourceUrl":null,"frameSize":{"x":275,"y":183},"frameCount":1,"looping":true,"frameDelay":12,"version":"W8.IWt_TrXaLkQp5KWpTW4CRfNfGnJQs","loadedFromSource":true,"saved":true,"sourceSize":{"x":275,"y":183},"rootRelativePath":"assets/e5f9a52f-52ab-49df-a9d2-4fc90ff28626.png"},"9c615fc3-eb4d-4fd1-a2b0-812de82c4171":{"name":"01","sourceUrl":null,"frameSize":{"x":926,"y":573},"frameCount":1,"looping":true,"frameDelay":12,"version":"epYvccqWF_NmjPnFOL9vd7nlWZTD44mG","loadedFromSource":true,"saved":true,"sourceSize":{"x":926,"y":573},"rootRelativePath":"assets/9c615fc3-eb4d-4fd1-a2b0-812de82c4171.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var l1 = createSprite(200,200,500,500);
var gameState = "serve";

var c = createSprite(30,30,10,10);
c.setAnimation('c');
c.visible = false;

var f1 = createSprite(27.5,50,55,5);
f1.visible = false;
f1.setAnimation('f1');

var f11 = createSprite(73,5,5,50);
f11.visible = false;
f11.setAnimation('f11');

var f2 = createSprite(37.5,60,55,5);
f2.visible = false;
f2.setAnimation('f1');

var f22 = createSprite(83,10,5,50);
f22.visible = false;
f22.setAnimation('f11');

var f3 = createSprite(47.5,70,55,5);
f3.visible = false;
f3.setAnimation('f1');

var f33 = createSprite(93,20,5,50);
f33.visible = false;
f33.setAnimation('f11');

var ob1 = createSprite(35,20,75,58);
ob1.visible = false;

var ob2 = createSprite(35,20,95,78);
ob2.visible = false;

var ob3 = createSprite(35,20,115,98);
ob3.visible = false;

var p = createSprite(350,350,10,10);
p.visible = false;
var h = createSprite(350,350,20,20);
h.visible = false;
var l2 = createSprite(200,430,500,5);
l2.visible = false;
var l3 = createSprite(200,-10,500,5);
l3.visible = false;
var l4 = createSprite(30,200,5,500);
l4.visible = false;
var l5 = createSprite(430,200,5,500);
l5.visible = false;
var l6 = createSprite(310,255,5,310);
l6.visible = false;
var l7 = createSprite(235,150,5,300);
l7.visible = false;
var l8 = createSprite(160,255,5,310);
l8.visible = false;
var l9 = createSprite(100,150,5,300);
l9.visible = false;
var l10 = createSprite(45,150,90,100);
l10.visible = false;
l10.setAnimation('t');
l10.scale = 0.3;
var l11 = createSprite(70,315,20,20);
l11.visible = false;
l11.velocityX = 3;
var l12 = createSprite(230,325,20,20);
l12.visible = false;
l12.velocityX = 3;
p.scale = 0.8;
var l13 = createSprite(47.5,100,100,5);
l13.visible = false;

var l14 = createSprite(47.5,165,100,5);
l14.visible = false;
var l15 = createSprite(47.5,225,100,5);
l15.visible = false;
var l16 = createSprite(100,132,5,65);
l16.visible = false;
var l17 = createSprite(100,195,5,65);
l17.visible = false;
var l18 = createSprite(355,165,100,5);
l18.visible = false;
var l19 = createSprite(355,225,100,5);
l19.visible = false;
var l20 = createSprite(225,80,100,5);
l20.visible = false;
var l21 = createSprite(47.5,375,100,5);
l21.visible = false;
var l22 = createSprite(47.5,320,100,5);
l22.visible = false;
var l23 = createSprite(100,348,5,60);
l23.visible = false;
var k11 = createSprite(320,20,10,10);
k11.visible  = false;
k11.setAnimation("k11");
k11.scale = 0.4;
var k22 = createSprite(340,20,10,10);
k22.visible  = false;
k22.setAnimation("k22");
k22.scale = 0.4;
var k33 = createSprite(360,20,10,10);
k33.visible  = false;
k33.setAnimation("k33");
k33.scale = 0.4;
var k1  = createSprite(339,200,10,10);
k1.visible= false;
k1.setAnimation('k1');
var k2  = createSprite(23,120,10,10);
k2.visible= false;
k2.setAnimation('k2');
var k3  = createSprite(23,340,10,10);
k3.visible= false;
k3.setAnimation('k3');
var o1 = createSprite(395,195,5,400);
o1.visible = false;

var o2 = createSprite(1,195,5,400);
o2.visible = false;
function draw() {
background('black');

createEdgeSprites();
p.bounceOff(l2);
p.bounceOff(l3);
p.bounceOff(l4);
p.bounceOff(l5);
h.bounceOff(edges);
l11.bounceOff(edges);
l11.bounceOff(l8);
l12.bounceOff(l8);
l12.bounceOff(l6);



l6.shapeColor = 'red';
l7.shapeColor = 'red';
l8.shapeColor = 'red';
l9.shapeColor = 'red';
l10.shapeColor = "blue";
l11.shapeColor= "red";
l12.shapeColor= "red";
l13.shapeColor = "green";
l14.shapeColor = "green";
l15.shapeColor = "green";
l16.shapeColor  = "red";
l17.shapeColor  = "red";
l18.shapeColor = "green";
l19.shapeColor = "green";
l20.shapeColor = "green";
l21.shapeColor = "green";
l22.shapeColor = "green";
l23.shapeColor = "red";

if(keyDown("space")&&gameState === "serve"){
  gameState = "play";
h.y = 350;
h.x = 350;

}

if(gameState === "play"){
  l1.setAnimation('f');
  p.setAnimation('r');
  c.visible = true;
  f1.visible = true;
  f11.visible = true;
    f2.visible = true;
  f22.visible = true;
  f3.visible = true;
  f33.visible = true;
p.visible = true;
l6.visible = true;
h.velocityY = 1;
l7.visible = true;
l8.visible = true;
l9.visible = true;
l10.visible = true;
l11.visible = true;
l12.visible = true;
}
p.x = h.x;
p.y = h.y;
if(keyDown(LEFT_ARROW)&&gameState === "play"){
  h.x= h.x-6;
  p.setAnimation('rl');
}
if(keyDown(RIGHT_ARROW)&&gameState === "play"){
  h.x= h.x+6;
  p.setAnimation('rr');
}
if(keyDown(UP_ARROW)&&gameState === "play"){
  h.y= h.y-6;
  p.setAnimation('ru');
}
if(keyDown(DOWN_ARROW)&&gameState === "play"){
  h.y= h.y+4;
  p.setAnimation('rd');
}
drawSprites();
if(gameState === "serve"){
  l1.scale = 1;
l1.setAnimation('fw');
h.y = 350;
h.x = 350;
textSize(50);
fill('blue');
stroke('black');
strokeWeight(5);
textFont("ITALIC");
text("Hack Covid",50,50);
textSize(30);
fill('red');
stroke('white');
strokeWeight(2);
text("You are an ethical Hacker",50,100);
textSize(20.2 );
fill('black');
stroke('white');
strokeWeight(3);
text("You Have Got an Information That Covid-19 ",10,150);
text("is Maded by Which Country, But to Know That",10,200);
text("Which Country Have Done these You have to ",10,250);
text("Break the FireWall of you Enemy Computer",10,300);
text("Then You Can Hack It",10,350);
text("And steal the Data",10,375);
text("Made by Sagnik Chatterjee",10,400
  );
textSize(15);
fill('red');
text("Press space",295,385);
}
if(h.isTouching(l6)&&gameState === "play"){
  gameState = "over";

}
if(h.isTouching(l7)&&gameState === "play"){
  gameState = "over";

}
if(h.isTouching(l8)&&gameState === "play"){
  gameState = "over";

}
if(h.isTouching(l9)&&gameState === "play"){
  gameState = "over";

}
if(h.isTouching(l11)&&gameState === "play"){
  gameState = "over";

}
if(h.isTouching(l12)&&gameState === "play"){
  gameState = "over";

}
if(gameState ==="over"){
     c.visible = false;
  f1.visible = false;
  f11.visible = false;
    f2.visible = false;
  f22.visible = false;
  f3.visible = false;
  f33.visible = false;
p.visible = false;
l6.visible = false;
l7.visible = false;
l8.visible = false;
l9.visible = false;
l10.visible = false;
l11.visible = false;
l12.visible =false;

h.velocityY = 0;
    textSize(30);
    l1.setAnimation('end');
    l1.scale = 3;

  p.setAnimation('r');
  h.x = 350;
  h.y = 350;
}
if(keyDown("R")&&gameState ==="over"){
  gameState = "serve";
    c.visible = false;
  f1.visible = false;
  f11.visible = false;
    f2.visible = false;
  f22.visible = false;
  f3.visible = false;
  f33.visible = false;
p.visible = false;
l6.visible = false;
l7.visible = false;
l8.visible = false;
l9.visible = false;
l10.visible = false;
l11.visible = false;
l12.visible =false;
h.velocityY = 0;
}

if(h.isTouching(l10)&&gameState ==="play"){
  gameState = "play2";

h.velocityY = 0;
l17.velocityX = 9;
}

if(gameState ==="play2"){
 l1.setAnimation('01');
 l13.visible = true;
 l14.visible = true;
 l15.visible = true;
 k11.visible = true;
  k22.visible = true;
   k33.visible = true;
   l16.visible = true;
   l17.visible =  true;
   l18.visible = true;
   l19.visible = true;
   k1.visible = true;
   k1.scale = 0.5;
    k2.visible = true;
   k2.scale = 0.5;
    k3.visible = true;
   k3.scale = 0.5;
   l20.visible = true;
   l21.visible =true;
   l22.visible =true;
   l23.visible = true;
   
   
 fill("Yellow");
 stroke("black");
 strokeWeight(2);
 textSize(20);
text("Key",270,20);
 createEdgeSprites();
 h.bounceOff(l13);
h.bounceOff(l14);
h.bounceOff(l15);
h.bounceOff(l18);
h.bounceOff(l19);
h.bounceOff(l20);
h.bounceOff(l21);
h.bounceOff(l22);

 p.setAnimation("r");
l6.visible = false;
l7.visible = false;
l8.visible = false;
l9.visible = false;
l10.visible = false;
l11.visible = false;
l12.visible =false;
p.scale = 0.5;
h.velocityY = 4;
}
if(h.isTouching(ob3)||h.isTouching(l17)||h.isTouching(l16)||h.isTouching(ob2)||h.isTouching(ob1)){
  gameState = "over2";
}
if(gameState === "over2"){
  l1.setAnimation('bb');
  l1.scale = 3;
  k3.visible= false;
  l18.visible= false;
  l19.visible = false;
  p.visible = false;
   c.visible = false;
  f1.visible = false;
  f11.visible = false;
    f2.visible = false;
  f22.visible = false;
  f3.visible = false;
  f33.visible = false;
  l13.visible = false;
  l14.visible = false;
  l15.visible = false;
  l16.visible = false;
  l17.visible = false;
  k1.visible = false;
  k2.visible = false;
l20.visible = false;
l21.visible = false;
l22.visible = false;
l23.visible = false;
  
  k11.visible = false;
  k22.visible = false;
  k33.visible = false;
  
  textSize(20.2 );
fill('black');
stroke('white');
strokeWeight(3);
text("G a m e  O v e r",130,235);
  h.y=  200;
  h.x = 200;
}
if(keyDown(LEFT_ARROW)&&gameState === "play2"){
  h.x= h.x-10;
  p.setAnimation('rl');
}
if(keyDown(RIGHT_ARROW)&&gameState === "play2"){
  h.x= h.x+10;
  p.setAnimation('rr');
}
if(keyDown(UP_ARROW)&&gameState === "play2"){
  h.y= h.y-10;
  p.setAnimation('ru');
}
if(keyDown(DOWN_ARROW)&&gameState === "play2"){
  h.y= h.y+3;
  p.setAnimation('rd');
}
if(l17.isTouching(o1)){
  l17.velocityX = -8;
  l17.velocityY = 0;
  l17.x = 385;
}
if(l17.isTouching(o2)){
  l17.velocityX = 8;
  l17.velocityY = 0;
  l17.x = 5;
}
if(l16.isTouching(o1)){
  l16.velocityX = -8;
  l16.velocityY = 0;
  l16.x = 385;
}
if(l16.isTouching(o2)){
  l16.velocityX = 8;
  l16.velocityY = 0;
  l16.x = 5;
}
if(l23.isTouching(o1)){
  l23.velocityX = -8;
  l23.velocityY = 0;
  l23.x = 385;
}
if(l23.isTouching(o2)){
  l23.velocityX = 8;
  l23.velocityY = 0;
  l23.x = 5;
}
if(h.isTouching(k1)&&gameState === "play2"){
  k1.x =1000;
  k1.y =1000;
  k11.setAnimation("k1");
  l16.velocityX= 8;
  l16.velocityY = 0;
}
if(h.isTouching(k2)&&gameState === "play2"){
  k2.x =1000;
  k2.y =1000;
  k22.setAnimation("k2");
  l23.velocityX= 8;
  l23.velocityY = 0;
}
if(h.isTouching(k3)&&gameState === "play2"){
  k3.x =1000;
  k3.y =1000;
  k33.setAnimation("k2");
  ob1.velocityX= 9;
  ob2.velocityX = 9;
  ob3.velocityX= 9;
  f1.velocityX = 9;
  f11.velocityX = 9;
  f2.velocityX = 9;
  f22.velocityX = 9;
  f3.velocityX = 9;
  f33.velocityX = 9;
}
if(h.isTouching(l23)&&gameState ==="play2"){
  gameState = "over2";
}
if(h.isTouching(c)&&gameState === "play2"){
  gameState = "win";
}
if(gameState === "win"){
  l1.setAnimation('corona');
  l1.scale = 1;
  fill('white');
  stroke('red');
  textSize(40);
  strokeWeight(5);
  text("Misson Completed",10,80);
  textSize(19.5);
  text("       You are the Best Hacker",10,340);
  textSize(15);
  text("Press U to Restart",250,375);
   l18.visible= false;
  l19.visible = false;
  p.visible = false;
   c.visible = false;
  f1.visible = false;
  f11.visible = false;
    f2.visible = false;
  f22.visible = false;
  f3.visible = false;
  f33.visible = false;
  l13.visible = false;
  l14.visible = false;
  l15.visible = false;
  l16.visible = false;
  l17.visible = false;
  k1.visible = false;
  k2.visible = false;
l20.visible = false;
l21.visible = false;
l22.visible = false;
l23.visible = false;
  h.x =-1000;
  h.y = -1000;
  k11.visible = false;
  k22.visible = false;
  k33.visible = false;
}
if(keyWentDown("space")){
  playSound("assets/category_pop/puzzle_game_downgrade_bubble_03.mp3");
}


}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
