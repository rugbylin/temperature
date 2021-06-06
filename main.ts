basic.forever(function () {
    basic.showNumber(input.temperature())
    serial.writeValue("Celius", input.temperature())
    basic.pause(500)
})
