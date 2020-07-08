input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Asleep)
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.Happy)
})
input.onGesture(Gesture.Shake, function () {
    basic.showLeds(`
        . # . # .
        . . . . .
        # # # # #
        . . # . #
        . . . # .
        `)
})
