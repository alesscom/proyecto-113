function preload(){

}
function setup(){
    canvas = createCanvas(640, 480);
    canvas.position(310, 250);
    video = createCapture(VIDEO);
    video.hide();
    color_filtro = "";
}
function draw(){
    image(video, 0, 0, 640, 480);
    tint(color_filtro);
}
function take_snapshot(){
    save('foto_filtro.png')
}
function aplicar_filtro(){
    color_filtro = document.getElementById("color").value;
}