input.onButtonEvent(Button.A, input.buttonEventValue(ButtonEvent.Down), function () {
    basic.showString("hi!")
})
input.onButtonEvent(Button.B, input.buttonEventValue(ButtonEvent.Down), function () {
    basic.showString("tschüss")
})
input.onGesture(Gesture.Shake, function () {
    basic.showNumber(randint(0, 10))
    if (true) {
        radio.sendNumber(67)
    }
})
