callback({
  "levelNumber": 19,
  "size": 10,
  "steps": 83,
  "successRatio": 1,
  "author": "18111398",
  "hash": "5d79612cacfc22092f14962ade85f7df",
  "path": "19-Countdown-10.82/10.83-18111398.asm",
  "source": "-- HUMAN RESOURCE MACHINE PROGRAM --\n-- 19-Countdown - SIZE 10/10 - SPEED 83/82 --\n\na:\n    INBOX   \n    COPYTO   0\n    JUMP     c\nb:\n    OUTBOX  \n    BUMPUP   0\nc:\n    JUMPN    b\nd:\n    OUTBOX  \n    BUMPDN   0\n    JUMPN    a\n    JUMP     d\n\n\n"
});