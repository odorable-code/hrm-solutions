callback({
  "levelNumber": 20,
  "size": 46,
  "steps": 89,
  "successRatio": 1,
  "author": "szubster",
  "hash": "a7094d23a3c185372d8ab9855964f946",
  "path": "20-Multiplication-Workshop-15.109/46.73-szubster.asm",
  "source": "-- HUMAN RESOURCE MACHINE PROGRAM --\n-- 20-Multiplication-Workshop - SIZE 46/15 - SPEED 73/109 --\n\n    COMMENT  0\n    BUMPUP   9\n    BUMPUP   9\n    ADD      9\n    COPYTO   6\n    ADD      6\n    COPYTO   5\na:\nb:\n    COMMENT  1\n    INBOX   \n    JUMPZ    q\n    COPYTO   0\n    INBOX   \n    JUMPZ    p\n    SUB      5\n    JUMPN    c\n    JUMPZ    h\n    COPYFROM 0\n    JUMP     g\nc:\n    ADD      6\n    JUMPZ    l\n    JUMPN    e\n    SUB      9\n    JUMPZ    j\n    JUMPN    d\n    COPYFROM 0\n    JUMP     i\nd:\n    COPYFROM 0\n    JUMP     k\ne:\n    ADD      9\n    JUMPZ    n\n    JUMPN    f\n    COPYFROM 0\n    JUMP     m\nf:\n    COPYFROM 0\n    JUMP     o\n    COMMENT  2\ng:\nh:\n    ADD      0\n    ADD      0\ni:\nj:\n    ADD      0\n    ADD      0\nk:\nl:\n    ADD      0\n    ADD      0\nm:\nn:\n    ADD      0\n    ADD      0\no:\np:\n    OUTBOX  \n    JUMP     a\nq:\n    OUTBOX  \n    INBOX   \n    JUMP     b\n\n\nDEFINE COMMENT 0\neJwLZmBgmClYd+KcKMcFK9mTF25olh26pP1+b5+u0pY+XZb5ItqfJ8WpZ3anq6h1Okk97/QVW9I+Xeha\nbRa3Ucp6zkcR6zmnB6zh6nI3Uuhyf6101hNoHMN8O7Op98LMpsqGG01aEiLbnB/AUbLdt63Iwcu9WM8y\noXWT+eueT+ZV09dacixSsZVcd8f+8RZfV729H/23HFQI23JwXtiGfSBzPqWl6GxI32Gln3F0vlbW/E2K\nuXp7ZfI/H2CsZDj1s7ruxPca62Nba1/vAqnliC9M/pv0OeVV5p+su3l7s0FiCa3vE6PaL1W59rsvtJ00\neWXODMl1KbMj1j6Yw7Eocv7sRvEFG5JA6rauUYt+v66/Yu36yStfbSjcv3rD53cg8RUbnQvmbi1N49z7\nOq724Jp4i8NGKV+O1OUYHLvVYHDsx9Sio0fn7zkouIJnz/Q1Ohsk1zGMglEwBAEAr6uW2g;\n\nDEFINE COMMENT 1\neJwLZmBgmCn44/BEEY4L3OIBV+ulp9/KV5x9d4HarTtfzDguLLWxP6liW3X0iU3mzldW11YXWHAsOmBU\nNd1Hb8vkxaqfJzFLWc+YKPIHiJ938ortzHCXkAyyl66z2yn73XK10hZzHr1SCzvjvbZAaxj2ex10qPeq\nm1XrfW/jdt8N+9YHmB9WDak6Khu+84hUxJaDUhGZO0HqBF1OlqwP4CgBsT+l9VfMKGDI6y79k/Wnam+2\nZQ1D3vr6kJq1DUvaXzbWzXrZuGb30mbeyyC1W2tPLppcFLIqskByXWJu7p7EXIZT4oUnLwgW+1zKbjwH\nVuPav/PIkf57G0/2Ws/o6nUuAIk1Tfg8qWiaYNXj2dZZsvNK004v+Z4OElfZnKm/aLNef/S2a6sFd/05\ndmZ327lTezguHNnnfj7jZOH++DNq20Hqfq2a33J+160GhlEwCoYgAAB3QJVH;\n\nDEFINE COMMENT 2\neJwLYWBgENc66TZbY3qAuVxT/kGp6XW+YueW8orp7QVKMTzkmx0cJfg+cYqwddZBqZCaF8q5fTYm55bu\nML204ovZrXUgNXVJ0wMOJM4Pc0q0zjqccG8jSKzU75r/pzRBH/HCSz4gfm2Ve/GX2j9ZhvXWWW8arLMW\ntbAUSnR0LZboEF0Nkn/SrNdfUfNnxtFy7yUdZddWe5bdWne0fPb6Nw2z14PkmSewODNP8F7SNGH6GhC/\nfEpb0YdpdTkvZu7MiJ/7Pf32POssoUVdpfyLJ1efXSzbfHZxZjf/4tIp4gvcF8rPDVieNXP6GqNpt9bZ\nTpIEu9lk7Wez4rWfJ+mvh/An7dTqcdv3vPPNcbVOhTP3mrVPnCwxO1KX43CgKrN1358sj711OZd2nisX\n2XmrQWSn87xJOwVXTNh1ax3n3sTNzvsfb5lyYcnW/kvzNzGMglEwxAAAfMiWZQ;\n\nDEFINE LABEL 0\neJwTZmBgiIrgvewVd2udfVLhxLcZt4K0slicX2Sp6cblVfLeyncX5yy7F8pYaZ1lWRNQqdB6bfWZnoOn\ngNoYdiev6c3JNJp0tNxo0v/KDRMYhhgI3eu0c6DdMApGwUADAIlWIYA;\n\nDEFINE LABEL 4\neJyTY2Bg2JBufawsVXLdttQ+GSCXYVvqWWnBYkG5hkpRRe1GRa2lzZn6D1sKTRVa99qmNvN4rmoM8dte\nkxD+NsM6qzLlaOHXVPfin9UcJfdaQ2rEOm81BHXdaxboXtMb1GU9Q7rde0lCa8DyrbW31okUKW2RyVfb\nnpn1+QDDKBgFo2BQAAASGjJG;\n\nDEFINE LABEL 5\neJyTZWBgUKpWVrqVz61slGSg3Ra/TX9RnI1JUex2p32xh72zEtrDu9LDc8IK1Ru96tNmCzUKrljV+HZT\nVcOSrWoF3dvqksw2FMVqLl8VfXmBXtS0mf8iLvdOi1RvvBUjXeGXeLfgW1514qnSKr91Zbbu68pyjZ6V\nVGowjIJRMAoGDQAATFYyuQ;\n\nDEFINE LABEL 6\neJzjZ2BgeJW5Ui0qrc1lUopa9K9kqdRJKdIVUZXSFV71KaXfGpnS+praw/uaDOxWNdqYCDW2Ggo18sbs\na9baxTBIQOyke80PJ/D2PZzweO6/idPXTJ/is3vNDPPDO+bfO6GzZO/xo8vMDz9avmGf4wqjlWnLrGfM\nnida+2yWd5nwNO8yiykbKv9NvNc80H4YBaNgoAAA+Cc+Kg;\n\nDEFINE LABEL 9\neJyTYGBgUM9WjFicc9bzeoGZZUPlfI03DZIq1zrma3j0vTe2neTsZDWZx9Nq8qOII/32uVHtmd3JLZ8n\nOVecW+qU+HqXe/yGfe7x5odZE6yPNSban1yXwXL2WgfHBYeJvJeV5nRfZBhC4OWJP1naJ5ryB9INYc85\ndg6k/aNg5AEAZWYxnQ;\n\n"
});