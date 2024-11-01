input.onGesture(Gesture.LogoUp, function () {
    basic.showLeds(`
        . . # . .
        . # # # .
        . . # . .
        . . # . .
        . . # . .
        `)
    basic.pause(1000)
    basic.clearScreen()
})
input.onGesture(Gesture.TiltLeft, function () {
    basic.showLeds(`
        . # . . .
        . # . . .
        . # . . .
        . # . . .
        . # # # .
        `)
    basic.pause(1000)
    basic.clearScreen()
})
input.onGesture(Gesture.TiltRight, function () {
    basic.showLeds(`
        . # # # .
        . # . # .
        . # # . .
        . # . # .
        . # . # .
        `)
    basic.pause(1000)
})
input.onGesture(Gesture.LogoDown, function () {
    basic.showIcon(IconNames.Sword)
    basic.pause(1000)
    basic.clearScreen()
})
basic.forever(function () {
	
})
