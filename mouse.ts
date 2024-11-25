
//% color=#8000FF 
//% icon="\uf245"
//% block="Mouse"
//% block.loc.de="Maus"
namespace mouse {
    //% blockId="mouse service" block="bluetooth mouse service"
    //% block.loc.de="Bluetooth-Maus-Dienst"
    //% shim=mouse::startMouseService
    //% weight=50
    export function startMouseService() : void {
        return
    }

    //% shim=mouse::_send
    function _send(x: number, y: number, scroll: number, buttons: number) : void { 
        return
    }

    //% blockId="move mouse xy" block="move mouse | x by $x| and y by $y"
    //% block.loc.de="Maus bewegen | x um $x| und y um $y"
    //% x.min=-127 x.max=127 y.min=-127 y.max=127 scroll.min=-127 scroll.max=127
    //% weight=40
    export function movexy(x: number, y: number) : void { 
        _send(x, y, 0, 0);  
    }

    //% blockId="mouse click" block="click mouse"
    //% block.loc.de="click mouse"
    //% weight=30
    export function click() : void { 
        _send(0, 0, 0, 0x1);  
    }

    //% blockId="mouse middle click" block="middle click mouse"
    //% block.loc.de="mittlerer Mausklick"
    //% weight=20
    export function middleClick() : void { 
        _send(0, 0, 0, 0x2);  
    }
    
    //% blockId="mouse right click" block="right click mouse"
    //% block.loc.de="rechter Mausklick"
    //% weight=10
    export function rightClick() : void { 
        _send(0, 0, 0, 0x4);  
    }

    //% blockId="scroll mouse" block="scroll up |by $scroll"
    //% block.loc.de="nach oben scrollen |by $scroll"
    //% scroll.min=-127 scroll.max=127
    //% weight=5
    export function scroll(scroll: number) : void { 
        _send(0, 0, scroll, 0);  
    }

    //% blockId="send mouse" block="send mouse motion|change x by $x|change y by $y|left pressed $left|middle pressed $middle|right pressed $right|change scroll by $scroll|hold buttons $hold" advanced=true
    //% block.loc.de="Mausbewegung senden|X um $x ändern|Y um $y ändern|Links gedrückt $left|Mitte gedrückt $middle|Rechts gedrückt $right|Scroll um $scroll ändern|Tasten halten $hold"
    //% x.min=-127 x.max=127 y.min=-127 y.max=127 scroll.min=-127 scroll.max=127
    //% hold.default=false left.default=false middle.default=false right.default=false
    //% blockExternalInputs=true
    //% expandableArgumentMode="toggle"
    //% weight=10
    export function send(x: number, y: number, left: boolean, middle: boolean, right: boolean, scroll: number, hold: boolean) : void { 
        _send(x, y, scroll, (left?0x1:0)|(middle?0x2:0)|(right?0x4:0)|(hold?0x8:0)  )
    }

    //% blockID="mouse on status change" block="on mouse status change" advanced=true
    //% block.loc.de="bei Änderung des Mausstatus"
    //% shim=mouse::setStatusChangeHandler 
    //% weight=20
    export function setStatusChangeHandler(a: Action) {
        return
    }

    //% blockId="mouse enabled" block="mouse enabled" advanced=true
    //% block.loc.de="Maus aktiviert"
    //% shim=mouse::isEnabled
    //% weight=30
     export function isEnabled() : boolean {
        return false;
    }
}
