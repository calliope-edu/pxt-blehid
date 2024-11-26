
enum GameButton {
    //% block="none"
    //% block.loc.de="keiner"
    none = 0,
    A = 1<<0,
    B = 1<<1,
    X = 1<<3,
    Y = 1<<4,
    //% block="left shoulder"
    //% block.loc.de="Taste links oben"
    leftShoulder = 1<<6, 
    //% block="right shoulder"
    //% block.loc.de="Taste rechts oben"    
    rightShoulder = 1<<7,
    //% block="back"
    //% block.loc.de="zurück"
    back = 1<<10,
    //% block="start"
    //% block.loc.de="Start"
    start = 1<<11,
    //% block="guide"
    //% block.loc.de="zum Start"
    guide = 1<<12,
    //% block="left stick"
    //% block.loc.de="linker Joystick"
    leftStick = 1<<13,
    //% block="right stick"
    //% block.loc.de="rechter Joystick"
    rightStick = 1<<14
}

enum GameDirection {
    //% block="no direction"
    //% block.loc.de="keine Richtung"
    noDirection = 0,
    up = 1,
    //% block="up right"
    //% block.loc.de="oben rechts"
    upRight = 2,
    right = 3,
    //% block="down right"
    //% block.loc.de="unten rechts"
    downRight = 4,
    down = 5,
    //% block="down left"
    //% block.loc.de="unten links"
    downLeft = 6,
    left = 7,
    //% block="up left"
    //% block.loc.de="oben links"
    upLeft = 8
}

//% color=#ff0000 
//% icon="\uf11b"
//% block="Gamepad"
//% block.loc.de="Gamepad"
namespace gamepad {

    //% blockId="gamepad service" block="bluetooth gamepad service"
    //% block.loc.de="Bluetooth-Gamepad-Dienst"
    //% shim=gamepad::startGamepadService
    //% weight=50
    export function startGamepadService() : void {
        return
    }

    //% shim=gamepad::_send
    function _send(buttons: number, xyzrx: number, dpad: number) : void { 
        return
    }


    //% blockId="dpad_conv" block="D-Pad $direction"
    //% block.loc.de="D-Pad $direction"
    //% direction.defl=GameDirection.none
    //% weight=20
    export function _dpad(direction: GameDirection): number {
        if (direction < GameDirection.up || direction > GameDirection.upLeft)
            return 0
        return direction
    }

    //% blockId="button_conv" block="Button $button pressed $active"
    //% block.loc.de="Knopf $button gedrückt $active"
    //% active.defl=true
    //% button.defl=GameButton.none
    //% weight=20
    export function _buttons(button: GameButton, active: boolean) : number {
        //let active = true
        if(button<GameButton.A || button>GameButton.rightStick)
            return 0
        return active ? button : 0
    }

    function constrain(val: number, min: number, max: number) {
        return (val<min) ? min : (val>max ? max : val);
    }
    
    //% blockId="send gamepad" block="send gamepad motion|set x to $x|set y to $y| set buttons to $buttons | set dpad to $dpad | set z to $z set rx to $rx| " 
    //% block.loc.de="Gamepad-Bewegung senden: x auf $x setzen, y auf $y setzen, Knöpfe auf buttons setzen, dpad auf $dpad setzen, z auf $z setzen, setze rx auf $rx| "
    //% x.min=-127 x.max=127 y.min=-127 y.max=127 z.min=-127 z.max=127 rx.min=-127 rx.max=127 dpad.min=0 dpad.max=15
    //% buttons.shadow="button_conv"
    //% dpad.shadow="dpad_conv"
    //% z.defl=0 rx.defl=0
    //% weight=10
    // TODO: Use expandable block (didn't work initially)
    export function send(buttons: number, x: number, y: number, dpad: number, z: number, rx: number) : void {
        x = (constrain(x, -127, 127) & 0xff)
        y = (constrain(y, -127, 127) & 0xff)
        z = (constrain(z, -127, 127) & 0xff)
        rx = (constrain(rx, -127, 127) & 0xff)
        let xyzrx = x<<24 | y<<16 | z<<8 | rx<<0
        _send(buttons, xyzrx, dpad)
    }

    //% blockID="gamepad on status change" block="on gamepad status change" advanced=true
    //%block.loc.de="bei Gamepad-Statuswechsel"
    //% button.defl=GameButton.none
    //% shim=gamepad::setStatusChangeHandler 
    //% weight=20
    export function setStatusChangeHandler(a: Action) {
        return
    }

    //% blockId="gamepad enabled" block="gamepad enabled" advanced=true
    //%block.loc.de="Gamepad aktiviert"
    //% shim=gamepad::isEnabled
    //% weight=30
     export function isEnabled() : boolean {
        return false;
    }
}
