basic.forever(function () {
    led.setBrightness(225 - input.lightLevel())
    basic.showIcon(IconNames.Heart)
})
