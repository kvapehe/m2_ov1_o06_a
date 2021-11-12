basic.showLeds(`
    # . . . .
    . . . . .
    . . # . .
    . . . . .
    . . . . #
    `)
// Dette er nok til å blinke ca 10 ms for hvert sekund
// 
// Siden forever-loop ikke er tom så forstyrrer den oppgaven.
// Ved å ta bort ledvising i den så vil alle LED blinke rundt en gang pr sek og i ca 10 ms. Kan legge inn en pause slik at blink blir minst 10 ms. Det eksemplet som er til høyre for timer-loop virker ikke da det tar tid med hver LED-vinsg.
// Test dette også. Faktisk finnes den en oppgave B som gjør dette. Å jobbe med timer kan være litt tricky, side en må passe på alle instruskjoner tar langt mindre enn 1 ms å utføre, eller enda mindre om en har raskere timingfunksjoner. Bytt gjerne ut alt i timer-løkken med den med en og en LED-rad for å teste svakhetene med timer, om en ikke er forsiktig med bruken.
loops.everyInterval(1000, function () {
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
    music.playTone(262, music.beat(BeatFraction.Sixteenth))
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
})
basic.forever(function () {
    // Kan fjernes for å unngå å forstyrre timer-løkken.
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # # .
        . . . . .
        . . . . .
        `)
})
