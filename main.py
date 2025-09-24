def on_button_pressed_b():
    pass
input.on_button_pressed(Button.B, on_button_pressed_b)

def on_forever():
    czyMruga = 0
    if czyMruga:
        basic.show_leds("""
            . . # . .
            . # # # .
            # # . # #
            . # # # .
            . . # . .
            """)
        basic.pause(500)
        basic.show_leds("""
            . . . . .
            . # # # .
            . # . # .
            . # # # .
            . . . . .
            """)
        basic.pause(500)
basic.forever(on_forever)
