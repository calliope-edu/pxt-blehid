
// Special Keys
class MediaKey {
    static readonly next = 0x01
    static readonly previous = 0x02
    static readonly stop = 0x04
    static readonly eject = 0x08
    static readonly playPause = 0x10
    static readonly mute = 0x20
    static readonly vol_up = 0x40
    static readonly vol_down = 0x80
}

//% color=#ff00FF 
//% icon="\uf04b"
//% block="Media"
//% block.loc.de="Medien"
namespace media {

    //% blockId="media service" block="bluetooth media service"
    //% block.loc.de="Bluetooth-Medien-Dienst"
    //% shim=media::startMediaService
    //% weight=50
    export function startMediaService() : void {
        return
    }

    //% blockId="send code" block="send code | $code" 
    //% block.loc.de="Code senden | $code"
    //% code.shadow="mediakey_conv"
    //% shim=media::sendCode
    //% weight=40
    export function sendCode(code: number) : void {
        return
    }

    //% blockID="media on status change" block="on media status change" advanced=true
    //% block.loc.de="bei Änderung des Medienzustands"
    //% shim=media::setStatusChangeHandler 
    //% weight=20
    export function setStatusChangeHandler(a: Action) {
        return
    }

    //% blockId="media enabled" block="media enabled" advanced=true
    //% block.loc.de="Medien aktiviert"
    //% shim=media::isEnabled
    //% weight=10
     export function isEnabled() : boolean {
        return false;
    }

    export enum _MediaKey {
        //% block="next"
        //% block.loc.de="weiter"
        next, 
        //% block="previous"
        //% block.loc.de="zurück"
        previous, 
        //% block="stop"
        //% block.loc.de="Stop"
        stop,
        //% block="eject"
        //% block.loc.de="auswerfen"
        eject, 
        //% block="play/pause"
        //% block.loc.de="Start/Stop"
        playPause,
        //% block="mute"
        //% block.loc.de="stummschalten"
        mute,
        //% block="volume up"
        //% block.loc.de="Lautstärke hoch"
        vol_up,
        //% block="volume down"
        //% block.loc.de="Lautstärke herunter"
        vol_down,
    }

    //% blockId="mediakey_conv" block="%key"
    //% block.loc.de="%key"
    //% weight=20
    export function keys(key : _MediaKey) : number {
        let keys = [
            MediaKey.next, 
            MediaKey.previous, 
            MediaKey.stop, 
            MediaKey.eject, 
            MediaKey.playPause,
            MediaKey.mute,
            MediaKey.vol_up, 
            MediaKey.vol_down  
        ]
        if(key>=_MediaKey.next && key<=_MediaKey.vol_down)
            return keys[key];
        return 0;
    }
}
