basic.forever(function () {
    if (input.acceleration(Dimension.X) < -50) {
        basic.showLeds(`
            . . # . .
            . . . # .
            # # # # #
            . . . # .
            . . # . .
            `)
        servos.P0.run(10)
        servos.P1.run(-10)
    } else if (input.acceleration(Dimension.X) > 50) {
        basic.showLeds(`
            . . # . .
            . # . . .
            # # # # #
            . # . . .
            . . # . .
            `)
        servos.P1.run(10)
        servos.P0.run(-10)
    } else {
        servos.P0.run(0)
        servos.P1.run(0)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
    }
})
basic.forever(function () {
    serial.writeValue("x", input.acceleration(Dimension.X))
    basic.pause(500)
})
