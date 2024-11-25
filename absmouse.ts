
//% color=#ff0080 
//% icon="\uf245"
//% block="Absolute Mouse"
//% block.loc.de="Absolute Maus"
namespace absmouse {
    //% blockId="absolute mouse service" block="bluetooth absolute mouse service"
    //% block.loc.de="Absoluter-Bluetooth-Maus-Dienst"
    //% shim=absmouse::startAbsoluteMouseService
    //% weight=50
    export function startAbsoluteMouseService() : void {
        return
    }

    //% shim=absmouse::_send
    function _send(x: number, y: number, buttons: number) : void { 
        return
    }

    //% blockId="move absolute mouse xy" block="move absolute mouse | x to $x| and y to $y"
    //% block.loc.de="absolute Mausbewegung | x auf $x| und y auf $y"
    //% x.min=-32767 x.max=32767 y.min=-32767 y.max=32767
    //% weight=40
    export function movexy(x: number, y: number) : void { 
        _send(x, y, 0);  
    }

    //% blockId="absolute mouse click" block="click absolute mouse"
    //% block.loc.de="absolute Mausklicks"
    //% weight=30
    export function click() : void { 
        // Sentinel values for x & y to use "last" x & y
        _send(0xFFFF, 0xFFFF, 0x1);  
    }

    //% blockId="absolute mouse middle click" block="middle click absolute mouse"
    //% block.loc.de="mittlerer Mausklick absolut"
    //% weight=20
    export function middleClick() : void { 
        // Sentinel values for x & y to use "last" x & y
        _send(0xFFFF, 0xFFFF, 0x2);  
    }
    
    //% blockId="absolute mouse right click" block="right click absolute mouse"
    //% block.loc.de="rechter Mausklick absolut"
    //% weight=10
    export function rightClick() : void { 
        // Sentinel values for x & y to use "last" x & y
        _send(0xFFFF, 0xFFFF, 0x4);  
    }

    //% blockId="send absolute mouse" block="send absolute mouse motion|set x to $x| and set y to $y|left pressed $left|middle pressed $middle|right pressed $right|hold buttons $hold" advanced=true
    //% block.loc.de="sende absolute Mausbewegung|setze x auf $x| und setze y auf $y|links gedrückt $left|mittler gedrückt $middle|rechts gedrückt $right|halte Tasten $hold"
    //% x.min=-32767 x.max=32767 y.min=-32767 y.max=32767
    //% hold.default=false left.default=false middle.default=false right.default=false
    //% blockExternalInputs=true
    //% expandableArgumentMode="toggle"
    //% weight=10
    export function send(x: number, y: number, left: boolean, middle: boolean, right: boolean, hold: boolean) : void { 
        _send(x, y,  (left?0x1:0)|(middle?0x2:0)|(right?0x4:0)|(hold?0x8:0)  )
    }

    //% blockID="absolute mouse on status change" block="on absolute mouse status change" advanced=true
    //% block.loc.de="bei absoluter Statusänderung der Maus"
    //% shim=absmouse::setStatusChangeHandler 
    //% weight=20
    export function setStatusChangeHandler(a: Action) {
        return
    }

    //% blockId="absolute mouse enabled" block="absolute mouse enabled" advanced=true
    //% block.loc.de="absolute Maus aktiviert"
    //% shim=absmouse::isEnabled
    //% weight=30
     export function isEnabled() : boolean {
        return false;
    }
}
