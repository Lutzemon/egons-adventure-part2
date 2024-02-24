controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setImage(assets.image`meinBild1`)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    controller.moveSprite(mySprite)
    mySprite.setImage(assets.image`meinBild`)
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setImage(assets.image`meinBild2`)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setImage(assets.image`meinBild0`)
})
let mySprite: Sprite = null
scene.cameraFollowSprite(mySprite)
tiles.setCurrentTilemap(tilemap`Level1`)
mySprite = sprites.create(assets.image`meinBild0`, SpriteKind.Player)
