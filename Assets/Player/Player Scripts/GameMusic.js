
@script RequireComponent(AudioSource)
public var gameMusic: AudioClip;

function Start () {
    audio.clip = gameMusic;
    audio.Play();
}