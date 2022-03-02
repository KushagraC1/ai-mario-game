function preload() {
	die_music = loadSound("mariodie.wav")
	jump_music = loadSound("jump.wav");
	gameover_music = loadSound("gameover.wav");
	coin_music = loadSound("coin.wav");
	world_start = loadSound("world_start.wav");
	setSprites();
	MarioAnimation();

}

function setup() {
	canvas = createCanvas(1240,336);
	instializeInSetup(mario);
	canvas.parent('canvas');
	video = createCapture(VIDEO);
	video.size(800,400);
	video.parent('console');

	poseNet = ml5.poseNet(video, modelLoaded);
	poseNet.on('pose', gotPoses);
}
function gotPoses(results){
	if(results.length > 0){
		console.log(results);
		noseX = results[0].pose.nose.x;
		noseY = results[0].pose.nose.y;
	}
}
function modelLoaded(){
	console.log("model Loaded");
}

function draw() {
	game()
}
//336





