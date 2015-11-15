callback({
  "levelNumber": 20,
  "size": 168,
  "steps": 85,
  "successRatio": 1,
  "type": "specific",
  "author": "Mygod",
  "hash": "6e258a47adb8ffc0efbc609e8bf8b780",
  "path": "20-Multiplication-Workshop-15.109/168.71.specific-Mygod.asm",
  "source": "-- HUMAN RESOURCE MACHINE PROGRAM --\r\n-- 20-Multiplication-Workshop - SIZE 168/15 - SPEED 71/109 --\r\n\r\n-- This solution is level-specific (quality-limited input) and assumes input\r\n-- values of 0-9.\r\n-- Based on 157.72.specific-mschordan.asm.\r\n\r\n    INBOX   \r\n    JUMPZ    out1\r\n    COPYTO   0\r\n    INBOX   \r\n    JUMPZ    out\r\n    COPYTO   1\r\n    SUB      0\r\n    JUMPN    neg\r\n\r\n    BUMPDN   0\r\n    JUMPZ      a1\r\n    BUMPDN   0\r\n    JUMPZ      a2\r\n    BUMPDN   0\r\n    JUMPZ      a3\r\n    BUMPDN   0\r\n    JUMPZ      a4\r\n    BUMPDN   0\r\n    JUMPZ      a5\r\n    BUMPDN   0\r\n    JUMPZ      a6\r\n    BUMPDN   0\r\n    JUMPZ      a7\r\n    BUMPDN   0\r\n    JUMPZ      a8\r\n    COPYFROM 1\r\n    ADD      1\r\n    ADD      1\r\n    COPYTO   3\r\n    ADD      3\r\n    ADD      3\r\nout:\r\n    OUTBOX\r\na:\r\n    INBOX   \r\n    JUMPZ    out1\r\n    COPYTO   0\r\n    INBOX   \r\n    JUMPZ    out\r\n    COPYTO   1\r\n    SUB      0\r\n    JUMPN    neg\r\n\r\n    BUMPDN   0\r\n    JUMPZ      a1\r\n    BUMPDN   0\r\n    JUMPZ      a2\r\n    BUMPDN   0\r\n    JUMPZ      a3\r\n    BUMPDN   0\r\n    JUMPZ      a4\r\n    BUMPDN   0\r\n    JUMPZ      a5\r\n    BUMPDN   0\r\n    JUMPZ      a6\r\n    BUMPDN   0\r\n    JUMPZ      a7\r\n    BUMPDN   0\r\n    JUMPZ      a8\r\n    COPYFROM 1\r\n    ADD      1\r\n    ADD      1\r\n    COPYTO   3\r\n    ADD      3\r\n    ADD      3\r\n    JUMP     out\r\n\r\nneg:\r\n    BUMPDN   1\r\n    JUMPZ      b1\r\n    BUMPDN   1\r\n    JUMPZ      b2\r\n    BUMPDN   1\r\n    JUMPZ      b3\r\n    BUMPDN   1\r\n    JUMPZ      b4\r\n    BUMPDN   1\r\n    JUMPZ      b5\r\n    BUMPDN   1\r\n    JUMPZ      b6\r\n    BUMPDN   1\r\n    JUMPZ      b7\r\n    BUMPDN   1\r\n    JUMPZ      b8\r\n    COPYFROM 0\r\n    ADD      0\r\n    ADD      0\r\n    COPYTO   3\r\n    ADD      3\r\n    ADD      3\r\n    JUMP     out\r\n\r\nout1:\r\n    OUTBOX  \r\n    INBOX   \r\n    JUMP     a\r\n\r\na1:\r\n    COPYFROM 1\r\n    JUMP     out\r\na2:\r\n    COPYFROM 1\r\n    ADD      1\r\n    JUMP     out\r\na3:\r\n    COPYFROM 1\r\n    ADD      1\r\n    ADD      1\r\n    JUMP     out\r\na4:\r\n    COPYFROM 1\r\n    ADD      1\r\n    ADD      1\r\n    ADD      1\r\n    JUMP     out\r\na5:\r\n    COPYFROM 1\r\n    ADD      1\r\n    ADD      1\r\n    ADD      1\r\n    ADD      1\r\n    JUMP     out\r\na6:\r\n    COPYFROM 1\r\n    ADD      1\r\n    ADD      1\r\n    COPYTO   3\r\n    ADD      3\r\n    JUMP     out\r\na7:\r\n    COPYFROM 1\r\n    ADD      1\r\n    ADD      1\r\n    COPYTO   3\r\n    ADD      3\r\n    ADD      1\r\n    JUMP     out\r\na8:\r\n    COPYFROM 1\r\n    ADD      1\r\n    ADD      1\r\n    ADD      1\r\n    COPYTO   3\r\n    ADD      3\r\n    JUMP     out\r\n\r\nb1:\r\n    COPYFROM 0\r\n    JUMP     out\r\nb2:\r\n    COPYFROM 0\r\n    ADD      0\r\n    JUMP     out\r\nb3:\r\n    COPYFROM 0\r\n    ADD      0\r\n    ADD      0\r\n    JUMP     out\r\nb4:\r\n    COPYFROM 0\r\n    ADD      0\r\n    ADD      0\r\n    ADD      0\r\n    JUMP     out\r\nb5:\r\n    COPYFROM 0\r\n    ADD      0\r\n    ADD      0\r\n    ADD      0\r\n    ADD      0\r\n    JUMP     out\r\nb6:\r\n    COPYFROM 0\r\n    ADD      0\r\n    ADD      0\r\n    COPYTO   3\r\n    ADD      3\r\n    JUMP     out\r\nb7:\r\n    COPYFROM 0\r\n    ADD      0\r\n    ADD      0\r\n    COPYTO   3\r\n    ADD      3\r\n    ADD      0\r\n    JUMP     out\r\nb8:\r\n    COPYFROM 0\r\n    ADD      0\r\n    ADD      0\r\n    ADD      0\r\n    COPYTO   3\r\n    ADD      3\r\n    JUMP     out\r\n"
});