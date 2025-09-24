let czyMruga = false
input.onButtonPressed(Button.A, function () {
    music.play(music.stringPlayable("G D B G B G A E ", 294), music.PlaybackMode.UntilDone)
})
input.onButtonPressed(Button.B, function () {
    if (czyMruga) {
        czyMruga = false
    } else {
        czyMruga = true
    }
})
basic.forever(function () {
    if (czyMruga) {
        basic.showLeds(`
            . . # . .
            . # # # .
            # # . # #
            . # # # .
            . . # . .
            `)
        basic.pause(500)
        basic.showLeds(`
            . . . . .
            . # # # .
            . # . # .
            . # # # .
            . . . . .
            `)
        basic.pause(500)
    } else {
        basic.clearScreen()
    }
})
