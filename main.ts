radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 0) {
        do_server()
    } else if (receivedNumber == 自分のID) {
        do_lose()
    } else if (receivedNumber == 99) {
        do_win()
    } else {
        do_safe()
    }
})
function あひるを表示 () {
    basic.showLeds(`
        . . . . .
        . . . . #
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.pause(100)
    basic.showLeds(`
        . . . . #
        . . . # #
        . . . . #
        . . . . #
        . . . . .
        `)
    basic.pause(100)
    basic.showLeds(`
        . . . # #
        . . # # #
        . . . # #
        . . . # #
        . . . # .
        `)
    basic.pause(50)
    basic.showLeds(`
        . . . # #
        . . # # #
        . . . # #
        . . . # #
        . . . . #
        `)
    basic.pause(50)
    basic.showLeds(`
        . . # # .
        . # # # .
        . . # # #
        . . # # #
        . . # . .
        `)
    basic.pause(30)
    basic.showLeds(`
        . . # # .
        . # # # .
        . . # # #
        . . # # #
        . . . # .
        `)
    basic.pause(30)
    basic.showLeds(`
        . # # . .
        # # # . .
        . # # # #
        . # # # .
        . # . . .
        `)
    basic.pause(30)
    basic.showLeds(`
        . # # . .
        # # # . .
        . # # # #
        . # # # .
        . . # . .
        `)
    basic.pause(30)
    basic.showLeds(`
        . # # . .
        # # # . .
        . # # # #
        . # # # .
        . . . # .
        `)
}
function do_server () {
    if (自分のID == 0) {
        radio.sendNumber(mbits.pop())
        if (mbits.length == 1) {
            basic.pause(7000)
            radio.sendNumber(99)
        }
    }
}
function do_win () {
    radio.setGroup(10)
    music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Entertainer), music.PlaybackMode.InBackground)
    for (let index = 0; index < 15; index++) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
        basic.showIcon(IconNames.SmallDiamond)
        basic.showIcon(IconNames.Diamond)
        basic.showIcon(IconNames.Target)
        basic.showIcon(IconNames.Chessboard)
    }
}
input.onButtonPressed(Button.A, function () {
    if (accept_A) {
        accept_A = false
        radio.sendNumber(0)
    }
})
function あひる通過 () {
    basic.showLeds(`
        # # . . .
        # # . . .
        # # # # .
        # # # . .
        # . . . .
        `)
    basic.pause(50)
    basic.showLeds(`
        # # . . .
        # # . . .
        # # # # .
        # # # . .
        . # . . .
        `)
    basic.pause(50)
    basic.showLeds(`
        # . . . .
        # . . . .
        # # # . .
        # # . . .
        # . . . .
        `)
    basic.pause(50)
    basic.showLeds(`
        # . . . .
        # . . . .
        # # # . .
        # # . . .
        . # . . .
        `)
    basic.pause(50)
    basic.showLeds(`
        . . . . .
        . . . . .
        # # . . .
        # . . . .
        . . . . .
        `)
    basic.pause(100)
    basic.showLeds(`
        . . . . .
        . . . . .
        # . . . .
        . . . . .
        . . . . .
        `)
    basic.pause(100)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
}
function do_lose () {
    radio.setGroup(10)
    あひるを表示()
    basic.pause(4000)
    basic.showIcon(IconNames.Sad)
    music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Funeral), music.PlaybackMode.InBackground)
}
function do_safe () {
    あひるを表示()
    basic.pause(1000)
    あひる通過()
    accept_A = true
}
let mbits: number[] = []
let accept_A = false
let 自分のID = 0
自分のID = 0
accept_A = true
mbits = [
1,
2,
3,
4
]
radio.setGroup(45)
basic.showIcon(IconNames.Happy)
basic.forever(function () {
	
})
