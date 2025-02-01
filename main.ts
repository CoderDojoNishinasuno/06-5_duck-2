radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 0) {
        if (自分のID == 0) {
            radio.sendNumber(mbits.pop())
        }
    } else if (receivedNumber == 自分のID) {
        あひるを表示()
        basic.pause(1000)
        basic.showIcon(IconNames.Sad)
        music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Funeral), music.PlaybackMode.InBackground)
        basic.pause(1000)
        radio.setGroup(10)
    } else {
        あひるを表示()
        basic.pause(1000)
        あひる通過()
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
        . . . . #
        `)
    basic.pause(100)
    basic.showLeds(`
        . . # # .
        . # # # .
        . . # # #
        . . # # #
        . . # . .
        `)
    basic.pause(100)
    basic.showLeds(`
        . # # . .
        # # # . .
        . # # # #
        . # # # .
        . . # . .
        `)
}
input.onButtonPressed(Button.A, function () {
    radio.sendNumber(0)
})
function あひる通過 () {
    basic.showLeds(`
        # # . . .
        # # . . .
        # # # # .
        # # # . .
        # . . . .
        `)
    basic.pause(100)
    basic.showLeds(`
        # . . . .
        # . . . .
        # # # . .
        # # . . .
        . # . . .
        `)
    basic.pause(100)
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
let mbits: number[] = []
let 自分のID = 0
自分のID = 0
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
