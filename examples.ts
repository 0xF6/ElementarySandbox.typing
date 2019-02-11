// examples reference
/// <reference path="./CoreModule/index.d.ts" />
/// <reference path="./PostProcessing/index.d.ts" />
/// <reference path="./UI/index.d.ts" />
/// <reference path="./elementary/index.d.ts" />
// =-



// get delta time
var t = time.deltaTime;

// get input key
var isPressed = input.GetKey("F11");

// write to log
ui.log("it's a classic log!");
ui.warn("it's a warn log!");
ui.error("it's a error log!");

// get button
var btn      = $<UButton>("Cavnas>ButtonName>[Button]");
// get GameObject button
var gObject1 = $<UGameObject>("Cavnas>ButtonName");
var gObject2 = $<UButton>("Cavnas>ButtonName>[Button]").gameObject;

// get mainCamera (if exist)
game.MainCamera();
// set target frame (FPS)
game.setTargetFrameRate(59);
// set window resolution
game.setResolution(0, 0, "ExclusiveFullScreen");

// add task
game.TaskManager().AddTask(2, () => {
    // start this function at 2 seconds!
});

// get version game
sys.app.version();
// get version engine
sys.app.engineVersion();

//==========// 
//==--- in JavaScript Component

// override onAwake in logic-scripts
go.onAwake = () => {
    // it's awake!
}
// set tag
go.tag = "MyBeautifulTag!";
// get UID
var shortID = go.ShortID;
// start Coroutine
go.StartCoroutine("MySuperCoroutine");
// disable component
go.enabled = false;

//==========//
//==--- in Particle Component

// set lifetime
particle.getLifeTime = () => 1;
// set glow color a white
particle.glow.GlowColor = css("#fff");
// if affect magnetic
particle.MagneticPole.IsAffectMagnetic

// enable touch contact
var c = particle.EnableTouchContact();
// add onClick event
c.on("PointerClick", (v: PointerEventData) => {
    ui.log(`User clicked ${v.clickCount} times to ${particle.name} particle.`)
});

//==========//

// === use audio ===

// Get test object
var g = $<UGameObject>("TestObject");
// load audio clip
var clip = game.Resources<AudioClip>("Sound/effects/TestEffectSound");
// if gameObject contains audioSource Component
if(!game.audio.IsAvailable(g))
    // if not add it
    game.audio.EnableSource(g);
// play one shot audio clip
game.audio.PlayShot(g, clip);


// === use post effects ===

// get main camera
var cam = game.MainCamera();
// get post processing volume
var volume = cam.GetComponent<PostProcessVolume>("PostProcessVolume");
// get profile
var profile = volume.profile;
// get setting of effect DepthOfField
var depthOfField = profile.GetSetting<DepthOfField>("DepthOfField");
// set focal to 7
depthOfField.focalLength.SetValue(7);

// ===