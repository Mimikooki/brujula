let direccion = 0
basic.forever(function () {
    direccion = input.compassHeading()
    basic.showNumber(direccion)
})
