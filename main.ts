let mySprite: Sprite = null
scene.cameraFollowSprite(mySprite)
tiles.setCurrentTilemap(tilemap`Level1`)
mySprite = sprites.create(img`
    . . . . 8 8 8 8 8 . . . . . . . 
    . . . 8 6 6 6 6 6 8 8 . . . . . 
    . . 8 6 6 6 6 6 6 6 8 8 . . . . 
    . 8 b 7 6 6 6 6 6 7 9 8 . . . . 
    8 b 9 7 6 6 6 6 7 7 9 9 8 8 . . 
    8 9 9 7 6 6 6 7 7 7 9 9 6 6 8 . 
    8 9 9 6 7 7 7 7 7 6 9 9 6 6 6 8 
    8 9 9 8 8 8 8 8 8 8 9 9 6 6 6 8 
    8 9 b 8 b 8 b b b 8 b 9 6 6 6 8 
    8 b 8 b b 8 b b b b 8 8 8 8 6 8 
    8 8 8 6 6 8 6 6 6 6 8 8 3 3 8 8 
    8 8 8 8 8 8 8 8 8 8 8 8 8 3 3 8 
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    8 8 f f f 8 8 8 8 f f f 8 8 8 8 
    . f c c b f 8 8 f c c b f 8 8 . 
    . . f b b . . . . f b b . . . . 
    `, SpriteKind.Player)
