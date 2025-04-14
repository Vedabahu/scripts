// https://drive.google.com/file/d/1_ycBC5mP7LORva09VoJEatGCCnSTRYf2/view?usp=classroom_web&authuser=2
// https://drive.usercontent.google.com/download?id=1_ycBC5mP7LORva09VoJEatGCCnSTRYf2&export=download/edit&authuser=0

x = [... new Set(Array.from(document.querySelectorAll('a'))
    .filter(
        (a) => a.getAttribute('aria-label') ?? ''
            .startsWith('Attachment:')
    )
    .map((a) => a.getAttribute('href'))
    .filter(a => typeof a == 'string')
    .filter((a) => a.startsWith("https://drive.google.com/file")))]


x.forEach((a, b, c) => {
    c[b] = a.replace("drive.google.com/file/d/", "drive.usercontent.google.com/download?id=")
})

x.forEach((a, b, c) => {
    c[b] = a.replace("/view?usp=classroom_web", "&export=download/edit")
})

x.forEach((a) => window.open(a, "_blank"))
