
@script RequireComponent(AudioSource)
public var jumpClip: AudioClip;

function Update () {
	if(Input.GetKeyDown ("space")) {
		audio.clip = jumpClip;
		audio.Play();
		
	}
}