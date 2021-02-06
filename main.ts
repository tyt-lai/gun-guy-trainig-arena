controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
        5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
        5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
        5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
        5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
        5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
        . . . . . . . . . . . . . . . . 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        `, gunguy, 200, 0)
    projectile.x = gunguy.x + 5
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprite.destroy()
    otherSprite.destroy()
    otherSprite.startEffect(effects.spray)
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprite.destroy()
    game.over(false)
})
controller.A.onEvent(ControllerButtonEvent.Repeated, function () {
    projectile = sprites.createProjectileFromSprite(img`
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
        4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
        5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
        5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
        8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
        c c c c c c c c c c c c c c c c 
        c c c c c c c c c c c c c c c c 
        3 2 3 3 3 3 2 3 3 3 3 2 2 3 3 3 
        3 3 3 3 2 3 3 3 3 3 3 2 3 3 2 2 
        `, gunguy, 200, 0)
   projectile.x = gunguy.x + 5
})
let projectile2: Sprite = null
let projectile: Sprite = null
let gunguy: Sprite = null    
gunguy = sprites.create(img`
    f f f f f . . . . . . . . . . . 
    f f d f f . . f f f f f f f f f 
    d d d d d . . f f f f f f f f f 
    d 2 2 2 d . . f f d d . . . . . 
    f f f f f f f f d d . . . . . . 
    f f f f f . . . . . . . . . . . 
    f f f f f . f f f f f f f 5 . . 
    f f f f f . f f f f f f f 5 . . 
    f f f f f f f f f d d . . . . . 
    f f f f f . . f f f . . . . . . 
    f f . f f . . . . . . . . . . . 
    f f . f f . . . . . . . . . . . 
    f f . f f . . . . . . . . . . . 
    f f . f f . . . . . . . . . . . 
    f f . f f . . . . . . . . . . . 
    f f . f f . . . . . . . . . . . 
    `, SpriteKind.Player)
scene.setBackgroundColor(2)
controller.moveSprite(gunguy)
gunguy.setFlag(SpriteFlag.StayInScreen, true)
game.onUpdateInterval(500, function () {
   let enemy = sprites.create(img`
        . . . . . . 1 . . . . . . . . . 
        . . . . . . 1 . . . . . . . . . 
        . . . . . . 1 . . f f f f f . . 
        . . . . . . 1 . . f f d f f . . 
        . . . . . . 1 . . f f d f f . . 
        . . . . . . 1 . . d 2 2 2 d . . 
        . . . . . . 1 . . f f f f f . . 
        . . . . . . 1 . . f f f f f . . 
        . . . . . . 1 . . f f f f f . . 
        . . . . . 1 5 1 f f f f f f f . 
        . . . . . . 1 . f f f f f f f . 
        . . . . . . 1 . . f f . f f d d 
        . . . . . . 1 . . f f . f f d . 
        . . . . . . . . . f f . f f . . 
        . . . . . . . . . f f . f f . . 
        . . . . . . . . . f f . f f . . 
        `, SpriteKind.Enemy)
    enemy.setPosition(160, randint(0, 120))
enemy.setVelocity(randint(-125, -50), 0)
})
